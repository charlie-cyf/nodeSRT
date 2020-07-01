const SRTlib = require('SRT-util');

describe('Project compiled with Uppy\'s TypeScript typings', () => {
    before(() => {
    SRTlib.startLogger("./code/uppy", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "Project%20compiled%20with%20Uppy%27s%20TypeScript%20typings", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "${this.test}", "fileName": "${__filename}", "calls" : [`);
  });

  it('Should have correct imports (thus not crash)', async () => {
    await browser.url('http://localhost:4567/typescript');
    const root = await browser.$('.uppy-Root');
    const trigger = await browser.$('#pick-files');
    await root.waitForExist();
    await trigger.click();
    const typeofUppy = await browser.execute(function () {
      return typeof window.uppy;
    });
    expect(typeofUppy).to.equal('object');
    const dashboard = await browser.$('.uppy-Dashboard');
    expect(await dashboard.isDisplayed()).to.equal(true);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "${this.test}" },`);
  });

    after(async () => {
    SRTlib.send(`], "endTestSuiteName": "Project%20compiled%20with%20Uppy%27s%20TypeScript%20typings" },`);
    await SRTlib.endLogger();
  });

});
