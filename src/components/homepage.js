import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Homepage extends React.Component {
    render() {
        return (
            <div>
                {/* navbar code*/}
                <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }} >
                    <a class="navbar-brand" href="#"><i className="fa fa-globe p-2" aria-hidden="true"></i>PROPELLD</a>
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
                <hr></hr><br></br>

                {/* Jumbotron code*/}
                <div className="jumbotron bg-cover ">
                    <div class="overlay"></div>
                    <div class="container">
                        <h1 class="float-left">Flexible Financing For Your Education</h1>
                    </div>

                </div>
                <Link to="/appinfo"><a className="float-left ml-5"><button className="btn btn-primary align-center">Click here</button></a></Link>


            </div>
        )
    }
}