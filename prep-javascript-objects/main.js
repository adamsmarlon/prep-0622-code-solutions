var Marlon = {
  firstName: 'Marlon',
  lastName: 'Adams',
  hobby: 'snowboarding'
};

var fullName = Marlon.firstName + ' ' + Marlon.lastName;

console.log("The person's name is: ", fullName);

Marlon.job = 'Full Time Shredder';

console.log("The person's current job is: " + Marlon.job + '.');

Marlon.previousJob = 'snow shuffler';

console.log("The person's previous job is: " + Marlon.previousJob + '.');

console.log('The complete person object: ', Marlon);
