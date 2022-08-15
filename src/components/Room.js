import React, { useState } from 'react';
import{Link} from 'react-router-dom'
import AOS from 'aos';
import { Modal, Button, Carousel } from 'react-bootstrap';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init({
    duration:1000
});

const Room = ({room,fromDate,toDate}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const user = JSON.parse(localStorage.getItem('currentUser'));
 
  return (
    <div className="row bs" data-aos='fade-up'>
      <div className="col-md-4">
        <img className="smallimg" src={room.imageurls[0]} />
      </div>
      <div className="col-md-7">
        <h1>{room.name}</h1>
        <b>
          <p>Max Count : {room.maxcount}</p>
          <p>Phone Number : {room.phonenumber}</p>
          <p>Type : {room.type}</p>
        </b>

    <div style={{ float: 'right' }}>
      
          <button className="btn btn-primary" onClick={handleShow}>
            View Detail
          </button>
        </div>


      </div>


      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header >
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel activeIndex={index} onSelect={handleSelect}>
    {room.imageurls.map(url=>{
      return   <Carousel.Item>
      <img
        className="d-block w-100 bigimg"
        src={url}
      />
   
    </Carousel.Item>
    })}
  
    </Carousel>
    <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
    
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default Room;
