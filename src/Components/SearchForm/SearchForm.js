import React, { useState, useEffect, useContext } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
  MDBBtn,
  MDBCardText,
  MDBCardTitle,
  MDBCardImage,
} from "mdbreact";
import "./SearchForm.css";
import SearchCheckBox from "../SearchCheckbox/SearchCheckBox";
import TherapistsContext from "../../context/TherapistsContext";
import axios from "axios";

const SearchForm = () => {

  const { checkAvailability, filteredTherapists } = useContext(TherapistsContext)

  const [categories, setCategories] = useState({
    massage: { selected: false, displayName: "Massage Therapist" },
    physioTherapist: { selected: false, displayName: "Physio Therapist" },
    speechTherapist: { selected: false, displayName: "Speech Therapist" },
    nutritionTherapist: { selected: false, displayName: "Nutrition Therapist" },
  });

  const handleChange = (e) => {
    setCategories({
      ...categories,
      [e.target.name]: {
        selected: e.target.checked,
        displayName: categories[e.target.name].displayName,
      },
    });
  };

  return (
    <MDBCard lg="3" className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://www.minimed.at/fileadmin/_processed_/0/7/csm_Physiotherapie_aeaf6ee751.jpg"
                alt=""
                padding-right="0"
                margin-right="0"
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>
                FIND THE RIGHT
                <br></br>
                SERVICE FOR YOU
              </strong>
            </h3>
            <SearchCheckBox
              categories={categories}
              handleChange={handleChange}
            />
            <br></br>
            <p>Postcode</p>
            <MDBInput label="Valid Postcode" background size="lg" />
            

            
            <MDBBtn
              onClick={(e) => checkAvailability(e, categories)}
              color="green"
              size="md"
              className=""
          >
            
              Check Availability
            </MDBBtn>
            {/* CARD */}
<MDBCol>
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src="https://n-cdn.serienjunkies.de/og/96920.jpg" waves />
        <MDBCardBody style={{backgroundColor:'rgb(216, 214, 214)'}}>
          <MDBCardTitle>{filteredTherapists.length &&filteredTherapists[0].category}</MDBCardTitle>
          <MDBCardText text="black" >{filteredTherapists.length &&filteredTherapists[0].first_name}</MDBCardText>
          <MDBCardText text="black" >{filteredTherapists.length &&filteredTherapists[0].last_name}</MDBCardText>
          <MDBCardText text="black" >Eductaion:  {filteredTherapists.length &&filteredTherapists[0].education}</MDBCardText>
          <MDBCardText text="black" >Specialities:  {filteredTherapists.length &&filteredTherapists[0].specialities}</MDBCardText>
          <MDBCardText text="black" >About me:  {filteredTherapists.length &&filteredTherapists[0].about}</MDBCardText>
          <MDBBtn color="green" href="#">Book me</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
{/* CARD */}
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default SearchForm;
