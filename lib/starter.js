const path = require("path");
const editJsonFile = require("edit-json-file");
const ncp = require("ncp").ncp;

async function createProject(projectName) {
    try {
        let name = path.basename(projectName);
        console.log("Creating " + name + " in " + projectName);
        console.log("");
        console.log("This will take a couple of seconds 😃");
        console.log("");

        console.log("[ 1 / 3 ] 🔍  copying project...");
        await copyProjectFiles(projectName);
        console.log("[ 2 / 3 ] 🚚  updating package.json...");
        await updatePackageJson(projectName);
        console.log("[ 3 / 3 ] 🔗  completing...");

        console.log("");
        console.log("==========================================================");
        console.log("AUTHOR : BlockOdyssey ");
        console.log("EMAIL  : dev@blockodyssey.io ");
        console.log("URL    : https://blockodyssey.io ");
        console.log("GITHUB : https://github.com/BlockOdyssey/bo-admin-starter ");
        console.log("==========================================================");
        console.log("");

        console.log("Success!! Created " + name + " at " + projectName);
        console.log("");
        console.log("Start your project by typing: ");
        console.log("   cd " + projectName);
        console.log("   npm install");
        console.log("   npm start");
        console.log("");

        console.log("Happy Coding 😃 ");
        console.log("");
        console.log("");
    } catch (error) {
        console.error(error);
    }
}

function copyProjectFiles(projectName) {
    const prjFolder = `../default`;
    const source = path.join(__dirname, prjFolder);

    return new Promise((resolve, reject) => {
        ncp.limit = 16;
        ncp(source, projectName, function (err) {
            if (err) reject(err);
            resolve();
        });
    });
}

async function updatePackageJson(projectName) {
    const file = editJsonFile(projectName + "/package.json", {
        autosave: true
    });
    file.set("name", path.basename(projectName));
}

module.exports = createProject;
