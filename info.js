const info = (req) => {
    console.log(`${req.method} - ${req.path}`);
};

module.exports = info;