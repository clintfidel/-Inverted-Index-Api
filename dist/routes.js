'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _InvertedIndex = require('../src/InvertedIndex');

var _InvertedIndex2 = _interopRequireDefault(_InvertedIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// importing the InvertedIndex class

var invertedIndex = new _InvertedIndex2.default(); // importing express for routing

var api = _express2.default.Router();
api.post('/createIndex', function (req, res) {
  res.send(invertedIndex.createIndex());
});
api.post('/searchIndex', function (req, res) {
  res.send(invertedIndex.searchIndex());
});
exports.default = api;