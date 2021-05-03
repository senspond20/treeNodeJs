
### TypeScript Install To NodeJs

```
$ npm install --save-dev typescript ts-node
$ npm i --save-dev @types/node
```

+run

```
$ node_modules/.bin/ts-node main.ts
```

+ package.json

```json
{
  "name": "treeNodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "ts-node main.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {
    "ts-node": "^9.1.1",
    "typescript": "^4.2.4"
  }
}
```