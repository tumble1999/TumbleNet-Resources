jQuery.fn.loadRepositories = function(username, repoName) {
    this.html("<span>Querying GitHub for " + username + "/" + repoName +"'s releases...</span>");
     
    var target = this;
    var text = "";
  //https://api.github.com/repos/#username#/#reponame#/releases
    githubAPI("repos/" + username + "/" + repoName + "/releases", function(data) {
        var releases = data.data; // JSON Parsing
        sortByName(releases);
      //https://github.com/tumblegamer/TumbleCraft/releases/new
        text = text+"<a href='https://github.com/" + username + "/" + repoName + "/repositories/new'><button class='mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent' id='add'><i class='material-icons' role='presentation'>add</i><span class='visuallyhidden'>Add</span></button></a>";
        $(repos).each(function() {
            text = text + "<li>",
              this.name,
              this.tag_name
          "<a href='" +  + "'>More",
              
              "</li>";
        });
        target.html(text);
    });
      
    function sortByName(repos) {
        repos.sort(function(a,b) {
        return a.name - b.name;
       });
    }
};
