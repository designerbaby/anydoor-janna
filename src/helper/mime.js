const path = require("path");

const mimeTypes = {
    "css": "text/css"
};

module.exports = (filePath) => {
    let ext = path.extname(filePath)
        .split(".") // jquery.min.js
        .pop()
        .toLowerCase();

    if (!ext) {
        ext = filePath;
    }
    return mimeTypes[ext] || mimeTypes["txt"];
};
