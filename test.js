'use strict';

const fs = require('fs');
const {reRequire} = require('mock-require');

const test = require('tape');
const readSync = require('.');

test('readdirSync withFileTypes: not supported', (t) => {
    const {readdirSync} = fs;
    
    fs.readdirSync = (path) => {
        return readdirSync(path);
    };
    
    const readSync = reRequire('.');
    const names = readSync('.');
    
    fs.readdirSync = readdirSync;
    
    t.equal(typeof names[0], 'object', 'should return array of objects');
    t.end();
});

test('readdirSync withFileTypes: empty', (t) => {
    const {readdirSync} = fs;
    
    fs.readdirSync = () => {
        return [];
    };
    
    const readSync = reRequire('.');
    const names = readSync('.');
    
    fs.readdirSync = readdirSync;
    
    t.deepEqual(names, [], 'should equal');
    t.end();
});

test('readdirSync withFileTypes: supported', (t) => {
    const names = readSync('.');
    
    t.equal(typeof names[0], 'object', 'should return array of objects');
    t.end();
});

