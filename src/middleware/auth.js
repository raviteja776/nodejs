const adminAuth = (req,res,next) => {
    const token ="xyz";
    const isAuthenticate = token === "xyz";
    if(isAuthenticate) {
        next();
    } else {
        res.status(401).send("Unauthorize");
    }
}

module.exports = {adminAuth};