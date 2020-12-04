/*const { fetchMyIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  
});*/

// The code below is temporary and can be commented out.
const { fetchMyIP, fetchCoordsByIP } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
  //console.log('Coords:', coords);
});

fetchCoordsByIP((error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('Coords:', coords);
});