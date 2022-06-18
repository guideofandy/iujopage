
  const authorization = req.headers.authorization;
  if (authorization && authorization.toLowerCase().startsWith("bareer")) {
    try {
      const userAuthorization = verify(
        authorization.slice(7),
        process.env.SECRET
      );
      const { id } = userAuthorization;
    } catch (error) {
      return res.status(401).json({ error: "Token inválido" });
    }
  }
