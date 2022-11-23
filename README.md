Need to create file .eslintrc and .prettierrc

.eslintrc : { "extends": [ "react-app", "prettier" ], "rules": { "jsx-quotes": [ 1, "prefer-double" ] }, "plugins": [ "prettier" ] }

.prettierrc :

{ "useTabs": false, "printWidth": 80, "tabWidth": 2, "singleQuote": true, "trailingComma": "es5", "jsxBracketSameLine": false, "parser": "flow", "semi": false }
