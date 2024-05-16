# Spotted v2

![Logo](READMEdocs/readMeLogo.jpg)

The purpose of Spotted is to help reunite lost pets with their owners and maybe even help abandoned pets find new homes.

The function is to let users post lost pets or found pets with a description, photo, last seen date and location last seen.

- Create lost or found pet
- Read active listings of lost/found
- Update information on lost/found pets
- Delete posts when no longer needed

*extra features*

- printable pdf flyer
- generate qr code

*future planning*

- post onto social media (facebook) to reach more viewers
- google maps api for location tracking
- microchip local shelter database api

## Flowchart

![Flowchart](READMEdocs/flowchart.jpg)

## Table

- ~~[Rough Draft Table](READMEdocs/tableRough.jpg)~~

mysql Reverse Engineer
Redo primary and foreign keys
![Table](READMEdocs/tempTable.jpg)
![tempTable](READMEdocs/tableReverse.jpg)

## Database

### Users Table

![users_table](READMEdocs/users_table.jpg)

### Pet Table

![pet_table](READMEdocs/pet_table.jpg)

### QR Table

![qr_table](READMEdocs/qr_table.jpg)

### SQL Statements for Table Creation

- ~~[sql statements commands the mockup](READMEdocs/sql_statements.txt)~~
- !works [qrTable first draft](sql/qrTable.sql)
- !works [petsType first draft](sql/petsType.sql)
- !works [petsFound first draft](sql/petsFound.sql)
- !works [petsMissing first draft](sql/petsMissing.sql)
- !works [petTable first draft](sql/petTable.sql)
- !works [usersTable first draft](sql/usersTable.sql)

#### *routers*

- ~~[routing for users and pet and log in the mockup](READMEdocs/routers.txt)~~
- [qr routers first draft](routers/qr.js)
- [petsType routers first draft](routers/petsType.js)
- !works[petsFound routers first draft](routers/petsFound.js)
- !works[petsMissing routers first draft](routers/petsMissing.js)
- !works[pets routers first draft](routers/pets.js)
- !works [users routers first draft](routers/users.js)
- !works [auth routers first draft](routers/auth.js)

#### *controllers*

- [qr controllers first draft](controllers/qr.js)
- [petsType controllers first draft](controllers/petType.js)
- !works[petsFound controllers first draft](controllers/petsFound.js)
- !works[petsMissing controllers first draft](controllers/petsMissing.js)
- !works[pets controllers first draft](controllers/pets.js)
- !works [users controllers first draft](controllers/users.js)
- !works [auth controllers first draft](controllers/auth.js)

## Wireframe

*Landing Page Mockup* `</br>`

![landing page mockup](READMEdocs/landingPage.jpg)

*Wireframe Mockup - First Draft* `</br>`

![wireframe first draft](READMEdocs/wireframe.jpg)

## **Tech Stacks**

* Node.js
* nodemon
* MySQL2
* express
* express-jwt
* jsonwebtoken
* jwks-rsa
* bcrypt
* dotenv
* axios
* ReactJS
* Docker
~~* auth0~~
~~* Heroku~~
~~* JawsDB MySQL~~
