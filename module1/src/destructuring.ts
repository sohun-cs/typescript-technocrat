const user = {
    id: 345,
    name: {
        firstName: 'Mezbaul',
        middleName: 'Abedin',
        lastName: 'Persian',
    },

    contactNo: '01732342343',
    address: 'Uganda'
}

const {
    contactNo: phoneNum, // Name Alias
    name: { middleName: midName }, // Name Alias
} = user;


// array destructuring

const myFriends = ['chandler', 'joey', 'ross', 'rachel', 'rachel', 'monica', 'phoebe'];

const [a, b, c] = myFriends;
const [, , bestFriend, ...rest] = myFriends;

console.log(a, b, c);
console.log(bestFriend);
console.log(rest);
