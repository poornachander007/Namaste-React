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
