'use strict';

var writeFile = require('write');
var Metadata = require('metadata');
var metadata = new Metadata();
metadata.set('name', 'scaffold-assemblefile');
metadata.set('description', 'Scaffold to add an assemblefile to your project.');
metadata.set('repository', 'https://github.com/doowb/scaffold-assemblefile');
metadata.set('homepage', 'https://github.com/doowb');
metadata.set('authors', [{author: 'Brian Woodward', homepage: 'https://github.com/doowb', email: 'brian.woodward@gmail.com'}]);
metadata.addTarget('assemblefile', {src: 'assemblefile.js', dest: './'});

writeFile('manifest.json', JSON.stringify(metadata, null, 2));
