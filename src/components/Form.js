import React, {useState} from 'react'


export default function Form(props) {

  // const [myStyle, setMyStyle]= useState({
  //   backgroundColor:"black",
  //   color:"white"
  // }) ;
  // const [btnToggleStyle, setBtn]= useState(" Switch TO Light Mode")
  // const toggleStyle = ()=>{
  //   if (myStyle.color === 'white'){
  //     setBtn("Switch TO Dark Mode")
  //     setMyStyle({
  //       backgroundColor:"white",
  //       color:"black"
  //     })
  //   }
  //   else{
  //     setBtn("Switch TO Light Mode")
  //     setMyStyle({
  //       backgroundColor:"black",
  //       color:"white"
  //     })
  //   }
    
  // }


  const handleOnChanege = (event)=>{
    setText(event.target.value);

  }
  const handleClick = ()=>{
    setText(text.toUpperCase());
    props.alertFunc("Coverted To Uppercase","success")
  };
  const handleClick2 = ()=>{
    setText(text.toLowerCase());
  };
  const [text, setText] = useState('');

  const handleClickClear = ()=>{
    setText("");
  }
  return (
<div className={`container text-${props.mode==='dark'?'light':'dark'} `} >
    <h1 className={`my-3 text-center text-bg-${props.mode} text-warning`}>{props.heading}</h1>
    <div className="mb-3">
        <textarea style={{backgroundColor: props.mode==='dark'?'grey':'white'}} className={`form-control text-${props.mode==='dark'?'light':'dark'} `} id="myBox" placeholder='Enter Text Here' value={text} rows="5" autoFocus onChange={handleOnChanege}></textarea>
        <button className='btn btn-success my-3 ms-3' disabled={text.length===0} onClick= {handleClick} >Convert To Uppercase</button>
        <button className='btn btn-primary my-3 ms-3' disabled={text.length===0} onClick= {handleClick2} >Convert To Lowercase</button>
        <button className='btn btn-danger my-3 ms-3' disabled={text.length===0} onClick= {handleClickClear} >Clear Text</button>
        {/* <button style={myStyle}className='btn btn-light my-3 ms-3' type='button' disabled={text.length===0} onClick={toggleStyle}>{btnToggleStyle}</button> */}
        <p className='text-danger'>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
        <h2>Text Preview:-</h2>
        <p >{text.length<1?'Enter Some Text In The Box Above': text}</p>
    </div>
</div>
  );
}
