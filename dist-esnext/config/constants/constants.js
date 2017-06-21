class Constants {
}
Constants.DB_CONNECTION_STRING = process.env.NODE_ENV === 'production'
    ? process.env.dbURI : 'mongodb://localhost:27017/h4test';
Constants.secret = 'fcamarateste';
Object.seal(Constants);
export default Constants;
//# sourceMappingURL=constants.js.map