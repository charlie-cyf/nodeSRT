const SRTlib = require('SRT-util');

const h = require('react').createElement;
const {mount, configure} = require('enzyme');
const ReactAdapter = require('enzyme-adapter-react-16');
const Uppy = require('@uppy/core');
jest.mock('@uppy/dashboard', () => require('./__mocks__/DashboardPlugin'));
const DashboardModal = require('./DashboardModal');
beforeAll(() => {
  configure({
    adapter: new ReactAdapter()
  });
});
beforeEach(() => {
  Object.assign(require('@uppy/dashboard').prototype, {
    openModal: jest.fn(),
    closeModal: jest.fn()
  });
});
describe('react <DashboardModal />', () => {
    beforeAll(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "react%20%3CDashboardModal%20/%3E", "fileName": "/packages/@uppy/react/src/DashboardModal.test.js", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${escape(jasmine["currentTest"].description)}", "fileName": "/packages/@uppy/react/src/DashboardModal.test.js", "calls" : [`);
  });

  it('can be mounted and unmounted', () => {
    const oninstall = jest.fn();
    const onuninstall = jest.fn();
    const uppy = Uppy();
    const dash = mount(<DashboardModal uppy={uppy} onInstall={oninstall} onUninstall={onuninstall} />);
    expect(oninstall).toHaveBeenCalled();
    expect(onuninstall).not.toHaveBeenCalled();
    dash.unmount();
    expect(oninstall).toHaveBeenCalled();
    expect(onuninstall).toHaveBeenCalled();
  });
  it('opens the modal using the `open={true}` prop', () => {
    const uppy = Uppy();
    const dash = mount(<DashboardModal uppy={uppy} open={false} />);
    const {plugin} = dash.instance();
    expect(plugin.openModal).not.toHaveBeenCalled();
    dash.setProps({
      open: true
    });
    expect(plugin.openModal).toHaveBeenCalled();
    dash.unmount();
  });
  it('closes the modal using the `open={false}` prop', () => {
    const uppy = Uppy();
    const dash = mount(<DashboardModal uppy={uppy} open />);
    const {plugin} = dash.instance();
    expect(plugin.openModal).toHaveBeenCalled();
    expect(plugin.closeModal).not.toHaveBeenCalled();
    dash.setProps({
      open: false
    });
    expect(plugin.closeModal).toHaveBeenCalled();
    dash.unmount();
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${escape(jasmine["currentTest"].description)}" },`);
  });

    afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "react%20%3CDashboardModal%20/%3E" },`);
    await SRTlib.endLogger();
  });

});
