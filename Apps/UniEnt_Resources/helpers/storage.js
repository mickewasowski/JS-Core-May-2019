const storage = function () {

    const appKey = "kid_r1rR0Zm7S";
    const appSecret = "d96a079c34d3484493a70cb1275c5bdd";

    const getData = function (key) {
        return localStorage.getItem(key + appKey);
    };

    const saveData = function (key, value) {
        localStorage.setItem(key + appKey, JSON.stringify(value));
    };

    const saveUser = function (data) {
        saveData("userInfo", data);
        saveData("authToken", data._kmd.authtoken);
    };

    const deleteUser = function () {
        localStorage.removeItem("userInfo" + appKey);
        localStorage.removeItem("authToken" + appKey);
    };

    return {
        getData,
        saveData,
        saveUser,
        deleteUser,
        appKey,
        appSecret
    }
}();