const arc = require("@architect/functions");

async function authorized(request) {
    console.log("in authorized handler");
    //returns the request so it should continue execution at next handler
    request.addSomething = "Modified Request";
    return request;
}

async function dashboard(request) {
    console.log("in dashboard handler");
    return {
        status: 200,
        body: "this is the dashboard",
    };
}

exports.handler = arc.http.async(authorized, dashboard);
