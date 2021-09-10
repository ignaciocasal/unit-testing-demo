
it('should pass', () => {
  const foo = true
  expect(foo).toBe(true)
});


it('should fail', () => {
  const foo = false
  expect(foo).toBe(true)
});
