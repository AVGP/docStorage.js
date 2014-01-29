var localStorageBackend = {
  isAvailable: function() { return true; },
  load: function(name) {
    return JSON.parse(localStorage.getItem("docs"))[name];
  },
  save: function(name, content) {
    var docs = JSON.parse(localStorage.getItem("docs")) || {};

    docs[name] = {
      version: new Date().getTime(),
      content: content
    };
    
    localStorage.setItem("docs", JSON.stringify(docs));  
  },
  listFiles: function() {
    var files = [];
    var docs = JSON.parse(localStorage.getItem("docs"));
    for(var file in docs) {
      if(docs.hasOwnProperty(file)) files.push(file);
    }
    return files;
  }
};