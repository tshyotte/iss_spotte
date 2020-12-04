/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
/*const https = require('https');
const searchUrl = 'https://api.ipify.org?format=json';

const fetchMyIP = function(callback) { 
https.get(searchUrl, (resp) => {
  if (resp.statusCode !== 200) {
    const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
    callback(Error(msg), null);
    return;
  }

    if (resp.statusCode === 200) {
        resp.on('data', (body) => { console.log(`It worked! Returned IP:, ${body}`);
      });
}
 });
};*/
const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchCoordsByIP = function(Callback) {
  request('https://ipvigilante.com/8.8.8.8', (error, response, body) => {
    if (error) return callback(error, null);
    
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
    callback(Error(msg), null);
      return;
    }
    const longitude = JSON.parse(body).data.longitude;
    const latitude = JSON.parse(body).data.latitude;
    const coords = {longitude, latitude};
    callback(null, coords);
  });
}
module.exports = { fetchMyIP, fetchCoordsByIP};
