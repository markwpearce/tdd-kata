describe('bowling', function () {

  var b = Bowling;

  var noSpecials62= [   //Total = 62
      [2, 3, 4],        //9
      [2, 3, 3],        //8
      [1, 1, 5],        //7
      [1, 1, 3],        //5
      [1, 1, 3],        //5
      [0, 0, 0],        //0
      [9, 0, 0],        //9
      [4, 0, 3],        //7
      [3, 2, 0],        //5
      [4, 0, 3],        //7
    ];

  var noSpecials0= [   //Total = 0
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];

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


  it('should give a correct score with no spares/strikes', function(){
    expect(b.score(noSpecials62)).toBe(62);
    expect(b.score(noSpecials0)).toBe(0);
  });

  it('should score a spare than 3 as 16', function() {
    expect(b.score([ [5,5], [3, 0, 0]])).toBe(16)
  });


});
