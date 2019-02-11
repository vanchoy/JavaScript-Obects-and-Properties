//Most common way to create an Object
var ivan = {
    name: 'Ivan', 
    lastName: 'Stoyanov',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false
};

console.log(ivan.lastName);
console.log(ivan['lastName']);

var xyz = 'job';
console.log(ivan[xyz]);

ivan.lastName = 'Stoyanov';
ivan['job'] = 'programmer';

console.log(ivan);

/* ----------------------------------------- */

//Second way to create an Object
var lily = new Object();
lily.name = 'Lily';
lily.lastName = 'Doe';
lily['yearOfBirth'] = 1969;
lily['job'] = 'retired';
lily['isMarried'] = true;

console.log(lily);
