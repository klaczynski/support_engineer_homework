1. Download repository zip file & unzip.
2. Open unzipped folder in VS Code.
3. Open VS Code terminal.
4. run `npm install` in terminal.
5. run `node app` in terminal.
6. open browser and navigate to http://localhost:3000

# Support Engineer Homework

1. Fork this repository.
2. Add `jamtur01` as a collaborator to your repository.
3. Use the [test data](https://docs.google.com/spreadsheets/d/1uyDXhb3T3-LVywTvpH1ixWbz6if7vUaUQC6YHcNm-wY/edit?usp=sharing) to answer the questions below. The test data is in CSV form in two tabs. Each tab represents a table:
   - organization
   - account
4. Add all SQL and JavaScript files to your fork.
5. Write a README explaining how to run your application.
6. Push up your submission and let us know where to find it.

## Questions:

Use JS and SQL to answer the following questions.

**JavaScript**

- Write a JavaScript application. The app can be a CLI or web-based app. It should provide a user with the options to run four reports:
  1. Takes the value of a `myShopifyDomain` field as an input and returns their `optimization` settings.
  2. Loops through all organizations and shows the date they were created (DD/MM/YYYY), their `status`, and `planName` sorted by oldest to newest.
  3. Returns the list of organizations whose status is cancelled.
  4. Takes the value of an `orgName` and returns the organization record in JSON format.

**SQL**

- Write SQL queries to return:
  - How many organizations do not have account plans?
  - How many organizations have more than one account plan?
  - List all organizations that have only one account plan.
  - List all organizations that have the PASSWORDLESS feature set to true.
