// import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
export default function Footer() {

  // const leftLinks = [
  //   { title: 'CONTACT US', lick: 'https://baidu.com' },
  //   { title: 'CONTACT INFORMATION', lick: 'https://baidu.com' },
  //   { title: 'FEEDBACK', lick: 'https://baidu.com' },
  // ]

  // const rightLinks = [
  //   { title: 'TRANSACTION DESCRIPTION', lick: 'https://baidu.com' },
  //   { title: 'TERMS OF SERVICES', lick: 'https://baidu.com' },
  //   { title: 'TERMS OF FEES', lick: 'https://baidu.com' },
  //   { title: 'TERMS OF WITHDRAWAL', lick: 'https://baidu.com' },
  // ]

  return (
    <footer className="h-62px w-full flex items-center justify-between px-32px bg-block" style={{ opacity: '0.35' }}>
      <Row className='color-text w-full' justify="space-between">
        <Col className='hover mr-35px cursor-pointer'>CONTACT US</Col>
        <Col className='hover mr-35px cursor-pointer'>CONTACT INFORMATION</Col>
        <Col className='hover mr-250px cursor-pointer'>FEEDBACK</Col>
        <Col className='hover mr-35px cursor-pointer'>TRANSACTION DESCRIPTION</Col>
        <Col className='hover mr-35px cursor-pointer'>TERMS OF SERVICES</Col>
        <Col className='hover mr-35px cursor-pointer'>TERMS OF FEES</Col>
        <Col className='hover cursor-pointer'>TERMS OF WITHDRAWAL</Col>
      </Row>
    </footer>
  );
}
