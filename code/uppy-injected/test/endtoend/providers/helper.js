const SRTlib = require('SRT-util');
exports.finishUploadTest = async browser => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":1},`);

  // switch back to uppy tab
  await browser.switchWindow(/localhost/);
  const fileItem = await browser.$('.uppy-ProviderBrowser-list li.uppy-ProviderBrowserItem:last-child button');
  await fileItem.waitForDisplayed();
  await fileItem.click();
  const uploadButton = await browser.$('.uppy-ProviderBrowser-footer .uppy-u-reset.uppy-c-btn.uppy-c-btn-primary');
  await uploadButton.click();
  const completeBar = await browser.$('.uppy-StatusBar-content[title="Complete"]');
  await completeBar.waitForDisplayed(20000);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

};
exports.startUploadTest = async (browser, providerName, tabMatch) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":3},`);

  const providerButton = await browser.$(`.uppy-DashboardTab-btn[aria-controls=uppy-DashboardContent-panel--${providerName}]`);
  await providerButton.click();
  await browser.pause(2000);
  const authButton = await browser.$('.uppy-Provider-authBtn');
  await authButton.waitForDisplayed();
  await authButton.click();
  await browser.pause(5000);
  // move control to provider oauth tab
  await browser.switchWindow(tabMatch);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

};
exports.uploadWithRetry = async (browser, providerName, testURL) => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":3},`);

  await browser.url(testURL + '?socketerr=true');
  const providerButton = await browser.$(`.uppy-DashboardTab-btn[aria-controls=uppy-DashboardContent-panel--${providerName}]`);
  await providerButton.click();
  await browser.pause(2000);
  const fileItem = await browser.$('.uppy-ProviderBrowser-list li.uppy-ProviderBrowserItem:last-child button');
  await fileItem.waitForDisplayed();
  await fileItem.click();
  const uploadButton = await browser.$('.uppy-ProviderBrowser-footer .uppy-u-reset.uppy-c-btn.uppy-c-btn-primary');
  await uploadButton.click();
  const retryButton = await browser.$('.uppy-StatusBar-actionBtn--retry');
  await retryButton.waitForDisplayed(10000);
  await retryButton.click();
  const completeBar = await browser.$('.uppy-StatusBar-content[title="Complete"]');
  await completeBar.waitForDisplayed(20000);
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

};
