import { useState } from 'react'

import EventCard from './EventCard.js'

const events = [
  {
    id: 1,
    title:"yoga",
    description: "do some yoga together it'll be fun",
    date: "March 6",
    time: "9:00 AM",
    location: "Castle Point",
    points: 10,
    pointType: "active"
  },
  {
    id: 2,
    title:"varsity soccer game",
    date: "March 7",
    time: "2:00 PM",
    location: "Schaefer",
    points: 15,
    pointType: "passive",
    image: "logo512.png"
  },
]

function Events() {
  return (
    <div id="events">
      {events.map(event => (
        <EventCard event={event} key={event.id} />
      ))}
    </div>
  );
}

export default Events;
