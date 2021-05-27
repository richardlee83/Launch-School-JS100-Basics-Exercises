// Launch School - JS100 - Javascript Basics - Objects

// Retrieve A Value (Part 2)
//  Given the below object jane, write code that retrieves the country in which Jane is located.
//
//    let jane = {
//      firstName: 'Jane',
//      lastName: 'Harrelson',
//      age: 32,
//      location: {
//        country: 'Denmark',
//        city: 'Aarhus'
//      },
//      occupation: 'engineer',
//    };


// Answer:
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

// dot notation
let janeCountry = jane.location.country;
console.log(janeCountry);

// bracket notation
janeCountry = jane['location']['country'];
console.log(janeCountry);


// Solution:
//
//
//  Dot Notation:
//
//  jane.location.country;
//
//
//  Bracket Notation:
//
//  jane['location']['country'];
//
//
// Discussion:
//  In order to retrieve the country value, we first need to retrieve the value of 'location', 
//  which we can do using either dot notation (jane.location) or bracket notation (jane['location']). 
//  The value of the property 'location' is another object, and we can retrieve the value for this object's 
//  property 'country' again using either dot notation or bracket notation.



