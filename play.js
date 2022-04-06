const userName = 'Max';
let age = 31;
let hasHobbies = true;



// next gen js functions syntax
const summarizeUser = (userName, age, hasHobbies) => {
    console.log(
        'User name is ' + userName + ', user age is ' + age + ', user has hobbies: ' + hasHobbies
    )
}


// simply return js functions syntax
const simpleReturn = (a, b) => console.log(a + b);


simpleReturn(234, 345);
summarizeUser(userName, age, hasHobbies);