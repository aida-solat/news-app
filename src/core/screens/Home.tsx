import Header from "../components/header";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Article } from "../reducers/appReducer";
import Form from 'react-bootstrap/Form';
import "../style/home.css"
import ArticleCard from "../components/article";
import { getArticles } from "../service/api";
import { loadArticles } from "../actions/appActionCreators";
import { useEffect, useState } from "react";
import { useQuery } from "react-query"; 
import { Link } from "react-router-dom";
import Footer from "../components/footer";


function Home(props: any) {
  

  const { status, data, isLoading } = useQuery(`articles`, () => getArticles());
  
    if (status == `error`) return <p>error</p>;
    if (status == `loading`) return <p>loading</p>;

  console.log ("data", data)


  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Image src={data.imageUrl} className="image-cover" />
          </Col>

        </Row>
        <Row>
          <Col>
            <Form.Text className="first-description">
              A few words about this blog platform, Ghost, and how this site was made
            </Form.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Text className="second-description">
              Why Ghost (& Figma) instead of Medium, WordPress or other options?
            </Form.Text>
          </Col>
        </Row>
        <hr className="line" />
        <Row>
          <Col>
            <Form.Text className="all-articles">
              All articles
            </Form.Text>
          </Col>
        </Row>
       
    
      </Container>
      <Container>

        <Link to={{`articles/${id}`}}  >
          <ArticleCard key={data.id} imageurl={data.imageUrl}  />
        </Link>
        
        
      </Container>
      <Footer />


    </>)
}

export default Home;


