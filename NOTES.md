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
