# React

## What it is
- It is a JS library
- It is used to build the frontend of a web application

## What are the advantages?
- Reusable components (reusable custom html elements)
HTML - <input type="text" />, <input type="password" />, <input type="checkbox" />
    - In HTML we have attributes to customize the element when we use it
React (Meta), Angular (Google), Vue - <Menu items={[ 'Home', 'About Us', 'Contac Us' ]}/>,
<Menu items={[ 'Home', 'About Us', 'Portfolio' ]}/>
    - In React, we use custom attributes - we call them "props" - in the above example, "items" is a "prop"
<header>
</header>
<Menu />
<Sidebar />
<EmailList />
- Data-binding
    - We do not manipulate the DOM explicitly
    - <div>Press enter to start the game</div>
    - <div>Game on!</div>
    - <div>{message}</div> 
        - IN JS you update this variable - message = 'Game over!'
        - In the browser youd see the message 'Game over!' (<div>Game over!</div> )
    - React, Angular, Vue etc. manage the DOM for use -> we should never manipulate the DOM ourselves.
    - These libraries manage the DOM efficiently
