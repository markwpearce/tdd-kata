describe('bowling', function() {

  var bowl =  Bowling;


  it('should have a function called score that and takes and array returns a number', function() {
    expect(bowl.score([])).toBeDefined();
  });


  it('should score 30 if it is passed in an array of 30 1s', function(){
    expect(bowl.score(
      [ 1,1,1,
        1,1,1,
        1,1,1,
        1,1,1,
        1,1,1,
        1,1,1,
        1,1,1,
        1,1,1,
        1,1,1,
        1,1,1]
      )).toBe(30);
  });

  it('should score 0 if it is passed in an array of 30 0s', function(){
    expect(bowl.score(
      [ 0,0,0,
        0,0,0,
        0,0,0,
        0,0,0,
        0,0,0,
        0,0,0,
        0,0,0,
        0,0,0,
        0,0,0,
        0,0,0]
      )).toBe(0);
  });

  it('should score 16 with spare then 3', function(){
    expect(bowl.score(
      [ 5,5,3]
      )).toBe(16);
    expect(bowl.score(
      [ 2,8,3]
      )).toBe(16);
  });


});
