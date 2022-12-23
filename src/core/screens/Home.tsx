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
import { Link } from "react-router-dom";
import Footer from "../components/footer";

function Home(props: any) {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticles().then((articles) => {
      setArticles(articles);
      
    });
  }, []);
console.log(articles);


  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col>
            <Image src="src/core/assets/images/imageCover.png" className="image-cover" />
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
         {articles?.map((article) => {
           return (
            
            <div className='articleContainer'>
              
                          <ArticleCard key={article?.id} imageUrl={article?.imageUrl} title={article?.title} />

             </div>
          
           
            
           )
        }
       
          
        )}
      </Container>
      <Footer />


    </>)
}

export default Home;


