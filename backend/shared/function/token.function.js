const { decode } = require("jsonwebtoken");

const decodeToken = (token) => {
  return token && decode(token);
};
exports.getTokenDataFromRequest = (req) => {
  const authorization = req.headers.authorization; // body parser should have been used before this middle
  if (!authorization) return null;
  const token = authorization.split(" ")[1];
  const data = decodeToken(token);
  return data;
};
