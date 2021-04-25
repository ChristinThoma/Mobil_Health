import React, { Fragment, useContext, useEffect, useState } from "react";
import TherapistsContext from "../context/TherapistsContext";
import TherapistCard from "./TherapistCard";
import {
  MDBPagination,
  MDBPageItem,
  MDBPageNav,
  MDBCol,
  MDBRow,
} from "mdbreact";



const TherapistList = () => {

  const { filteredTherapists, fetchAPI } = useContext(TherapistsContext);
  const [page, setPage] = useState({
    offset: 0,
    data: filteredTherapists.slice(0, 5),
    perPage: 5,
    currentPage: 1,
  });
  const [paginationLength, setPaginationLength] = useState(Math.ceil(filteredTherapists.length / page.perPage));

  useEffect(() => {
    if (!filteredTherapists.length) {
      fetchAPI()
      setPaginationLength(Math.ceil(filteredTherapists.length / page.perPage));
    };
  }, []);

const setPagination = (e) => {
    let selectedPage;
    if (e.target.innerText === "Previous") {
      selectedPage = parseInt(page.currentPage) - 1;
    } else if (e.target.innerText === "Next") {
      selectedPage = parseInt(page.currentPage) + 1;
    } else {
      selectedPage = e.target.innerText;
    }
    const offset = (selectedPage - 1)* page.perPage;
    
    setPage((prevState) => ({
      ...prevState,
      currentPage: selectedPage,
      offset: offset,
      data: filteredTherapists.slice(offset, offset + prevState.perPage),
    }));

    window.scrollTo({
      top: 0
    })
  };

  return (
    <Fragment>
      <div>
        {filteredTherapists.length &&
          page.data.map((therapist) => <TherapistCard therapist={therapist} />)}
      </div>
      <MDBRow>
        <MDBCol>
          <MDBPagination className="mb-5" color="green">
            <MDBPageItem disabled={page.currentPage === 1}>
              <MDBPageNav aria-label="Previous">
                <span onClick={setPagination} aria-hidden="true" name="prev">
                  Previous
                </span>
              </MDBPageNav>
            </MDBPageItem>
            {Array.from( { length: paginationLength }, (_, i) => (
              <MDBPageItem>
                <MDBPageNav onClick={setPagination}>{i + 1}</MDBPageNav>
              </MDBPageItem>
            ))}
            <MDBPageItem disabled={page.currentPage === paginationLength}>
              <MDBPageNav aria-label="Previous">
                <span onClick={setPagination} aria-hidden="true">
                  Next
                </span>
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>
        </MDBCol>
      </MDBRow>
    </Fragment>
  );
};

export default TherapistList;
