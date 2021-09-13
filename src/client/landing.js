import {useRef} from 'react'
import { Row, Col, Card, Button } from 'antd';

export default function Landing({ goToPage }) {
    const videoEle = useRef(null);
    return (
        <Row className={'landing-wrapper'}>
            <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                <Card>
                <video ref={videoEle} autoPlay muted className={'video-ele'}></video>
                </Card>
            </Col>
        </Row>
    )
}

