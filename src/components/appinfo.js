import React from "react"
import axios from "axios"
import { Link } from "react-router-dom";


export default class Appinfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            PANNumber: "",
            age: "",
            profession:"",
            montly:0,
            array1:[]
        }
    }
    verify = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showres = (e) => {
        e.preventDefault()
        const PANNumber = { PANNumber: this.state.PANNumber };
        console.log(this.state)

        var body = {
            PANNumber: this.state.PANNumber
        }

        axios({
            method: 'POST',
            url: 'http://863bbefc.ngrok.io/hack/2019/verification/pan/fetch',
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

    finalres=(e)=>{
        let obj = {
            age: this.state.age,
            profession: this.state.profession,
            montly:this.state.montly < 10000
        }
        this.setState({
            array1: [...this.state.array1, obj]
        })
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
                </div>
                <div className="container">
                    <h1 className="display-4">CHECK PAN</h1>
                    <div className="row ">
                        <form className="col-lg-5 col-sm-5 col-md-6" onSubmit={this.showres}>
                            <div class="form-group mt-5">
                                <label for="PANNumber">PAN NUMBER</label>
                                <input type="text" value={this.state.PANNumber} onChange={this.verify} name="PANNumber" class="form-control" id="PANNumber" aria-describedby="emailHelp" placeholder="Enter Pan Number" />
                            </div>

                            <button type="submit" class="btn btn-primary btn-lg rounded-pill" onClick={this.showres} >Submit</button> 
                        </form>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {this.state.array.map((element) => {
                            return (
                                <form className="col-lg-5 col-sm-5 col-md-6" >
                                    <div class="form-group mt-5">
                                        <label for="PANNumber">NAME</label>
                                        <input type="text" value={element.PayLoad.Name} name="name" class="form-control" id="PANNumber" aria-describedby="emailHelp" placeholder="ENTER NAME" />
                                    </div>
                                    <div class="form-group mt-5">
                                        <label for="PANNumber">FATHER'S NAME</label>
                                        <input type="text" value={element.PayLoad.FatherName} name="FatherName" class="form-control" id="PANNumber" aria-describedby="emailHelp" placeholder="ENTER FATHER NAME" />
                                    </div>
                                    <div class="form-group mt-5">
                                        <label for="PANNumber">DATE OF BIRTH</label>
                                        <input type="text" value={element.PayLoad.DateOfBirth} name="DateOfBirth" class="form-control" id="PANNumber" aria-describedby="emailHelp" placeholder="ENTER DATE OF BIRTH" />
                                    </div>
                                    <div class="form-group mt-5">
                                        <label for="PANNumber">PAN NUMBER</label>
                                        <input type="text" value={element.PayLoad.PANNumber} name="DateOfBirth" class="form-control" id="PANNumber" aria-describedby="emailHelp" placeholder="ENTER PANNUMBER" />
                                    </div>
                                </form>
                            )
                        })
                        }
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <form className="col-lg-5 col-sm-5 col-md-6" >
                            {/* <div class="form-group mt-5">
                                <label for="age">I AM </label>
                                <input type="text" value={this.state.age} onChange={this.verify} name="age" class="form-control" id="PANNumber" aria-describedby="emailHelp" placeholder="ENTER AGE" />
                            </div> */}
                            <div class="form-group mt-5">
                                <label for="age">PROFESSION </label>
                                <input type="text" value={this.state.profession} onChange={this.verify} name="profession" class="form-control" id="profession" aria-describedby="emailHelp" placeholder="ENTER PROFESSION" />
                            </div>
                            <div class="form-group mt-5">
                                <label for="age">MONTLY INCOME </label>
                                <input type="text" value={this.state.montly} onChange={this.verify} name="montly" class="form-control" id="montly" aria-describedby="emailHelp" placeholder="ENTER MONTLY" />
                            </div>
                           {/* <Link to ="/congrats"><button type="button" class="btn btn-primary rounded-pill" onClick={this.finalres}>SUBMIT</button></Link> */}
                        <p className="text-center">
                        <Link to ="/congrats" class="btn btn-primary rounded-pill" onClick={this.finalres}>SUBMIT</Link>
                        </p>
                        </form>
                    </div>
                </div>




            </div>
            
        )
    }
}