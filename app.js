$(document).ready(function(){


// how an api request works: the server doesnt make the food or deliver it, they simply go to the next person to have them coook it and dont wait around they go clean and take care of others while they are waiting. javascript wants to wait for it to create a response, but go to the promise line where it says .then(function(response))

// ajax means you can do more than one thing at once, and the promise is what allows that. examples of promises are .then (because it returns the response and the error as a response if there is an error) .done
  $.ajax ({
    method: "GET",
    url: "http://swapi.co/api/people",
    // want to get all the people data from the url
    // now we have the data that is coming in and we can do something with that data, example we can loop thorugh it to display all the naems on the screen, or give them all profiles on cards with an image maybe and some info on them
    // this is all done as simple with the api request that we just did
    // data:
  }).then(function(response){
    console.log(response.results);
    // this is where the cook tells the server that it will notify them when the food is ready, now run the code inside of here, now do the promise. when it comes back log that response
    // below is plain old jquery dom manipulation
    for (var i = 0; i < response.results.length; i++) {
      $(".swapi").append("<h1>" + response.results[i].name+"</h1><h3>Height: "+response.results[i].height+"cm</h3>");
    }
  });
});

// rstful: represental state transfer
// do you know how to use restful api requests?
// ->we dont know what their server looks like or their endpoints or database, but if we use these basic function and call a requeest we will get come information back. do you know the theoretical side of this? ex: did you make a restful api? say yes i did.
