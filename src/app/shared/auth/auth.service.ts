
export class AuthService {

    private _userName: string = null;

    login() {
        this._userName = "Max";
    }

    logout() {
        this._userName = null;
    }

    get userName() {
        return this._userName;
    }

}