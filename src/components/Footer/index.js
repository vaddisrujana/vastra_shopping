import React,{Component} from 'react'
import vastra from '../../images/vastra.png'
import './index.css'
class Footer extends Component{
    render(){
        return(
            <div className="row footer">
                <div className="col-lg-3">
                    <img src={vastra} alt='vastra logo' className="footer-logo"  />
                </div>
                <div className="col-lg-3 ps-5">
                    <h1 className="footer-heading">MENU</h1>
                    <p>Women</p>
                    <p>Men</p>
                    <p>Kids</p>
                    <p>Infants</p>
                </div>
                <div className="col-lg-3">
                    <h1 className="footer-heading">LEGAL POLICY’S</h1>
                    <p>Privacy Policy</p>
                    <p>Returns</p>
                    <p>Terms & Conditions</p>
                    <p>Contact Us</p>
                    <p>About us</p>
                </div>
                <div className="col-lg-3">
                    <h1 className="footer-heading">CONTACT US</h1>
                    <p>You Tube</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                </div>
            </div>
        )
    }
}

export default Footer