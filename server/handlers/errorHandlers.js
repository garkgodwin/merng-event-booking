exports.mongooseErrors = (err, response) => {
  let errorMessages = [];
  if (err) {
    const errors = err.errors;
    for (var key in errors) {
      errorMessages.push(errors[key].message);
    }
    if (err.code === 11000) {
      //!!!! unique mongoose constraint-------------------------------------<<<<<<<
      let message = "";
      for (var key in err.keyValue) {
        const keyString = Object.keys(err.keyValue);
        const valueString = err.keyValue[key];
        message +=
          "The " + keyString + ": " + valueString + " is already used.";
      }
      errorMessages.push(message);
    }
  }
  return {
    ...response,
    errors: errorMessages,
  };
};
