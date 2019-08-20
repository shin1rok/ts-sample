"use strict";
function expo2(amount) {
    return Math.pow(amount, 2);
}
console.log(expo2(1000));
// JSは暗黙的な型変換が行われるため、数値に変換できる場合はerrorにならない。
// console.log(expo2('1000'))
function tax(amount) {
    return Math.pow(amount, 2);
}
console.log(tax(1000));
// 引数の型注釈は付与することが望ましい
// 戻り値の型注釈は場合による(付けた方がいい場合が多い。)
