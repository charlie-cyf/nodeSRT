import SRTlib from 'SRTutil';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import deepClone from 'ramda/src/clone';
import { shouldMatchSnapshot } from '@bbc/psammead-test-helpers';
import loggerMock from '#testHelpers/loggerMock';
import { MEDIA_MISSING } from '#lib/logger.const';
import { RequestContextProvider } from '#contexts/RequestContext';
import { ServiceContextProvider } from '#contexts/ServiceContext';
import { completeItem, itemWithOvertypedSummary, audioItem, videoItem, liveItem, guideLinkItem, audioItemNoDuration, standardLinkItem, featureLinkItem, podcastLinkItem, itemWithoutImage, indexAlsosItem, mapWithMediaError, mapWithoutMediaError } from './helpers/fixtureData';
import StoryPromoContainer from '.';
const onlyOneRelatedItem = { ...indexAlsosItem,
  relatedItems: [indexAlsosItem.relatedItems[0]]
};
const fixtures = {
  standard: completeItem,
  standardOvertypedSummary: itemWithOvertypedSummary,
  video: videoItem,
  audio: audioItem,
  live: liveItem,
  'audio with no duration': audioItemNoDuration,
  standardLink: standardLinkItem,
  featureLink: featureLinkItem,
  'item without an image': itemWithoutImage,
  podcastLink: podcastLinkItem
}; // eslint-disable-next-line react/prop-types

const WrappedStoryPromo = ({
  service,
  platform,
  ...props
}) => <ServiceContextProvider service={service}>
    <RequestContextProvider bbcOrigin="https://www.test.bbc.co.uk" id="c0000000000o" isAmp={platform === 'amp'} pageType="article" service={service} statusCode={200} pathname="/pathname">
      <StoryPromoContainer {...props} />
    </RequestContextProvider>
  </ServiceContextProvider>;

WrappedStoryPromo.defaultProps = {
  service: 'igbo'
};
describe('StoryPromo Container', () => {
  beforeAll(() => {
    SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
    SRTlib.send(`{ "testSuiteName": "StoryPromo%20Container", "fileName": "/StoryPromoIndex.test.jsx", "calls" : [`);
  });
  Object.entries(fixtures).forEach(([name, data]) => {
    shouldMatchSnapshot(`should render ${name} correctly for canonical`, <WrappedStoryPromo platform="canonical" item={data} />);
    shouldMatchSnapshot(`should render ${name} correctly for amp`, <WrappedStoryPromo platform="amp" item={data} />);
    shouldMatchSnapshot(`should render ${name} promoType top on amp`, <WrappedStoryPromo platform="amp" item={data} promoType="top" />);
    shouldMatchSnapshot(`should render ${name} promoType leading on amp`, <WrappedStoryPromo platform="amp" item={data} promoType="leading" />);
  });
  shouldMatchSnapshot(`should render multiple Index Alsos correctly for canonical`, <WrappedStoryPromo platform="canonical" item={indexAlsosItem} promoType="top" />);
  shouldMatchSnapshot(`should render full width promos correctly for canonical`, <WrappedStoryPromo platform="canonical" item={completeItem} promoType="top" isSingleColumnLayout />);
  shouldMatchSnapshot(`should render full width promos correctly for amp`, <WrappedStoryPromo platform="amp" item={completeItem} promoType="top" isSingleColumnLayout />);
  describe('assertion tests', () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "assertion%20tests", "fileName": "/StoryPromoIndex.test.jsx", "calls" : [`);
    });
    let cpsItem;
    let overtypedSummaryItem;
    let assetTypeItem;
    let cpsContainer;
    let overtypedSummaryContainer;
    let assetTypeContainer;
    beforeEach(() => {
      SRTlib.send(`{"type":"TESTSTART","testName":"beforeEach","fileName":"/StoryPromoIndex.test.jsx"},`);
      cpsItem = deepClone(completeItem);
      cpsContainer = render(<WrappedStoryPromo item={cpsItem} />).container;
      overtypedSummaryItem = deepClone(itemWithOvertypedSummary);
      overtypedSummaryContainer = render(<WrappedStoryPromo item={overtypedSummaryItem} />).container;
      assetTypeItem = deepClone(standardLinkItem);
      assetTypeContainer = render(<WrappedStoryPromo item={assetTypeItem} />).container;
    });
    afterEach(() => {
      cleanup();
    });
    it('should render h3, a, p, time', () => {
      SRTlib.send(`{"type":"TESTSTART","testName":"should render h3, a, p, time","fileName":"/StoryPromoIndex.test.jsx"},`);
      expect(cpsContainer.querySelectorAll('h3 a')[0].innerHTML).toEqual(cpsItem.headlines.headline);
      expect(cpsContainer.getElementsByTagName('p')[0].innerHTML).toEqual(cpsItem.summary);
      expect(cpsContainer.getElementsByTagName('time')[0].innerHTML).toEqual('2 Mee 2019');
      expect(overtypedSummaryContainer.getElementsByTagName('p')[0].innerHTML).toEqual(itemWithOvertypedSummary.overtypedSummary);
      expect(assetTypeContainer.querySelectorAll('h3 a')[0].innerHTML).toEqual(assetTypeItem.name);
      expect(assetTypeContainer.getElementsByTagName('p')[0].innerHTML).toEqual(assetTypeItem.summary);
      expect(assetTypeContainer.getElementsByTagName('time')[0].innerHTML).toEqual('7 Ọgọọst 2019');
      const newsContainer = render(<WrappedStoryPromo service="news" item={cpsItem} />).container;
      expect(newsContainer.getElementsByTagName('time')[0].innerHTML).toEqual('2 May 2019');
      const yorubaContainer = render(<WrappedStoryPromo service="yoruba" item={cpsItem} />).container;
      expect(yorubaContainer.getElementsByTagName('time')[0].innerHTML).toEqual('2 Èbibi 2019');
    });
    it('should render relative time if timestamp < 10 hours', () => {
      SRTlib.send(`{"type":"TESTSTART","testName":"should render relative time if timestamp < 10 hours","fileName":"/StoryPromoIndex.test.jsx"},`);
      const oneMinuteAgo = Date.now() - 60 * 1000;
      const newItem = { ...cpsItem,
        timestamp: oneMinuteAgo
      };
      const newsContainer = render(<WrappedStoryPromo service="news" item={newItem} />).container;
      expect(newsContainer.getElementsByTagName('time')[0].innerHTML).toEqual('1 minute ago');
      const yorubaContainer = render(<WrappedStoryPromo service="yoruba" item={newItem} />).container;
      expect(yorubaContainer.getElementsByTagName('time')[0].innerHTML).toEqual('ìṣẹ́jú kan sẹ́yìn');
    });
    [{
      service: 'pashto',
      expectationFirstJan2020: '۱۱ مرغومی ۱۳۹۸ - ۱ جنوري ۲۰۲۰'
    }, {
      service: 'persian',
      expectationFirstJan2020: '۱۱ دی ۱۳۹۸ - ۱ ژانویه ۲۰۲۰'
    }].forEach(({
      service,
      expectationFirstJan2020
    }) => {
      it(`should render time element with multiple calendars for ${service} Story Promo`, () => {
        SRTlib.send(`{"type":"TESTSTART","testName":"should render time element with multiple calendars for ${service} Story Promo","fileName":"/StoryPromoIndex.test.jsx"},`);
        const firstJan2020 = 1577836800000;
        const newItem = { ...cpsItem,
          timestamp: firstJan2020
        };
        const {
          container
        } = render(<WrappedStoryPromo service={service} item={newItem} />);
        expect(container.getElementsByTagName('time')[0].innerHTML).toEqual(expectationFirstJan2020);
      });
    });
    it('should render img with src & alt when platform is canonical', () => {
      SRTlib.send(`{"type":"TESTSTART","testName":"should render img with src & alt when platform is canonical","fileName":"/StoryPromoIndex.test.jsx"},`);
      const {
        container
      } = render(<WrappedStoryPromo item={cpsItem} lazyLoadImage={false} />);
      expect(container.getElementsByTagName('img').length).toEqual(1);
      expect(container.getElementsByTagName('amp-img').length).toEqual(0);
      expect(container.getElementsByTagName('img')[0].getAttribute('src')).toEqual(`https://ichef.bbci.co.uk/news/660${cpsItem.indexImage.path}`);
      expect(container.getElementsByTagName('img')[0].getAttribute('alt')).toEqual(cpsItem.indexImage.altText);
    });
    it('should render amp-img with src & alt when platform is amp', () => {
      SRTlib.send(`{"type":"TESTSTART","testName":"should render amp-img with src & alt when platform is amp","fileName":"/StoryPromoIndex.test.jsx"},`);
      const {
        container
      } = render(<WrappedStoryPromo platform="amp" item={cpsItem} />);
      expect(container.getElementsByTagName('amp-img').length).toEqual(1);
      expect(container.getElementsByTagName('img').length).toEqual(0);
      expect(container.getElementsByTagName('amp-img')[0].getAttribute('src')).toEqual(`https://ichef.bbci.co.uk/news/660${cpsItem.indexImage.path}`);
      expect(container.getElementsByTagName('amp-img')[0].getAttribute('alt')).toEqual(cpsItem.indexImage.altText);
    });
    describe('With no headline provided', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "With%20no%20headline%20provided", "fileName": "/StoryPromoIndex.test.jsx", "calls" : [`);
      });
      beforeEach(() => {
        SRTlib.send(`{"type":"TESTSTART","testName":"beforeEach","fileName":"/StoryPromoIndex.test.jsx"},`);
        delete cpsItem.headlines;
        delete assetTypeItem.name;
      });
      it('should not include a headline element', () => {
        SRTlib.send(`{"type":"TESTSTART","testName":"should not include a headline element","fileName":"/StoryPromoIndex.test.jsx"},`);
        cpsContainer = render(<WrappedStoryPromo item={cpsItem} />).container;
        assetTypeContainer = render(<WrappedStoryPromo item={assetTypeItem} />).container;
        expect(cpsContainer.getElementsByTagName('h3').length).toEqual(0);
        expect(assetTypeContainer.getElementsByTagName('h3').length).toEqual(0);
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "With%20no%20headline%20provided" },`);
        await SRTlib.endLogger();
      });
    });
    describe('With no summary provided', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "With%20no%20summary%20provided", "fileName": "/StoryPromoIndex.test.jsx", "calls" : [`);
      });
      beforeEach(() => {
        SRTlib.send(`{"type":"TESTSTART","testName":"beforeEach","fileName":"/StoryPromoIndex.test.jsx"},`);
        delete cpsItem.summary;
        delete cpsItem.indexImage.copyrightHolder;
        delete assetTypeItem.summary;
      });
      it('should not include any paragraph element', () => {
        SRTlib.send(`{"type":"TESTSTART","testName":"should not include any paragraph element","fileName":"/StoryPromoIndex.test.jsx"},`);
        cpsContainer = render(<WrappedStoryPromo item={cpsItem} />).container;
        assetTypeContainer = render(<WrappedStoryPromo item={assetTypeItem} />).container;
        expect(cpsContainer.getElementsByTagName('p').length).toEqual(0);
        expect(assetTypeContainer.getElementsByTagName('p').length).toEqual(0);
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "With%20no%20summary%20provided" },`);
        await SRTlib.endLogger();
      });
    });
    describe('With no timestamp provided', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "With%20no%20timestamp%20provided", "fileName": "/StoryPromoIndex.test.jsx", "calls" : [`);
      });
      beforeEach(() => {
        SRTlib.send(`{"type":"TESTSTART","testName":"beforeEach","fileName":"/StoryPromoIndex.test.jsx"},`);
        delete cpsItem.timestamp;
        delete assetTypeItem.timestamp;
      });
      it('should not include a time element', () => {
        SRTlib.send(`{"type":"TESTSTART","testName":"should not include a time element","fileName":"/StoryPromoIndex.test.jsx"},`);
        cpsContainer = render(<WrappedStoryPromo item={cpsItem} />).container;
        assetTypeContainer = render(<WrappedStoryPromo item={assetTypeItem} />).container;
        expect(cpsContainer.getElementsByTagName('time').length).toEqual(0);
        expect(assetTypeContainer.getElementsByTagName('time').length).toEqual(0);
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "With%20no%20timestamp%20provided" },`);
        await SRTlib.endLogger();
      });
    });
    describe('With no indexImage provided', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "With%20no%20indexImage%20provided", "fileName": "/StoryPromoIndex.test.jsx", "calls" : [`);
      });
      beforeEach(() => {
        SRTlib.send(`{"type":"TESTSTART","testName":"beforeEach","fileName":"/StoryPromoIndex.test.jsx"},`);
        delete cpsItem.indexImage;
        delete assetTypeItem.indexImage;
      });
      it('should not include an img element', () => {
        SRTlib.send(`{"type":"TESTSTART","testName":"should not include an img element","fileName":"/StoryPromoIndex.test.jsx"},`);
        expect(cpsContainer.getElementsByTagName('img').length).toEqual(0);
        expect(assetTypeContainer.getElementsByTagName('img').length).toEqual(0);
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "With%20no%20indexImage%20provided" },`);
        await SRTlib.endLogger();
      });
    });
    describe('With different timezones', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "With%20different%20timezones", "fileName": "/StoryPromoIndex.test.jsx", "calls" : [`);
      });
      beforeEach(() => {
        SRTlib.send(`{"type":"TESTSTART","testName":"beforeEach","fileName":"/StoryPromoIndex.test.jsx"},`);
        cpsItem.timestamp = 1565035200000;
      });
      it('should show the correct local date', () => {
        SRTlib.send(`{"type":"TESTSTART","testName":"should show the correct local date","fileName":"/StoryPromoIndex.test.jsx"},`);
        const {
          container: newsContainer
        } = render(<WrappedStoryPromo item={cpsItem} service="news" />);
        const {
          textContent: newsTime,
          dateTime: newsDate
        } = newsContainer.querySelector('time');
        expect(newsTime).toEqual('5 August 2019');
        expect(newsDate).toEqual('2019-08-05');
        const {
          container: bengaliContainer
        } = render(<WrappedStoryPromo item={cpsItem} service="bengali" />);
        const {
          textContent: bengaliTime,
          dateTime: bengaliDate
        } = bengaliContainer.querySelector('time');
        expect(bengaliTime).toEqual('৬ অগাস্ট ২০১৯');
        expect(bengaliDate).toEqual('2019-08-06');
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "With%20different%20timezones" },`);
        await SRTlib.endLogger();
      });
    });
    describe('With Index Alsos', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "With%20Index%20Alsos", "fileName": "/StoryPromoIndex.test.jsx", "calls" : [`);
      });
      it('should render a list with three related items', () => {
        SRTlib.send(`{"type":"TESTSTART","testName":"should render a list with three related items","fileName":"/StoryPromoIndex.test.jsx"},`);
        const {
          container
        } = render(<WrappedStoryPromo item={indexAlsosItem} promoType="top" />);
        expect(container.getElementsByTagName('ul')).toHaveLength(1);
        expect(container.getElementsByTagName('li')).toHaveLength(3);
      });
      it('should render a related item not contained within a list', () => {
        SRTlib.send(`{"type":"TESTSTART","testName":"should render a related item not contained within a list","fileName":"/StoryPromoIndex.test.jsx"},`);
        const {
          container
        } = render(<WrappedStoryPromo item={onlyOneRelatedItem} promoType="top" />);
        expect(container.getElementsByTagName('ul')).toHaveLength(0);
        expect(container.getElementsByTagName('li')).toHaveLength(0);
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "With%20Index%20Alsos" },`);
        await SRTlib.endLogger();
      });
    });
    describe('Live Story Promo', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "Live%20Story%20Promo", "fileName": "/StoryPromoIndex.test.jsx", "calls" : [`);
      });
      it('should render a live story promo with live text', () => {
        SRTlib.send(`{"type":"TESTSTART","testName":"should render a live story promo with live text","fileName":"/StoryPromoIndex.test.jsx"},`);
        const {
          getByText
        } = render(<WrappedStoryPromo item={liveItem} />);
        const label = getByText('NA EME UGBU A');
        expect(label).toBeInTheDocument();
        expect(label).not.toHaveAttribute('aria-hidden', 'true');
      });
      it('should render a live story promo as aria-hidden, with visually hidden text if the label is in english', () => {
        SRTlib.send(`{"type":"TESTSTART","testName":"should render a live story promo as aria-hidden, with visually hidden text if the label is in english","fileName":"/StoryPromoIndex.test.jsx"},`);
        const {
          getByText
        } = render(<WrappedStoryPromo item={liveItem} service="news" />);
        const label = getByText('LIVE');
        expect(label).toBeInTheDocument();
        expect(label).toHaveAttribute('aria-hidden', 'true');
      });
      it('should render a live story promo without a timestamp', () => {
        SRTlib.send(`{"type":"TESTSTART","testName":"should render a live story promo without a timestamp","fileName":"/StoryPromoIndex.test.jsx"},`);
        const {
          container
        } = render(<WrappedStoryPromo item={liveItem} />);
        const time = container.querySelector('time');
        expect(time).toEqual(null);
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "Live%20Story%20Promo" },`);
        await SRTlib.endLogger();
      });
    });
    describe('Story Promo of type Guide', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "Story%20Promo%20of%20type%20Guide", "fileName": "/StoryPromoIndex.test.jsx", "calls" : [`);
      });
      it('should not render a timestamp', () => {
        SRTlib.send(`{"type":"TESTSTART","testName":"should not render a timestamp","fileName":"/StoryPromoIndex.test.jsx"},`);
        const {
          container
        } = render(<WrappedStoryPromo item={guideLinkItem} />);
        expect(container.getElementsByTagName('time').length).toEqual(0);
      });
      it('should not render a heading tag', () => {
        SRTlib.send(`{"type":"TESTSTART","testName":"should not render a heading tag","fileName":"/StoryPromoIndex.test.jsx"},`);
        const {
          container
        } = render(<WrappedStoryPromo item={guideLinkItem} />);
        expect(container.getElementsByTagName('h3').length).toEqual(0);
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "Story%20Promo%20of%20type%20Guide" },`);
        await SRTlib.endLogger();
      });
    });
    describe('Recommendation Promo', () => {
      beforeAll(() => {
        SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
        SRTlib.send(`{ "testSuiteName": "Recommendation%20Promo", "fileName": "/StoryPromoIndex.test.jsx", "calls" : [`);
      });
      it('should render headline as a div instead of an h3', () => {
        SRTlib.send(`{"type":"TESTSTART","testName":"should render headline as a div instead of an h3","fileName":"/StoryPromoIndex.test.jsx"},`);
        const {
          container
        } = render(<WrappedStoryPromo platform="canonical" item={fixtures.standard} isRecommendation />);
        expect(container.querySelector('h3')).toBeNull();
        expect(container.querySelectorAll('div a')[0].innerHTML).toEqual(cpsItem.headlines.headline);
      });
      afterAll(async () => {
        SRTlib.send(`], "endTestSuiteName": "Recommendation%20Promo" },`);
        await SRTlib.endLogger();
      });
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "assertion%20tests" },`);
      await SRTlib.endLogger();
    });
  });
  describe('given there is a CPS MAP block with a media error', () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "given%20there%20is%20a%20CPS%20MAP%20block%20with%20a%20media%20error", "fileName": "/StoryPromoIndex.test.jsx", "calls" : [`);
    });
    beforeEach(() => {
      SRTlib.send(`{"type":"TESTSTART","testName":"beforeEach","fileName":"/StoryPromoIndex.test.jsx"},`);
      jest.clearAllMocks();
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    [{
      item: mapWithMediaError,
      platform: 'amp'
    }, {
      item: mapWithMediaError,
      platform: 'canonical'
    }].forEach(({
      item,
      platform
    }) => {
      it(`when we render for ${platform}, it should log a warning`, () => {
        SRTlib.send(`{"type":"TESTSTART","testName":"when we render for ${platform}, it should log a warning","fileName":"/StoryPromoIndex.test.jsx"},`);
        render(<WrappedStoryPromo item={item} platform={platform} />);
        expect(loggerMock.warn).toHaveBeenCalledWith(MEDIA_MISSING, {
          url: '/pashto/front_page',
          mediaStatuscode: 404,
          mediaBlock: mapWithMediaError.media
        });
      });
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "given%20there%20is%20a%20CPS%20MAP%20block%20with%20a%20media%20error" },`);
      await SRTlib.endLogger();
    });
  });
  describe('given there is a CPS MAP block without a media error', () => {
    beforeAll(() => {
      SRTlib.startLogger("/home/centos/nodeSRT/instrument/test/codeTest2", "http://localhost:8888/instrument-message");
      SRTlib.send(`{ "testSuiteName": "given%20there%20is%20a%20CPS%20MAP%20block%20without%20a%20media%20error", "fileName": "/StoryPromoIndex.test.jsx", "calls" : [`);
    });
    beforeEach(() => {
      SRTlib.send(`{"type":"TESTSTART","testName":"beforeEach","fileName":"/StoryPromoIndex.test.jsx"},`);
      jest.clearAllMocks();
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    [{
      item: mapWithoutMediaError,
      platform: 'amp'
    }, {
      item: mapWithoutMediaError,
      platform: 'canonical'
    }].forEach(({
      item,
      platform
    }) => {
      it(`when we render for ${platform}, it should *not* log a warning`, () => {
        SRTlib.send(`{"type":"TESTSTART","testName":"when we render for ${platform}, it should *not* log a warning","fileName":"/StoryPromoIndex.test.jsx"},`);
        render(<WrappedStoryPromo item={item} platform={platform} />);
        expect(loggerMock.warn).not.toHaveBeenCalled();
      });
    });
    afterAll(async () => {
      SRTlib.send(`], "endTestSuiteName": "given%20there%20is%20a%20CPS%20MAP%20block%20without%20a%20media%20error" },`);
      await SRTlib.endLogger();
    });
  });
  afterAll(async () => {
    SRTlib.send(`], "endTestSuiteName": "StoryPromo%20Container" },`);
    await SRTlib.endLogger();
  });
});