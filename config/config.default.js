module.exports = appInfo => {
    //const config = exports = {};
    const config = {};
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1529021179945_1644';
    // add your config here
    config.middleware = [];
    return config;
};
//# sourceMappingURL=config.default.js.map