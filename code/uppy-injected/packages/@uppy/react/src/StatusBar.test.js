const SRTlib = require('SRT-util');

const h = require('react').createElement;
const {mount, configure} = require('enzyme');
const ReactAdapter = require('enzyme-adapter-react-16');
const Uppy = require('@uppy/core');
beforeAll(() => {
  configure({
    adapter: new ReactAdapter()
  });
});
jest.mock('@uppy/status-bar', () => require('./__mocks__/StatusBarPlugin'));
const StatusBar = require('./StatusBar');
describe('react <StatusBar />', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "react%20%3CStatusBar%20/%3E", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "${__filename}", "calls" : [`);
  });

  it('can be mounted and unmounted', () => {
    const oninstall = jest.fn();
    const onuninstall = jest.fn();
    const uppy = Uppy();
    const dash = mount(<StatusBar uppy={uppy} onInstall={oninstall} onUninstall={onuninstall} />);
    expect(oninstall).toHaveBeenCalled();
    expect(onuninstall).not.toHaveBeenCalled();
    dash.unmount();
    expect(oninstall).toHaveBeenCalled();
    expect(onuninstall).toHaveBeenCalled();
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "react%20%3CStatusBar%20/%3E" },`);
    await SRTlib.endLogger();
  });

});
