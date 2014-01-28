window.docStorage = (function() {
  var self = {};
  var backends = [];
  
  self.save = function(name, content) {
      
    for(var i=0;i<backends.length;i++) {
      if(backends[i].isAvailable()) {
        backends[i].save(name, content);
      }
    }
  };
  
  self.load = function(name) {
    var latestContent = null;
    
    for(var i=0;i<backends.length;i++) {
      if(backends[i].isAvailable()) {
        var backendData = backends[i].load(name);
        if(!latestContent || backendData.version > latestContent.version) {
          latestContent = backendData;
        }
      }
    }    
    
    return latestContent;
  };
  
  self.registerBackend = function(backend) {
    backends.push(backend);  
  };
  
  return self;
})();