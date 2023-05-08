import { useState } from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const DEFAULT_EVENT = {
    id: 0,
    title:"No Event Name",
    description: "No description",
    date: "No Date",
    time: "No Time",
    location: "No Location",
    points: 0,
    pointType: "N/A",
    image: "Stevens-ducks-mascott-Attila.png"
};

function EventCard({event}) {
  const tweetBody = `https://twitter.com/intent/tweet?hashtags=stevensathletics&text=Hey!%20I'll%20be%20at%20${event.title}%20at%20${event.time}%20at%20${event.location}!%20Who%20else%20wants%20to%20come?%20#stevensathletics`

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={event.image || DEFAULT_EVENT.image}/>
    <Card.Body>
      <Card.Title>{event.title || DEFAULT_EVENT.title}</Card.Title>
      <Card.Text>
        {event.description || DEFAULT_EVENT.description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Date: {event.date || DEFAULT_EVENT.date}</ListGroup.Item>
      <ListGroup.Item>Time: {event.time || DEFAULT_EVENT.time}</ListGroup.Item>
      <ListGroup.Item>Location: {event.location || DEFAULT_EVENT.location}</ListGroup.Item>
      <ListGroup.Item>Event Type: {event.pointType || DEFAULT_EVENT.pointType}</ListGroup.Item>
      <ListGroup.Item># Points: {event.points || DEFAULT_EVENT.points}</ListGroup.Item>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Attend</Card.Link>
      <Card.Link className="twitter-share-button" target="_blank" href={tweetBody}>Share</Card.Link>
    </Card.Body>
  </Card>
  );
}

export default EventCard;
