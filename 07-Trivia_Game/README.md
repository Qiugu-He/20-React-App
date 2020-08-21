## Trivia Game
<img src="https://github.com/Qiugu-He/20-React-App/blob/master/07-Trivia_Game/game.png" alt="alt text" width="100%" height="100%">

This small app is let me practiced with: 
* <b>Hooks: useState, useEffect</b>
* <b>Fetch Data from external API</b>
* <b>Using and passing props to child component</b>

### Components:
- App:
  - ResultModal
  - CategorySelector
  - Scoreboard
  - Question

### Data Flow between components
```JavaScript
/*
state variable: 
    question
    win_score
    wrong_score
    selectedCateogry  

1. question_data: Requested from external api
    -> passed it to Question Component as child property
    <- return from Question Component with user's answer
    
    2. check user's answer with question_data.answer
    -> true ? win_score ++ : worng_score ++
        -> passed socre to Scoreboard component

3. selectedCatory
    ->if selected, re-rending app with selected catory question

*/
```

### How to Run :
- npm install<br>
- npm start
- npm build (For production)