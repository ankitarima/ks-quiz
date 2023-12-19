let db_config = {};

// Hostinger db credentails
db_config = {
  HOST: "217.21.91.1",
  USER: "u889430799_testkart_dev",
  PASSWORD: "Zgh;1bkQq:a3",
  DB: "u889430799_testkart_dev",
  LOGGING: false,
};

if (process.argv[2] === "local") {
  // local db credentails
  db_config = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Main4itl123",
    DB: "test_kart",
    LOGGING: false,
  };
}

export default db_config;
