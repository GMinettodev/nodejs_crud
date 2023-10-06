export class user {
    _username;
    _password;
    get username() {
        return this._username;
    }
    get password() {
        return this._password;
    }
    set username(value) {
        this._username = value;
    }
    set password(value) {
        this._password = value;
    }
}
