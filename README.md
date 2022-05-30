Project : A Sign-Up page with username, email and password fields.
User details after successful sign-up will be stored to the local mongodb server.
index.js file contains server setup at port 3000 and the node application connected to local mongodb server at port 27017 through mongoose.connect().
Schemas, person.js file contains the schema for the documents of Person(people) collection, with validation for the fields of the documents.

