// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // initialize property for how often the dancer should blink
  this.top = top
  this.left = left;
   this.timeBetweenSteps = timeBetweenSteps

  // call the functions
  this.step()
  // pass the top and left position properties to the setPosition function, which will store them in an object
  this.setPosition(this.top, this.left)
};



makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // bind the context of this at the current moment

  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

};

makeDancer.prototype.interact = function() {
  // find distances from other nodes
  var otherNodes = []
  for (var i = 0; i < window.dancers.length; i++) {
    var xdiff = window.dancers[i].left - this.left
    var ydiff = window.dancers[i].top - this.top
    var dist = Math.sqrt(xdiff ** 2 + ydiff ** 2)
    otherNodes[i] = [dist, window.dancers[i]];
  }
  otherNodes.sort((a, b) => {
    if (Math.abs(a[0]) < Math.abs(b[0])) {
      return -1
    }})
console.log("LOG")
  for (var i = 0; i < Math.ceil(window.dancers.length / 5); i++) {
    otherNodes[i][1].left = (otherNodes[i][1].left + this.left) / 2
    otherNodes[i][1].top = (otherNodes[i][1].top + this.top) / 2
    otherNodes[i][1].setPosition(this.top, this.left);
  }
}

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body

// window.makeDancer = makeDancer;