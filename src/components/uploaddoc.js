import React from "react"
import axios from "axios"
import { Route, Redirect, Link } from 'react-router-dom';

export default class UploadDocuments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            FrontImageUrl:"",
            BackImageUrl:""
        }
    }
    document_loading = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    get_result = (e) => {
        e.preventDefault()
        const FrontImageUrl = { FrontImageUrl: this.state.FrontImageUrl };
        const BackImageUrl={BackImageUrl: this.state.BackImageUrl}
        console.log(this.state)

        var body = {
            FrontImageUrl: this.state.FrontImageUrl,
            BackImageUrl:this.state.BackImageUrl
        }

        axios({
            method: 'POST',
            url: 'http://863bbefc.ngrok.io/hack/2019/verification/aadhaar/extract',
            data: body,
        })
            .then((response) => {
                console.log(response.data)
                console.log(response.data.PayLoad)
                const object = {
                    PayLoad: response.data.PayLoad,
                }
                this.setState({
                    array: [...this.state.array, object]
                })
            })
            .catch((err) => alert(err))
    }
    render() {
        return (
            <div>
                <div className="container " style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px", }}>
                    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-light" >
                        <a class="navbar-brand" href="#"><i class="fa fa-globe p-2" aria-hidden="true"></i>PROPELLD</a>
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

            
                <div className="container" style={{marginTop:"10%"}}>
                    <div className="row">
                        <h1 className="display-4">"Aadhar Card Image Url"</h1>
                        <form className="col-lg-6 col-sm-5 col-md-6" >
                            <div class="form-group mt-5">
                                <label for="age">FRONT IMAGE URL </label>
                                <input type="text" value={this.state.FrontImageUrl} onChange={this.document_loading} name="FrontImageUrl" class="form-control" id="profession" aria-describedby="emailHelp" placeholder="ENTER FRONT IMAGE URL" />
                            </div>
                            <div class="form-group mt-5">
                                <label for="age">BACK IMAGE URL</label>
                                <input type="text" value={this.state.BackImageUrl} onChange={this.document_loading} name="BackImageUrl" class="form-control" id="montly" aria-describedby="emailHelp" placeholder="ENTER BACK IMAGE URL " />
                            </div>
                            <button class="btn btn-primary rounded-pill" onClick={this.get_result}>SUBMIT</button>
                           
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}