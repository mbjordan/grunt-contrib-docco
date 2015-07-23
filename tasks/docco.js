// MIT License
// Copyright (c) 2015 Matt Jordan
var docco = require('docco');
var optionsArr = [
    'layout',
    'css',
    'output',
    'template',
    'extension',
    'languages',
    'marked'
];

function processOptions(context) {
    return context.options({
        'args': context.filesSrc
    });
}

function getOptions(context) {
    var idx = 0;
    while (idx < optionsArr.length) {
        context.options[optionsArr[idx]] = context.options[optionsArr[idx]] || null;
        idx += 1;
    }
    return processOptions(context);
}

function runDocco() {
    docco.document(getOptions(this), this.async());
}

function doccoTask(grunt) {
    grunt.registerMultiTask('docco', 'Docco Contrib', runDocco);
}

module.exports = doccoTask;
