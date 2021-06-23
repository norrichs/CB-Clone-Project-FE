# H&M Clone Project
#### We cloned a e-commerce site!!<br>

### Project Links
- All of our planning info can be found here at this [Notion](https://www.notion.so/Capstone-project-480d15061a674eeaa17ac3fa9fd952bc) board.
- Here is our project on [Github](https://github.com/Cody-Durham/CB-Clone-Project-FE)
- Check out our clone project deployed version from [Amplify](https://main.d38tit84n7ekiv.amplifyapp.com/)

## Project Description
Working together as a group, we wanted to challenge ourselvs with working with multiple types of data that would be displayed using multiple different routes (using NavLink) to navigate the site. We settled on creating a clone of the H&M website.  Because of the clean, direct, and honest design of the site we figured it was the perfect site to recreate.    
Useing React we were able to create many components that were used to be rendered in different 'pages' of the application without having everything be rendered in App.js.  We worked hard at making sure the code is clean and very readable to anyone (or ourselvs) who might want to dig in at a later time.  

NOTE: This site is currently only styled for Desktop use.  Once the site is fully working to an acceptable standard we would like to create a mobile version. 

![Working example of the GoFish App ](https://media0.giphy.com/media/MRIuPp8dnYA8kWsiwN/giphy.gif)
## Project Description



### Post MVP Completeion
We would like to impliment functinoality throught 90% of the site including all working routes and pages. This would include the following:<br>
NOTE: We should add our contact info to the site and also indicate this is a 'practice project' somewhere within the app. 

#### Splash Page: 
- Update / connect all routes to working & corresponding pages
- Add randomization to "splash" page images on a rotating schedule
- Add randomization to "call to action" banners on splash page
- Complete functionality to all header elements, signin / favorites / shopping bag ect. 
- Style add functionality to "Trending Slider" at the top of the splash page. (Create arrows on sides/ remove 'slider' bar)
- Add correct routing for "shop now" buttons on splash page images
- Complete functionality for routes on all links in Bottom Footer area
- Complete dropdown navigation / hover effects

#### Content Landing Page: 
- Would like to update the the image cards so that they're larger and are able to scale to window width
- Would like to update 'Style dots' for each card to have state as well as show different colors according to the puppeteer scrape data pulled from H&M site
- Hover / click "Favorites heart" on each card currently is for show only. Will need to add logic and functionality. 



### Known Issues
- Compiling the full data set is currently incomplete (some routes from Side Nav Bar will not show images/ data)
- Through the process of scraping the H&M site, some data structures resulted in errors while retrieving, resulting in missing items (copy / images)
- Within the product detail pages (lowest level) the current thumbnail images do not link or display anything.  They are currently only placholer images. 
- Shopping bag & Favorites 'State' & components are incomplete
- Response mapping is done in-lambda, and there are currently multiple maps being used to deal w/ different datasets
- Not pulling any data for products with only category-level attributes
- Using puppeteer to scrape the data, some scripts have a bug somewhere that requires manual edit of seedData json before uplaoding


## Technologies Used
React | Javascript | Puppeteer | SCSS | Font Awesome Icons |AWS | S3 Bucket | Lambda | DynamoDB | API Gateway

### Authors
Ben Norrichs | 
& Cody Durham