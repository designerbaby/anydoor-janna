module.exports = {
    root: process.cwd(),
    hostname: "0.0.0.0",
    port: 9527,
    compress: /\.(html|js|css|md)/,
    cache: {
        maxAge: 600,
        expires: true,
        cacheControl: true,
        lastModified: true,
        etag: true
    }
};
