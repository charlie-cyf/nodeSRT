var SRTlib = require('SRT-util');
describe('Project compiled with Uppy\'s TypeScript typings', () => {
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
});
