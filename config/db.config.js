module.exports = {
    // HOST: "52.90.135.103",
    // HOST: "localhost",
    // remote //
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "sarah-management",
    // local //
    // HOST: "localhost",
    // USER: "sam",
    // PASSWORD: "Powell%1234",
    // DB: "school_a",
    dialect: "mysql",
    pool: {
        // maximum number of connections to db pool
        max: 5,
        // minimum number of connections to db pool 
        min: 0,
        // maximum time, in milliseconds, that the db pool tries to connect before it throws an error
        acquire: 30000,
        // maximum time, in milliseconds, that a connection can be idle before being released
        idle: 10000

    }
}