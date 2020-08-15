## Markdown Editor
<img src="https://github.com/Qiugu-He/20-React-App/blob/master/02-Markdown_Editor/Markdown_Editor.png" alt="alt text" width="100%" height="100%">
This small app is primarily let me practiced react hook by built a Markdown Editor

<b>useState()</b>: this is how we create state varibale 
     and state varible basically any time it changed, react will go ahead and re-render this component

### Re-destructuring state:
```java
const [markdown, setMarkdown] = useState('# Markdown Editor');
```
### handleChange(): 
every time type on this onChange will set the text value in this textarea
```java
  function handleChange(e){
    setMarkdown(e.target.value);
  }
```