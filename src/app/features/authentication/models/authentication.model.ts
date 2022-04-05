/* export type UserFireCredential = firebase.default.auth.UserCredential;
export type UserFire = firebase.default.User;
 */
export class UserAuth {
    private _email: string;
    private _password: string;

    constructor(email: string, password: string) {
        this._email = email;
        this._password = password;
    }

    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }

    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }

}
