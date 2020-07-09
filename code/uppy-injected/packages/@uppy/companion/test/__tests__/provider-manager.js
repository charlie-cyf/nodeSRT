const SRTlib = require('SRT-util');

const providerManager = require('../../src/server/provider');
const {getCompanionOptions} = require('../../src/standalone/helper');
let grantConfig;
let companionOptions;
describe('Test Provider options', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe","fileName":"${__filename}","paramsNumber":0},`);

  beforeEach(() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"beforeEach","fileName":"${__filename}","paramsNumber":0},`);

    grantConfig = require('../../src/config/grant')();
    companionOptions = getCompanionOptions();
        SRTlib.send('{"type":"FUNCTIONEND","function":"beforeEach"},');

  });
  test('adds provider options', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test","fileName":"${__filename}","paramsNumber":0},`);

    providerManager.addProviderOptions(companionOptions, grantConfig);
    expect(grantConfig.dropbox.key).toBe('dropbox_key');
    expect(grantConfig.dropbox.secret).toBe('dropbox_secret');
    expect(grantConfig.google.key).toBe('google_key');
    expect(grantConfig.google.secret).toBe('google_secret');
    expect(grantConfig.instagram.key).toBe('instagram_key');
    expect(grantConfig.instagram.secret).toBe('instagram_secret');
        SRTlib.send('{"type":"FUNCTIONEND","function":"test"},');

  });
  test('adds extra provider config', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###2","fileName":"${__filename}","paramsNumber":0},`);

    process.env.COMPANION_INSTAGRAM_KEY = '123456';
    providerManager.addProviderOptions(getCompanionOptions(), grantConfig);
    expect(grantConfig.instagram).toEqual({
      transport: 'session',
      callback: '/instagram/callback',
      key: '123456',
      secret: 'instagram_secret',
      protocol: 'https',
      scope: ['user_profile', 'user_media']
    });
    expect(grantConfig.dropbox).toEqual({
      key: 'dropbox_key',
      secret: 'dropbox_secret',
      transport: 'session',
      authorize_url: 'https://www.dropbox.com/oauth2/authorize',
      access_url: 'https://api.dropbox.com/oauth2/token',
      callback: '/dropbox/callback'
    });
    expect(grantConfig.google).toEqual({
      key: 'google_key',
      secret: 'google_secret',
      transport: 'session',
      scope: ['https://www.googleapis.com/auth/drive.readonly'],
      callback: '/drive/callback'
    });
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###2"},');

  });
  test('adds provider options for secret files', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###3","fileName":"${__filename}","paramsNumber":0},`);

    process.env.COMPANION_DROPBOX_SECRET_FILE = process.env.PWD + '/test/resources/dropbox_secret_file';
    process.env.COMPANION_GOOGLE_SECRET_FILE = process.env.PWD + '/test/resources/google_secret_file';
    process.env.COMPANION_INSTAGRAM_SECRET_FILE = process.env.PWD + '/test/resources/instagram_secret_file';
    companionOptions = getCompanionOptions();
    providerManager.addProviderOptions(companionOptions, grantConfig);
    expect(grantConfig.dropbox.secret).toBe('xobpord');
    expect(grantConfig.google.secret).toBe('elgoog');
    expect(grantConfig.instagram.secret).toBe('margatsni');
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###3"},');

  });
  test('does not add provider options if protocol and host are not set', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###4","fileName":"${__filename}","paramsNumber":0},`);

    delete companionOptions.server.host;
    delete companionOptions.server.protocol;
    providerManager.addProviderOptions(companionOptions, grantConfig);
    expect(grantConfig.dropbox.key).toBeUndefined();
    expect(grantConfig.dropbox.secret).toBeUndefined();
    expect(grantConfig.google.key).toBeUndefined();
    expect(grantConfig.google.secret).toBeUndefined();
    expect(grantConfig.instagram.key).toBeUndefined();
    expect(grantConfig.instagram.secret).toBeUndefined();
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###4"},');

  });
  test('sets a master redirect uri, if oauthDomain is set', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###5","fileName":"${__filename}","paramsNumber":0},`);

    companionOptions.server.oauthDomain = 'domain.com';
    providerManager.addProviderOptions(companionOptions, grantConfig);
    expect(grantConfig.dropbox.redirect_uri).toBe('http://domain.com/dropbox/redirect');
    expect(grantConfig.google.redirect_uri).toBe('http://domain.com/drive/redirect');
    expect(grantConfig.instagram.redirect_uri).toBe('http://domain.com/instagram/redirect');
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###5"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe"},');

});
describe('Test Custom Provider options', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"describe###2","fileName":"${__filename}","paramsNumber":0},`);

  test('adds custom provider options', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"test###6","fileName":"${__filename}","paramsNumber":0},`);

    const providers = providerManager.getDefaultProviders();
    providerManager.addCustomProviders({
      foo: {
        config: {
          key: 'foo_key',
          secret: 'foo_secret'
        },
        module: jest.mock()
      }
    }, providers, grantConfig);
    expect(grantConfig.foo.key).toBe('foo_key');
    expect(grantConfig.foo.secret).toBe('foo_secret');
    expect(providers.foo).toBeTruthy();
        SRTlib.send('{"type":"FUNCTIONEND","function":"test###6"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"describe###2"},');

});
