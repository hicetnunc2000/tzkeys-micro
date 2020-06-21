# tzkeys microsservice

Requirements
```
node 12.16.3
npm 6.14.4

```

Execution
```
git clone https://github.com/hicetnunc2000/tzkeys-micro
npm i
npm start
curl -X POST "http://localhost:3000/keys" -H  "accept: application/json"
curl -X POST "http://localhost:3000/keys?passphrase=pass123" -H  "accept: application/json"
```
