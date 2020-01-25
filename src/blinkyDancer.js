var BlinkyDancer = function (top, left, timeBetweenSteps) { //class instance
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="dancer" id="blinkyDancer" src="https://66.media.tumblr.com/b576e0f39e8073a763ae6021a8aaba97/tumblr_nylwchode61qa1a2ko1_400.gifv"></img>');
  this.setPosition(top, left);
  this.animateRotate();
// this.lineDance(top, left);
};

BlinkyDancer.prototype = Object.create(makeDancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

//METHODS
BlinkyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  this.$node.show();
};

BlinkyDancer.prototype.lineDance = function (top, left) {
  this.setPosition(top, left);
};

BlinkyDancer.prototype.animateRotate = function(){
     var $elem = $('.dancer');
    $({deg: 0}).animate({deg: 180}, {
        duration: 1000,
        step: function(now) {
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });

  };
