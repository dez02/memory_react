import React from "react";
import Card from "react-bootstrap/Card";

function CardComponent({ card }) {
  return (
    <div className="col-3">
      <Card style={{ width: "8rem", height: "12rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Text>{card}</Card.Text>
      </Card>
    </div>
  );
}

export default CardComponent;
