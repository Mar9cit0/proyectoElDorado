 module.exports = {
    "type": process.env.TYPE,
    "host": process.env.HOST,
    "port": process.env.PORT,
    "username": process.env.DB_USER,
    "password":process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "entities": [
       "src/app/models/*.ts"
    ],
    "migrations": [
       "src/database/migrations/*.ts"
    ],
    "cli":{
        "migrationsDir": "src/database/migrations/"
    }

 }
