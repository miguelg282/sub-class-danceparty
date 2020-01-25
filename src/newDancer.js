var newDancer = function (top, left, timeBetweenSteps) { //class instance
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img  class="dancer" id="newDancer" src="https://media2.giphy.com/media/XbAXcmBir0ncc/giphy.gif"></img>');
  this.setPosition(top, left);
};
newDancer.prototype = Object.create(makeDancer.prototype);
newDancer.prototype.constructor = newDancer;

newDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
 
  this.$node.show();

};

newDancer.prototype.lineDance = function (top, left) {
  this.setPosition(top, left);
}