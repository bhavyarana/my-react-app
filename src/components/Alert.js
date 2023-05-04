import React from 'react'

export default function Alert(props) {
  const capitalize = (word)=>{
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  } 
  return (  
    props.alertText && <div style={{ position: `absolute`, width: `100vw` }}>
        <div class={`alert alert-${props.alertText.typ}`} role="alert">
            <strong>{capitalize(props.alertText.typ)}:</strong> {props.alertText.msg} 
        </div>
    </div>
  )
}
