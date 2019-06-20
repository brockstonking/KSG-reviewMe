import React, { Component } from 'react';
import './contact_us.css';
import Nav from './../nav/Nav';

class ContactUs extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='contactUsParentDiv'>
                <div className='colorBar'></div>
                    <div className='dashboardDisplayComponents'>
                        <Nav />
                        <div className='contactUsInfoBody'>
                            <div className='contactReqDiv'>
                                <h3 className='contactReqText'>Please contact us with any questions you have about your account</h3>
                            </div>
                            <div className='contactInfoDiv'>
                                <h3>reviewMe</h3>
                                <p>1485 S Ammon Road</p>
                                <p>Idaho Falls, ID</p>
                                <p>83440</p>
                                <p>208-351-4891</p>
                                <p>reviewmecustomerservice@gmail.com</p>
                            </div>
                        </div>
                    </div>  
            </div>
        )
    }
}

export default ContactUs;