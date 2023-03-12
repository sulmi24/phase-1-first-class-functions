function receivesAFunction(spy) {
  return spy();
}

console.log(
  receivesAFunction(function () {
    return "cool";
  })
);

function returnsANamedFunction() {
  let fn = function cool() {
    console.log("Hello");
  };

  return fn;
}

console.log(returnsANamedFunction());

function returnsAnAnonymousFunction() {
  return function () {
    console.log("Kool");
  };
}
console.log(returnsAnAnonymousFunction());
