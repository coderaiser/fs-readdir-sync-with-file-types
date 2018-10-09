'use strict';

const path = require('path');
const {
    lstatSync,
    readdirSync,
} = require('fs');

const currify = require('currify/legacy');

const isString = (a) => typeof a === 'string';
const getDirEnt = currify(_getDirEnt);

module.exports = (dir) => {
    const names = readdirSync(dir, {
        withFileTypes: true
    });
    
    if (!names.length)
        return [];
    
    if (!isString(names[0]))
        return names;
    
    return names.map(getDirEnt(dir));
};

function _getDirEnt(dir, name) {
    const fullPath = path.join(dir, name);
    const stat = lstatSync(fullPath);
    
    const {
        isBlockDevice,
        isCharacterDevice,
        isDirectory,
        isFIFO,
        isFile,
        isSocket,
        isSymbolicLink,
    } = stat;
    
    return {
        name,
        isBlockDevice: isBlockDevice.bind(stat),
        isCharacterDevice: isCharacterDevice.bind(stat),
        isDirectory: isDirectory.bind(stat),
        isFIFO: isFIFO.bind(stat),
        isFile: isFile.bind(stat),
        isSocket: isSocket.bind(stat),
        isSymbolicLink: isSymbolicLink.bind(stat),
    };
}

