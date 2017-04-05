// 验证手机号
function isPhoneNumber(phoneNumber) {
    var pattern = /^1[3587]\d{9}$/;
    if (phoneNumber.match(pattern)) {
        return true;
    } else {
        return false;
    }
}

// 判断输入的字符串是否有相邻重复单词
function isRepeat(str) {
    var pattern = /\W(\w+)\W\1|(\w+)^\W+\1/g;
    if (str.match(pattern)) {
        return true;
    } else {
        return false;
    }
}