window.docStorage = (function() {
  var self = {};
  
  self.save = function(name, content) {
    localStorage.setItem(name, JSON.stringify({
      version: new Date().getTime(),
      content: content
    }));
  }
  
  self.load = function(name) {
    return JSON.parse(localStorage.getItem(name));
  }
  
  return self;
})();