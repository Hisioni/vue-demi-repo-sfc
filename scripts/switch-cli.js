const { switchVersion } = require("./utils");

const version = process.argv[2];

if (version === "2.7") {
  switchVersion(2.7);
  console.log(`[vue-demi-repo-sfc] Switched for Vue 2.7`);
} else if (version === "2") {
  switchVersion(2);
  console.log(`[vue-demi-repo-sfc] Switched for Vue 2`);
} else if (version === "3") {
  switchVersion(3);
  console.log(`[vue-demi-repo-sfc] Switched for Vue 3`);
} else {
  console.warn(
    `[vue-demi-repo-sfc] expecting version "2" or "2.7" or "3" but got "${version}"`
  );
  process.exit(1);
}
