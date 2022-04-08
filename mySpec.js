const os = require("os");
const fs = require("fs");

function mySpec(data) {
  fs.writeFileSync("./dataLaptop.json", JSON.stringify(data));
}

mySpec({
  name: os.hostname(),
  type: os.type(),
  arch: os.arch(),
  memory: os.totalmem(),
});
