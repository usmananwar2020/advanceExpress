const Authentication = (req, res, next) => {
    console.log("Authentication ...");
    next();
}
module.exports = Authentication;