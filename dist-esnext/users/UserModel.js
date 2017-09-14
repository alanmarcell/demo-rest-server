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
    get email() {
        return this.userModel.email;
    }
}
Object.seal(UserModel);
export default UserModel;
//# sourceMappingURL=UserModel.js.map