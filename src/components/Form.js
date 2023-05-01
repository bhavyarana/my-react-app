import React from 'react'


export default function Form(props) {
  return (
<div className='container'>
    <h1 className='my-3'>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="5"></textarea>
        <button className='btn btn-success my-3'>Convert To Uppercase</button>
    </div>
</div>
  );
}
