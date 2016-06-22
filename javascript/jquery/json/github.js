function githubAPI(url) {
  $.getJSON("https://api.github.com" + url, function(data) {
    return data
  });
}
