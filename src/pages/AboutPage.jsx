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
            Hello, I am a web developer....
          </p>
          <p className='h5' style={{ lineHeight:'1.5'}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae minima aspernatur recusandae reiciendis sequi odit ratione necessitatibus pariatur repellat assumenda iure laudantium, eveniet aliquid asperiores qui. Rerum corporis neque inventore?
          </p>
        </Col>
      </Row>
    </>
  );
}
