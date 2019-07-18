# Steps to reproduce
1. `yarn install`
1. `cd packages/app`
1. `yarn serve`
1. Change variable `colorFromJavascript` in `packages/common/sassVars.js`

# Expected
Webpack dev server reloads, and color changes on the page

# Actual
Webpack dev server does not reload, and color does not change on the page
