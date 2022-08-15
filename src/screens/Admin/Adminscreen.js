import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import Bookings from './Bookings';
import Rooms from './Rooms';
import Users from './Users';
import Addroom from './Addroom';

const { TabPane } = Tabs;


const Adminscreen = () => {
 

  const user = JSON.parse(localStorage.getItem('currentUser')); 
  useEffect(() => {
    if (!user || user.isAdmin === false) {
      window.location.href = '/';
    }
  }, []);
  return (
    <div className="mt-3 ml-3 mr-3 bs">
      <h2 className="text-center">
        <b>Admin Panel</b>
      </h2>

      <Tabs defaultActiveKey="1">
        <TabPane tab="Bookings" key="1">
          <Bookings/>
        </TabPane>
        <TabPane tab="Rooms" key="2">
         <Rooms/>
        </TabPane>
        <TabPane tab="Add Room" key="3">
          <Addroom/>
        </TabPane>
        <TabPane tab="Users" key="4">
          
          <Users/>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Adminscreen;
