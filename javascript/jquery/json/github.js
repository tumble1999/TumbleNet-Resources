function githubAPI(location) {
  var url = "https://api.github.com/" + location;
  $.getJSON(url, function(data) {
    return data
  });
}
