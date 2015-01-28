ERROR = -1;
SHOTS_PER_FRAME = 3;

Bowling = {

  score: function(frames) {
    var perFrame = SHOTS_PER_FRAME;
    if(typeof frames.length === 'undefined')
      return ERROR;
    if(frames.length > 10)
      return ERROR;

    for(var i = 0; i < frames.length; i++) {
      if(typeof frames[i].length === 'undefined') return ERROR;
      if(frames[i].length > perFrame) return ERROR;
    }

    var score = 0;
    for(var frame = 0; frame < frames.length; frame++) {
      for(var shot = 0; shot < frames[frame].length; shot++) {
        score += frames[frame][shot];
      }
    }

    return score;

  }



};
