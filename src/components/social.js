import React from 'react';
import '../App.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';

function Social(props) {
    return (
        <footer>
            <div className='App' id='social' style={{ position: props.position, bottom: '0', width: '100%', padding: '10px' }}>
                <h3>Contact Us</h3>
                <a target="_blank" className='icons' rel="noreferrer" href='https://www.facebook.com/thinangroups/'><FacebookIcon color="primary" style={{ height: "45px", width: "45px" }} /></a><a target="_blank" rel="noreferrer" className='icons' href='https://www.instagram.com/thinan_groups/'><InstagramIcon color="secondary" style={{ height: "45px", width: "45px" }} /></a><a target="_blank" rel="noreferrer" className='icons' href='mailTo:thinangroups@gmail.com'><EmailIcon style={{ color: "orange", height: "45px", width: "45px" }} /></a>
                <div><a target="_blank" href='/privacy-policy'>Privacy-Policy</a> - <a target="_blank" href='/terms-and-conditions'>Terms and Conditions</a></div>
                <div ><p style={{ display: 'inline', padding: '10px' }}>© - 2021  Copyrights by ThinanGroups</p></div>
            </div>
        </footer>
    )
}

export default Social


    // {
    //   "src": "logo.png",
    //   "type": "image/png",
    //   "sizes": "192x192"
    // }
    // {
    //   "src": "logo.png",
    //   "type": "image/png",
    //   "sizes": "512x512"
    // }