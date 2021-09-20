import React from 'react';
import './form.scss';
import { useState } from 'react';

const [click, setclick] = useState();
const [show, setShow] = useState();




 const handleSubmit = e => {
  e.preventDefault();
  const formData = {
    method:'GET',
    url: 'https://pokeapi.co/api/v2/pokemon',
  };
  props.handleApiCall(formData);
};

function Form(){
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label >
            <span>URL: </span>
            <input name='url' type='text' />
            <button type="submit">GO!</button>
          </label>
          <label onClick={(e)=>{
            e.preventDefault()
            
          }} className="methods">
            <span id="get">GET</span>
            <span id="post">POST</span>
            <span id="put">PUT</span>
            <span id="delete">DELETE</span>
          </label>
        </form>
      </>
    );
  
}

export default Form;
