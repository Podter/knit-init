# knit-init
<a href="https://www.npmjs.com/package/knit-init"><img src="https://img.shields.io/npm/v/knit-init.svg?style=for-the-badge&maxAge=3600" alt="npm version" /></a>
Set up a Roblox [Knit](https://github.com/Sleitnick/Knit) project with VS Code Snippets by running one single command

## Why Node.js
One simple answer. I'm noob, idk how to make cli tools using Rust or something else

## Installation

### Prerequisites
Make sure you have these installed
- [Node.js](https://nodejs.org/en/)
- [Rust](https://www.rust-lang.org/tools/install)
- [Foreman](https://github.com/Roblox/foreman)
- [Wally](https://github.com/UpliftGames/wally)
> NOTE: Node.js version 14+ or LTS is recommended

To install Node.js or Rust, Just search in Google how to do it!

To install Foreman and Wally, Make sure that you have install Rust and Cargo Package manager and then run this
```
cargo install foreman wally
```
> NOTE: Cargo should be installed with Rust by default

### Install knit-init
Install `knit-init` as npm global package
```
npm install -g knit-init
```
and this command will stay with you forever (unless you uninstall it 🙂)
```
knit-init
```

## How to use it
Just run this one simple command and it will ask you some questions
```
knit-init
```
or you can run it with some arguments
```
knit-init [project_name]
```

- **Project name** Your project name (Default: `my-knit-project`)
- **Template** Template to use, see [Templates](#Templates) for more infomation (Default: `Base`)

## Templates
You can see templates in this repository [branches](https://github.com/Podter/knit-init/branches). These are available templates that you can use.
- [template-base](https://github.com/Podter/knit-init/tree/template-base) Base template with Knit installed and nothing else
- [template-server-packages](https://github.com/Podter/knit-init/tree/template-server-packages) Same as Base Template but with ServerPackages setup
