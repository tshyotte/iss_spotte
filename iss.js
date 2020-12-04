/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const https = require('https');
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
};

module.exports = { fetchMyIP };