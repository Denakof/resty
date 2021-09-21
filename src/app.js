import React from 'react';
import axios from 'axios';
import './app.scss';
import { useState } from 'react';
// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Form from './components/form/form';
import Results from './components/results/results';

function App (){
  const [data,setData]=useState(null)
  const [requestParams,setrequestParams]=useState({})


   const callApi = (requestParams) => {
    // mock output
    console.log(requestParams);
    axios({
      method: requestParams.method,
      url: requestParams.url,
      data: requestParams.body
    })
      .then((response)=> {
        // const data = {
        //   count: 2,
        //   results: response
        // };
        // setData({data:{ count: 2,
        //   results: response}}) 
          setData({
            count:2,
            results:response
          })
          setrequestParams(requestParams);
      });
  }

 
    return (
      <React.Fragment>
        <Header />
        <div>Request Method: {requestParams.method}</div>
        <div>URL: {requestParams.url}</div>
        <Form handleApiCall={callApi} />
        <Results data={data} />
        <Footer />
      </React.Fragment>
    );
  }


export default App;
