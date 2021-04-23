import React from "react";
import {
  MDBContainer,
  MDBCardHeader,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardText,
  MDBCardBody,
} from "mdbreact";
import christin from "../../images/christin.JPG";
import fred from "../../images/fred.png";
import tim from "../../images/tim.jpeg";
import primas from "../../images/primas.JPG"
import "./Team.css";

const Team = () => {
  return (
    <MDBContainer>
      <br />
      <h2 className="ateam h1-responsive font-weight-bold text-center my-5">
        💚 Our amazing team 💚
      </h2>
      <p className="text-center w-responsive mx-auto mb-5">
        Dived into the deep of the coding ocean - Aufgetaucht aus dem Teich der
        Turtles.
      </p>
      <MDBRow>
        <MDBCol lg="6">
          <MDBCard className="text-center">
            <MDBCardHeader color="green">Rafael</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Head of Web Developement 🍻</MDBCardTitle>
              <br />
              <MDBCardText>
                <p className="grey-text">
                  He is the product owner and the best teamlead ever.
                </p>
                <img
                  className="tpic image float-center"
                  src={primas}
                  alt="rafa"
                />{" "}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <br />
          <br />
        </MDBCol>
        <MDBCol lg="6">
          <MDBCard className="text-center">
            <MDBCardHeader color="green">Fred</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle>Head of Design and Web Destroyer 💣</MDBCardTitle>
              <br />
              <MDBCardText>
                <p className="grey-text">He can destroy everything.</p>
                <img
                  className="tpic image float-center"
                  src={fred}
                  alt="fred"
                />{" "}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <br />
          <br />
        </MDBCol>
        <MDBCol lg="6">
          <MDBCard className="text-center">
            <MDBCardHeader color="green">Christin</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle> JavaScriptQueen and Git Fay 🧚</MDBCardTitle>
              <br />
              <MDBCardText>
              <p className="grey-text">For her more than 70 hours per week are normal.</p>
                <img
                  className="tpic image float-center"
                  src={christin}
                  alt="christin"
                />
                <br />
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="6">
          <MDBCard className="text-center">
            <MDBCardHeader color="green">Tim</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle> Junior Developer and Git Clown 🤹🏽</MDBCardTitle>
              <br />
              <MDBCardText>
              <p className="grey-text">He is always lookinÍg for a good Code-Life-Balance.</p>
                <img className="tpic image float-center" src={tim} alt="tim" />
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <br />
    </MDBContainer>
  );
};

export default Team;
