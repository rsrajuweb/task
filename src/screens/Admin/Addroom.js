import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
const Addroom = () => {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const [name, setname] = useState('');
  const [rentperday, setrentperday] = useState();
  const [maxcount, setmaxcount] = useState();
  const [description, setdescription] = useState();
  const [phonenumber, setphonenumber] = useState();
  const [type, settype] = useState();
  const [imageurl1, setimageurl1] = useState();
  const [imageurl2, setimageurl2] = useState();
  const [imageurl3, setimageurl3] = useState();



  async function addRoom() {
    const newroom = {
      name,
      rentperday,
      maxcount,
      description,
      phonenumber,
      type,
      imageurls: [imageurl1, imageurl2, imageurl3],
    }
    // console.log(newroom);
    try {
      setloading(true)
      const result = await (
        await axios.post('/api/rooms/addroom', newroom)

      ).data;
      console.log(result);
      setloading(false)
      Swal.fire('Congrats', 'Your New Room Added Succesfully', 'Success').then(
        result => {
          window.location.href='/home'
   } );
     
    } catch (error) {
      console.log(error);
      setloading(false)
      Swal.fire('Opps', 'Somthing Went Wrong', 'error');
      
    }
  }

  return (
    <div className="row">
     
      <h1>Add Room</h1>
      <div className="col-md-5">
      {loading&&<Loader/>}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          className="form-control"
          placeholder="Room Name"
        />
        <input
          type="text"
          className="form-control"
          placeholder="Rent Per Day"
          value={rentperday}
          onChange={(e) => {
            setrentperday(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Max Count"
          value={maxcount}
          onChange={(e) => {
            setmaxcount(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
          value={phonenumber}
          onChange={(e) => {
            setphonenumber(e.target.value);
          }}
        />
      </div>
      <div className="col-md-5">
        <input
          type="text"
          className="form-control"
          placeholder="Type"
          value={type}
          onChange={(e) => {
            settype(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Image URL 1"
          value={imageurl1}
          onChange={(e) => {
            setimageurl1(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Image URL 2"
          value={imageurl2}
          onChange={(e) => {
            setimageurl2(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Image URL 3"
          value={imageurl3}
          onChange={(e) => {
            setimageurl3(e.target.value);
          }}
        />

        <div className="cancel_booking mt-2">
          <button className="btn" onClick={addRoom}>
            Add Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addroom;
