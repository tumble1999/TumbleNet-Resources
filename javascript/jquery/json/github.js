function githubAPI(location, callback) {
  var url = "https://api.github.com/" + location + "?callback=?";
  jQuery.getJSON(url,callback)
}
