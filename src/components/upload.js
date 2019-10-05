import React from "react"
import axios from "axios"
import { Route, Redirect, Link } from 'react-router-dom';

export default class UploadKyc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            phone: "",
            yes: false,
            no: false
        }
    }
    phone = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    get_result = (e) => {
        const object = {
            phone: this.state.phone
        }
        this.setState({
            yes: true,
            array: [...this.state.array, object],
        });

    }
    p_no = (e) => {
        alert("KYC Verification Done")
    }



    res_get = (e) => {
        this.setState({
            no: true,
        });
    }

    render() {
        return (
            <div>
                <div className="container " style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px", }}>
                    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light" >
                        <a class="navbar-brand" href="#"><i className="fa fa-globe p-2" aria-hidden="true"></i>PROPELLD</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">
                                    <Link to="/" class="nav-link" href="#">HOME <span class="sr-only">(current)</span></Link>
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
                </div>

                <div className="container" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px", marginTop: "10%" }}>
                    <div className="row">
                        <h3>Is Applicant's Aadhar linked to Mobile Number ?</h3>
                    </div>
                    <div>
                        <input type="radio" name="yes" value={this.state.yes} onClick={this.get_result} /> YES<br></br>
                        <input type="radio" name="no" value={this.state.no} onClick={this.res_get} /> NO<br></br>
                    </div>

                    {this.state.yes ? (
                        <div className="container-fluid">
                            <div className="row " >
                                <div class="form-group mt-5">
                                    <label for="phone">Phone Number</label>
                                    <input type="text" value={this.state.phone} onChange={this.phone} name="phone" class="form-control" id="phone" aria-describedby="emailHelp" placeholder="ENTER NUMBER" />
                                    <button type="button" class="btn btn-primary rounded-pill mt-5" onClick={this.p_no}>CHECK</button>
                                </div>
                            </div>
                        </div>
                    ) : null}

                    {this.state.no ? (
                        <div className="container-fluid">
                            <div className="row " >
                                <Link to="/uploaddoc" class="btn btn-primary rounded-pill mt-5" onClick={this.res_get}>PROCEED TO KYC</Link>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}