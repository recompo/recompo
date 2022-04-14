const fs = require("fs")
!fs.existsSync("apps/docs/node_modules/semver/bin/semver.js") &&
  fs.copyFileSync(
    "apps/docs/node_modules/semver/bin/semver",
    "apps/docs/node_modules/semver/bin/semver.js"
  )
