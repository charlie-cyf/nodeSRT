/*global jest:false, test:false, expect:false, describe:false, beforeEach:false*/
const providerManager = require('../../src/server/provider');
const {getCompanionOptions} = require('../../src/standalone/helper');
let grantConfig;
let companionOptions;
describe('Test Provider options', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey7","fileName":"${__filename}","paramsNumber":0},`);

  beforeEach(() => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":0},`);

    grantConfig = require('../../src/config/grant')();
    companionOptions = getCompanionOptions();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  });
  test('adds provider options', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey2","fileName":"${__filename}","paramsNumber":0},`);

    providerManager.addProviderOptions(companionOptions, grantConfig);
    expect(grantConfig.dropbox.key).toBe('dropbox_key');
    expect(grantConfig.dropbox.secret).toBe('dropbox_secret');
    expect(grantConfig.google.key).toBe('google_key');
    expect(grantConfig.google.secret).toBe('google_secret');
    expect(grantConfig.instagram.key).toBe('instagram_key');
    expect(grantConfig.instagram.secret).toBe('instagram_secret');
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey2"},');

  });
  test('adds extra provider config', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey3","fileName":"${__filename}","paramsNumber":0},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey3"},');

  });
  test('adds provider options for secret files', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey4","fileName":"${__filename}","paramsNumber":0},`);

    process.env.COMPANION_DROPBOX_SECRET_FILE = process.env.PWD + '/test/resources/dropbox_secret_file';
    process.env.COMPANION_GOOGLE_SECRET_FILE = process.env.PWD + '/test/resources/google_secret_file';
    process.env.COMPANION_INSTAGRAM_SECRET_FILE = process.env.PWD + '/test/resources/instagram_secret_file';
    companionOptions = getCompanionOptions();
    providerManager.addProviderOptions(companionOptions, grantConfig);
    expect(grantConfig.dropbox.secret).toBe('xobpord');
    expect(grantConfig.google.secret).toBe('elgoog');
    expect(grantConfig.instagram.secret).toBe('margatsni');
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey4"},');

  });
  test('does not add provider options if protocol and host are not set', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey5","fileName":"${__filename}","paramsNumber":0},`);

    delete companionOptions.server.host;
    delete companionOptions.server.protocol;
    providerManager.addProviderOptions(companionOptions, grantConfig);
    expect(grantConfig.dropbox.key).toBeUndefined();
    expect(grantConfig.dropbox.secret).toBeUndefined();
    expect(grantConfig.google.key).toBeUndefined();
    expect(grantConfig.google.secret).toBeUndefined();
    expect(grantConfig.instagram.key).toBeUndefined();
    expect(grantConfig.instagram.secret).toBeUndefined();
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey5"},');

  });
  test('sets a master redirect uri, if oauthDomain is set', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey6","fileName":"${__filename}","paramsNumber":0},`);

    companionOptions.server.oauthDomain = 'domain.com';
    providerManager.addProviderOptions(companionOptions, grantConfig);
    expect(grantConfig.dropbox.redirect_uri).toBe('http://domain.com/dropbox/redirect');
    expect(grantConfig.google.redirect_uri).toBe('http://domain.com/drive/redirect');
    expect(grantConfig.instagram.redirect_uri).toBe('http://domain.com/instagram/redirect');
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey6"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey7"},');

});
describe('Test Custom Provider options', () => {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey9","fileName":"${__filename}","paramsNumber":0},`);

  test('adds custom provider options', () => {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey8","fileName":"${__filename}","paramsNumber":0},`);

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
        SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey8"},');

  });
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey9"},');

});
