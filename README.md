# mkreact

Setup scaffolding for a npm or yarn module with some base rules/settings I've found useful.
Also places the module name in important areas (scope currently not supported).

Files include:

* .vscode/launch.json
* .gitignore
* tsconfig.json
* tslint.json
* webpack.config.js
* LICENSE
* package.json
* README.md

## Usage

```sh
yarn global add @<scope>/mkreact
cd <path/to/parent/dir>
mkreact --name=[@scope>/]module_name
```