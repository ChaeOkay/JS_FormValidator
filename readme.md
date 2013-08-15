##Behavior Drill: Form Validation
Forms are what allows users to send data to the server. They are much more than just logging in and signing up for email newsletters.

When building forms, a critical component is ensuring that the collected data is valid. There is no one definition of "valid", rather it is relative to the purpose of the data. For example, if you are collecting someone's age in years, it should probably be a numeric value like 26 rather than a word like older than you.

In this challenge, you will be writing JavaScript to perform client-side validations, i.e. validating form input on the client machine before the form is submitted.

You will need the following tools:

The RegExp object in JavaScript
Basics of jQuery Events and Event Handling

####Objectives
Write JavaScript code to validate the user input in each of the form fields. An example of a 100% invalid form (i.e. all validation tests are failing) with the corresponding error messages is shown below:

Your task is to write the JavaScript which will perform the validations listed above. Here is some pseudocode roughly describing the expected behavior:

When the user clicks the "Sign Up" button
They should be notified if any of the following conditions are NOT true
-  The email conforms to the standard pattern
-  The password has at least 8 characters
-  The password has at least one capital letter
-  The password has at least one numeric character

If any of the above conditions are false
-  The form is not allowed to be submitted
-  Error messages are dislpayed

If you are having trouble writing a regular expression to match against the email, look around online. There are plenty of examples out there.
