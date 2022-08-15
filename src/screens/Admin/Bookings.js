import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader';

const Bookings = () => {
  const [bookings, setbookings] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();

  async function fatchMyData() {
    try {
      const data = await (await axios.get('/api/bookings/getallbookings')).data;
      setbookings(data);
      setloading(false);
    } catch (error) {
      setloading(false);
    }
  }

  useEffect(() => {
    fatchMyData();
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Booking</h1>
        {loading && <Loader />}

        <table className="table table-dark table-bordered">
          <thead className="bs ">
            <tr>
              <th>Booking Id</th>
              <th>User Id</th>
              <th>Room</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length &&
              bookings.map((booking) => {
                return (
                  <tr>
                    <td>{booking._id}</td>
                    <td>{booking.userid}</td>
                    <td>{booking.room}</td>
                    <td>{booking.fromdate}</td>
                    <td>{booking.todate}</td>
                    <td>{booking.status}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
