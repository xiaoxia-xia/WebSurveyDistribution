if(process.env.NODE_ENV == 'production'){
    // we are in production mode - return the prod set of keys
    module.exports = require('./pro');
}else{
    // we are in development mode - return the dev keys
    module.exports = require('./dev');
}