describe("docStorage", function() {
  it("is exported into the window scope", function() {
    expect(window.docStorage).toBeTruthy();
  });
  
  it("can save a key/value pair", function() {
    window.docStorage.registerBackend(localStorageBackend);
    window.docStorage.save("test.txt", "Hello World!");
    expect(window.docStorage.load("test.txt").content).toBe("Hello World!");
  });
  
  it("can use arbitrary storage backends", function() {
     var backend = {
        isAvailable: function() { return true; },
        save: function() {},
        load: function() { return {version: 1}; }
     };
     
     spyOn(backend, "isAvailable").andCallThrough();
     spyOn(backend, "save");
     spyOn(backend, "load").andCallThrough();;
     
     window.docStorage.registerBackend(backend);
     window.docStorage.save("test.txt", "Hello World");
     window.docStorage.load("test.txt");
     
     expect(backend.isAvailable).toHaveBeenCalled();
     expect(backend.save).toHaveBeenCalled();
     expect(backend.load).toHaveBeenCalled();
      
  });
});