import React, { useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { Link } from 'react-router-dom';
 

const Loginscreen = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();

  async function Login(e) { 
    e.preventDefault();
    
    const user = {
      email,
      password,
    };
    try {
      setloading(true);
      const result = (await axios.post('/api/users/login', user)).data;
      setloading(false);
      localStorage.setItem('currentUser', JSON.stringify(result));
      window.location.href = '/home';
    } catch (error) {
      console.log(error);
      setloading(false);
      seterror(true);
    }
  }
  return (
    <div>
      {loading && <Loader />}

      <div
        className="row justify-content-center mt-5"
        style={{ marginRight: '0px', marginLeft: '0px' }}
      >
        <div className="col-md-5">
          {error && <Error message="invailed credential" />}
          <div className="bs">
            <h2>Login</h2>
            <form onSubmit={Login}>
              <input
                required={true}
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <input
                required={true}
                type="password"
                className="form-control"
                placeholder="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />

              <button className="btn btn-primary mt-3" 
             type='submit' >Login</button>
     
            </form>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Loginscreen;
