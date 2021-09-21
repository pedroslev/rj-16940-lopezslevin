import React from 'react'
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdb-react-ui-kit";
import './css/footer.css';


function Footer() {
    return (
        <div className="footer">
<MDBFooter color="white" className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              DevBar
            </h6>
            <p>
              Hola! somos un bar hecho por desarrolladores, para desarrolladores!
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" /> Buenos Aires, AR
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> plopezslevin@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> +5491161238744
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://github.com/plshazer"> @pedroslevv </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://twitter.com/pedroslevv" target="_blank">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://www.instagram.com/pedroslev/" target="_blank">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm rgba-white-slight mx-1" href="https://ar.linkedin.com/in/pedrolopezslevin" target="_blank">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
    </div>
    );
}

export default Footer
