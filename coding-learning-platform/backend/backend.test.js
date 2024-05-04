// For example, let's assume you have a function in your backend code that adds two numbers
function add(a, b) {
    return a + b;
  }
  
  // Now, let's write a test for this function
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });
  