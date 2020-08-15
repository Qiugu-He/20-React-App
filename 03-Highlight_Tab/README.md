## Browser route tab
<img src="https://github.com/Qiugu-He/20-React-App/blob/master/02-Markdown_Editor/Markdown_Editor.png" alt="alt text" width="100%" height="100%">

This small app let me practiced with
* react hook (etc. useState)
* react-router-dom (Router, NavLink, Switch, and Route)
* Create re-useable react Component (etc. Tab)

### File Structure:
```
src:
    - component:
        - Tab
        - Header
    - Page:
        - About
        - Features
        - Home
    - App.js
    - index.js
    - Routes.js
```

### Rendering flow:
```
-> App.js
    -> Header.js (Render each tabs with its NavLink)
        -> Tab.js 
    -> Routes
        (Switch looks through its children <Route> and render the first one that matches the current url )
        ->Switch 
            (page will be rendered based on url match)
            -> Route
```

## How to Run :
- npm install<br>
- npm run
- npm build (For production)