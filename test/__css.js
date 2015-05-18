test("The header should have a left margin of 20px", function() {
  var header = document.getElementById("header");
  var style = window.getComputedStyle(header).getPropertyValue("margin-left");
  equal(style, "20px", "the header margin-left is 20px");
});

test("The timer should have a left margin of 20px", function() {
  var timer = document.getElementById("timer");
  var style = window.getComputedStyle(timer).getPropertyValue("margin-left");
  equal(style, "20px", "the timer margin-left is 20px");
});

test("The font-size of the timer should be 28px", function() {
  var stopwatch = document.getElementById("stopwatch");
  var style = window.getComputedStyle(stopwatch).getPropertyValue("font-size");
  equal(style, "28px", "the timer font-size is 28px");
})

test("The stopwatch should have a left margin of 20px", function() {
  var stopwatch = document.getElementById("stopwatch");
  var style = window.getComputedStyle(stopwatch).getPropertyValue("margin-left");
  equal(style, "20px", "the stopwatch margin-left is 20px");
});

