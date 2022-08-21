const receivesAFunction = (ian) => {
    ian();
  };
  
  const returnsANamedFunction = () => {
    return function receivesAFunction(name) {};
  };
  
  function returnsAnAnonymousFunction() {
    return function (name) {
      // Do something from calling the function name
    };
  }


