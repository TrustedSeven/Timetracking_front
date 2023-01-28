import React from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTooltip,
} from "mdb-react-ui-kit";

import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";

import "./index.css";

export default function Task() {
  return (
    <section className="gradient-custom-2 mt-5 vh-100">
      <MDBContainer className="py-5 mt-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol md="12" xl="10">
            <MDBCard className="mask-custom">
              <MDBCardBody className="p-4 text-white bg-info">
                <div className="text-center mt-5 pt-3 pb-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                    alt="Check"
                    width="60"
                  />
                  <h2 className="my-4">Task List</h2>
                </div>
                <MDBTable className="text-white mb-0">
                  <MDBTableHead>
                    <tr>
                      <th scope="col">Team Member</th>
                      <th scope="col">Project</th>
                      <th scope="col">Task</th>
                      <th scope="col">EntryDate</th>
                      <th scope="col">Hours</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: "45px", height: "auto" }}
                        />
                        <span className="ms-2">Alice Mayer</span>
                      </th>
                      <td className="align-middle">
                        <span>ReactNativeVideo</span>
                      </td>
                      <td className="align-middle">
                        <span>UI/UX design</span>
                      </td>
                      <td className="align-middle">
                        <span>01/25/2023</span>
                      </td>
                      <td className="align-middle">
                        <span>5 hours</span>
                      </td>
                      <td className="align-middle">
                        <MDBBtn className="me-1" color="success">
                          Success
                        </MDBBtn>
                        <MDBBtn className="me-1" color="warning">
                          Warning
                        </MDBBtn>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                          alt="avatar 1"
                          style={{ width: "45px", height: "auto" }}
                        />
                        <span className="ms-2">Morgan Depai</span>
                      </th>
                      <td className="align-middle">
                        <span>ReactNativeVideo</span>
                      </td>
                      <td className="align-middle">
                        <span>Frontend Page</span>
                      </td>
                      <td className="align-middle">
                        <span>01/25/2023</span>
                      </td>
                      <td className="align-middle">
                        <span>8 hours</span>
                      </td>
                      <td className="align-middle">
                        <MDBBtn className="me-1" color="success">
                          Success
                        </MDBBtn>
                        <MDBBtn className="me-1" color="warning">
                          Warning
                        </MDBBtn>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                          alt="avatar 1"
                          style={{ width: "45px", height: "auto" }}
                        />
                        <span className="ms-2">Yashah Collin</span>
                      </th>
                      <td className="align-middle">
                        <span>ReactNativeVideo</span>
                      </td>
                      <td className="align-middle">
                        <span>API design</span>
                      </td>
                      <td className="align-middle">
                        <span>01/25/2023</span>
                      </td>
                      <td className="align-middle">
                        <span>7 hours</span>
                      </td>
                      <td className="align-middle">
                        <MDBBtn className="me-1" color="success">
                          Success
                        </MDBBtn>
                        <MDBBtn className="me-1" color="warning">
                          Warning
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
