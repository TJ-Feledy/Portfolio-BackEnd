BackEnd built using Node.js, express, and knex.js.

## Deploy
 - Deployed to heroku at: https://tjs-portfolio.herokuapp.com/

## Endpoints

**** All endpoints start with:  https://tjs-portfolio.herokuapp.com/api/count ****

    - Initialize the counter:
        POST to '/initialize'
            - takes a count. Ex: { count: 0 }
    
    - Update the count:
        PUT to '/update/:id'
            - takes a new count. Ex: { count: 5 }

    - Get the current count:
        GET to '/:id'
            - returns current count object