# Project Overview

## frntr

## Overview

Frntr is an online shopping web app where users can create an account and shop for household goods. Users will be able to browse different categories as well as selecting an individual product and see more details. Products can be edited and deleted from the details screen and new products can be added to the store. Users will be able to leave written reviews for products and recently added products will appear in a carosel on the main page.

## Figma Design

[Click here](https://www.figma.com/file/Zn8boSzN5IspjvbErFW3g9/Home-Decor-P3?node-id=0%3A1)

## Whimsical Heirarchy

![img](https://i.ibb.co/6t4BSd0/Home-Decor-2.png)

## Schema

### Product
```
{
    {
        title: { 
            type: String, required: true 
        }
        img: { 
            type: String, required: true 
        }
        price:: { 
            type: String, required: true 
        }
        description: { 
            type: String, required: true 
        }
    }
    {
        {timestamps: true}
    }
}
```
### User
```
{
    {
        username: {
            type: String,
            required: true,
        },
        email: { 
            type: String, required: true 
        },
        password_digest: { 
            type: String, required: true, select: false 
        },
    },
    { timestamps: true }
}
```
## MVP

[Github Project Board](https://github.com/eterral/frntr-app/projects/1)

### Front end
- User account creation and sign in
- Full CRUD of products
- Render data from Mongoose in React app

### Back End
- Using Express and MongooseDB for CRUD
- Authentication for user
- Unit testing for Express routes

## Post-MVP
- Conditional rendering of CRUD options for different roles
- Shopping cart functionality
- Product reviews

## Team Expectations

[Click here](https://docs.google.com/document/d/1cCRP53bbE9suJjdM5Thpyvb2b_W6Zo5YQERDilt-ew8/edit?usp=sharing)
