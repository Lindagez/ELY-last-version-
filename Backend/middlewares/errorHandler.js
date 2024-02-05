const errorHandler = (err, _req, res, next) => {

  // const statcode = res.statusCode ? res.statusCode : 500;
  // res.status(statcode);
  // res.json({
  //   msg : err.message,
  //   statusCode : statcode,
  // });
  switch (err.name) {
    case 'NotFoundError':
      res.status(404).send({ Error : "Oops, Resource not Found !" });
      break;
    case 'ValidationError':
      res.status(400).send({ Error : "Invalid request parameters"});
      break;
    case 'JsonWebTokenError':
      res.status(400).send({ Error : "Invalid JsonWebToken"});
      break;
    case 'MongoServerError':
      res.status(400).send({ Error : " Authentication Failed" });
    case 'SyntaxError':
      res.send({ Error : "Invalid Syntax"});

    // case 'CastError':
    //   res.status(400).send({ Error : "Cast Failed" });

    default:
      res.status(500).send({ Error : "This is from our side "});

}
next();
};

module.exports = errorHandler;
  