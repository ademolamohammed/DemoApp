import React from 'react'
import { Form, InputGroup } from 'react-bootstrap';

const EmailTemplate = () => {
    
    return(
        <>
            <div className='text-center p-5 rounded' style={{background: '#0A2640'}}>
                <h2 className='mt-5 mb-3 text-white'>
                    An enterprise template to ramp up your company website
                </h2>
                <Form className='d-flex justify-content-center form-Nav'>
                    <Form.Group style={{width:'25%'}} controlId="formBasicEmail" className='border-white mr-4 input-expand'>
                        <Form.Control type="email" placeholder="Your email address" className='radius'/>
                    </Form.Group>
                    <button style={{backgroundColor:'#65E4A3'}} type="submit" className="px-4 align-self-center btn btn-outline-secondary font-weight-bold text-dark mb-3 radius">Start now</button>
                </Form>
            </div>
        </>
    )

}


export default EmailTemplate;