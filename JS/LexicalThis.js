var Person = function () {
    var person = {
        _name: "Leroy",
        _friends: [],
        fillFriends(f) {
            this._friends = f.map(v => v);
        }
    }
    return person;
}