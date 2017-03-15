var AuthService = (function () {
    function AuthService() {
        this._userName = null;
    }
    AuthService.prototype.login = function () {
        this._userName = "Max";
    };
    AuthService.prototype.logout = function () {
        this._userName = null;
    };
    Object.defineProperty(AuthService.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        enumerable: true,
        configurable: true
    });
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map