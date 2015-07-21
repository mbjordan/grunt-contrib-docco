// MIT License
// Copyright (c) 2015 Matt Jordan
var docco = require('docco');

function processOptions(context) {
    return context.options({
        'args': context.filesSrc
    });
}

function getOptions(context) {

    // These have not *yet* been tested!
    context.options.layout = context.options.layout || null;
    context.options.css = context.options.css || null;
    context.options.output = context.options.output || null;
    context.options.template = context.options.template || null;
    context.options.extension = context.options.extension || null;
    context.options.languages = context.options.languages || null;
    context.options.marked = context.options.marked || null;

    return processOptions(context);
}

function runDocco() {
    docco.document(getOptions(this), this.async());
}

function doccoTask(grunt) {
    grunt.registerMultiTask('docco', 'Docco Contrib', runDocco);
}

module.exports = doccoTask;
