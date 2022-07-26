var makeKPopDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);
  // this.left = left
  // this.top = top
  this.$node.removeClass('dancer')

  this.$node.addClass('kpopDancer')
  this.$node.width(Math.random() * 100);
  this.$node.height(Math.random() * 100);
  this.$node.css('color', Math.random() * 255);
  this.$node.text('🇰🇷');

  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = blinkyDancer.step;
  // this.oldStep = makeDancer.prototype.step;

};

makeKPopDancer.prototype = Object.create(makeDancer.prototype);
makeKPopDancer.prototype.constructor = makeBlinkyDancer;
// MakeBlinkyDancer.prototype.oldStep = MakeDancer.prototype.step;

makeKPopDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
};

makeKPopDancer.prototype.lineUp = function() {
  console.log("INVOKE")
  this.$node.css('top', 50)
}

//window.makeBlinkyDancer = makeBlinkyDancer;