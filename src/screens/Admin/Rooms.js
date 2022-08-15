import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader';
import Bookings from './Bookings';

const Rooms = () => {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();

  async function fatchMyData() {
    try {
      const data = await (await axios.get('/api/rooms/getallrooms')).data;
      setrooms(data);
      setloading(false);
    } catch (error) {
      setloading(false);
    }
  }

  useEffect(() => {
    fatchMyData();
  }, []);

  return (
    <div className='row'>
        <div className="col-md-12">
      <h1>Rooms</h1>
      {loading && <Loader />}

      <table className='table table-dark table-bordered'>
        <thead className='bs '>
          <tr>
            <th>Room Id</th>
            <th>Name</th>
            <th>Type</th>
            <th>Rent Per DAy</th>
            <th>Max Count</th>
            <th>Phone Number</th>
          </tr>
          </thead>
          <tbody>
          {rooms.length && (rooms.map(room=>{
            return <tr>
              <td>{room._id}</td>
              <td>{room.name}</td>
              <td>{room.type}</td>
              <td>{room.rentperday}</td>
              <td>{room.maxcount}</td>
              <td>{room.phonenumber}</td>
            </tr>
          }))}

          </tbody>
       
      </table>
      </div>
    </div>
  );
};

export default Rooms;
