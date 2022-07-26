var makeJPopDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.removeClass('dancer');
  this.$node.addClass('jpopDancer');
  //var blinkyDancer = new makeDancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


};

makeJPopDancer.prototype = Object.create(makeDancer.prototype);
makeJPopDancer.prototype.constructor = makeJPopDancer;
// MakeBlinkyDancer.prototype.oldStep = MakeDancer.prototype.step;

makeJPopDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  //this.$node.toggle();
};

makeJPopDancer.prototype.lineUp = function () {
  this.$node.css('top', 'auto');
  this.$node.css('bottom', 40);
}

//window.makeBlinkyDancer = makeBlinkyDancer;