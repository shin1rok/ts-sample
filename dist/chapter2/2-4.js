"use strict";
// typeof
// jsのtypeofをは異なる
var myObject = { foo: 'string' };
var anotherObject = { foo: '' };
anotherObject['foo'] = 'bar';
// anotherObject['foo'] = 1 // TS2322: Type '1' is not assignable to type 'string'.
// anotherObject['baz'] = 'bar' // TS7017: Element implicitly has an 'any' type because type '{ foo: string; }' has no index signature.
// myObjectでfooの型がStringであるという定義はしていないがStringであると推測してくれるっぽい。これが型推論？
