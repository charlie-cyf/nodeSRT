const globalUtil = require('../util');
const path = require('path')



describe("static analysis to get file dependencies", () => {
    test("config.js is working", () => {
        globalUtil.config.codebase = path.resolve('../code/uppy');
        expect(globalUtil.config.codebase).toBe(path.resolve('../code/uppy'));
        globalUtil.config.codebase = '../code/uppy-test';
        expect(globalUtil.config.codebase).toBe('../code/uppy-test');
        globalUtil.setter({codebase: '../code/uppy-test2'})
        expect(globalUtil.config.codebase).toBe('../code/uppy-test2');


    })
})