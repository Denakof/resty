import React from "react";
import "./form.scss";
import { useState } from "react";

function Form(props) {
  const [method, setMehtod] = useState("get");

  const [show, setShow] = useState(false);

  const selectMethod = (e) => {
    // console.log(e.target);
    setMehtod(e.target.getAttribute("id"));
    for (const span of document.querySelectorAll("span.active")) {
      span.classList.remove("active");
    }
    e.target.className = "active";

    if (
      e.target.getAttribute("id") == "put" ||
      e.target.getAttribute("id") == "post"
    ) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleSubmit = (e) => {
    // console.log(e.target);
    e.preventDefault();
    const formData = {
      method: method,
      url: e.target.url.value,
      body: e.target.textarea ? e.target.textarea.value : "",
    };
    props.handleApiCall(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span onClick={selectMethod} id="get">
            GET
          </span>
          <span onClick={selectMethod} id="post">
            POST
          </span>
          <span onClick={selectMethod} id="put">
            PUT
          </span>
          <span onClick={selectMethod} id="delete">
            DELETE
          </span>
        </label>
        {show && <textarea name="textarea" rows="4" cols="50"></textarea>}
      </form>
    </>
  );
}

export default Form;
