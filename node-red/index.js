const http = require("http");
const express = require("express");
const RED = require("node-red/packages/node_modules/node-red");
const path = require("path");

const httpAdminRoot = "/red/client";
const httpNodeRoot = "/red/api";

/**
 * @param {http.Server} server
 * @param {express.Express} expressApp
 */
exports.initNodeRED = (server, expressApp) => {
    RED.events.on("utcode.doSomething", (...args) => {
        console.log(args);
    });
    RED.init(server, {
        httpAdminRoot,
        httpNodeRoot,
        userDir: path.join(__dirname, ".data"),
        nodesExcludes: ["node-red"],
        nodesDir: path.join(__dirname, "nodes"),
        editorTheme: {
            page: {
                title: "ut.code();",
                css: path.join(__dirname, "editor-customization", "style.css")
            },
            header: {
                title: "ut.code();",
                image: null,
                url: "https://utcode.net/"
            }
        }
    });
    expressApp.use(httpAdminRoot, RED.httpAdmin);
    expressApp.use(httpNodeRoot, RED.httpNode);
    RED.start();
}


