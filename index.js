'use strict';

const {
    lstatSync,
    readdirSync,
} = require('fs');

const isString = (a) => typeof a === 'string';

module.exports = (path) => {
    const names = readdirSync(path, {
        withFileTypes: true
    });
    
    if (!names.length)
        return [];
    
    if (!isString(names[0]))
        return names;
    
    return names.map(getDirEnt);
};

function getDirEnt(name) {
    const stat = lstatSync(name);
    
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

