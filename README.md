# Festive Testing App  

The purpose of this React Single Page Application (SPA) is to deliver an engaging experience with a dynamic joke randomizer and a delicious Dutch baby recipe. This refreshing break filled with laughter demonstrates React's ability to present detailed and interactive content. To ensure reliability and functionality, I've enlisted the help of the enclosed React Testing Library (RTL). This superhero sidekick ensures this web application work as intended. Whether you're clicking for a new joke or exploring a mouth-watering recipe, the React Testing Library is behind the scenes, making sure the app responds correctly and that the joke randomizer and recipe components shine without hiccups!

## Table of Contents
- [Resources](#resources)
- [Application Process](#application-process)
- [Testing Process](#testing-process)
- [Blockers](#blockers)
- [Ice Box](#ice-box) ***Pending***

## Resources  
- Knowledge and skills acquired from [LEARN Academy](https://learnacademy.org/)
- [React Router Dom](https://reactrouter.com/en/main)
- [Reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page)
- [Bootstrap](https://getbootstrap.com/)
- [React Testing Library](https://testing-library.com/docs/)
- Images and videos - [Canva](https://www.canva.com/)
- Grammar consultant - [ChatGPT](https://chat.openai.com/)
- [Unit Testing](https://medium.com/@natnael.awel/react-js-unit-testing-best-practices-and-tools-5454a01326ea)
- [ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles)

## Application Process  
- Created empty github repo
- Used `yarn create react-app` to create react application
- Connected github and local repo
- Started server to ensure correct build
- Created directories in the src directory: assets, components, pages, and `__tests__`
- Created basic functional components in App.js and components/pages directories
- Added styling and routing dependencies (reactstrap, bootstrap, react-router-dom)
- Modified application to allow navigation
  - Header and Footer: persistent
  - Home, Joke, Recipe, NotFound: navigation 
- Created mock data for jokes
- Added images and videos to assets
- Used styling UI components from reactstrap and navigation components from react-router-dom for Header 
- Styled UI for Footer, Home, and NotFound
 
## Testing Process 
1. Setup testing environment
  - This application was built using `yarn create react-app`; therefore, Jest and React Testing Library (RTL) are installed automatically.  

  ***NOTE: Follow applicable commands from the RTL site to add testing environment for applications without RTL configuration. Commands for Jest can be found on [Jest documentation](https://jestjs.io/docs/getting-started). Both are needed due to the separation of responsibilities: Jest runs the test cases of each test file. RTL provides methods that will help evaluate the DOM elements from the user's perspective.***  

2. Create test files with the following naming convention `ComponentName.test.js` under the `__tests__`

3. Test file structure
```js
  // imports
  // describe method: test suite - telling us what component we are testing
  // it method (test case - description of what feature you are testing in the component) nested within describe block and contains queries methods from RTL
  // expect method (assertion - which will either be a successful (pass-green) or erroneous (fail-red) outcome) nested within it block
```
***NOTE: Initially, tests can be stubbed with just describe and it methods as to create a testing task/to-do list.***  

4. Run `yarn test` to see results of test    

5. Reference any error codes to provide code that will make the test pass  

## RTL Methods

### Render
- method to virtually render a React component into a testing environment
- takes the component call as an argument, which is a render call

### Screen
- object that represents the current HTML rendered on the DOM
- Coupled with query methods, `screen` allows you to select DOM elements and make assertions about them.

### Queries  
Testing Library provides queries as methods for locating elements on the page. These queries come in various types, such as "get," "find," and "query." The distinction among them lies in whether the query throws an error when no element is found or if it returns a Promise and retries the operation.

##### Order of priority
  1. Queries Accessible to Everyone:  
    - getByRole: query every element that is exposed in the accessibility tree. This query is often used with the name option such as getByRole('button', {name: /submit/i}).   
    - getByLabelText: query elements on a form.   
    - getByPlaceholderText: query the input field of a form element.  
    - getByText: query non-interactive elements (like divs, spans, and paragraphs).  
    - getByDisplayValue: query the current value of an element on a filled-in form.
  2. Semantic Queries:  
    - getByAltText: query element that has alt attribute (img, area, input, and any custom element).  
    - getByTitle: query element that has title attribute.
  3. Test IDs:  
    - getByTestId: last resort query because the id attribute is accessible by the user.  
  ***NOTE: All queries can be extended with `All` to search for multiple elements. `getAllByRole("button")`. This query will return an array of elements.***

### Fire Event

### User Event
- Import userEvent from testing library
```js
  import userEvent from "@testing-library/user-event";
```
- Add async to call back function for userEvent
```js
  it("navigates to the jokes page", async () => { ... }
```
- Add await to allow redirect to happen after clicking link
```js
  await userEvent.click(linkElement)
```
- Use location.pathname to display the current url  
```js
  expect(location.pathname).toEqual('/joke')
```

### Debugging

#### screen.debug()
- `screen.debug()` supports the following
1. debugging the document: `screen.debug()` after a render call  
2. a single element:  
```js
    const button = screen.getByRole("button", {name: /submit/i})
    screen.debug(button)
```  
  3. an array of elements:  
```js
    const buttons = screen.getAllByRole("button")
    screen.debug(buttons)
```
- run `yarn test` to see the rendered output of RTL's render in the terminal

#### testing-playground  
Testing Playground is an interactive sandbox that exposes visual feedback to include the rendered html of your current DOM, the DOM, and different queries about those DOM elements.
- `screen.logTestingPlaygroundURL()`: method which logs and returns a URL that can be opened in a browser and supports the following:
1. log the entire document to testing-playground
```js
  screen.logTestingPlaygroundURL()
```
2. log a single element
```js
  const button = screen.getByRole("button", {name: /submit/i})
  screen.logTestingPlaygroundURL(button)
```
- run `yarn test` to see the playground URL that can be opened in a browser

## Blockers
1. Change header logo when hovering over it (solved):
  - After confusion with search results, I typed the following prompt in ChatGPT `how to change image when hovering with css inline styling for a react component`. The recommendation lead to a followup prompt `without functions`. The results showed an example that changed the height and width by abstracting the style value using an event handler.
  - Solution to change image:
    - Store initial styling for logo in a variable
    - Use the onMouseOver event handler, activated when the user's mouse pointer hovers over the image, to dynamically switch the src path to a new image. Achieve this by directly updating the src attribute of the image using e.target.src.
    - Use the onMouseOut event handler, activated when the user's mouse pointer leaves the area of the image, to dynamically switch the src path back to the original image. Achieve this by directly updating the src attribute of the image using e.target.src.
