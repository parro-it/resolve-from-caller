import path from 'path';
import test from 'ava';
import supportResolve from './support';
import moduleResolveAsCaller from '.';

test('resolve absolute modules', t => {
	const converted = moduleResolveAsCaller(path.resolve(__dirname, 'support'));
	t.is(converted, path.resolve(__dirname, 'support/index.js'));
});

test('does convert project modules', t => {
	const converted = supportResolve('./support/a');
	t.is(path.relative(__dirname, converted), 'support/a.js');
});

test('does convert project sub-modules', t => {
	const converted = supportResolve('ava');
	t.is(path.relative(__dirname, converted), 'node_modules/ava/index.js');
});

test('does convert nested project modules', t => {
	const converted = supportResolve.nested('./support/a');
	t.is(path.relative(__dirname, converted), 'support/a.js');
});

test('does convert nested project sub-modules', t => {
	const converted = supportResolve.nested('ava');
	t.is(path.relative(__dirname, converted), 'node_modules/ava/index.js');
});

test('does convert deeply nested project modules', t => {
	const converted = supportResolve.deeply('./support/a');
	t.is(path.relative(__dirname, converted), 'support/a.js');
});

test('does convert deeply nested project sub-modules', t => {
	const converted = supportResolve.deeply('ava');
	t.is(path.relative(__dirname, converted), 'node_modules/ava/index.js');
});

test('relative to invoker - resolves', t => {
	const absPath = path.resolve(__dirname, 'support/index.js');
	t.is(supportResolve('./support'), absPath);
	t.is(supportResolve('.'), path.resolve(__dirname, 'index.js'));
});

test('relative to invoker - resolves nested within same file', t => {
	const absPath = path.resolve(__dirname, 'support/index.js');
	t.is(supportResolve.nested('./support'), absPath);
	t.is(supportResolve.nested('.'), path.resolve(__dirname, 'index.js'));
});

test('relative to invoker - resolves deeply nested within same file', t => {
	const absPath = path.resolve(__dirname, 'support/index.js');
	t.is(supportResolve.deeply('./support'), absPath);
	t.is(supportResolve.deeply('.'), path.resolve(__dirname, 'index.js'));
});

