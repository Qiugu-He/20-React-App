## Build 20 Small React Apps

[Key Notes Summaries](#Key-Notes-Summary:) 

Made by Qiugu.

### [01-Pomodoro: Count-Down Timer](https://github.com/Qiugu-He/20-React-App/tree/master/01-Pomodoro)
<img src="https://github.com/Qiugu-He/20-React-App/blob/master/01-Pomodoro/timer.png" alt="alt text" width="70%" height="70%">

### [02-Markdown Editor](https://github.com/Qiugu-He/20-React-App/tree/master/02-Markdown_Editor)
<img src="https://github.com/Qiugu-He/20-React-App/blob/master/02-Markdown_Editor/Markdown_Editor.png" alt="alt text" width="70%" height="70%">

### [03-Broswer Tab Routes](https://github.com/Qiugu-He/20-React-App/tree/master/03-Highlight_Tab)
<img src="https://github.com/Qiugu-He/20-React-App/blob/master/03-Highlight_Tab/Tab.png" alt="alt text" width="70%" height="70%" >

### [04-Paper, Rock, Scissors](https://github.com/Qiugu-He/20-React-App/tree/master/04-Paper_Rock_Scissors)
<img src="https://github.com/Qiugu-He/20-React-App/blob/master/04-Paper_Rock_Scissors/game.png" alt="alt text" width="70%" height="70%">

### [05-Moving Link](https://github.com/Qiugu-He/20-React-App/tree/master/05-Moving_Link)
<img src="https://github.com/Qiugu-He/20-React-App/blob/master/05-Moving_Link/MoveLink.png" alt="alt text" width="70%" height="70%">

### [06-Infinit Image Gallery](https://github.com/Qiugu-He/20-React-App/tree/master/06-Infinit_Image_Gallery)
<img src="https://github.com/Qiugu-He/20-React-App/blob/master/06-Infinit_Image_Gallery/pic.png" alt="alt text" width="70%" height="70%">

### [07-Trivia_Game](https://github.com/Qiugu-He/20-React-App/tree/master/07-Trivia_Game)
<img src="https://github.com/Qiugu-He/20-React-App/blob/master/07-Trivia_Game/game.png" alt="alt text" width="70%" height="70%">


## Key Notes Summary: 
(Updating...)
### React Hook - useState():
* Add state in functional component -> create state varibale, store the current value, any time it changed, react will re-render this
* 2 elements inside, a pointer to state, second is a state update function
* If use the same value as the current state to update the state, React won’t trigger a re-render
* If use the previous value to update state, you must pass a function that receives the previous value and returns an updated value
```JavaScript
    //E.g. state variable used from App 07-Trivia_Game: 
    const[correctScore, setCorrectScore] = useState(0);
```

### React Hook - useEffect(): 
* After every render, the callback passed to this useEffect function is called
* By default, it runs after every render but by customize it with the second param of the useEffect function. The second argument accepts an array that allow us to tell React when we want our effect to be called.
* After a render and before calling an effect, React will compare the array of values defined in the second parameter with the array defined in the same effect from the previous render. React will only call the effect when any value of the array has changed since the previous render.
```JavaScript
    /* E.g.
       useEffect from App 07-Trivia_Game: Every time getQuestion & selectedCategory changed, useEffect will be called
    */
      useEffect(()=>{
        setIsCorrect(null);
        let url = 'https://opentdb.com/api.php?amount=1';
        if(selectedCateogry !== 'any')
        url += `&category=${selectedCateogry}`;

        fetch(url)
        //since we using fetch, so have to warp data
        .then((res) => res.json())
        .then((data) => setQuestion(data.results[0]));
    }, [getQuestion, selectedCateogry]); 
```


### React Hook - useRef(): 
* In a state variable: useState or useReducer. Updates in state variables will cause a re-render of the component.
* In a ref: Equivalent to instance variables in class components. Mutating the .current property won’t cause a re-render.
* useRef(): A function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue).
The returned object will persist for the full lifetime of the component.
lets us create mutable variables inside functional components.
* A ref created with useRef will be created only when the component has been mounted and preserved for the full lifecycle.
* Updating a ref is a side effect so it should be done only inside a useEffect (or useLayoutEffect) or inside an event handler.
