## How I worked on this project
My goal was to simulate a professional work environment.
- I built this app based on Figma designs: [Figma Screenshot](./src/assets/figma.png?raw=true)
- I worked with tasks on a Kanban board: [ClickUp Screenshot](./src/assets/kanban.png?raw=true)
## How to navigate this project
- CSS using tailwindCSS: [Example](./src/components/NavBar.js)
- The application fetches data from the reddit API: [Examples for the request](https://github.com/d4v3000/subreddit-analyzer/blob/280339a4766d9ca8acbf611f1daece27f21639d2/src/components/Search.js#L18) and [data transformation](https://github.com/d4v3000/subreddit-analyzer/blob/280339a4766d9ca8acbf611f1daece27f21639d2/src/components/PostsTable.js#L40)
- Integration tests using React Testing Library: [Link to testfile](https://github.com/d4v3000/subreddit-analyzer/blob/280339a4766d9ca8acbf611f1daece27f21639d2/src/App.test.js)
## Why I built the project this way
- I didn't use a state management library like Redux on purpose. For this app simple `useState` is
sufficient. I realized that more and more projects don't use Redux anymore since GraphQL or
react-query are often used for data management.
- I used tailwindCSS to work with a CSS framework for the first time and gain some experience with it. It allows me to write CSS straight into 
the HTML Code without opening another file and writing the CSS myself.
- My plan is to become a full-stack developer eventually. But for the beginning I focus on the
frontend. That's why I decided to use an existing API rather to create a custom server. I have
basic backend knowledge as well.
- Testing is an essential part of production applications. Testing Library is the go-to library in the
React community. I covered the essential features of the app with tests.
## If I had more time I would change this
- Set up continuous integration to run the tests and ESLint on every Pull Request
- Refactor some of the code. [Especially this part](https://github.com/d4v3000/subreddit-analyzer/blob/280339a4766d9ca8acbf611f1daece27f21639d2/src/components/Heatmap.js#L40)
- Add responsive design and dark mode
- Add end-to-end tests with Cypress.
## Showcase
![gif](./src/assets/showcase.gif)
## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
