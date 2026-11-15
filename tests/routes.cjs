const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const context = vm.createContext({});
vm.runInContext(fs.readFileSync('dist/catalog.js', 'utf8') + '\nthis.catalog = courseCatalog; this.routes = routeCatalog;', context);
const { catalog, routes } = context;
assert.equal(new Set(catalog.map(c => c.id)).size, catalog.length, 'Unique catalogue codes');
for (const route of Object.values(routes)) {
  assert.equal(route.courses.length, new Set(route.courses).size, 'No duplicate route courses');
  route.courses.forEach(id => assert(catalog.some(c => c.id === id), `Missing course ${id}`));
}
assert(routes.base.courses.includes('CS 1027A'));
assert(routes.base.courses.includes('WRIT 2130F'));
assert(!routes.aise.courses.includes('CS 1027A'));
assert(!routes.aise.courses.includes('ECE 2231B'));
assert(!routes.aise.courses.includes('ECE 2242B'));
['AISE 2205A', 'SS 2143B', 'AISE 2251B', 'WRIT 2130G'].forEach(id => assert(routes.aise.courses.includes(id)));
assert(routes.bme.courses.includes('BME 3201A'));
assert(!routes.bme.courses.includes('WRIT 2130F'));
assert(routes.ivey.courses.includes('BUS 2257'));
assert.equal(catalog.find(c => c.id === 'BUS 2257').term, 'AB');
assert(catalog.every(c => c.year === 2 && c.sectionCount === null), 'Keep source-backed courses year 2; do not invent section counts');
console.log('Course route integrity checks passed.');

assert.equal(catalog.find(c => c.id === 'WRIT 2130F').term, 'A');
assert.equal(catalog.find(c => c.id === 'WRIT 2130G').term, 'B');
