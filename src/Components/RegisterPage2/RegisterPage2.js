import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBContainer, MDBInput } from "mdbreact";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import ImageUpload from "../util/imageUploader";
import Map from "../Map/Map";

const RegisterPage2 = () => {
  //   useState = {
  //    fname: "Mark",
  //   lname: "Otto",
  //   email: "",
  //   city: "",
  //   state: "",
  //   zip: ""
  // };

  // submitHandler = event => {
  //   event.preventDefault();
  //   event.target.className += " was-validated";
  // };

  // changeHandler = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  return (
    <MDBContainer className="d-flex justify-content-left mt-5 ">
      <MDBRow>
        <MDBCol>
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg"
            className="rounded float-left"
            alt="aligment"
          />
        </MDBCol>
      </MDBRow>

      <MDBContainer className=" justify-content-right ">
        <form
          className="needs-validation"
          // onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="5" className="mb-4">
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                First name
              </label>
              <input
                // value={this.state.fname}
                name="fname"
                // onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="First name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Last name
              </label>

              <input
                // value={this.state.lname}
                name="lname"
                // onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Last name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            {/* dropDown menu */}
            <MDBCol md="5" className="mb-3">
              <MDBDropdown>
                <MDBDropdownToggle color="green">
                  Select your Profession
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <MDBDropdownItem>Physical Therapy</MDBDropdownItem>
                  <MDBDropdownItem>Massage</MDBDropdownItem>
                  <MDBDropdownItem>Speech Therapy</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text "
              >
                Email
              </label>
              <input
                // value={this.state.email}
                // onChange={this.changeHandler}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                placeholder="Your Email address"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </MDBCol>
          </MDBRow>
          <MDBInput type="textarea" label="Description of Service" rows="5" />
          <MDBRow>
            {" "}
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Address
              </label>

              <input
                // value={this.state.lname}
                name="address"
                // onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Address"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                City
              </label>
              <input
                // value={this.state.city}
                // onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="city"
                placeholder="City"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                State
              </label>
              <input
                // value={this.state.state}
                //
                // onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="state"
                placeholder="State"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Postal Code
              </label>
              <input
                // value={this.state.zip}
                // onChange={this.changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="Postal Code"
                placeholder="Postal Code"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
              <div className="valid-feedback">Looks good!</div>
              <ImageUpload />
            </MDBCol>
          </MDBRow>
          <Map />
          <MDBCol md="4" className="mb-3">
            <div className="custom-control custom-checkbox pl-3">
              <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="custom-control-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </MDBCol>
          <MDBBtn color="green" type="submit">
            Submit Form
          </MDBBtn>
        </form>
      </MDBContainer>
    </MDBContainer>
  );
};

export default RegisterPage2;
