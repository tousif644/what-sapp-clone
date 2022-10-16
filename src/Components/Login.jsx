import React, { useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from "uuid";

const Login = ({onIdSubmit}) => {
    const idref = useRef()
    
    function handleSubmit(e) {
        e.preventDefault()
        onIdSubmit(idref.current.value)
    }

    function createNewId() {
        onIdSubmit(uuidV4())
    }
    return (
        <div>
            <Container className=' d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
                <Form className='w-50' onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label className='h1'>Enter your ID</Form.Label>
                        <Form.Control type='text' ref={idref
                        } required></Form.Control>
                    </Form.Group>
                    <Button type="submit" variant="warning" className='mt-3'>Login</Button>
                    <Button variant='secondary' className='mt-3 mx-2' onClick={createNewId}>Create a new id</Button>
                </Form>
            </Container>
        </div>
    );
};

export default Login;