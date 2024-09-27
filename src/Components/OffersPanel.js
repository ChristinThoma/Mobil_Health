import { MDBBtn, MDBContainer, MDBCol } from "mdbreact";
import image from "../images/offersPannel1.png";
import image2 from "../images/offersPannel2.png";
import image3 from "../images/offersPannel3.png";

const PanelPage = () => {
  return (
    <MDBContainer className="text-center d-flex align-items-start ">
      <MDBCol>
        <img
          className="image"
          src={image}
          alt="offers panel one"
          width="250"
          height="170"
        />
<MDBBtn color="green" height="10" href="/therapistlist">Step 1: Please choose your Service here</MDBBtn>        <p >
          You can look here to see the list of all of Our Therapist Services.
        </p>
      </MDBCol>
      <MDBCol>
        <img
          className="image"
          src={image2}
          alt="offers panel one"
          width="250"
          height="170"
        />
        <MDBBtn color="green" href="#" >Step 2: Please book your Appointment</MDBBtn>
        <p>
         If you are ready to make your Appointment you can click here to book now.
        </p>
      </MDBCol>
      <MDBCol>
        <img
          className="image"
          src={image3}
          alt="offers panel one"
          width="250"
          height="170"
        />
        <MDBBtn color="green">Step 3: we have no idea what this step is!</MDBBtn>
        <p>
          English Jokes driving me crazy!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Dont  worry its allllmost over
        </p>
      </MDBCol>
    </MDBContainer>
  );
};

export default PanelPage;
