function githubAPI(url) {
  $("#releases").html("test");
  $.getJSON("https://api.github.com" + url, function(data) {
    return data
  });
}
