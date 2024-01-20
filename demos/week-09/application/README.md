# Steps to set up TS project
- Go to the folder in the terminal
- Create `package.json`
```
npm init -y
```
- Install TypeScript compiler locally
```
npm i typescript
```
- Create a folder for your source code
```
mkdir src
```
- Create files in TypeScript (`.ts` extension)
- Compile TS files
```
./node_modules/.bin/tsc ./src/01-hello.ts
```
- Create a TS config file ```tsconfig.json```
```
./node_modules/.bin/tsc --init
```
- Configure `tsconfig.json` appropriately
- Add scripts for build and watch in `package.json`
```
"scripts": {
    "build": "tsc",
    "watch": "tsc --watch",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
- Run the scripts to compile
```
npm run build
```
or
```
npm run watch
```