var SRTlib = require('SRT-util');
describe('Project compiled with Uppy\'s TypeScript typings', () => {
  it('Should have correct imports (thus not crash)', async () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "Project%20compiled%20with%20Uppy%27s%20TypeScript%20typings", "testName": "Should%20have%20correct%20imports%20%28thus%20not%20crash%29", "fileName": "${__filename}", "calls" : [`);

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
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
});
