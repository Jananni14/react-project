import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
function CardItem(props) {
  console.log("props", props);
  const { name = "title", company } = props;
  return (
    <Card className="text-start shadow-sm card-container">
      {/* <Card.Header>Featured</Card.Header> */}
      <Card.Body>
        <Card.Title className="card-name">{name}</Card.Title>
        <Card.Text className="card-subtitle">{company}</Card.Text>

        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
      <Card.Footer className="text-muted card-footer">
        <ReactStars
          size={10}
          half={false}
          ratingBackgroundColor="#c8c7c8"
          onChange={(newRating) => {
            console.log(newRating);
          }}
        />
        2 days ago
      </Card.Footer>
    </Card>
  );
}

export default CardItem;
