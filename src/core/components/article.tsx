

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
        <div key={props.key}>

            <img src={props.imageUrl} className="article-regtangle" />
            <p className="article-title">
                {props.title}
            </p>

        </div>)
}

export default ArticleCard;