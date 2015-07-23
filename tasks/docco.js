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
    for (var i = 0; i < optionsArr.length; i++) {
        context.options[optionsArr[i]] = context.options[optionsArr[i]] || null;
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
