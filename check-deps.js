const fs = require('fs');

// We don't have a quick image parser, so let's just use canvas if installed, or just look at the file via base64?
// Wait, we can't easily parse PNG natively without a library. Is `canvas` installed in node_modules?
const path = require('path');
const pkg = require('./package.json');
console.log("Dependencies:", pkg.dependencies);
