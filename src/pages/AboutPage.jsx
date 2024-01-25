import { Row, Col, Image } from 'react-bootstrap';
import hero from '../assets/images/placeholder.png';

export default function AboutPage() {
  return (
    <>
      <Row className="mt-lg-4">
        <Col md={3} xs={5} className='m-auto'>
          <Image src={hero} alt="programmer" fluid />
        </Col>
        <Col lg={8} xs={12} className='m-auto'>
          <h2 className='mb-4'>About me</h2>
          <p className='h5' style={{ lineHeight:'1.5'}}>
            Hello, I am currently a student learning how to be a web developer with a Bachelor of Science degree in Kinesiology. I enjoy learning new things and i decided to learn how to code because i'm intrigued by it. Coding is hard but i like facing new challenges if i know i can grow into a better person than i was yesterday.
          </p>
        </Col>
      </Row>
    </>
  );
}
