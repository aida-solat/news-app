

import React from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Article } from "../reducers/appReducer";
import Form from 'react-bootstrap/Form';
import "../style/home.css"

function ArticleCard(props: any) {
    return (
        <Container key={props.key}>

            <Image src={props.imageUrl} className="article-regtangle" />
            <Form.Text className="article-title">
                {props.title}
            </Form.Text>

        </Container>)
}

export default ArticleCard;