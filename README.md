### Rancid Tomatillos

#### Abstract
This is a group project completed during Mod 3 at Turing School of Software and Design. The project asked us to complete a movie-rating site using Redux and React where a user can browse and rate movies. The user logs in with credentials (username: lucy@turing.io, password: password1) which are checked against data fetched from an API of users. Once logged in, the user can browse through movies displayed on the dashboard, click to view more details about a movie, and rate movies. The user can delete their existing rating and re-rate a given movie. The user is also provided with the average rating for each movie, calculated using data fetched from an API.

If a user is not logged in, they can still view movies and the average ratings for each movie. The form to rate a movie is not displayed, nor is the text displaying their rating (or a message saying they have not rated the movie yet).

#### Contributors

[Megan Venetianer](https://github.com/megan-venetianer)

[Tim Nguyen](https://github.com/TimNguyen21)

[Harry Borrelli](https://github.com/hborrelli1)

[Cristina Peña](https://github.com/CLPena)

#### Screenshots
![Dashboard](https://i.imgur.com/5ujLRlK.jpg)
![Details Page](https://i.imgur.com/QBjIrz9.png)

#### In Action
![Gif of app](https://i.imgur.com/zl7lEoN.gif)
![Gif of app](https://user-images.githubusercontent.com/15935329/79283989-ace2b200-7e76-11ea-843d-dd9b8da63b44.gif)

#### Technologies Used
Development: Redux, React.js, Scss/Sass
Testing: Jest, React Testing Library

#### Wireframe
The wireframe we developed for this project can be viewed on [Figma](https://www.figma.com/file/DqY5IU1HjxJkvv1UEd7mPT/Rancid-Tomatillos?node-id=0%3A1).

#### Project Next Steps
We would like to refactor our conditionals with fetch to use try/catch blocks (instead of checking the ok status and basing actions off of that). This will also require a refactoring of our tests, but would allow us to increase the span and depth of our testing, especially when mocking fetch calls.

#### Setup
Fork and clone down this repo.
Once you have cloned the repo, change into the directory.
To view the application, run npm and open the provided localhost url in the browser.
