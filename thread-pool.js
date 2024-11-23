const { log } = require('console');
const crypto = require('crypto');

//process.env.UV_THREADPOOL_SIZE = 4; //default
crypto.pbkdf2("password","salt",50000,50,"sha512",(err,key) => {
    log("Key Generated 1");
});

crypto.pbkdf2("password","salt",50000,50,"sha512",(err,key) => {
    log("Key Generated 2");
});

crypto.pbkdf2("password","salt",50000,50,"sha512",(err,key) => {
    log("Key Generated 3");
});

crypto.pbkdf2("password","salt",50000,50,"sha512",(err,key) => {
    log("Key Generated 4");
});

crypto.pbkdf2("password","salt",50000,50,"sha512",(err,key) => {
    log("Key Generated 5");
});