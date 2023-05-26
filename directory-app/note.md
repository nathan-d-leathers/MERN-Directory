Test Note

possible connection string?
mongodb://127.0.0.1:27017/

To Run:

3 Terminals
-Backend
-Directory-App
-Mongo

npm install from both backend and directory-app

go to backend/json load data with
$mongoimport --db directory-db --collection workerdata --file workers.json --jsonArray
(note will probably need to install, configure, and run mongo locally)

backend: npm start
directory-app: npm start
