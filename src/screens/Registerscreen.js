import React, { useState } from 'react';
import axios from "axios";
import Loader from '../components/Loader';
import Error from '../components/Error';
import { useForm } from 'react-hook-form';


const Registerscreen = () => {

  const { register, handleSubmit, errors, watch } = useForm();


  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const[success,setsuccess]=useState()

  async function registerBtn(){
 
      if(password===cpassword)
      {
        const user={
            name,
            email,
            password,
            cpassword
  
        }

        try {
          setloading(true)
          const result= await axios.post('/api/users/register',user).data
          setloading(false)
          setsuccess(true)
          window.location.href = '/login';
          setname('')
          setemail('')
          setpassword('')
          setcpassword('')
        } catch (error) {
          console.log(error);
          setloading(false)
         seterror(true)
        }
      }else{
          alert('password not matcched')
      }
  }
  return (
    <div>
      {loading && (<Loader/>)}
      {error &&  (<Error/>)}

      <div className="row justify-content-center mt-5"  style={{marginRight: "0px",  marginLeft: "0px"}}>
        <div className="col-md-5">
     
         
 
        <form onSubmit={handleSubmit(registerBtn)}>
             
              <div className="bs">
                <h2>Register</h2> 
                  <div className="form-group">
                    <input
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      name="name"
                      required
                      className="form-control"
                      ref={register({ minLength: 4 })}
                      placeholder="Name"
                    />
                    {errors.name && (
                      <span className="error red">
                        Name is Must be 4 Character
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      name="email"
                      required
                      className="form-control"
                      ref={register({ required: true })}
                      placeholder="Email"
                    />
                    {errors.email && (
                      <span className="error red">Email is required</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      type="password"
                      name="password"
                      className="form-control"
                      ref={register({ minLength: 8 })}
                      placeholder="Password"
                    />
                    {errors.password && (
                      <span className="error red">
                        Password is Must be 8 Character
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      value={cpassword}
                      onChange={(e) => setcpassword(e.target.value)}
                      type="password"
                      required
                      name="cpassword"
                      className="form-control"
                      ref={register({
                        validate: (value) => value === watch('password'),
                      })}
                      placeholder="Confirm Password"

                    />
                    {errors.cpassword && (
                      <span className="error red">Passwords didn't match.</span>
                    )}
                  </div>

                  <button type="submit" className="btn mt-4 mb-3">
                    Register
                  </button>  
 
               </div>
            </form>
 
        </div>
      </div>
    </div>
  );
};

export default Registerscreen;
