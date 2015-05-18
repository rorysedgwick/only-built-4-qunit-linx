test("The QUnit frame should exist", function() {
  ok(document.getElementById("qunit"), "the qunit div exists")
});

test("The QUnit-fixture frame should exist", function() {
  ok(document.getElementById("qunit-fixture"), "the qunit div exists")
});

test("The timer div should exists", function() {
  ok(document.getElementById("timer"), "the timer div exists")
});

test("The timer div should start with a value of 0", function() {
  equal(document.getElementById("timer").innerHTML, "00:00:00", "the timer starts at zero")
});

test("The stopwatch div should exist", function() {
  ok(document.getElementById("stopwatch", "the stopwatch exists"))
});

test("The start button should exist", function() {
  ok(document.getElementById("startTimer", "the start button exists"))
});

test("The start button should contain the text 'Start'", function() {
  equal(document.getElementById("startTimer").innerHTML, "Start", "the start button says start")
});

test("The stop button should exist", function() {
  ok(document.getElementById("stopTimer", "the stop button exists"))
});

test("The stop button should contain the text 'Stop'", function() {
  equal(document.getElementById("stopTimer").innerHTML, "Stop", "the stop button says stop")
});

test("The reset button should exist", function() {
  ok(document.getElementById("resetTimer", "the reset button exists"))
});

test("The reset button should contain the text 'Reset'", function() {
  equal(document.getElementById("resetTimer").innerHTML, "Reset", "the reset button says reset")
});
