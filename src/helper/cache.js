const { cache } = require("../config/defaultConfig");

function refreshRes(stats, res) {
    const { maxAge, expires, cacheControl, lastModified, etag } = cache;

    if (expires) {
        res.setHeader("Expires", (new Date(Date.now() + maxAge * 1000)).toUTCString());
    }

    if (cacheControl) {
        res.setHeader("Cache-Control", `public, max-age=${maxAge}`);
    }

    if (lastModified) {
        res.setHeader("Last-Modified", stats.mtime.toUTCString());
    }

    if (etag) {
        res.setHeader("ETag", `${stats.size}-${stats.mtime}`);
    }
}

module.exports = function isFresh(stats, req, res) { // 是否可以用缓存
    refreshRes(stats, res);

    const lastModified = req.headers["if-modified-since"];
    const etag = req.headers["if-none-match"];

    if (!lastModified && !etag) { // 第一次请求，无缓存
        return false;
    }

    if (lastModified && lastModified !== res.getHeader("Last-Modified")) { // 缓存最后时间已改变
        return false;
    }

    if (etag && etag !== res.getHeader("ETag")) { // etag的值被改变，说明要更新缓存。
        return false;
    }

    return true;
};