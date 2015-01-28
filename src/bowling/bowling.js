ERROR = -1;
SHOTS_PER_FRAME = 3;

Bowling = {

  score: function(frames) {
    var perFrame = SHOTS_PER_FRAME;
    if(typeof frames.length === 'undefined')
      return ERROR;
    if(frames.length != 10)
      return ERROR;

    for(var i = 0; i < frames.length; i++) {
      if(typeof frames[i].length === 'undefined') return ERROR;
      if(frames[i].length > perFrame) return ERROR;
    }

    var score = 0;
    var lastFrame = false;
    for(var frame = 0; frame < frames.length; frame++) {
      lastFrame = (frame == 9);
      for(var shot = 0; shot < frames[frame].length; shot++) {
        if(shot == 0) {//first shot
          if(!lastFrame) {
            if(frames[frame][0] == 10) {
              score += frames[frame+1][0];
              if(frames[frame+1][0] == 10 && frame < 8)
                score += frames[frame+2][0]
              else
                score += frames[frame+1][1];
            }
            else if(frames[frame][0]+ frames[frame][1]== 10) {
              score += frames[frame+1][0];
            }
          }
        }
        score += frames[frame][shot];
      }
    }

    return score;

  }



};
