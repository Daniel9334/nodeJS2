//USER TOKEN DELETE/UPDATE

// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   const token = req.headers["authorization"];
//   if (!token)
//     return res.status(403).json({ message: "No authorization token" });

//   jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//     if (err) return res.status(403).json({ message: "Invalid token" });
//     req.user = decoded;
//     next();
//   });
// };

// // //SECRET_KEY DELETE/UPDATE

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).json({ message: "No authorization header" });
  }

  const token = authHeader.split(" ")[1];
  const correctPassword = process.env.SECRET_KEY;

  if (token !== correctPassword) {
    return res.status(403).json({ message: "Invalid password" });
  }

  next();
};
