import { useState, useRef } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import EventCard from './EventCard.js'

const StartingEvents = [
  {
    id: 1,
    title:"yoga",
    description: "do some yoga together it'll be fun",
    date: "2023-05-09",
    time: "9:00",
    location: "Castle Point",
    points: 10,
    pointType: "active"
  },
  {
    id: 2,
    title:"varsity soccer game",
    date: "2023-05-14",
    time: "12:00",
    location: "Schaefer",
    points: 15,
    pointType: "passive",
    image: "logo512.png"
  },
]

function Events() {
  const events = useRef(StartingEvents);

  const [modalShow, setModalShow] = useState(false);

  const addEvent = () => {
    let errorString=''
    const eventName = document.getElementById("eventName").value;
    const eventDate = document.getElementById("eventDate").value;
    const eventTime = document.getElementById("eventTime").value;
    const eventLocation = document.getElementById("eventLocation").value;
    const eventType = document.getElementById("eventType").value;
    const eventPoints = document.getElementById("eventPoints").value;

    if(eventName == '') { errorString+='Name must not be blank\n' }
    if(eventDate == '') { errorString+='Date must not be blank\n' }
    if(eventTime == '') { errorString+='Time must not be blank\n' }
    if(eventLocation == '') { errorString+='Location must not be blank\n' }
    if(eventType == '') { errorString+='Must select an event type\n' }
    if(eventPoints == '' || isNaN(eventPoints)) { errorString+='Must input a number for event points\n' }

    const eventObject = { 
      title: eventName, 
      date: eventDate,
      time: eventTime,
      location: eventLocation, 
      pointType: eventType, 
      points: parseInt(eventPoints) 
    }
    document.getElementById("errors").innerText = errorString
    
    if(errorString == "") {
      console.log(eventObject)
      events.current.push(eventObject)
      setModalShow(false);
    }
  }

  return (
    <div>
      <Button className='mt-5' variant="primary" onClick={() => setModalShow(true)}>
        + Add event
      </Button>

      <div id="events">
        {events.current.map(event => (
          <EventCard event={event} key={event.id} />
          ))}
      </div>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Event
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Enter event information:</h4>
          <form className='d-flex flex-column'>
            <label className='my-3'>
              Name:{'\t'}
              <input type="text" id='eventName'/>
            </label>
            <label className='mb-3'>
              Date:{'\t'}
              <input type="date" id='eventDate'/>
            </label>
            <label className='mb-3'>
              Time:{'\t'}
              <input type="time" id='eventTime'/>
            </label>
            <label className='mb-3'>
              Location:{'\t'}
              <input type="text" id='eventLocation'/>
            </label>
            <select name="eventType" id="eventType" className='w-50 mb-3' defaultValue={''}>
              <option disabled value="">-- Select an event type --</option>
              <option value="active">Active</option>
              <option value="passive">Passive</option>
            </select>
            <label className='mb-3'>
              Point Value:{'\t'}
              <input type="number" id='eventPoints'/>
            </label>
            <label>
              Icon:{'\t'}
              <input disabled type="file"
                id="eventImage" name="avatar"
                accept="image/png, image/jpeg">
              </input>
            </label>
            <p className='mb-3'>(In beta, image upload is disabled)</p>
          </form>
          <p id='errors' className='text-danger'>

          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
          <Button onClick={addEvent}>Add event</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Events;
