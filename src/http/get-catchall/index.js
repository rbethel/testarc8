const arc = require("@architect/functions");

async function adminCheck(req) {
    console.log("in admincheck handler");
    console.log("Catchall Called from:", req.rawPath);
    if (req.rawPath.endsWith("/admin")) {
        //this branch does not return anything so execution should continue in the next function
        //If it returned the request here it should also continue but it does not
    } else {
        return { status: 200, body: "This is a regular page (not admin)" };
    }
}
async function adminPage(req) {
    console.log("in the adminPage handler");
    return { status: 200, body: "This is an Admin Page" };
}

exports.handler = arc.http.async(adminCheck, adminPage);
