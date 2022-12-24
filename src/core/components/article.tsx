

import React from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import "../style/home.css"

function ArticleCard(props: any) {
    
    return (
        <Container key={props.key}>

            <Image src={props?.imageUrl} className="article-regtangle" />
            <Form.Text className='article-reg-title'>
                {props.title}
            </Form.Text>

        </Container>)
}

export default ArticleCard;