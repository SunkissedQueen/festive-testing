# Festive Testing App  

The purpose of this React Application is to deliver an engaging experience with a dynamic joke randomizer and a delicious Dutch baby recipe. This laughter-filled and decadent approach demonstrates React's ability to present detailed and interactive content. To ensure reliability and functionality of this application, I've enlisted the help of the enclosed Jest and React Testing Library (RTL). This superhero and its sidekick ensure this web application works as intended. Whether you're clicking for a new joke or exploring a mouth-watering recipe, both Jest and the React Testing Library are behind the scenes, making sure the app responds correctly and that the joke randomizer and recipe components shine without hiccups!

## Table of Contents
- [Resources](#resources)
- [Application Process](#application-process)
- [Testing Process](#testing-process)
- [RTL Methods](#rtl-methods)
- [Jest Matchers](#jest-matchers)
- [Blockers](#blockers)
- [Icebox](#icebox)

## Resources  
- Knowledge and skills acquired from [LEARN Academy](https://learnacademy.org/)
- Resource that I frequent - [W3Schools](https://www.w3schools.com/)
- [React Router Dom](https://reactrouter.com/en/main)
- [Reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page)
- [Bootstrap](https://getbootstrap.com/)
- [React Testing Library](https://testing-library.com/docs/)
- Images and videos - [Canva](https://www.canva.com/)
- Grammar consultant - [ChatGPT](https://chat.openai.com/)
- [Unit Testing](https://medium.com/@natnael.awel/react-js-unit-testing-best-practices-and-tools-5454a01326ea)
- [ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques#roles)
- [Overview of RTL](https://blog.logrocket.com/using-react-testing-library-debug-method/#anoverviewofreacttestinglibrary)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom#custom-matchers)
- [Lemon Blueberry Dutch Baby Recipe](https://alexandracooks.com/2023/04/22/lemon-blueberry-dutch-baby/)
- [Text Overlay on Video](https://www.codewithfaraz.com/content/207/create-full-screen-video-with-text-overlay-using-html-and-css)
- [Markdown Syntax](https://www.markdownguide.org/extended-syntax/#:~:text=In%20Markdown%20applications%20that%20support,brackets%20(%20%5Bx%5D%20).)

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
    - getByRole: query every element that is exposed in the accessibility tree.   
    - getByLabelText: query elements on a form.   
    - getByPlaceholderText: query the input field of a form element.  
    - getByText: query non-interactive elements.  
    - getByDisplayValue: query the current value of an element on a filled-in form.
  2. Semantic Queries:  
    - getByAltText: query element that has alt attribute.  
    - getByTitle: query element that has title attribute.
  3. Test IDs:  
    - getByTestId: last resort query because the id attribute is not accessible by the user.  
  ***NOTE: All queries can be extended with `All` to search for multiple elements. `getAllByRole("button")`. This query will return an array of elements.***

### APIs
- The APIs (userEvent and fireEvent) are used to simulate user interactions. However, the userEvent mimics the actual browser behavior more closely than the fireEvent. In my experience, I prefer to use fireEvent with an input field and then make assertions to ensure that the React state has been updated as expected.  

#### Fire Event <mark>***Pending***</mark>  
- No examples currently available on this project.

#### User Event  
***Enclosed example is evaluating that the url changes when a navigation link is clicked***
- Import userEvent from testing library
```js
  import userEvent from "@testing-library/user-event";
```
- To allow test to wait for navigation request to happen, async and await will be added to the test case
- Add async to call back function
```js
  it("navigates to the jokes page", async () => { ... }
```
- Add await to the userEvent within the it block 
```js
  await userEvent.click(linkElement)
```
- Use location.pathname to display the current url  
```js
  expect(location.pathname).toEqual('/joke')
```

### Debugging

#### screen.debug()
- `screen.debug()` supports the following:
1. debugging the document: `screen.debug()` after a render call  
2. debugging a single element:  
```js
  const button = screen.getByRole("button", {name: /submit/i})
  screen.debug(button)
```  
3. an array of elements:  
```js
  const buttons = screen.getAllByRole("button")
  screen.debug(buttons)
```
- run `yarn test` to see the rendered HTML output of the entire DOM or the specified DOM element in the terminal

#### testing-playground  
Testing Playground gives visual feedback through its interactive sandbox that exposes the rendered html output of your current DOM, the DOM as it appears in the browser, and different queries available for each DOM element.
- `screen.logTestingPlaygroundURL()`: method that gives access to the testing-playground by logging a URL in the terminal for its applicable test suite and supports the following:
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

## Jest Matchers  
Because this application used `yarn create react-app`, the jest-dom library is already installed. This library provides a set of custom jest matchers that you can use for the assertion statements. Instructions to install jest-dom on other projects are enclosed on the jest-dom site. Here are a few custom matchers:  
- toBeInTheDocument(): assert whether an element is present in the document or not.  
- toBeVisible(): assert if an element is currently visible to the user.  
- toHaveAttribute("attribute", "value"): assert whether the given element has an attribute or not.  
- toHaveClass("className"): assert the given element has certain classes within its class attribute.  
- toBeChecked(): assert whether the given checkbox, radio, or switch element is checked.  

## Blockers
1. Change header logo when hovering over it:
  - After confusion with search results, I typed the following prompt in ChatGPT `how to change image when hovering with css inline styling for a react component`. The recommendation lead to a followup prompt `without functions`. The results showed an example that changed the height and width by abstracting the style value using an event handler.
  - Solution to change image:
    - Store initial styling for logo in a variable
    - Use the onMouseOver event handler, activated when the user's mouse pointer hovers over the image, to dynamically switch the src path to a new image. Achieve this by directly updating the src attribute of the image using e.target.src.
    - Use the onMouseOut event handler, activated when the user's mouse pointer leaves the area of the image, to dynamically switch the src path back to the original image. Achieve this by directly updating the src attribute of the image using e.target.src.

2. Video as background:
  - When the video was uploaded as a mov file, it would only display as a static image. After researching on W3Schools for video html syntax, I noticed that the file on the example and type attribute had mp4.
  - Solution rename file and use video and source html tags:
    - Rename file with `.mp4` extension
    - Use video html tag with autoplay, loop, width, and height attributes
    - Nested source html tag with src and type attributes
    - External Css to make the video cover the full screen

3. Text to appear in front of the video (Need to see my jokes):
  - In the excitement to have a video as the background,  I totally forgot to ensure the jokes would render with this setup. Answer: NO!!!! However, research, troubleshooting, debugging through the wonderful Google search engine lead me to an article with some helpful tips.
  - Solution use css to establish the text as the top layer of the page by using the transform property to modify the position of the text with the translate value to move the text higher on upon the Y axis.

4. Very verbose warning message in testing suite about the nesting of an `<ul>` tag within a `<p>` tag:
  ![Testing Suite Warning](./src/assets/test-warning.png)
  - Had to invoke ChatGPT to give a basic explanation because I certainly did not see a `<p>` tag in the following code:
```js
  <Card style={{
    backgroundColor: "rgb(4, 193, 218)"
  }}>
    <CardBody>
      <CardTitle tag="h5">
        Ingredients
      </CardTitle>
        <CardText>
          <ul className="line-items">
            <li>4 tablespoons butter</li>
            <li>1/2 cup milk</li>
            <li>1/2 cup all-purpose flour</li>
            <li>4 large eggs</li>
            <li>3 tablespoons brown sugar</li>
            <li>1 teaspoon vanilla</li>
            <li>1/4 teaspoon salt</li>
            <li>the zest of one lemon</li>
            <li>1 cup blueberries</li>
          </ul>
        </CardText>
    </CardBody>
  </Card>
```
  - The issue arises from nesting elements within the CardText component. A block-level element like `<ol>` cannot be directly inside a text-level element like `<p>` or in my case `<CardText>`.
  - Solution:
    - removed CardText component  

5. Header hover logo image not consistently rendering to the navigation bar:
  - Solution:
    - Import image to the component 
    - Update the image using react state

## Icebox 
<mark>***Pending***</mark>
- [ ] Responsive page
- [ ] User input
- [ ] Fire Event
- [ ] Database
- [ ] Prevent overlapping of header
- [ ] Color scheme
- [ ] Animated logo on header
- [ ] Presentation of answer after user interaction
- [ ] Contact link visibility across different UI




