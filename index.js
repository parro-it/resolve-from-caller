const path = require('path');

const resolve = require('resolve-from');
const parentModule = require('parent-module');

function findCallerFile() {
	const first = parentModule();
	const second = parentModule(first);
	return parentModule(second);
}

module.exports = function moduleResolveAsCaller(modulePath) {
	var callerFile = findCallerFile();
	return resolve(path.dirname(callerFile), modulePath);
};
