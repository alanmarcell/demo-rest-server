class UserModel {
    constructor(userModel) {
        this.userModel = userModel;
    }
    get name() {
        return this.userModel.name;
    }
    get password() {
        return this.userModel.password;
    }
    get admin() {
        return this.userModel.admin;
    }
}
Object.seal(UserModel);
export default UserModel;
//# sourceMappingURL=UserModel.js.map