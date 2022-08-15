import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import Loader from '../components/Loader';
import Error from '../components/Error';
import 'antd/dist/antd.min.css';
// import { DatePicker, Space } from 'antd';


const Homescreen = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();

  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  const [duplicaterooms, setduplicaterooms] = useState([]);
  const [Searchkey, setseachkey] = useState('');
  const [type, settype] = useState('');
  useEffect(() => {

    async function fetchMyAPI() {
      try {
        const data =  (await axios.get('/api/rooms/getallrooms')).data;
        console.log(data);
        setRooms(data);
        setloading(true);
        setduplicaterooms(data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    }
    fetchMyAPI();
  }, []);

  

  // function filterBysearch() {

  //   const temprooms = duplicaterooms.filter((room) =>
  //     room.name.toLowerCase().includes(Searchkey.toLowerCase())
  //   );
  //   setRooms(temprooms);
  // }
  // function filterByType(e) {
  //   settype(e);
  //   if (e !== 'all') {
  //     const temprooms = duplicaterooms.filter(
  //       (room) => room.type.toLowerCase() == e.toLowerCase()
  //     );
  //     setRooms(temprooms);
  //   } else {
  //     setRooms(duplicaterooms);
  //   }
  // }

  return (
    <div className="container">
      <div className="row mt-5 bs">
   
        <div className="col-md-8">
          <input
            value={Searchkey}
            onChange={(e) => {
              setseachkey(e.target.value);
            }}
            // onKeyUp={filterBysearch}
            type="text"
            className="form-control"
            placeholder="Search Room"
          />
        </div>
        <select
          className="form-select"
          value={type}
          // onChange={(e) => {
          //   filterByType(e.target.value);
          // }}
          aria-label="Default select example"
        >
          <option value="all">All</option>
          <option value="delux">Delux</option>
          <option value="non-delux">Non-Delux</option>
        </select>
      </div>

      <div className="row justify-content-center mt-5" >
        {loading ? (
          <Loader />
        ) : (
          rooms && rooms.map((room) => {
            return (
              <div className="col-md-9 mt-2">
                <Room room={room} fromDate={fromDate} toDate={toDate} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Homescreen;
