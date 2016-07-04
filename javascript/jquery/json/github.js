function githubAPI(location, callback) {
  var url = "https://api.github.com/" + location;
  jQuery.getJSON(url + "?callback=?", callback);
}
