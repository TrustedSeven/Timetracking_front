import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";

import './index.css';

export default function Project() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" xl="7">
            <MDBCard className="rounded-3">
              <MDBCardBody className="p-4">
                <h4 className="text-center my-3 pb-3">To Do App</h4>
                <MDBRow className="row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                  <MDBCol size="12">
                    <MDBInput
                      label="Enter a task here"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>
                  <MDBCol size="12">
                    <MDBBtn type="submit">Save</MDBBtn>
                  </MDBCol>
                  <MDBCol size="12">
                    <MDBBtn type="submit" color="warning">
                      Get tasks
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
                <MDBTable className="mb-4">
                  <MDBTableHead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Buy groceries for next week</td>
                      <td>In progress</td>
                      <td>
                        <MDBBtn type="submit" color="danger">
                          Delete
                        </MDBBtn>

                        <MDBBtn type="submit" color="success" className="ms-1">
                          Finished
                        </MDBBtn>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Renew car insurance</td>
                      <td>In progress</td>
                      <td>
                        <MDBBtn type="submit" color="danger">
                          Delete
                        </MDBBtn>

                        <MDBBtn type="submit" color="success" className="ms-1">
                          Finished
                        </MDBBtn>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Sign up for online course</td>
                      <td>In progress</td>
                      <td>
                        <MDBBtn type="submit" color="danger">
                          Delete
                        </MDBBtn>

                        <MDBBtn type="submit" color="success" className="ms-1">
                          Finished
                        </MDBBtn>
                      </td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
