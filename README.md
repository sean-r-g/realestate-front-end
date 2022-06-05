# realitive - An Open Community for Real Estate Enthusiasts
## Overview
realitive™ is an open forum for real estate enthusiasts, professionals, and casual viewers to post, browse, edit, and remove house and condo listings. realitive™ includes the following: 
* Landing page with a brief blurb on the the application, easy access buttons to show house or condo listings, and an image carousel to preview some of the current listings.
* Two separate databases, houses and condos, that users can add, update, view, and delete using the application functionality
* Both databases use the following schema to ensure data consistency across the platform:
  ```javascript
  name: String,
  location: String,
  price: Number,
  size: Number,
  rooms: Number,
  bath: Number,
  image: String,
  available: Boolean,
  showEdit: Boolean
  ```

## Links
[Front End GitHub Repo](https://github.com/sean-r-g/realestate-front-end) 

[Back End GitHub Repo](https://github.com/sean-r-g/realestate-back-end)

[realitive](https://real-estate-front-end12.herokuapp.com/) 

## Approach
The approach we took in designing and developing this application was as follows. We began by thinking through concepts and ideas that we believe would resonante with the online community. Eventually, we landed on real estate, because who doesn't love browsing certain popular listing sites (think last letter of the alphabet). Next we outline our strategy for splitting our work into two separate databases that use identical schema, ensuring data consistency throughout across the application. After finalizing our concept and strategy, we completed the initial repo creation/cloning process and heroku application set up and test deployment.

With our back-end setup complete and deployed, our attention shifted to the front end React development. We built the initial App.js base together, and then evenly divided the rest into the two components - houses.js and condos.js. Each of these components contain their own hooks, function, and jsx, while still remaining in sync for a consistent view and feel across the application.

We regularly collaborated to merge our individual branches with our dev branch, and eventually our main branch, to ensure clean pull requests and merges throughout development. 

After completing the front and back end MVP development, we turned our sights on some additional stretch goals on top of using mulitple models. The first we investigated was embedding a map using the Google Maps API, so that users could view home locations on a map. We were ultimately unsuccessful, however, and you can see the Issues Along the Way section for more detail. We were successful in adding an image carousel to the landing/about page, though, which adds some nice flair and interaction for users.

## Technologies Used
* JavaScript
* React
* Express
* Node .js
* HTML/CSS
* Mongoose
* MongoDB/Atlas
* Heroku

## Issues Along the Way