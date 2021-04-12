import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBCardText,
  MDBCardTitle,
  MDBCardImage,
} from "mdbreact";
import TherapistsContext from "../../context/TherapistsContext";

const FilteredTherapists = () => {

  const { filteredTherapists } = useContext(TherapistsContext)

  return (
    
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage
            className="img-fluid"
            src="https://n-cdn.serienjunkies.de/og/96920.jpg"
            waves
          />
          <MDBCardBody style={{ backgroundColor: "rgb(216, 214, 214)" }}>
            <MDBCardTitle>
              {filteredTherapists.length && filteredTherapists.data[0].category}
            </MDBCardTitle>
            <MDBCardText text="black">
              {filteredTherapists.length && filteredTherapists.data[0].first_name}
            </MDBCardText>
            <MDBCardText text="black">
              {filteredTherapists.length && filteredTherapists.data[0].last_name}
            </MDBCardText>
            <MDBCardText text="black">
              Eductaion:{" "}
              {filteredTherapists.length && filteredTherapists.data[0].education}
            </MDBCardText>
            <MDBCardText text="black">
              Specialities:{" "}
              {filteredTherapists.length && filteredTherapists.data[0].specialities}
            </MDBCardText>
            <MDBCardText text="black">
              About me: {filteredTherapists.length && filteredTherapists.data[0].about}
            </MDBCardText>
            <MDBBtn color="green" href="#">
              Book me
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    
  );
};

export default FilteredTherapists;
