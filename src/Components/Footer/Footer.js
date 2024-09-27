import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon, MDBNavLink } from "mdbreact";
import './Footer.css';
import Logo from "../util/mhicon.png"


const FooterPage = () => {
  return (
    <MDBFooter color="green" className="font-small pt-3 mt-3  ">
      <MDBContainer fluid className="text-center text-md-center" >
        <MDBRow md="4" style={{padding: 5}}>
        <MDBNavLink to="/">
          <MDBCol md="6">
          <img className="logo" src={Logo} alt="MH Logo" height="133"/>
          </MDBCol>
          </MDBNavLink>
          <MDBCol md="3" >
            <h5 className="about">About Us</h5>
            <ul style={{padding: 5}}>
              <li className="list-unstyled">
                <a href="/team">Our Team</a>
              </li>
              <li className="list-unstyled">
                <a href="mailto:Mobile_Health@wbs.com">Contact Us</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol><h5 className="patients">For Patients</h5>
          <ul style={{padding: 5}}>
              <li className="list-unstyled">
                <a href="/registration">Create new User</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Patients Login</a>
              </li>
            </ul>
            </MDBCol>
          <MDBCol><h5 className="therapists" >For Therapists</h5>
          <ul style={{padding: 5}}>
              <li className="list-unstyled">
                <a href="#!">Add your Therapy</a>
              </li>
              <li className="list-unstyled">
                <a href="/auth">Therapist Login</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
        <MDBRow>

    <MDBContainer className="text-center">
      <a href="https://www.facebook.com/wbscodingschool" target="_blank" className="fb-ic mr-4 text-center">
        <MDBIcon fab icon="facebook-f" />
      </a>
      <a href="https://twitter.com/wbscodingschool" target="_blank" className="tw-ic mr-3">
        <MDBIcon fab icon="twitter" />
      </a>
      <a href="https://www.linkedin.com/school/wbs-coding-school" target="_blank" className="li-ic mr-3">
        <MDBIcon fab icon="linkedin-in" />
      </a>
      <a href="https://www.instagram.com/wbscodingschool/" target="_blank" className="ins-ic mr-3">
        <MDBIcon fab icon="instagram" />
      </a>
      <a href="https://www.youtube.com/channel/UCEjfjfdmXFn6rOCSUTZ3FYg" target="_blank" className="yt-ic mr-3">
        <MDBIcon fab icon="youtube" />
      </a>
      <a href="https://github.com/ChristinThoma/Mobile_Health_FrontEnd" target="_blank" rel="noreferrer" className="git-ic mr-3">
        <MDBIcon fab icon="github" />
      </a>
    </MDBContainer>
        </MDBRow>
        <br/>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/ChristinThoma/Mobile_Health_FrontEnd" target="_blank" rel="noreferrer"> Mobile-Health.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;