describe("firebase backend", function () {
  it("should be available, when the browser is online", function() {
    expect(firebaseBackend.isAvailable()).toBe(true);
  });
  
  it("should not be available, when the browser is offline", function() {
    original_navigator = navigator;
    navigator = { onLine: false };

    expect(firebaseBackend.isAvailable()).toBe(false);

    navigator = original_navigator;    
  });
});
