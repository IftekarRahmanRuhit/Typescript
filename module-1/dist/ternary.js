"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish coalescing operator
    const age = 20;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    // 
    const isAdult = age >= 18 ? "adult" : "not adult";
    // console.log({isAdult})
    //nullish coalescing operator
    // null / undefined ---> decision making
    const isAuthenticated = null;
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest User";
    console.log({ result });
    const user = {
        name: "Persian",
        address: {
            city: "ctg",
            road: "Awesome Road",
            presentaddress: "ctg town",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address";
    console.log({ permanentAddress });
}
