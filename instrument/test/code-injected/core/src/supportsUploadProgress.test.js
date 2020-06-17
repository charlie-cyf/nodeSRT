var SRTlib = require('SRT-util');
const supportsUploadProgress = require('./supportsUploadProgress');
describe('supportsUploadProgress', () => {
  it('returns true in working browsers', () => {
    expect(supportsUploadProgress('Mozilla/5.0 (X11; Linux x86_64; rv:64.0) Gecko/20100101 Firefox/64.0')).toBe(true);
    expect(supportsUploadProgress('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36')).toBe(true);
    expect(supportsUploadProgress('Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; rv:11.0) like Gecko')).toBe(true);
    expect(supportsUploadProgress('Chrome (AppleWebKit/537.1; Chrome50.0; Windows NT 6.3) AppleWebKit/537.36 (KHTML like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393')).toBe(true);
    expect(supportsUploadProgress('Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/18.18218')).toBe(true);
  });
  it('returns false in broken browsers', () => {
    expect(supportsUploadProgress('Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063')).toBe(false);
    expect(supportsUploadProgress('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134')).toBe(false);
  });
});
