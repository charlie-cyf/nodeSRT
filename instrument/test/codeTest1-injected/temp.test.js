var SRTlib = require('../../SRTlib');
function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}
describe("Filter function", () => {
    beforeAll(() => {
    SRTlib.startLogger("/windir/c/Users/presi/Documents/workspace/cs449-projects/nodeSRT/instrument/test/codeTest1", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "Filter%20function", "fileName": "${__filename}", "calls" : [`);
  });

    beforeEach(() => {
    SRTlib.send(`{ "testName": "test in filter", "fileName": "${__filename}", "calls" : [`);
  });

  test("it should filter by a search term (link)", () => {
    const input = [{
      id: 1,
      url: "https://www.url1.dev"
    }, {
      id: 2,
      url: "https://www.url2.dev"
    }, {
      id: 3,
      url: "https://www.link3.dev"
    }];
    const output = [{
      id: 3,
      url: "https://www.link3.dev"
    }];
    expect(filterByTerm(input, "link")).toEqual(output);
  });
  describe("nested Filter function", () => {
        beforeAll(() => {
      SRTlib.startLogger("/windir/c/Users/presi/Documents/workspace/cs449-projects/nodeSRT/instrument/test/codeTest1", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "nested%20Filter%20function", "fileName": "${__filename}", "calls" : [`);
    });

        beforeEach(() => {
      SRTlib.send(`{ "testName": "test in nested filter", "fileName": "${__filename}", "calls" : [`);
    });

    describe("nested nested Filter function", () => {
            beforeAll(() => {
        SRTlib.startLogger("/windir/c/Users/presi/Documents/workspace/cs449-projects/nodeSRT/instrument/test/codeTest1", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "nested%20nested%20Filter%20function", "fileName": "${__filename}", "calls" : [`);
      });

            beforeEach(() => {
        SRTlib.send(`{ "testName": "test in nested nested filter", "fileName": "${__filename}", "calls" : [`);
      });

      test("nested nested it should filter by a search term (link)", () => {
        const input = [{
          id: 1,
          url: "https://www.url1.dev"
        }, {
          id: 2,
          url: "https://www.url2.dev"
        }, {
          id: 3,
          url: "https://www.link3.dev"
        }];
        const output = [{
          id: 3,
          url: "https://www.link3.dev"
        }];
        expect(filterByTerm(input, "link")).toEqual(output);
      });
            afterEach(() => {
        SRTlib.send(`], "endTestName": "test in nested nested filter" },`);
      });

            afterAll(() => {
        SRTlib.send(`], "endTestSuiteName": "nested%20nested%20Filter%20function" },`);
        SRTlib.endLogger();
      });

    });
    test("nested it should filter by a search term (link)", () => {
      const input = [{
        id: 1,
        url: "https://www.url1.dev"
      }, {
        id: 2,
        url: "https://www.url2.dev"
      }, {
        id: 3,
        url: "https://www.link3.dev"
      }];
      const output = [{
        id: 3,
        url: "https://www.link3.dev"
      }];
      expect(filterByTerm(input, "link")).toEqual(output);
    });
        afterEach(() => {
      SRTlib.send(`], "endTestName": "test in nested filter" },`);
    });

        afterAll(() => {
      SRTlib.send(`], "endTestSuiteName": "nested%20Filter%20function" },`);
      SRTlib.endLogger();
    });

  });
  test("nested it should filter by a search term (link)", () => {
    const input = [{
      id: 1,
      url: "https://www.url1.dev"
    }, {
      id: 2,
      url: "https://www.url2.dev"
    }, {
      id: 3,
      url: "https://www.link3.dev"
    }];
    const output = [{
      id: 3,
      url: "https://www.link3.dev"
    }];
    expect(7).toEqual(7);
  });
    afterEach(() => {
    SRTlib.send(`], "endTestName": "test in filter" },`);
  });

    afterAll(() => {
    SRTlib.send(`], "endTestSuiteName": "Filter%20function" },`);
    SRTlib.endLogger();
  });

});
