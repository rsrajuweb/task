import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader';

const Users = () => {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  async function fatchMyData() {
    try {
      const data = await (await axios.get('/api/users/getallusers')).data;
      setusers(data);
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
        <h1>Users</h1>
        {loading&&<Loader/>}
       
        <table className="table table-dark">
          <thead>
            <tr>
              <th>User Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Is Admin</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              (users.map(user => {
                return <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.isAdmin ? 'YES' :'NO'}</td>
                  </tr>
                ;
              }))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
