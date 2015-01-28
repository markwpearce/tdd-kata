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

  it('should return error if input is not array', function(){
    expect(b.score(1)).toBe(-1);
  });


  it('should return error (-1) if array has more than ten values', function(){
    var score = b.score([1,1,1,1,1,1,1,1,1,1,1]);
    expect(score).toBe(-1);
  });


  it('should return error if any element in the input has more than 3 values', function(){
    var score = b.score([ [1,1,1], [1,1,1,1]]);
    expect(score).toBe(-1);

  });


});
