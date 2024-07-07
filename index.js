let express = require("express");
let app = express();
let port = 3000;
app.listen(port, () => {
  console.log("Server is running on http://localhost : " + port);
});

/*Question 1:

Given username generate a GitHub profile URL for the user

Declare a variable username

Make an endpoint /github-profile to process the requests

Generate a Github profile URL by using the provided username

For Example: https://github.com/ankitkumar123

Write a function generateProfileUrl() which takes the above variable and returns the profile url as expected
*/

function generateProfileUrl(username) {
  return "https://github.com/" + username;
}
app.get("/github-profile", (req, res) => {
  let username = req.query.username;
  let profileUrl = generateProfileUrl(username);
  res.send(profileUrl);
});

/*Question 2:

Declare 3 variables named firstName , lastName & courseName

To process requests, create an endpoint /certificate

Use the values to generate a certificate for the student

Write a function generateCertificate() which takes the above variables and returns the certificate as expected 
Expected Output: This certification is awarded to Amit Ranjan for completing the course BYTR
*/
function generateCertificate(firstName, lastName, courseName) {
  return (
    "This certification is awarded to " +
    firstName +
    " " +
    lastName +
    " for completing the course " +
    courseName
  );
}
app.get("/certificate", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let courseName = req.query.courseName;
  let certificate = generateCertificate(firstName, lastName, courseName);
  res.send(certificate);
});

/*Question 3:

Create an endpoint that takes maths, science & english as query parameters and returns grade in percentage

Write an Express code snippet.

Declare an endpoint /grade using the get keyword.

Declare 3 variables math, science & english to take the inputs.

Create a function calculateGrade() which takes the above variables & returns the result.

Calculate the students grade in percentage ( Considering the maximum marks a student can get in a subject is 100 )

Add the 3 values & divide the result by 300

Now multiply the result with 100

For example: gradeInPercentage = ((subject1 + subject2 + subject3) / 300 ) * 100

Make sure you return the percentage as Integer.

In the end, concatenate the values to return the result in the expected format.
Expected Output: Your grade in percentage is 76%
*/
function calculateGrade(maths, science, english) {
  let grade = ((maths + science + english) / 300) * 100;
  console.log(grade.toFixed());
  return "Your grade in percentage is " + grade.toFixed() + "%";
}
app.get("/grade", (req, res) => {
  let maths = parseInt(req.query.maths);
  let science = parseInt(req.query.science);
  let english = parseInt(req.query.english);
  let grade = calculateGrade(maths, science, english);
  res.send(grade);
});

/*Question 4:

Create an endpoint that takes billAmount & numberOfFriends as query parameters and returns the result

Write an Express code snippet.

Declare an endpoint /split-bill using the get keyword.

Declare 2 variables billAmount & numberOfFriends to take the input.

Create a function splitBill() which takes the above variables & splits the bill accordingly

Calculate the split amount among all the friends

let splitAmount = billAmount / numberOfFriends

In the end, concatenate the values to return the result in the expected format.

Hint: To get the Rupee sign, press Ctrl+Alt+Key4. Press them together to get the rupee sign.


Expected Output: Result: Each friend owes Rs. 50 against the bill
*/
function splitBill(billAmount, numberOfFriends) {
  let splitAmount = billAmount / numberOfFriends;
  return "Result: Each friend owes Rs. " + splitAmount + " against the bill";
}

app.get("/split-bill", (req, res) => {
  let billAmount = parseInt(req.query.billAmount);
  let numberOfFriends = parseInt(req.query.numberOfFriends);
  let result = splitBill(billAmount, numberOfFriends);
  res.send(result);
});

/*Question 5:

Create an endpoint that takes a totalHours & hourlyWage and returns the monthly salary.

Write an Express code snippet.

Declare an endpoint /monthly-salary using the get keyword.

Declare 2 variables totalHours & hourlyWage to take the input.

Create a function calculateSalary which takes the above variables & returns the result in expected format

Calculate the employee’s monthly salary

monthlySalary = hourlyWage * totalHours

In the end, concatenate the values to return the result in the expected format.

Hint: To get the Rupee sign, press Ctrl+Alt+Key4. Press them together to get the rupee sign.

API Call:http://localhost:3000/monthly-salary?hourlyWage=2000&totalHours=160

Expected Output: Result: Your monthly salary is ₹320000
*/
function calculateSalary(totalHours, hourlyWage) {
  let monthlySalary = totalHours * hourlyWage;
  return "Result: Your monthly salary is ₹" + monthlySalary;
}
app.get("/monthly-salary", (req, res) => {
  let totalHours = parseInt(req.query.totalHours);
  let hourlyWage = parseInt(req.query.hourlyWage);
  let result = calculateSalary(totalHours, hourlyWage);
  res.send(result);
});
