/*global browser, expect, $, $$*/
const SRTlib = require('SRT-util');

const testURL = 'http://localhost:4567/create-react-app';
describe('webpack build', () => {
    before(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "webpack%20build", "fileName": "${__filename}", "calls" : [`);
  });

  beforeEach(async () => {
        SRTlib.send(`{ "testName": "${this.test}", "fileName": "${__filename}", "calls" : [`);

    await browser.url(testURL);
  });
  it('should include CSS', async () => {
    const el = await $('#inline-dashboard .uppy-Dashboard-inner');
    await el.waitForExist();
    const bgColor = await el.getCSSProperty('background-color');
    // computed value is rgb() or rgba(), not hex (but listing it here to show the expected value too)
    expect((/^rgba?\(250, ?250, ?250(?:, ?1)?\)$|^#fafafa$/).test(bgColor.value)).to.equal(true);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${this.test}" },`);
  });

    after(async () => {
    SRTlib.send(`], "endTestSuiteName": "webpack%20build" },`);
    await SRTlib.endLogger();
  });

});
describe('React: Dashboard', () => {
    before(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "React%3A%20Dashboard", "fileName": "${__filename}", "calls" : [`);
  });

  beforeEach(async () => {
        SRTlib.send(`{ "testName": "${this.test}", "fileName": "${__filename}", "calls" : [`);

    await browser.url(testURL);
  });
  it('should have Google Drive panel', async () => {
    const el = await $('#inline-dashboard .uppy-Dashboard-inner');
    await el.waitForExist();
    const tabs = await $$('.uppy-DashboardTab-name');
    let hasGDrive = false;
    for (const name of tabs) {
      hasGDrive = (await name.getText()) === 'Google Drive';
      if (hasGDrive) break;
    }
    expect(hasGDrive).to.equal(true);
  });
  it('should survive being mounted and unmounted', async () => {
    const el = await $('#inline-dashboard .uppy-Dashboard-inner');
    await el.waitForExist();
    async function toggle() {
      const button = await $('#inline-dashboard-toggle');
      await button.click();
      await browser.pause(250);
    }
    // close
    await toggle();
    // open
    await toggle();
    // close
    await toggle();
    // open
    await toggle();
    // open GDrive panel
    const gdriveButton = await $('.uppy-DashboardTab:nth-child(1) button');
    await gdriveButton.click();
    await browser.pause(500);
    // side effecting property access, not a function!
    // eslint-disable-next-line no-unused-expressions
    expect(await $('.uppy-Provider-authBtn')).to.exist;
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${this.test}" },`);
  });

    after(async () => {
    SRTlib.send(`], "endTestSuiteName": "React%3A%20Dashboard" },`);
    await SRTlib.endLogger();
  });

});
describe('React: DashboardModal', () => {
    before(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "React%3A%20DashboardModal", "fileName": "${__filename}", "calls" : [`);
  });

  beforeEach(async () => {
        SRTlib.send(`{ "testName": "${this.test}", "fileName": "${__filename}", "calls" : [`);

    await browser.url(testURL);
  });
  it('should have controlled open and close', async () => {
    const modalToggle = await $('#modal-dashboard-toggle');
    const modalWrapper = await $('#modal-dashboard .uppy-Dashboard--modal');
    const modalClose = await $('#modal-dashboard .uppy-Dashboard-close');
    await modalToggle.waitForExist();
    expect(await modalWrapper.getAttribute('aria-hidden')).to.equal('true');
    await modalToggle.click();
    // wait for the animation to start
    await browser.pause(50);
    // Edge appears to report empty string while others report null
    expect(await modalWrapper.getAttribute('aria-hidden')).to.be.oneOf([null, '']);
    // wait for the animation to complete
    await browser.pause(500);
    await modalClose.click();
    // wait for the animation to complete
    await browser.pause(500);
    expect(await modalWrapper.getAttribute('aria-hidden')).to.equal('true');
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${this.test}" },`);
  });

    after(async () => {
    SRTlib.send(`], "endTestSuiteName": "React%3A%20DashboardModal" },`);
    await SRTlib.endLogger();
  });

});
