export function validateEmail(email) {
    var regularEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return regularEmail.test(String(email).toLowerCase());
}