var localStorageBackend = {
  isAvailable: function() { return true; },
  load: function(name) {
    return JSON.parse(localStorage.getItem(name));
  },
  save: function(name, content) {
    localStorage.setItem(name, JSON.stringify({
      version: new Date().getTime(),
      content: content
    }));  
  }
};