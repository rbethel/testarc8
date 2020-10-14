const arc = require("@architect/functions");

async function adminCheck(req) {
    console.log("in admincheck");
    if (req.rawPath.endsWith("/admin")) {
        console.log("--- admin Check Request ---", req);
    } else {
        console.log("--- regular page Request ---", req);
        return { status: 200, body: "a regular request (not admin)" };
    }
}
async function adminPage(req) {
    console.log("--- admin page Request ---", req);
    console.log(req);
    return { status: 200, body: "in admin page" };
}

exports.handler = arc.http.async(adminCheck, adminPage);
