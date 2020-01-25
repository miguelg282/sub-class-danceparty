var amateurDancer = function (top, left, timeBetweenSteps) { //class instance
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.timeBetweenSteps = makeDancer.timeBetweenSteps;
  this.$node = $('<img class="dancer" id="amateurDancer" src="https://media.tenor.com/images/fc1b19a69a2f40b78e5b560b78c6c8ad/tenor.gif"></img>');
  //var oldStep = amateurDancer.step;
  this.setPosition(top, left);
  //return amateurDancer;
};
amateurDancer.prototype = Object.create(makeDancer.prototype);
amateurDancer.prototype.constructor = amateurDancer;

amateurDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  this.$node.show();

};

amateurDancer.prototype.lineDance = function (top, left) {
  this.setPosition(top, left);
}

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

  }