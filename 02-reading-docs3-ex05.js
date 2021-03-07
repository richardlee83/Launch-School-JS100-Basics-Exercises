/*
  Find out what Date.now() returns.
*/

/*
  Answer:
  - Directly from MDN docs:
    The static Date.now() method returns the number of milliseconds elapsed 
    since January 1, 1970 00:00:00 UTC.
*/

console.log(Date.now());

/*
  Solution:
  Quoting MDN:  
  - The Date.now() method returns the number of milliseconds elapsed since 
    January 1, 1970 00:00:00 UTC.

  For example:
  console.log(Date.now()); // 1536562500455

  Discussion:
  - This way of representing a point in time is called Unix time or epoch milliseconds. 
  - Chances are high that you will encounter and use Unix time quite a few times throughout 
    your future career. 
  - Check out this Wired article if you want to read a bit more about it.

  Further Exploration:
  - The Date documentation on MDN provides a lot of good information about Date objects and 
    how to work with them. 
  - Take some time to explore this information and familiarize yourself with the methods available to you.
*/