const env = process.env.NODE.ENV || 'development';

if(env === 'development') {
    const config = require('./config.json');
    console.log(config);
    const envConfig = config[env];
Object.keys(envConfig).forEach(key => {
    process.env[key] = envConfig[key];
});
}