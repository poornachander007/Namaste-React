                                🔥 Namaste react 🚀

## 1. Emmet

A code expansion tool that speeds up HTML/CSS writing by using abbreviations.

- Example: `div#container>h1+p` expands to

       * `<div id="container">
            <h1></h1>
            <p></p>
        </div>`

## 2. Library vs Framework

- **Library:** A collection of reusable code you can use as needed. (e.g., jQuery,React)
- **Framework:** A structured platform for building applications. (e.g., Angular)

## 3. CDN

Content Delivery Network. Delivers content faster by storing copies of files on multiple servers worldwide.

## 4. React

Named after "reconciliation," where React efficiently updates the UI based on data changes.

## 5. crossorigin attribute

Specifies the origin of a script and allows cross-origin requests. Helps prevent CORS errors.

## 6. React vs ReactDOM

- **React:** Creates UI components.
- **ReactDOM:** Renders React components into the DOM.

## 7. react.development.js vs react.production.js

- **development.js:** Includes debugging tools, slower.
- **production.js:** Optimized for performance, smaller size, no debugging.

## 8. async and defer attributes

- **async:** Downloads script asynchronously without blocking page rendering.
- **defer:** Downloads script asynchronously but executes after page load.

                          .....(NORMAL).....
          parsing_html                          parsing_html
      **`_____________`**`.                     .`**`____________`**

  `.                .`**`_________` , `_________`**
  `.                   .`ftchn_scrpt exctn_scrpt

                          .....(ASYNC).....
          parsing_html                           parsing_html
      **`________________________`**          **`____________`**

  `.                .`**`_________` , `_________`**
  `.                   .`ftchn_scrpt exctn_scrpt

                          .....(DEFER).....
          parsing_html
      **`____________________________________`**

  `.              .`**` ___________ ``.       .``____________ `**
  `.                .`ftchn_scrpt`.             .`exctn_scrpt

`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`
`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`

## Core Concepts

1. **NPM (Node Package Manager):**
   A tool for managing JavaScript packages (reusable code), allowing installation, updates, and sharing.
2. **Parcel/Webpack:**
   Bundlers combining code, images, and assets into optimized files for faster website loading.
3. **.parcel-cache:**
   A folder created by Parcel to store build information for faster subsequent builds.
4. **npx:**
   A command to run executable files from npm packages without global installation.
5. **dependencies vs devDependencies:**
   Dependencies are required for the application to run, while devDependencies are for development tools.
6. **Tree Shaking:**
   Optimizes JavaScript code by removing unused parts, resulting in smaller file sizes.
7. **Hot Module Replacement (HMR):**
   Updates parts of a web application without full page reloads during development.

## Project Structure and Configuration

8. **Parcel's Superpowers:**
   Known for its speed, simplicity, and built-in features like HMR and code splitting.
9. **.gitignore:**
   A file telling Git which files or folders to ignore when committing changes.
10. **package.json:**
    Describes the project, its dependencies, and other metadata.
11. **package-lock.json:**
    Automatically generated file locking down exact dependency versions.
12. **node_modules:**
    Folder containing installed project dependencies.
13. **dist folder:**
    Contains the final, optimized build files ready for deployment.
14. **browserlists:**
    Configures which browsers your project supports for CSS compatibility.

## Advanced Topics

15. **Bundlers:**
    Tools like Vite, Webpack, and Parcel combine code and assets into optimized files.
16. **^ (caret) and ~ (tilde):**
    Symbols used in package.json to specify dependency version ranges.
17. **Script types in HTML:**
    Different ways to include JavaScript code in an HTML document, affecting how and when the script is loaded and executed. Common types include `script` (default), `module` (for ES modules), and `text/javascript` (older).

`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`
`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`

## 1. What is JSX?

**JSX** is a syntax extension for JavaScript that resembles HTML. It's primarily used with React to describe the structure of a user interface. While it looks like HTML, it's actually transformed into regular JavaScript function calls before the browser sees it.

## 2. Superpowers of JSX

- **Readability:** JSX code often looks more like HTML, making it easier to understand.
- **Conciseness:** It allows you to write UI structures directly in JavaScript, reducing code verbosity.
- **Dynamic Content:** JSX can easily embed JavaScript expressions within it, enabling dynamic rendering of content.
- **Component Composition:** JSX promotes creating reusable components, improving code organization and maintainability.

## 3. Role of type attribute in script tag? What options can I use there?

The **type** attribute in a script tag specifies the scripting language used in the script. Common options include:

- **text/javascript:** The default type, indicating JavaScript code.
- **module:** Specifies an ES6 module script.
- **application/javascript:** A more specific type for JavaScript.

## 4.  {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

- **{TitleComponent}**: This will render the output of the `TitleComponent` function or class directly. It's often used when the component returns a primitive value (like a string).
- **{<TitleComponent/>}**: This is the correct way to render a React component. It creates an instance of the `TitleComponent` and includes it in the JSX output.
- **{<TitleComponent></TitleComponent>}**: While technically valid, this is redundant and unnecessary. The closing tag is implied in JSX.

**In summary:** Use `{<TitleComponent/>}` to render React components correctly.

## 5. React.createElement vs JSX

- **React.createElement** is a function that creates React elements. It's the underlying mechanism behind JSX.
- **JSX** is a syntax extension for JavaScript that looks like HTML. It's a more convenient way to write React elements.

**Example:**

```javascript
// Using React.createElement
const element = React.createElement(
  "div",
  { className: "myDiv" },
  "Hello, world!"
);

// Using JSX
const element = <div className="myDiv">Hello, world!</div>;
```

Both create the same React element, but JSX is more readable.

## 6. Benefits of JSX

- **Readability:** JSX looks like HTML, making UI structure easier to understand.
- **Conciseness:** It's more concise than using `React.createElement`.
- **Dynamic content:** JSX allows embedding JavaScript expressions within it.
- **Component-based structure:** Encourages creating reusable components.

## 7. Behind the Scenes of JSX

JSX is transformed into regular JavaScript function calls during the build process using tools like Babel. This process converts JSX syntax into `React.createElement` calls.

## 8. Babel & Parcel role in JSX

- **Babel:** Transpiles JSX into `React.createElement` calls, making it understandable by JavaScript engines.
- **Parcel:** Bundles your code, including JSX, and often uses Babel for transformation.

## 9. Components

**Components** are reusable building blocks of React applications. They can be either functional or class-based. They encapsulate UI and logic, making code modular and maintainable.

## 10. Functional Components

**Functional components** are simpler components defined as JavaScript functions. They are typically used for stateless components that don't require internal state management. They can be used with hooks for state management.

## 11. Composing Components

**Composing Components** involves nesting components within other components to create complex UIs. This promotes reusability and modularity. React encourages a component-based architecture where you build large UIs by combining smaller components.

`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`
`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`

## React-Specific Concepts

### Core Concepts

1. **Is JSX mandatory for React?**
   While not strictly mandatory, JSX is highly recommended and widely used in React development. It provides a more intuitive way to structure components.
2. **Is ES6 mandatory for React?**
   No, but ES6 (or later) is strongly recommended for modern React development. It offers features like arrow functions, classes, and modules that are essential for effective React development.
3. **{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX:**
   - `{TitleComponent}`: Directly renders the output of the `TitleComponent` function.
   - `{<TitleComponent/>}`: Correctly renders a React component.
   - `{<TitleComponent></TitleComponent>}`: Redundant, as closing tags are implied in JSX.
4. **How can I write comments in JSX?**
   Use `{/* your comment here */}` syntax.
5. **What is and <> ?**
   These are React fragments used to return multiple elements without wrapping them in an additional parent element.
6. **What is Virtual DOM?**
   A virtual representation of the actual DOM, allowing React to efficiently update the UI by comparing the virtual and real DOMs and applying minimal changes.
7. **What is Reconciliation in React?**
   The process of comparing the virtual DOM with the real DOM to determine the necessary updates.
8. **What is React Fiber?**
   The architecture behind React's reconciliation process, enabling better performance and responsiveness.
9. **Why we need keys in React? When do we need keys in React?**
   Keys help React identify which items have changed, been added, or removed in lists. Use keys when rendering lists of elements.
10. **Can we use index as keys in React?**
    While possible, using index as a key is generally discouraged as it can lead to performance issues and incorrect updates.
11. **What is props in React? Ways to pass props:**
    Props (properties) are used to pass data from parent to child components. They are passed as attributes to custom components.
12. **What is a Config Driven UI?**
    A Config Driven UI is a design pattern where the UI structure and content are defined by external configuration data rather than hardcoded in the component. This allows for dynamic and flexible UIs.

`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`
`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`

## 1. Named Export, Default Export, and `*` as Export

- **Named Export:** Allows multiple values to be exported from a module with specific names.
  - Example:
    ```javascript
    export const name = "Alice";
    export const age = 30;
    ```
- **Default Export:** Allows exporting a single value from a module.
  - Example:
    ```javascript
    export default function greet(name) {
      console.log("Hello, " + name);
    }
    ```
- **`*` as export:** Imports all named exports from a module.
  - Example:
    ```javascript
    import * as utils from "./utils";
    ```

## 2. Importance of config.js file

A `config.js` file typically stores configuration settings for an application. This includes API endpoints, database credentials, environment variables, and other settings that might vary between different environments (development, testing, production). It helps in managing and centralizing configuration details, making it easier to maintain and update.

## 3. React Hooks

React Hooks are functions that let you "hook into" React state and lifecycle features from functional components. They replaced the need for class components in many cases.

## 4. Why do we need a useState Hook?

The `useState` hook is used to manage state within functional components. It allows you to declare a state variable and a function to update it. This is crucial for building dynamic and interactive user interfaces in React.

`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`
`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`

## 1. Microservice

A microservice is a small, self-contained service that performs a specific task within a larger application. It's designed to be independently deployable and scalable.

## 2. Monolith Architecture

A monolithic architecture is a single, large application that contains all the components of a system. It's typically deployed as a single unit.

## 3. Difference between Monolith and Microservice

- **Monolith:** Single, large application; difficult to scale and maintain; changes require redeployment of the entire system.
- **Microservice:** Small, independent services; easier to scale and maintain; changes can be deployed independently.

## 4. useEffect Hook

The `useEffect` hook is used to perform side effects in functional components. It allows you to fetch data, set up subscriptions, and manage DOM interactions.

## 5. Optional Chaining

Optional chaining is a JavaScript operator (?.), introduced in ES2020, that allows you to safely access nested object properties even if intermediate objects are null or undefined.

## 6. Shimmer UI

A shimmer UI is a placeholder or loading indicator that mimics the appearance of the final content. It provides a better user experience while data is loading.

## 7. Difference between JS expression and JS statement

- **Expression:** A unit of code that evaluates to a value.
- **Statement:** A complete unit of code that performs an action.

## 8. Conditional Rendering

Conditional rendering allows you to render different UI elements based on conditions.

```javascript
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <p>Welcome, {props.user}!</p>;
  }
  return <p>Please log in.</p>;
}
```

## 9. CORS

Cross-Origin Resource Sharing (CORS) is a mechanism that allows web pages to make requests to servers on a different domain.

## 10. async and await

`async` and `await` keywords are used to simplify asynchronous operations in JavaScript, making the code more readable and easier to understand.

## 11. `const json = await data.json();`

This line of code is used to convert a response object (data) into a JSON object. The `await` keyword waits for the `data.json()` promise to resolve before continuing.

`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`
`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`

## 1. Adding Images to React Apps

**-----1. Using `import`:**

```javascript
import myImage from "./myImage.jpg";

function MyComponent() {
  return <img src={myImage} alt="My Image" />;
}
```

**-----2. Using a public folder:**
Place the image in a `public` folder and reference it directly:

```javascript
<img src="myImage.jpg" alt="My Image" />
```

**-----3. Using a CDN (Content Delivery Network):**

```javascript
<img src="https://example.com/myImage.jpg" alt="My Image" />
```

## 2. `console.log(useState())`

This will log an array containing the current state value and a function to update it. For example:

```javascript
const [count, setCount] = useState(0);
console.log(useState()); // Output: [0, function]
```

## 3. useEffect without Dependency Array

If you don't provide a dependency array, `useEffect` will run after every render, potentially causing performance issues. To control when it runs, include dependencies in the array.

## 4. SPA (Single-Page Application)

An SPA is a web application that loads a single HTML page and dynamically updates the content without reloading the entire page.

## 5. Client-Side vs. Server-Side Routing

- **Client-Side Routing:** The routing logic is handled on the client-side using JavaScript. This allows for faster navigation within the application.
- **Server-Side Routing:** The routing logic is handled on the server-side, and the entire page is reloaded for each navigation. This can be SEO-friendly but might have slower initial load times.

`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`
`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`

## React Router and Lifecycle Methods

### 1. Nested Routes in React Router

To create nested routes in React Router, you can use the `Route` component's `path` prop to define the path for the nested route. Here's an example:

```javascript
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
```

### 2. createHashRouter and createMemoryRouter

- **createHashRouter:** Uses the URL hash (#) to manage routes, suitable for environments without server-side routing.
- **createMemoryRouter:** Creates a router for testing or environments without a browser window.

### 3. Lifecycle Method Order in Class-Based Components

1. `constructor()`
2. `static getDerivedStateFromProps()`
3. `render()`
4. `componentDidMount()`
5. `componentDidUpdate()`
6. `componentWillUnmount()`

### 4. componentDidMount

Used for side effects that should happen after the component is mounted to the DOM. For example, fetching data, setting up subscriptions, or initializing DOM elements.

### 5. componentWillUnmount

Used for cleanup operations before the component is unmounted from the DOM. For example, canceling timers, removing event listeners, or cleaning up subscriptions.

```javascript
class MyComponent extends React.Component {
  componentDidMount() {
    // Set up a timer
    this.timer = setInterval(() => {
      // Update state or perform other actions
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the timer
    clearInterval(this.timer);
  }

  render() {
    // ...
  }
}
```

### 6. super(props) in Constructor

Calling `super(props)` in a class component's constructor is essential to initialize the component's state and properties correctly. It ensures that the component inherits the correct behavior from its parent class.

### 7. useEffect Callback Function Not Async

The `useEffect` callback function cannot be directly async because it's called synchronously during rendering. To handle asynchronous operations within `useEffect`, you can use promises or async/await.

```javascript
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    // Do something with the data
  };

  fetchData();
}, []);
```

`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`
`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`

## 1. When and why do we need lazy()?

**lazy** is used to load components dynamically, improving initial load times and reducing bundle size. It's especially useful for large applications with many components.

## 2. What is suspense?

**Suspense** is a feature in React that allows you to declaratively handle loading states and errors when components are asynchronously loaded.

## 3. Error: A component suspended while responding to synchronous input

This error occurs when a component using `lazy` or `Suspense` tries to update the UI synchronously while still loading. Wrapping the update in `startTransition` tells React that the update is a non-urgent transition and can be delayed if necessary.

## 4. Advantages and disadvantages of code splitting with lazy and Suspense

**Advantages:**

- Improved initial load times
- Smaller bundle sizes
- Better user experience with graceful degradation

**Disadvantages:**

- Increased complexity in some cases
- Potential for performance overhead if not used carefully

## 5. When and why do we need Suspense?

Use Suspense when you want to handle loading states and errors for asynchronously loaded components. It provides a more declarative and intuitive way to manage component loading.

`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`
`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`

## 1. CSS Writing Styles

**1.1 Inline CSS:** Directly embedded within HTML elements using the `style` attribute.

```html
<p style="color: blue; font-size: 18px;">This is inline CSS</p>
```

**1.2 Internal CSS:** Defined within a `<style>` tag in the `<head>` section of an HTML document.

```html
<head>
  <style>
    p {
      color: red;
      font-size: 20px;
    }
  </style>
</head>
```

**1.3 External CSS:** Linked to an HTML document using the `<link>` tag.

```html
<link rel="stylesheet" href="styles.css" />
```

## 2. Tailwind CSS Configuration

1. **Create a `tailwind.config.js` file** in your project's root directory.
2. **Configure the `content` option:** Specify the paths to your HTML, JSX, or Vue files where Tailwind CSS classes are used.
3. **Customize the `theme` option:** Modify default Tailwind CSS theme values (colors, typography, spacing, etc.).
4. **Extend the `extend` option:** Add custom CSS classes or modify existing ones.
5. **Add plugins:** Use plugins to extend Tailwind CSS's functionality.

## 3. Tailwind.config.js Keys

- **content:** Specifies the files where Tailwind CSS classes are used.
- **theme:** Defines the default theme values.
- **extend:** Allows you to customize existing Tailwind CSS classes or add new ones.
- **plugins:** Enables you to use third-party plugins to extend Tailwind CSS's capabilities.

## 4. .postcssrc File

The `.postcssrc` file is used to configure PostCSS, a tool that processes CSS. It can be used to specify plugins and options for PostCSS, which is often used in conjunction with Tailwind CSS for additional features like autoprefixer.

`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`
`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`

## 1. Prop Drilling

Prop drilling refers to the practice of passing props through multiple levels of nested components to reach a component that needs them. This can lead to complex and difficult-to-maintain code, especially in large applications.

## 2. Lifting the State Up

Lifting the state up involves moving shared state to a common ancestor component and passing it down as props to child components. This can help avoid prop drilling and make code more organized.

## 3. Context Provider and Context Consumer

- **Context Provider:** A component that makes a value available to its descendants.
- **Context Consumer:** A component that receives the value provided by its ancestor Context Provider.

Context provides a way to share data across multiple components without explicitly passing props through every level.

## 4. Default Value in Context Provider

If you don't provide a value to the Context Provider, it will use the default value specified when creating the Context object.

`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`
`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`

## 1. useContext vs Redux

- **useContext:** A React hook for accessing values from a Context Provider. It's suitable for simple state management within a component tree.
- **Redux:** A more powerful state management library for complex applications. It provides features like time travel debugging, persistence, and middleware.

## 2. Advantages of Redux Toolkit over Redux

- **Pre-built utilities:** Redux Toolkit provides built-in utilities like `createSlice`, `createAsyncThunk`, and `createEntityAdapter`, simplifying development.
- **Immer integration:** Uses Immer for immutable state updates, making code more concise and less error-prone.
- **Bundled with Redux:** Comes bundled with Redux, eliminating the need for separate installations.

## 3. Dispatcher

A dispatcher is a function in Redux that is used to dispatch actions to the store. Actions are plain JavaScript objects that describe the changes that should be made to the state.

## 4. Reducer

A reducer is a pure function that takes the current state and an action as input and returns a new state. It defines how the state changes in response to actions.

## 5. Slice

A slice in Redux Toolkit is a pre-configured set of reducers, actions, and selectors for a specific domain of the application. It simplifies state management for smaller parts of the application.

## 6. Selector

A selector is a function that is used to select a specific part of the state. It helps keep the components decoupled from the store and makes it easier to manage complex state structures.

## 7. createSlice and its configuration

`createSlice` is a function in Redux Toolkit that generates a slice object, including reducers, actions, and selectors. It takes the following configuration options:

- **name:** The name of the slice.
- **initialState:** The initial state for the slice.
- **reducers:** An object containing reducer functions.
- **extraReducers:** An object containing additional reducers for asynchronous actions.

`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`
`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`

## Testing in React

### 1. Types of Testing

- **Unit Testing:** Testing individual components or functions in isolation.
- **Integration Testing:** Testing the interaction between multiple components.
- **End-to-End Testing:** Testing the entire application from the user's perspective.

### 2. Enzyme

Enzyme is a JavaScript testing utility for React. It provides a set of tools to render, manipulate, and assert on React components.

### 3. Enzyme vs. React Testing Library

- **Enzyme:** Provides a higher-level API for testing React components, making it easier to manipulate and assert on components.
- **React Testing Library:** Focuses on testing components from the user's perspective, encouraging testing based on how users interact with the UI.

### 4. Jest

Jest is a JavaScript testing framework that can be used for testing React applications. It provides features like test runners, assertion libraries, and code coverage reporting.

**Why use Jest?**

- **Built-in features:** Comes with many built-in features for testing.
- **Easy to set up:** Simple configuration and integration with React.
- **Fast test runner:** Provides fast test execution.
- **Code coverage:** Helps measure test coverage.

`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`
`-  -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -`
