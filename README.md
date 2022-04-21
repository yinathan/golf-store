# Project Idea
My project idea is a simple golf store CRUD app with golf clubs being the first model. After reaching MVP, I want to also add golf balls and accessories models as well as setting up the shopping cart and authentication. 


### List of indended routes
``` get "/store" => renders index view listing models ``` <br/>

``` get "/store/clubs/new" => renders new view with club Schema in a form ```<br/>

``` delete "/store/clubs/:id" => find a product by ID and deletes from database``` <br/>

```  put "/store/clubs/:id" => update a product using ID``` <br/>

```  post "/store/clubs" => add a product to the database  ``` <br/>

```  get "/store/clubs/:id/edit" => render edit view with club Schema to edit    ``` <br/>

``` get "/store/clubs" => renders show view listing all clubs currently stored in database ``` <br/>


### Model Schema

    const clubs = new Schema({
        name: { type: String, required: true, unique: true},
        description { type: String, required: true},
        img: { type: String },
        price: { type: number, required: true },
        quantity: { type: number, required: true },
    })

### List of Libraries
- Express, EJS, Method-Override, Morgan, dotenv, mongoose

### Schedule

Day 1: Get project idea approved and set up basic routes / make sure database is connected

Day 2: Complete basic CRUD app for MVP

Day 3: Work on CSS/Styling and add additional models

Day 4: Add shopping cart/AUTH and finish up for presentation