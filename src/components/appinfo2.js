import React from "react";
import { Link } from "react-router-dom";

export default class Appinfo2 extends React.Component {
    render() {
        return (
            <div>
                {/* <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light" >
                    <a class="navbar-brand" href="#"><i class="fa fa-globe" aria-hidden="true"></i>PROPELLD</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#process">PROCESS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => this.props.history.push(`/contactus`)}>CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container" style={{ marginTop: "200px" }}>
                    <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <h3 className="register-heading">Apply as a Hirer</h3>
                        <div className="row register-form">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="First Name *" value="" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Last Name *" value="" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email *" value="" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Phone *" value="" />
                                </div>


                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password *" value="" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Confirm Password *" value="" />
                                </div>
                                <div className="form-group">
                                    <select className="form-control">
                                        <option className="hidden" selected disabled>Please select your Sequrity Question</option>
                                        <option>What is your Birthdate?</option>
                                        <option>What is Your old Phone Number</option>
                                        <option>What is your Pet Name?</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="`Answer *" value="" />
                                </div>
                                <input type="submit" className="btnRegister" value="Register" />
                            </div>
                        </div>
                    </div>
                </div> */}
                <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }} >
                    <a class="navbar-brand" href="#"><i class="fa fa-globe" aria-hidden="true"></i>PROPELLD</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#process">PROCESS</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" onClick={() => this.props.history.push(`/contactus`)}>CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="container register">
                    <div className="row">
                        <div className="col-md-3 register-left">
                            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                            <h2>Welcome</h2>
                            <p>Apply for the loan</p>
                            <small className="text-muted" style={{ color: "white" }}>Check the fees for your Institute and Course.
                             Just answer a few quick questions on your personal,
                         education and employment details.</small>
                        </div>
                        <div className="col-md-9 register-right">
                            <h2 className="register-heading">STUDENT IS</h2>

                            {/* <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Earning</a>
                                </li>
                                <li className="nav-item">
                                    <Link to = "/not_earning" className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Not Earning</Link>
                                </li>
                            </ul> */}
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row register-form">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Pan No: *" value="" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Age *" value="" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Profession *" value="" />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" placeholder="Company's Name *" value="" />
                                            </div>
                                            <div className="form-group">
                                                <div className="maxl">
                                                    <label className="radio inline">
                                                        <input type="radio" name="gender" value="male" checked></input>
                                                        <span> Male </span>
                                                    </label>
                                                    <label className="radio inline">
                                                        <input type="radio" name="gender" value="female"></input>
                                                        <span>Female </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Name *" value="" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="txtEmpPhone" className="form-control" placeholder="Employment Status *" value="" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="txtEmpPhone" className="form-control" placeholder="Experience in Years *" value="" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Monthly Income *" value="" required />
                                            </div>
                                            <input type="submit" className="btnRegister" value="Register" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}