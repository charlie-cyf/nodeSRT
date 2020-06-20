var SRTlib = require('SRT-util');
const testURL = 'http://localhost:4567/create-react-app';
describe('webpack build', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "webpack%20build", "fileName": "${__filename}", "calls" : [`);

  beforeEach(async () => {
    await browser.url(testURL);
  });
  it('should include CSS', async () => {
        SRTlib.send(`{ "testSuite": "webpack%20build", "testName": "should%20include%20CSS", "fileName": "${__filename}", "calls" : [`);

    const el = await $('#inline-dashboard .uppy-Dashboard-inner');
    await el.waitForExist();
    const bgColor = await el.getCSSProperty('background-color');
    expect((/^rgba?\(250, ?250, ?250(?:, ?1)?\)$|^#fafafa$/).test(bgColor.value)).to.equal(true);
        SRTlib.send(']},');

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
describe('React: Dashboard', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "React%3A%20Dashboard", "fileName": "${__filename}", "calls" : [`);

  beforeEach(async () => {
    await browser.url(testURL);
  });
  it('should have Google Drive panel', async () => {
        SRTlib.send(`{ "testSuite": "React%3A%20Dashboard", "testName": "should%20have%20Google%20Drive%20panel", "fileName": "${__filename}", "calls" : [`);

    const el = await $('#inline-dashboard .uppy-Dashboard-inner');
    await el.waitForExist();
    const tabs = await $$('.uppy-DashboardTab-name');
    let hasGDrive = false;
    for (const name of tabs) {
      hasGDrive = (await name.getText()) === 'Google Drive';
      if (hasGDrive) break;
    }
    expect(hasGDrive).to.equal(true);
        SRTlib.send(']},');

  });
  it('should survive being mounted and unmounted', async () => {
        SRTlib.send(`{ "testSuite": "React%3A%20Dashboard", "testName": "should%20survive%20being%20mounted%20and%20unmounted", "fileName": "${__filename}", "calls" : [`);

    const el = await $('#inline-dashboard .uppy-Dashboard-inner');
    await el.waitForExist();
    async function toggle() {
      const button = await $('#inline-dashboard-toggle');
      await button.click();
      await browser.pause(250);
    }
    await toggle();
    await toggle();
    await toggle();
    await toggle();
    const gdriveButton = await $('.uppy-DashboardTab:nth-child(1) button');
    await gdriveButton.click();
    await browser.pause(500);
    expect(await $('.uppy-Provider-authBtn')).to.exist;
        SRTlib.send(']},');

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
describe('React: DashboardModal', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "React%3A%20DashboardModal", "fileName": "${__filename}", "calls" : [`);

  beforeEach(async () => {
    await browser.url(testURL);
  });
  it('should have controlled open and close', async () => {
        SRTlib.send(`{ "testSuite": "React%3A%20DashboardModal", "testName": "should%20have%20controlled%20open%20and%20close", "fileName": "${__filename}", "calls" : [`);

    const modalToggle = await $('#modal-dashboard-toggle');
    const modalWrapper = await $('#modal-dashboard .uppy-Dashboard--modal');
    const modalClose = await $('#modal-dashboard .uppy-Dashboard-close');
    await modalToggle.waitForExist();
    expect(await modalWrapper.getAttribute('aria-hidden')).to.equal('true');
    await modalToggle.click();
    await browser.pause(50);
    expect(await modalWrapper.getAttribute('aria-hidden')).to.be.oneOf([null, '']);
    await browser.pause(500);
    await modalClose.click();
    await browser.pause(500);
    expect(await modalWrapper.getAttribute('aria-hidden')).to.equal('true');
        SRTlib.send(']},');

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
