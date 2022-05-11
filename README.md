# knit-init
Set up a Roblox Knit project by running one single command

## Why Node.js
One simple answer. I'm noob, idk how to make cli tools using Rust or something else

## Installation

### Prerequisites
Make sure you have these installed
- Node.js
- Rust
- Foreman
- Wally
> NOTE: Node.js version 14+ or LTS is recommended

To install Node.js or Rust, Just search in Google how to do it!

To install Foreman and Wally, Make sure that you have install Rust and Cargo Package manager (should be installed with Rust) and then run this
```
cargo install foreman wally
```

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

- **Project name** Your project name (Default: `my-knit-project`)
- **Create ServerPackages folder?** Do you want to create ServerPackages folder and add it to `default.project.json`? (Default: `No`, you can do it manually later)
