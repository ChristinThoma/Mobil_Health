import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdbreact";
import Map from "./Map/Map";
import BookingPage from "./BookingPage/BookingPage";

const TherapistCard = ({ therapist }) => {
  return (
    <>
      <MDBCard className="mt-5" style={{ maxWidth: "100%" }}>
        <MDBRow className="p-5 ">
          <MDBCol md="4">
            <MDBCardImage
              src={therapist["profilPhoto"]}
              alt="Therapist Images"
              fluid
              height="300rem"
              width="240rem"            />

            <Map
              className="p-4 col-example text-right"
              address={therapist.address}
            />
          </MDBCol>

          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle className="h1 font-weight-bold">
                {" "}
                {therapist["first_name"]} {therapist["last_name"]}
              </MDBCardTitle>

              <MDBCardText className="blockquote font-weight-bold">
                Category <small>{"  "}{therapist["category"]}</small>
              </MDBCardText>
              <MDBCardText className="blockquote font-weight-bold">
                About <small>{" "}{therapist["about"]}</small>
              </MDBCardText>
              <MDBCardText className="blockquote font-weight-bold">
                Education<small>{" "}{therapist["education"]} </small>
              </MDBCardText>
              <MDBCardText className="blockquote font-weight-bold">
                Specialities <small>{" "}{therapist["specialities"]}</small>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>

          <MDBCol md="12" size="md" className="d-flex justify-content-center">
            <BookingPage therapist={therapist} />



            <MDBBtn
              href={`/profile/${therapist["_id"]}`}
              color="grey"
              className="custom-button"
            >
              View Profile
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </>
  );
};

export default TherapistCard;
