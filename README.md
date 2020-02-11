# Interactive CV

I started this project mainly for two reasons:

-   have an online resume;
-   get my hands dirty with React / Redux / Typescript

You can check the result on: [https://andreafrittella.com](https://andreafrittella.com)

All data is stored on a single [Firebase](https://firebase.google.com/) realtime database.
If you want to know the data structure check the [data/entities](https://github.com/afrittella/interactive-cv/tree/master/src/data/entities) folder.

To run this project:

1. create a "realtime database" on Firebase console
2. copy `.env.example` to `.env.development`, and fill all the Firebase configuration values
3. run `yarn` or (`npm install`)
4. run `yarn start` or (`npm start`) and go to [http://localhost:3000](http://localhost:3000)

... enjoy :)

#### TODO

-   tests
-   tests
-   tests `(yes, tests are important, so I will try to fix this issue ASAP, just need to figure out how to do it in a proficient way)`
-   simplify and refactor redux related code
-   add contact form and backend part to deal with it
-   add a music player (Soundcloud or Spotify) to let users listen to my tracks
-   create an Admin Panel for database management

I'm happy to receive proposals, suggestions, pull requests and anything else you may want to send me.

### Credits

-   This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
-   [React: SVG Stroke Animation with CSS Explained](https://medium.com/@rossbulat/react-svg-stroke-animation-with-css-explained-c1e8e3d2e206) showing how to create a menu toggle button.
-   [React Vertical Timeline](https://github.com/stephane-monnot/react-vertical-timeline) partially inspired me when building the timeline component.
