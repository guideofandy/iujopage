import { verify } from "jsonwebtoken";

const verifyToken = (token, secret) => {
  try {
    verify(token, secret);
    return true;
  } catch (e) {
    if (e.message !== undefined) {
      return false;
    }
  }
}

export default verifyToken;