describe('bowling', function () {

  var b = Bowling;

  // https://stackoverflow.com/questions/6449611/how-to-check-whether-a-value-is-a-number-in-javascript-or-jquery
  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };


  it('should have a function score: input: array, returns: number', function(){
    expect(b.score([])).toBeDefined();
    expect(isNumber(b.score([]))).toBe(true);
  });





});
