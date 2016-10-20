jQuery.fn.loadReleases = function(username, repoName) {
    this.html("<span>API rate limit exceeded. (But here's the good news: Authenticated requests get a higher rate limit. <a href='https://developer.github.com/v3/#rate-limiting'>Check out the documentation for more details.</a>)</span>");
     
    var target = this;
    var text = "";
  //https://api.github.com/repos/#username#/#reponame#/releases
    githubAPI("repos/" + username + "/" + repoName + "/releases", function(data) {
        var releases = data.data; // JSON Parsing
      //https://github.com/tumblegamer/TumbleCraft/releases/new
        text = text+"<a href='https://github.com/" + username + "/" + repoName + "/releases/new'>Add</button></a>";
        $(releases).each(function() {
            text = text + "<li><a href='" + this.html_url + "'>" + this.name + "</a>" + this.tag_name + " -  DOWNLOAD: <a href='" + this.zipball_url + "'>Zip</a></li>";
        });
        target.html(text);
    });
};
