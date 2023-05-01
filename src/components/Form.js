import React, {useState} from 'react'


export default function Form(props) {
  const handleOnChanege = (event)=>{
    setText(event.target.value);

  }
  const handleClick = ()=>{
    setText(text.toUpperCase());
  };
  const handleClick2 = ()=>{
    setText(text.toLowerCase());
  };
  const [text, setText] = useState('');

  const handleClickClear = ()=>{
    setText("");
  }
  return (
<div className='container'>
    <h1 className='my-3 text-center text-bg-dark text-warning'>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" id="myBox" placeholder='Enter Text Here' value={text} rows="5" autoFocus onChange={handleOnChanege}></textarea>
        <button className='btn btn-success my-3 ms-3' onClick= {handleClick} >Convert To Uppercase</button>
        <button className='btn btn-primary my-3 ms-3' onClick= {handleClick2} >Convert To Lowercase</button>
        <button className='btn btn-danger my-3 ms-3' onClick= {handleClickClear} >Clear Text</button>
        <p className='text-danger'>{text.split(" ").length} Words and {text.length} characters</p>
        <h2>Text Preview:-</h2>
        <p >{text}</p>
    </div>
</div>
  );
}
