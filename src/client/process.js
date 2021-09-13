import { useEffect, useRef } from 'react';
import { Row, Col, Card, Button } from 'antd';


export default function Processes({ goToPage }) {
    const videoEle = useRef(null);
    useEffect(() => {
        window.navigator.getUserMedia(
            { video: {} },
            stream => videoEle.current.srcObject = stream,
            err => console.error(err)
        )
    }, [])
    return (
        <Row className={'process-wrapper'}>
            <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                <Card>
                    <video ref={videoEle} autoPlay muted className={'video-ele'}></video>
                </Card>
            </Col>
        </Row>
    )
}