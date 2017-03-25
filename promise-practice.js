//Import the reuired modules
var request = require("request-promise");
var fs = require("fs-promise");

//The urls to visit
urls = [

  'http://www.google.com',
  'http://www.facebook.com',
  'http://www.apple.com'

]

// make a new array of promises 

var arrayOfPromises = urls.map(function(n) {
  return request.get(n);
}

// Make one promise out of all these promises 

var bigGiantPromise = Promise.all(arrayOfPromises);


bigGiantPromise
  .then(function(n) {
  var something = n.map(function(htlm, idx) {
  return fs.writeFile(idx + '.html', html)
  }
  return bigGiantPromise;
  })
  .catch(function(err) {
  console.log("Somethig went wrong!");
  console.log("Because", err.message);
  })

