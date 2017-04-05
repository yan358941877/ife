function isPhoneNumber(phoneNumber) {
    var pattern = /^1[3587]\d{9}$/;
    if (phoneNumber.match(pattern)) {
        return true;
    } else {
        return false;
    }
}

function isRepeat(str) {
    var pattern = /\W(\w+)\W\1|(\w+)^\W+\1/g;
    if (str.match(pattern)) {
        return true;
    } else {
        return false;
    }
}