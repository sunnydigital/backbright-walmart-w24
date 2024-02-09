================
Instructor Notes
================

Reminder
========

The solution for this review can be found `here <https://github.com/DevMountain/foundations-assessments/tree/main/unit-5/unit-review-solution>`_

Notes
=====

While these instructions are a guide for instructors, it
may be helpful for students to have you show these instructions as you use them,
as the test will have similar instructions for them to follow.

In this directory, there is a review-start folder that has code that needs to be completed (that's what gets downloaded from Frodo),
and there is a completed-code folder that has the solution (this is found at the link above).

**Show students what the final app looks like and how it behaves, using
the completed-code directory's code.**

Follow the README.txt in the completed-code folder to get it up and running.
Use that webpage for a minute or two to demonstrate how it works.

(Note: we review the coding section of the test first before the database diagramming.
Database diagramming instructions can be found at the end of this file.)










Now to the actual code walkthrough:
-----------------------------------

We will be in the review-start folder for the rest of the time...
review-start is the "root directory of this project".

At the root directory of this project (review-start), run `npm install`.

Install `dotenv` using `npm install dotenv`.

Initialize a git repository in this directory. Encourage students to do a commit
after every feature they complete.

Create a file in the root directory of the project, called .env

In that file, create a variable, PORT, and set it to 4000

Additionally, after creating a local database with `createdb`, make a CONNECTION_STRING variable and set it to
the appropriate URI (``postgres:///db_name``)

At the top of controller.js, require in the dotenv package and
call its config method.

Destructure CONNECTION_STRING from process.env in controller.js

Install Sequelize and its dependencies using `npm install sequelize pg pg-hstore` via
your terminal (make sure you are at the root of your project).

In controller.js, require the sequelize package and save it to a variable called Sequelize.

Initialize a new Sequelize instance, passing in your connection string.










Let’s take a look at the seed function in controller.js. In the query, you’ll
see a line that says --create weapons table--
Delete that line and replace it with a SQL create table statement.
The statement should create a table called weapons
with:
    a serial, primary key called `id`,
    a varchar called `name`,
    an int called `power`,
    and a foreign key called `owner` that references the id column of
        the fighters table.

Start up your backend with nodemon

Open Postman and make a POST request to http://localhost:4000/seed.

Your database should now be seeded!

Note: inform the students that it is a bad idea to have a '/seed' endpoint
like this in a real app (it would be somewhat easily to accidentaly erase a
database). Suggest alternative, safer ways to seed a database in a real application.








Important! ->

Note: from now on, as you start working on controller functions, you'll
need to uncomment their respective endpoints in the server/index.js file.
Not uncommenting these is the most common cause of 404 errors on this test.

Note: From now on, in your code for when sequelize gets a response back and sends it to
.then's callback, if the callback's parameter is called dbResponse, I want to send
dbResponse[0] back to the front end. In other words, you can paste a callback like this in
your .then functions chained to the end of your sequelize.query invocations: 

	(dbResponse) => res.status(200).send(dbResponse[0]) 

Note: .catch is optional on this test.

Note: keep in mind that, until you finish the test to completion, you will likely have
Errors in your browser console. This is by design. The instructions will guide you on
what your code and results should look like, each step of the way.










Now, looking at the fighters table schema as seen from the seed controller function,
write a new controller method called createFighter that, using sequelize, inserts
a new entry in the fighters table with sequelize.query. Your controller function
will have the name, power, hp, and type properties available to it via req.body.
The values of these properties should, respectively, be the values
of the columns of your new row in the fighters table.
You will need to use all four of them.
All these properties should be the correct data types already.

Open public/index.html in your browser (preferably with live server),
refresh the page, and use the first form to input values and submit them.
The power level and hp fields must be integers, and hp must be a positive integer.
If the form submitted successfully, you should be able to view your fighters
table in the ``psql`` console, and see that the data you input is in the table.










Now, write a new controller function called getFightersList that
queries the fighters table for the id and name columns for all rows,
and sends that data back to the front end.

With the HTML page still open in your browser, refresh it, and
you should see that the second form's dropdown element has options
associated with all rows in your fighter table.










Review the weapons table schema you wrote, as seen from the seed controller function.
Write a new controller method called createWeapon that, using sequelize, inserts
a new entry in the weapons table with sequelize.query. Your controller function
will have the name, power, and owner properties available to it via req.body.
The values of these properties should, respectively, be the values of the columns of
your new row in the weapons table. You will need to use all three of them.
All these properties should be the correct data types already.
(Note that the owner column will reference an id in the fighters table:
you do not need to worry about enforcing this: your code will always be sent a\
valid fighter id).

With the HTML page still open in your browser, refresh it, and
use the second form to input values and submit them.
Like the last form, all values must be filled in. The power level field must be
an integer, and a fighter must be selected from the dropdown.
If the form submitted successfully, you should be able to view your weapons
table in the ``psql`` console, and see that the data you input is in the table.

Note: should you somehow clear all entries from your fighters table, you will need
to input at least one fighter to be able to use this form.










Write a new controller method called getFightersWeapons. Use sequelize.query to query
your database for columns from both the fighters and weapons tables. JOIN the tables
where the fighters table `id` column is equal to the weapons table `owner` column.
Because these two tables have ambiguous column names (and also because the pre-made
front end is expecting certain column names), you will need to use aliasing for some
columns. The columns you need, and their aliases (if they need one), are as follows.
    From the fighters table, you need the:
        `id` column, renamed `fighter_id`
        `name` column, renamed `fighter`,
        `power` column, renamed `fighter_power`,
        `hp` column,
        and `type` column.
    From the weapons table, you need the:
        `id` column, renamed `weapon_id`,
        `name` column, renamed `weapon`,
        and the `power` column, renamed `weapon_power`.

Send the result of the query back to the front-end, as explained earlier
in these instructions.

With the HTML page still open in your browser, refresh it. Assuming you have fighters,
and weapons tied to them, you should now see what fighters have what weapons on the
right side of the page (along with relevant stat data). The delete buttons don't work yet.
We'll get to that next.










In controller.js, write a new controller function called deleteWeapon. In the function:

Using sequelize.query, send a SQL statement to your database to delete a weapon.
An id will be sent on req.params. That will be the id of the weapon that
you will delete from the weapons table.

Send the result of the query back to the front-end, as explained earlier in these
instructions.

With the HTML page still open in your browser, refresh it.
Assuming you have fighters and weapons tied to them, you should
now see that data on the right side of the page, and little "Delete"
buttons below each weapon's data. If you click a Delete button, the respective
weapon data should disappear from the page, and the weapon should be
deleted from the database.

(Note that if you delete a fighter's last weapon, the fighter's name also disappears from
that section... however, unlike the weapon you deleted, the fighter is not deleted from the
database, and if assigned another weapon, the fighter's info will reappear on the right side
of the page.)










This concludes the coding portion of the review.










Now, onto database diagramming.

Using dbdesigner.net, you'll model a simple database and the relationships therein.

(Note to instructor: there is a image of a completed sample diagram in the completed-code directory.
See the README.txt file in the completed-code directory for more details on the diagram
image. You may choose to make your demonstration look very different than the sample diagram.)

For this database, imagine you are opening a car dealership, where you will try to sell
specific brands (makes) of cars to your customer base.

Design a database with at least 4 tables for your dealership.
Include any relationships between tables where you feel they are needed.

For example, you’ll need an available_inventory table, or something like it.
Perhaps you have a car_brand table as well. The relationship between brands and
inventory is one-to-many. For every one brand in the brands table, you could have
lots of inventory of that brand in the available_inventory table.
You could consider customer data and logging sales as well.

Use a text editor to brainstorm what data you'll need, and what type of
relationships the data will have (one-to-many, many-to-many, one-to-one).
Once you are finished, model your plans on dbdesigner.net

Once you've designed your database, get a picture of your design (perhaps with
a screenshot), and save the image in the review-start directory.










Remind students that, at the end of the test, they need to have a git repo with
at least one commit, and that repo needs to be pushed to Github. The Github repo's
URL then needs to be submitted on Frodo by the deadline for this test, regardless if
the test is completed or not. Remind students that their database modeling image needs
to be saved in this repo.

The end.