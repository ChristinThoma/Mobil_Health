import React, { Fragment, useContext, useEffect } from "react"; 
import TherapistsContext from "../context/TherapistsContext"
import TherapistCard from './TherapistCard';
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";
import FilteredTherapists from "../Components/FilteredTherapists/FilteredTherapists"

const TherapistList = () => {
    const { filteredTherapists, fetchAPI } = useContext(TherapistsContext);

    useEffect(() => {
      if (!filteredTherapists.length)
        fetchAPI();
    }, [])
  
    return (<Fragment>    
                <ul>
                  {filteredTherapists.length && filteredTherapists.map(therapist => <TherapistCard therapist={therapist} /> )}
                  
                </ul> 
                {/* pageination */}
                <MDBRow>
      <MDBCol>
       
        <MDBPagination className="mb-5" color="green">
          <MDBPageItem>
            <MDBPageNav aria-label="Previous">
              <span aria-hidden="true">Previous</span>
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>
              1
            </MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>2</MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav>3</MDBPageNav>
          </MDBPageItem>
          <MDBPageItem>
            <MDBPageNav aria-label="Previous">
              <span aria-hidden="true">Next</span>
            </MDBPageNav>
          </MDBPageItem>
        </MDBPagination>
      </MDBCol>
    </MDBRow>
                
            </Fragment>)
}

export default TherapistList;