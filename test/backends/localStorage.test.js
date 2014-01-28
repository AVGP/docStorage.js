describe("localStorage backend", function () {
  beforeEach(function() {
    original_navigator = navigator;
    navigator = { onLine: false };
  });
  
  it("should be available, when the browser is offline", function() {
    expect(localStorageBackend.isAvailable()).toBe(true);
  })
  
  it("can save a key/value pair", function() {
    localStorageBackend.save("test.txt", "Hello World!");
    expect(localStorageBackend.load("test.txt").content).toBe("Hello World!");
  });
  
  it("shall return the version information", function() {
    localStorageBackend.save("test.txt", "Hello World!");
    expect(localStorageBackend.load("test.txt").version).toBeDefined();    
  });
  
  afterEach(function() {
    navigator = original_navigator;
  })
});