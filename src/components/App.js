import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Appinfo from './appinfo';
import Appinfo2 from './appinfo2';
import Homepage from './homepage';
import Congo from './congrats';
import UploadDocuments from './uploaddoc';

import './appinfo.css'
import UploadKyc from './upload';

export default class App extends React.Component{
  render() {
    return(
      <div>
      <Router>
        <Route path = "/" exact component={Homepage} />
        <Route path = "/appinfo" component ={Appinfo} />
        <Route path = "/congrats" component ={Congo} />
        <Route path = "/kyc" component ={UploadKyc} />
        <Route path = "/uploaddoc" component={UploadDocuments} />
      </Router>
      </div>
    )
  }
}
