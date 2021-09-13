
import { useEffect, useRef, useState } from 'react';
import { Row, Col, Card, Button, Image, Input, Modal } from 'antd';

export default function Register({ goToPage }) {
    const videoEle = useRef(null);
    const [imgs, setImgs] = useState([])
    const [userRegistered, setRegister] = useState(false)
    useEffect(() => {
        window.navigator.getUserMedia(
            { video: {} },
            stream => videoEle.current.srcObject = stream,
            err => console.error(err)
        )
    }, [])

    function tookPhoto() {
        var canvas = document.createElement('canvas');
        const img = document.createElement('img');
        canvas.width = videoEle.current.videoWidth;
        canvas.height = videoEle.current.videoHeight;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(videoEle.current, 0, 0, canvas.width, canvas.height);
        var dataURI = canvas.toDataURL('image/jpeg');
        setImgs(prevImgs => [...prevImgs, dataURI])
    }
    const registerUser = () => {
        setRegister(true)
    }
    return (
        <Row className={'register-wrapper'}>
            <Col xs={24} sm={22} md={12} lg={12} xl={8}>
                <Card>
                    <video ref={videoEle} autoPlay muted className={'video-ele'}></video>
                    <Button type="primary" onClick={tookPhoto}>Take Photo</Button>

                </Card>
            </Col>
            <Col span={20}>
                <Card>
                    <Image.PreviewGroup>
                        {imgs.map(ele => <Image key={ele} src={ele} className={'img-capture'} />)}
                    </Image.PreviewGroup>
                </Card>

            </Col>
            {imgs.length && <Col xs={24} sm={22} md={12} lg={12} xl={8}>
                <Input addonBefore="Name" placeholder="Enter name" />
                <Input addonBefore="Phone number" placeholder="Enter phone number" />
                <Input addonBefore="Email" placeholder="Email" />
                <Button type="primary" onClick={registerUser}>Register</Button>
            </Col>}

            <Modal title="Basic Modal"
                visible={userRegistered}
                onOk={() => { setRegister(false) }}
                onCancel={() => { goToPage('process') }}
                cancelText={'Go to process'}
            >
                <p>Registeration successfully completed!</p>
            </Modal>
        </Row>
    )
}