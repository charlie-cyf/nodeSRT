var SRTlib = require('SRT-util');
const AssemblyOptions = require('./AssemblyOptions');
describe('Transloadit/AssemblyOptions', () => {
    SRTlib.startLogger('./code/uppy', 'http://localhost:8888/instrument-message');

    SRTlib.send(`{ "testSuite": "Transloadit/AssemblyOptions", "fileName": "${__filename}", "calls" : [`);

  it('Validates response from getAssemblyOptions()', async () => {
        SRTlib.send(`{ "testSuite": "Transloadit/AssemblyOptions", "testName": "Validates%20response%20from%20getAssemblyOptions%28%29", "fileName": "${__filename}", "calls" : [`);

    const options = new AssemblyOptions([{
      name: 'testfile'
    }], {
      getAssemblyOptions: file => {
        expect(file.name).toBe('testfile');
        return {
          params: '{"some":"json"}'
        };
      }
    });
    await expect(options.build()).rejects.toThrow(/The `params\.auth\.key` option is required/);
        SRTlib.send(']},');

  });
  it('Uses different assemblies for different params', async () => {
        SRTlib.send(`{ "testSuite": "Transloadit/AssemblyOptions", "testName": "Uses%20different%20assemblies%20for%20different%20params", "fileName": "${__filename}", "calls" : [`);

    const data = Buffer.alloc(10);
    data.size = data.byteLength;
    const options = new AssemblyOptions([{
      name: 'a.png',
      data
    }, {
      name: 'b.png',
      data
    }, {
      name: 'c.png',
      data
    }, {
      name: 'd.png',
      data
    }], {
      getAssemblyOptions: file => ({
        params: {
          auth: {
            key: 'fake key'
          },
          steps: {
            fake_step: {
              data: file.name
            }
          }
        }
      })
    });
    const assemblies = await options.build();
    expect(assemblies).toHaveLength(4);
    expect(assemblies[0].options.params.steps.fake_step.data).toBe('a.png');
    expect(assemblies[1].options.params.steps.fake_step.data).toBe('b.png');
    expect(assemblies[2].options.params.steps.fake_step.data).toBe('c.png');
    expect(assemblies[3].options.params.steps.fake_step.data).toBe('d.png');
        SRTlib.send(']},');

  });
  it('Should merge files with same parameters into one Assembly', async () => {
        SRTlib.send(`{ "testSuite": "Transloadit/AssemblyOptions", "testName": "Should%20merge%20files%20with%20same%20parameters%20into%20one%20Assembly", "fileName": "${__filename}", "calls" : [`);

    const data = Buffer.alloc(10);
    const data2 = Buffer.alloc(20);
    const options = new AssemblyOptions([{
      name: 'a.png',
      data,
      size: data.byteLength
    }, {
      name: 'b.png',
      data,
      size: data.byteLength
    }, {
      name: 'c.png',
      data,
      size: data.byteLength
    }, {
      name: 'd.png',
      data: data2,
      size: data2.byteLength
    }], {
      getAssemblyOptions: file => ({
        params: {
          auth: {
            key: 'fake key'
          },
          steps: {
            fake_step: {
              data: file.size
            }
          }
        }
      })
    });
    const assemblies = await options.build();
    expect(assemblies).toHaveLength(2);
    expect(assemblies[0].fileIDs).toHaveLength(3);
    expect(assemblies[1].fileIDs).toHaveLength(1);
    expect(assemblies[0].options.params.steps.fake_step.data).toBe(10);
    expect(assemblies[1].options.params.steps.fake_step.data).toBe(20);
        SRTlib.send(']},');

  });
  it('Does not create an Assembly if no files are being uploaded', async () => {
        SRTlib.send(`{ "testSuite": "Transloadit/AssemblyOptions", "testName": "Does%20not%20create%20an%20Assembly%20if%20no%20files%20are%20being%20uploaded", "fileName": "${__filename}", "calls" : [`);

    const options = new AssemblyOptions([], {
      getAssemblyOptions() {
        throw new Error('should not create Assembly');
      }
    });
    await expect(options.build()).resolves.toEqual([]);
        SRTlib.send(']},');

  });
  it('Creates an Assembly if no files are being uploaded but `alwaysRunAssembly` is enabled', async () => {
        SRTlib.send(`{ "testSuite": "Transloadit/AssemblyOptions", "testName": "Creates%20an%20Assembly%20if%20no%20files%20are%20being%20uploaded%20but%20%60alwaysRunAssembly%60%20is%20enabled", "fileName": "${__filename}", "calls" : [`);

    const options = new AssemblyOptions([], {
      alwaysRunAssembly: true,
      getAssemblyOptions(file) {
        expect(file).toBe(null);
        return {
          params: {
            auth: {
              key: 'fake key'
            },
            template_id: 'example'
          }
        };
      }
    });
    await expect(options.build()).resolves.toHaveLength(1);
        SRTlib.send(']},');

  });
  it('Collects metadata if `fields` is an array', async () => {
        SRTlib.send(`{ "testSuite": "Transloadit/AssemblyOptions", "testName": "Collects%20metadata%20if%20%60fields%60%20is%20an%20array", "fileName": "${__filename}", "calls" : [`);

    function defaultGetAssemblyOptions(file, options) {
      return {
        params: options.params,
        signature: options.signature,
        fields: options.fields
      };
    }
    const options = new AssemblyOptions([{
      id: 1,
      meta: {
        watermark: 'Some text'
      }
    }, {
      id: 2,
      meta: {
        watermark: 'ⓒ Transloadit GmbH'
      }
    }], {
      fields: ['watermark'],
      params: {
        auth: {
          key: 'fake key'
        }
      },
      getAssemblyOptions: defaultGetAssemblyOptions
    });
    const assemblies = await options.build();
    expect(assemblies).toHaveLength(2);
    expect(assemblies[0].options.fields).toMatchObject({
      watermark: 'Some text'
    });
    expect(assemblies[1].options.fields).toMatchObject({
      watermark: 'ⓒ Transloadit GmbH'
    });
        SRTlib.send(']},');

  });
    SRTlib.send(']},');
  SRTlib.endLogger();

});
