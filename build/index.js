"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/index.ts
var lib_exports = {};
__export(lib_exports, {
  handler: () => handler,
  name: () => name,
  optimizerCodePath: () => optimizerCodePath,
  optimizerLayerPath: () => optimizerLayerPath,
  version: () => version
});
module.exports = __toCommonJS(lib_exports);
var import_path = __toESM(require("path"));

// package.json
var name = "@dbd/imaginex-lambda";
var version = "1.0.0";

// lib/index.ts
var optimizerCodePath = import_path.default.resolve(__dirname, "./code.zip");
var optimizerLayerPath = import_path.default.resolve(__dirname, "./dependencies-layer.zip");
var handler = "imaginex_lambda/handler.handler";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler,
  name,
  optimizerCodePath,
  optimizerLayerPath,
  version
});
