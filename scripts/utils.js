const fs = require("fs");
const path = require("path");

const dir = path.resolve(__dirname, "..", "dist");

function loadModule(name) {
  try {
    return require(name);
  } catch (e) {
    return undefined;
  }
}

function switchVersion(version) {
  cpDirSync(`${dir}/${version}`, dir);
}

function copy(name, version, vue) {
  vue = vue || "vue";
  const src = path.join(dir, `v${version}`, name);
  const dest = path.join(dir, name);
  let content = fs.readFileSync(src, "utf-8");
  content = content.replace(/'vue'/g, `'${vue}'`);
  // unlink for pnpm, #92
  try {
    fs.unlinkSync(dest);
  } catch (error) {}
  fs.writeFileSync(dest, content, "utf-8");
}

function switchVersion(version) {
  copy("index.cjs", version);
  copy("index.mjs", version);
  // todo: cann't gen `d.ts`.
  // copy("index.d.ts", version);
}

module.exports.loadModule = loadModule;
module.exports.switchVersion = switchVersion;
