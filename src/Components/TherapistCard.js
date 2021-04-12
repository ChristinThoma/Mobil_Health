import React, { Fragment } from "react"; 
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage,MDBBtn, MDBRow, MDBCol  } from "mdbreact";
import Map from "./Map/Map";
const TherapistCard = ({ therapist }) => {

  return (
    < >
     
     <MDBCard className='mt-5' style={{ maxWidth: '55rem' }}>
      <MDBRow className='p-2 '>
        <MDBCol md='4'>
          <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='Therapist Images' fluid height='200rem' />
        </MDBCol>
        <MDBCol md='6'>
          <MDBCardBody>
          
            <MDBCardTitle className=''>Dr. {therapist['first_name' ]} {therapist['last_name']}</MDBCardTitle>
            <MDBCardText>
              {therapist['about']}
            </MDBCardText>
            <MDBCardText>
              <small>Education, {therapist['education']}</small>
            </MDBCardText>
            <MDBCardText>
              <small>Specialities, {therapist['specialities']}</small>
            </MDBCardText>
            
          </MDBCardBody>
        </MDBCol> <MDBBtn  href="/LandingPage" color="green" size='sm'>
      Make Appointment
      </MDBBtn>
      <MDBBtn
        href={`/profile/${therapist['_id']}`}
        color="grey"
        size='sm'
      >
        View Profile
      </MDBBtn>
      
      </MDBRow>
      <MDBCol md=''height='10 rem' className='col-example'>
      <Map  />
      </MDBCol>
    </MDBCard>    
    
    
   
    </>
  )
};

export default TherapistCard;
