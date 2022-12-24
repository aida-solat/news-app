
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "react-query"; 
import { getArticleById } from '../service/api';
import Loading from '../components/loading';
import Error from '../components/error';


import Header from "../components/header";
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import "../style/articleDetail.css"
import Footer from '../components/footer';





function ArticleDetail() {
    const { id } = useParams<{ id: string }>();

   
    
    const { status, data, isLoading } = useQuery(`article-${id}`, () => getArticleById(id!));

    if (status == `error`) return <p>error</p>;
    if (status == `loading`) return <p>loading</p>;

    console.log('article detail data',data);

  
  
  return (
      <>
          <Header />
          <Container>
              <Row>
                  <Col>   
                      <Form.Text className="article-title">
                  {data.title}
                      </Form.Text>
                    </Col>
              </Row>
              <Row>
                  <Col>
                      <Form.Text className="article-description">
                            {data.summary}
                      </Form.Text>
                  </Col>
              </Row>
              <Row>
                  <Col>
                      <Image src={data.imageUrl} className="article-image" />
                  </Col>
                  
              </Row>
              <hr  className='line'/>
              <Row>
                  <Col>
                      <Image src="src/core/assets/images/author.png" className="author-image" />
                      <Form.Text className="author-name">
                          author name
                      </Form.Text>
                      <Form.Text className="published-at">
                          {data.publishedAt}
                      </Form.Text>
                      <Form.Text className="read-time">
                          {data.readTime}
                        </Form.Text>
                  </Col>
                  <Col>
                      <Container className='vector-container'>
                            <Row>
                                <Col>
                                    <Image src="src/core/assets/images/like.png" className="facebook" />
                                </Col>
                                <Col>
                                    <Image src="src/core/assets/images/comment.png" className="tweeter" />
                                </Col>
                            </Row>
                          
                      
                          
                      </Container>
                      
                  </Col>
              </Row>
              <Row>
                  <Form.Text className="article-content">
                      {data.summary}
                    </Form.Text>
              </Row>
              <Row>
                  <Form.Text className="article-header-second">
                      {data.newsSite}
                    </Form.Text>
              </Row>
              <Row>
                  <Form.Text className="article-content">
                      Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 

                      Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. 
                  </Form.Text>
              </Row>
              <Row>
                  <Image src={data.imageUrl} className="article-image-second" />
              </Row>
              <Row>
                  <Form.Text className="image-caption">
                      Image caption centered this way and I’ll make this a bit longer to indicate the amount of line-height. 
                  </Form.Text>
              </Row>
              <Row>
                  <Form.Text className="article-desc-third">
                      Aenean pharetra quis lacus at viverra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. 

                      In eu dui molestie, molestie lectus eu, semper lectus. Proin at justo lacinia, auctor nisl et, consequat ante. Donec sit amet nisi arcu. Morbi efficitur auctor metus, id mollis lorem pellentesque id. Nullam posuere maximus dui et fringilla. Nulla non volutpat leo.
                  </Form.Text>
              </Row>
              <Row>
                  <Form.Text className="article-header-third">
                      A list looks like this:
                  </Form.Text>
              </Row>
              <Row>
                  <Form.Text className="article-list">
                      <ul>
                          <li>Item 1</li>
                          <li>Item 2</li>
                          <li>Item 3</li>
                          
                      </ul>
                  </Form.Text>
              </Row>
              <Row>
                  <Form.Text className="last-desc">
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam quis posuere ligula. 
                  </Form.Text>
              </Row>
              <Row>
                  <Form.Text className="regards">
                      Thanks for reading, <br />
                      Mika
                  </Form.Text>
                </Row>
              

          </Container>
          <Footer/>
      </>
  );

}

export default ArticleDetail;