describe("docStorage", function() {
  it("is exported into the window scope", function() {
    expect(window.docStorage).toBeTruthy();
  })
  
  it("can save a key/value pair", function() {
    window.docStorage.save("test.txt", "Hello World!");
    expect(window.docStorage.load("test.txt").content).toBe("Hello World!");
  })
});