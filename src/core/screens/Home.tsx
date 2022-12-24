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
      <Container className="justify-center flex fluid relative">
        <Row>
          
            <Image src={data.imageUrl} className="image-cover" />
          

        </Row>
        <Row>
          
            <Form.Text className="first-description">
              A few words about this blog platform, Ghost, and how this site was made
            </Form.Text>
          
        </Row>
        <Row>
          
            <Form.Text className="second-description">
              Why Ghost (& Figma) instead of Medium, WordPress or other options?
            </Form.Text>
        
        </Row>
        <hr className="line" />
        <Row>
          
            <Form.Text className="all-articles">
              All articles
            </Form.Text>
          
        </Row>
       
    
      </Container>
      <Container className="articles-container grid col col-8 m-20 relative">
        
        {data.map((data: Article) => (
          <Link to={
            
            { pathname: `/articles/${data.id}` }
          }   >
            <ArticleCard key={data.id} imageurl={data.imageUrl} title={data.title}  />
          </Link>

        ))}

        
      </Container>
      <Footer />


    </>)
}

export default Home;


