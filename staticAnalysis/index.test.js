const config = require('../config');
const path = require('path')



describe("static analysis to get file dependencies", () => {
    test("config.js is working", () => {
        config.data.codebase = path.resolve('../code/uppy');
        expect(config.data.codebase).toBe(path.resolve('../code/uppy'));
        config.data.codebase = '../code/uppy-test';
        expect(config.data.codebase).toBe('../code/uppy-test');
        config.setter({codebase: '../code/uppy-test2'})
        expect(config.data.codebase).toBe('../code/uppy-test2');


    })
})