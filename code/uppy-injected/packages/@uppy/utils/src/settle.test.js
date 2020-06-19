var SRTlib = require('SRT-util');
const settle = require('./settle');
describe('settle', () => {
  it('should resolve even if all input promises reject', async () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "settle", "testName": "should%20resolve%20even%20if%20all%20input%20promises%20reject", "fileName": "${__filename}", "calls" : [`);

    await expect(settle([Promise.reject(new Error('oops')), Promise.reject(new Error('this went wrong'))])).resolves.toMatchObject({
      successful: [],
      failed: [new Error('oops'), new Error('this went wrong')]
    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
  it('should resolve with an object if some input promises resolve', async () => {
        SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

        SRTlib.send(`{ "testSuite": "settle", "testName": "should%20resolve%20with%20an%20object%20if%20some%20input%20promises%20resolve", "fileName": "${__filename}", "calls" : [`);

    await expect(settle([Promise.reject(new Error('rejected')), Promise.resolve('resolved'), Promise.resolve('also-resolved')])).resolves.toMatchObject({
      successful: ['resolved', 'also-resolved'],
      failed: [new Error('rejected')]
    });
        SRTlib.send(']},');
    SRTlib.endLogger();

  });
});
