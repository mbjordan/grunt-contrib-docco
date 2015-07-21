// MIT License
// Copyright (c) 2015 Matt Jordan

var docco = require('docco');

function doccoTask(grunt) {
    grunt.registerMultiTask('docco', 'Docco Contrib', function() {
        var done = this.async();

        // These have *not* been tested!
        this.options.layout    = this.options.layout    || null;
        this.options.css       = this.options.css       || null;
        this.options.output    = this.options.output    || null;
        this.options.template  = this.options.template  || null;
        this.options.extension = this.options.extension || null;
        this.options.languages = this.options.languages || null;
        this.options.marked    = this.options.marked    || null;

        docco.document(this.options({
            'args': this.filesSrc
        }), done);
    });
}

module.exports = doccoTask;
