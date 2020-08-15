/* 
 Using one of the react hook 
  -> useState, this is how we create state varibale 
     and state varible basically any time it changed, react will go ahead and re-render this component
*/ 

import React, { useState } from 'react';
import './App.css';
import marked from 'marked';
import ReactMarkdown from 'react-markdown';


export default function App() {
  //Re-destructuring, first param is the value, and second param is function
  const [markdown, setMarkdown] = useState('# Markdown Editor');

  function handleChange(e){
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
        <textarea 
          onChange = {handleChange}  //every time type on this onChange will set the text value in this textarea
          value={markdown}
        />

        {/* <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        /> */}

        <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}
