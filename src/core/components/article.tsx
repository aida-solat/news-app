import React from "react";
import "../style/home.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ArticleCard(props: any) {
  return (
    <Card style={{ width: "20rem", marginBottom: "20px", height: "410px" }}>
      <Card.Img
        variant='top'
        src={props.imageUrl}
        className='article-regtangle'
      />
      <Card.Body>
        <Card.Title className='card-title'>{props.title}</Card.Title>
        <Card.Text className='card-text'>{props.text}</Card.Text>
        <Button variant='primary' className='button-card'>
          {props.bottonTitle}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;
