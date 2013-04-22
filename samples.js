/* Code samples for CSCI 3155 Paper.
 * All JS should be runnable in Spidermonkey */

var xs = (function () {
  var rs = [], i = 1;
  for (; i <= 100; i++) { rs.push(i); }
  return rs;
})();
print([n*n for (n of xs) if (n*n % 2 == 1)]);

