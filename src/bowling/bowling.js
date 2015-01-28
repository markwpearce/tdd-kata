Bowling = {


  score: function(shots) {
    var score = 0;
    var  = true, isStrike = false, isSpare = false;
    var frameTotal = 0, shotsSinceNewFrame = 0;

    for(var i = 0; i < shots.length; i++) {
      var cur = shots[i];
      var next = 0, nextNext = 0;
      if(i<shots.length-1) next = shots[i+1];
      if(i<shots.length-2) nextNext = shots[i+2];
      isStrike = false;
      isSpare = false;

      if(newFrame) {
        if(cur == 10)
          isStrike = true;
        else if((cur + next) == 10) {
          newFrame = false
          isSpare = true;
        }
        else newFrame = false;
      }
      if(isStrike) {
        score += (next + nextNext);
      }
      else if(isSpare) {
        score += cur + next;
      }


      score += shots[i];


    }
    return score;

  }


};
