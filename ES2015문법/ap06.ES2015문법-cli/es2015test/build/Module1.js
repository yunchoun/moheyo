"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.c = exports.a = void 0;
/*

  export ������ �Լ��� ������ �� ����Ѵ�.
  export ���Ͽ��� ���� �� ��� �����ϴ�.

  exprot default ������ �Լ��� ������ �� ����Ѵ�.
  export default �� ���Ͽ��� �� ���� ��� �����ϴ�.
*/

var a = 1;
exports.a = a;
var b = 2;
var c = 3;

//export 변수나 함수를 내보낼때 사용
exports.c = c;
//import {a,c}
var _default = b; //import b 블락을 사용하지 않는다
exports["default"] = _default;