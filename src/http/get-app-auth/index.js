const arc = require("@architect/functions");

async function authorized(request) {
    console.log("in authorized");
    return request;
}

async function dashboard(request) {
    console.log("in dashboard");
    return {
        status: 200,
        body: "dashboard",
    };
}

exports.handler = arc.http.async(authorized, dashboard);
