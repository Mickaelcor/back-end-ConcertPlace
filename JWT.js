// Pour crypter le mot de passe avec JWT et proteger mes routes

const { sign, verify } = require("jsonwebtoken");

// Création du token pour avoir un token unique

const createToken = (user) => {
    const accessToken = sign({ username: user.username, id: user.id }, "SECRET");
    return accessToken;
};

const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"];
    console.log(accessToken);
    if (!accessToken)
        return res.status(400).json({ error: "User not Authenticated" });

    try {
        const validToken = verify(accessToken, "SECRET");
        if (validToken) {
            req.authenticated = true;
            return next();
        }
    }
    catch (err) {
        return res.status(400).json({ error: err });
    }
};
module.exports = { createToken, validateToken };