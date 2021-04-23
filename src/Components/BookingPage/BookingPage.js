import React, { useState, useContext } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
} from "mdbreact";
import "./BookingPage.css";
import axios from "axios";
import UsersContext from '../../context/UsersContext';



const BookingPage = ({ therapist }) => {
  const { usersContext, setUsersContext} = useContext(UsersContext)
  // const { therapistsContext, setTherapistsContext} = useContext(TherapistsContext)
  const [extendBooking, setextendBooking] = useState(false);
  const [inputData, setInputData] = useState({});

// console.log('Userscontect',usersContext)

  //Toggle Button to see booking page
  const toggle = () => {
    setextendBooking((prevState) => !prevState);
  };
  
  //save user Input in the state
  const saveInput = (e) => {
    e.persist();
    setInputData((prevData) => ({
      ...prevData,
      [e.target.name]: [e.target.value],
    }));
    // console.log(inputData);
  };

  const sendData = async (e) => {
    await axios({
      method: "post",
      // url: `${serverUrl}/booking`,
      url: "http://localhost:3000/booking",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        clientId: usersContext._id.toString(),
        therapistId: therapist._id.toString(),
        time: inputData.time.toString(),
        place: "client loc",
        message: inputData.message.toString(),
        __v: 0,
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        alert("Booking failed. Please try again later")
      });
      toggle()
  };

  return (
    <>

    <MDBContainer className="p-0">
      <MDBBtn
        size="lg"
        color="green"
        onClick={toggle}
        className="custom-button"
      >

        Make an Appointment
      </MDBBtn>
      <MDBModal isOpen={extendBooking} size="lg">
        <MDBModalHeader onClick={toggle}>
          Book your Appointment with {therapist.first_name}{" "}
          {therapist.last_name}
        </MDBModalHeader>
        <MDBModalBody>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="10">
                <form>
                  <div className="grey-text">
                    <MDBInput
                      onChange={saveInput}
                      label="First Name"
                      name="first_name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={usersContext.first_name}
                    />
                    <MDBInput
                      onChange={saveInput}
                      label="Last Name"
                      name="last_name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={usersContext.last_name}
                    />
                    <MDBInput
                      onChange={saveInput}
                      label="Email"
                      name="emailAddress"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      value={usersContext.emailAddress}
                    />
                    <MDBInput
                      onChange={saveInput}
                      label="Service"
                      name="service"
                      icon="tag"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      onChange={saveInput}
                      label="Date and Time"
                      name="time"
                      icon="clock"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput
                      onChange={saveInput}
                      ype="textarea"
                      name="message"
                      rows="2"
                      label="Message"
                      icon="pencil-alt"
                    />
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn style={{ padding: "1.25rem" }} color="grey" onClick={toggle}>
            Close Booking
          </MDBBtn>
          <MDBBtn
            style={{ padding: "1.25rem" }}
            color="green"
            onClick={sendData}
          >
            Send request
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  </>

  );
};

export default BookingPage;
