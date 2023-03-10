import Header from "../components/header";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Article } from "../reducers/appReducer";
import Form from "react-bootstrap/Form";
import "../style/home.css";
import ArticleCard from "../components/article";
import { getArticles } from "../service/api";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

function Home(props: any) {
  const { status, data, isLoading } = useQuery(`articles`, () => getArticles());

  if (status == `error`) return <p>error</p>;
  if (status == `loading`) return <p>loading</p>;

  console.log("data", data);

  return (
    <>
      <Header />
      <Container className='justify-center flex fluid col-6 relative top-container'>
        <Row>
          <Col>
            <Image src={data.imageUrl} className='image-cover' />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Text className='first-description'>
              A few words about this blog platform, Ghost, and how this site was
              made
            </Form.Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Text className='second-description'>
              Why Ghost (& Figma) instead of Medium, WordPress or other options?
            </Form.Text>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Form.Text className='all-articles'>All articles</Form.Text>
          </Col>
        </Row>
      </Container>
      <Container className='articles-container grid col-6 '>
        <Row xs={1} lg={2}>
          {data &&
            data.map((data: Article) => (
              <Link
                to={{ pathname: `/articles/${data.id}` }}
                className='link-article-card'
                key={data.id}
              >
                <ArticleCard
                  imageurl={data?.imageUrl}
                  title={data.title}
                  text={data.summary}
                  bottonTitle='Read more'
                />
              </Link>
            ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
