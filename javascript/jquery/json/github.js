function githubAPI(location, callback) {
  var url = "https://api.github.com/" + location;
  // Create a new request object
var request = new XMLHttpRequest();
request.onload = callback(request.response);
request.open('get', url)
request.send()
}
