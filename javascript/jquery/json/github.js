function githubAPI(location, callback) {
  var url = "https://api.github.com/" + location;
  var request = new XMLHttpRequest();
  request.onload = callback(request.response);
  request.open('get', url);
  request.send();
}
