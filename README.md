# Festive Testing App  

The purpose of this React Single Page Application (SPA) is to deliver an engaging experience with a dynamic joke randomizer and a delicious Dutch baby recipe. This refreshing break filled with laughter demonstrates React's ability to present detailed and interactive content. To ensure reliability and functionality, I've enlisted the help of the enclosed React Testing Library (RTL). This superhero sidekick ensures this web application work as intended. Whether you're clicking for a new joke or exploring a mouth-watering recipe, the React Testing Library is behind the scenes, making sure the app responds correctly and that the joke randomizer and recipe components shine without hiccups!

## Table of Contents
- [Resources](#resources)
- [Application Process](#application-process)
- [Testing Process](#testing-process)
- [Blockers](#blockers)
- [Ice Box](#ice-box)

## Resources  
- Knowledge and skills acquired from [LEARN Academy](https://learnacademy.org/)
- [React Router Dom](https://reactrouter.com/en/main)
- [Reactstrap](https://reactstrap.github.io/?path=/story/home-installation--page)
- [Bootstrap](https://getbootstrap.com/)
- [React Testing Library](https://testing-library.com/docs/)
- Images and videos - [Canva](https://www.canva.com/)
- Grammar consultant - [ChatGPT](https://chat.openai.com/)

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

## Blockers
1. Change header logo when hovering over it (solved):
  - After confusion with search results, I type the following prompt in ChatGPT `how to change image when hovering with css inline styling for a react component`. The recommendation lead to a followup prompt `without functions`. The results showed an example that changed the height and width by abstracting the style value using an event handler.
  - Solution to change image:
    - Store initial styling for logo in a variable
    - Use the onMouseOver event handler, activated when the user's mouse pointer hovers over the image, to dynamically switch the src path to a new image. Achieve this by directly updating the src attribute of the image using e.target.src.
    - Use the onMouseOut event handler, activated when the user's mouse pointer leaves the area of the image, to dynamically switch the src path back to the original image. Achieve this by directly updating the src attribute of the image using e.target.src.
