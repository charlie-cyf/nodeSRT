const SRTlib = require('SRT-util');

(function () {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"emptyKey","fileName":"${__filename}","paramsNumber":0},`);

  var each = [].forEach;
  var doc = document.documentElement;
  var body = document.body;
  var isIndex = body.classList.contains('page-index');
  // On index page
  if (isIndex) {
    IndexPage();
      // On inner pages
} else {
    InnerPage();
  }
  function InnerPage() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"InnerPage","fileName":"${__filename}","paramsNumber":0},`);

    // var main = document.querySelector('.js-MainContent')
    var menuButton = document.querySelector('.js-MenuBtn');
    var header = document.querySelector('.js-MainHeader');
    var menu = document.querySelector('.js-Sidebar');
    var content = document.querySelector('.js-Content');
    var animating = false;
    var allLinks = [];
    // // listen for scroll event to do positioning & highlights
    // window.addEventListener('scroll', updateSidebar)
    // window.addEventListener('resize', updateSidebar)
    function updateSidebar() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"updateSidebar","fileName":"${__filename}","paramsNumber":0},`);

      var top = doc && doc.scrollTop || body.scrollTop;
      var headerHeight = header.offsetHeight;
      if (top > headerHeight - 25) {
        // main.classList.add('fix-sidebar')
        header.classList.add('fix-header');
      } else {
        // main.classList.remove('fix-sidebar')
        header.classList.remove('fix-header');
      }
      if (animating || !allLinks) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"updateSidebar"},');

        return;
      }
      var last;
      for (var i = 0; i < allLinks.length; i++) {
        var link = allLinks[i];
        if (link.offsetTop > top) {
          if (!last) last = link;
          break;
        } else {
          last = link;
        }
      }
      if (last) {
        setActive(last.id);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"updateSidebar","paramsNumber":0},');

    }
    function makeLink(h) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"makeLink","fileName":"${__filename}","paramsNumber":1},`);

      var link = document.createElement('li');
      var text = h.textContent.replace(/\(.*\)$/, '');
      // make sure the ids are link-able...
      h.id = h.id.replace(/\(.*\)$/, '').replace(/\$/, '');
      link.innerHTML = '<a class="section-link" data-scroll href="#' + h.id + '">' + text + '</a>';
            SRTlib.send('{"type":"FUNCTIONEND","function":"makeLink"},');

      return link;
            SRTlib.send('{"type":"FUNCTIONEND","function":"makeLink","paramsNumber":1},');

    }
    function collectH3s(h) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"collectH3s","fileName":"${__filename}","paramsNumber":1},`);

      var h3s = [];
      var next = h.nextSibling;
      while (next && next.tagName !== 'H2') {
        if (next.tagName === 'H3') {
          h3s.push(next);
        }
        next = next.nextSibling;
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"collectH3s"},');

      return h3s;
            SRTlib.send('{"type":"FUNCTIONEND","function":"collectH3s","paramsNumber":1},');

    }
    function makeSubLinks(h3s, small) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"makeSubLinks","fileName":"${__filename}","paramsNumber":2},`);

      var container = document.createElement('ul');
      if (small) {
        container.className = 'menu-sub';
      }
      h3s.forEach(function (h) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"h3s.forEach","fileName":"${__filename}","paramsNumber":1},`);

        container.appendChild(makeLink(h));
                SRTlib.send('{"type":"FUNCTIONEND","function":"h3s.forEach"},');

      });
            SRTlib.send('{"type":"FUNCTIONEND","function":"makeSubLinks"},');

      return container;
            SRTlib.send('{"type":"FUNCTIONEND","function":"makeSubLinks","paramsNumber":2},');

    }
    function setActive(id) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"setActive","fileName":"${__filename}","paramsNumber":1},`);

      var previousActive = menu.querySelector('.section-link.active');
      var currentActive = typeof id === 'string' ? menu.querySelector('.section-link[href="#' + id + '"]') : id;
      if (currentActive !== previousActive) {
        if (previousActive) previousActive.classList.remove('active');
        currentActive.classList.add('active');
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"setActive","paramsNumber":1},');

    }
    function makeLinkClickable(link) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"makeLinkClickable","fileName":"${__filename}","paramsNumber":1},`);

      if (link.getAttribute('data-scroll') === 'no') {
                SRTlib.send('{"type":"FUNCTIONEND","function":"makeLinkClickable"},');

        return;
      }
      var wrapper = document.createElement('a');
      wrapper.href = '#' + link.id;
      wrapper.setAttribute('data-scroll', '');
      link.parentNode.insertBefore(wrapper, link);
      wrapper.appendChild(link);
            SRTlib.send('{"type":"FUNCTIONEND","function":"makeLinkClickable","paramsNumber":1},');

    }
    menuButton.addEventListener('click', function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"menuButton.addEventListener","fileName":"${__filename}","paramsNumber":0},`);

      menu.classList.toggle('is-open');
            SRTlib.send('{"type":"FUNCTIONEND","function":"menuButton.addEventListener"},');

    });
    body.addEventListener('click', function (e) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"body.addEventListener","fileName":"${__filename}","paramsNumber":1},`);

      if (e.target !== menuButton && !menu.contains(e.target)) {
        menu.classList.remove('is-open');
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"body.addEventListener"},');

    });
    function initSubHeaders() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"initSubHeaders","fileName":"${__filename}","paramsNumber":0},`);

      // build sidebar
      var currentPageAnchor = menu.querySelector('.sidebar-link.current');
      var isDocs = content.classList.contains('docs');
      if (!isDocs) {
                SRTlib.send('{"type":"FUNCTIONEND","function":"initSubHeaders"},');

        return;
      }
      if (currentPageAnchor) {
        var sectionContainer;
        // if (false && isAPI) {
        // sectionContainer = document.querySelector('.menu-root')
        // } else {
        // sectionContainer = document.createElement('ul')
        // sectionContainer.className = 'menu-sub'
        // currentPageAnchor.parentNode.appendChild(sectionContainer)
        // }
        sectionContainer = document.createElement('ul');
        sectionContainer.className = 'menu-sub';
        currentPageAnchor.parentNode.appendChild(sectionContainer);
        var h2s = content.querySelectorAll('h2');
        if (h2s.length) {
          each.call(h2s, function (h) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"each.call","fileName":"${__filename}","paramsNumber":1},`);

            sectionContainer.appendChild(makeLink(h));
            var h3s = collectH3s(h);
            allLinks.push(h);
            allLinks.push.apply(allLinks, h3s);
            if (h3s.length) {
              sectionContainer.appendChild(makeSubLinks(h3s, isDocs));
            }
                        SRTlib.send('{"type":"FUNCTIONEND","function":"each.call"},');

          });
        } else {
          var h3s = content.querySelectorAll('h3');
          each.call(h3s, function (h) {
                        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"each.call2","fileName":"${__filename}","paramsNumber":1},`);

            sectionContainer.appendChild(makeLink(h));
            allLinks.push(h);
                        SRTlib.send('{"type":"FUNCTIONEND","function":"each.call2"},');

          });
        }
        sectionContainer.addEventListener('click', function (e) {
                    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"sectionContainer.addEventListener","fileName":"${__filename}","paramsNumber":1},`);

          e.preventDefault();
          if (e.target.classList.contains('section-link')) {
            menu.classList.remove('open');
            setActive(e.target);
            animating = true;
            setTimeout(function () {
                            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"sectionContainer.addEventListener.setTimeout","fileName":"${__filename}","paramsNumber":0},`);

              animating = false;
                            SRTlib.send('{"type":"FUNCTIONEND","function":"sectionContainer.addEventListener.setTimeout"},');

            }, 400);
          }
                    SRTlib.send('{"type":"FUNCTIONEND","function":"sectionContainer.addEventListener"},');

        }, true);
        // make links clickable
        allLinks.forEach(makeLinkClickable);
        // init smooth scroll
        window.smoothScroll.init({
          speed: 400
          // offset: window.innerWidth > 720
          // ? 40
          // : 58
        });
      }
      // listen for scroll event to do positioning & highlights
      window.addEventListener('scroll', updateSidebar);
      window.addEventListener('resize', updateSidebar);
            SRTlib.send('{"type":"FUNCTIONEND","function":"initSubHeaders","paramsNumber":0},');

    }
    var isBlog = menu.classList.contains('is-blog');
    if (!isBlog) {
      initSubHeaders();
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"InnerPage","paramsNumber":0},');

  }
  function IndexPage() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"IndexPage","fileName":"${__filename}","paramsNumber":0},`);

    // Tabs
    window.addEventListener('load', function () {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"window.addEventListener","fileName":"${__filename}","paramsNumber":0},`);

      var tabs = document.querySelectorAll('.Tabs-link');
      function myTabClicks(tabClickEvent) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"myTabClicks","fileName":"${__filename}","paramsNumber":1},`);

        for (var i = 0; i < tabs.length; i++) {
          tabs[i].classList.remove('Tabs-link--active');
        }
        var clickedTab = tabClickEvent.currentTarget;
        clickedTab.classList.add('Tabs-link--active');
        tabClickEvent.preventDefault();
        tabClickEvent.stopPropagation();
        var myContentPanes = document.querySelectorAll('.TabPane');
        for (i = 0; i < myContentPanes.length; i++) {
          myContentPanes[i].classList.remove('TabPane--active');
        }
        // storing reference to event.currentTarget, otherwise we get
        // all the children like SVGs, instead of our target — the link element
        var anchorReference = tabClickEvent.currentTarget;
        var activePaneId = anchorReference.getAttribute('href');
        var activePane = document.querySelector(activePaneId);
        activePane.classList.add('TabPane--active');
                SRTlib.send('{"type":"FUNCTIONEND","function":"myTabClicks","paramsNumber":1},');

      }
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', myTabClicks);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"window.addEventListener"},');

    });
    var tagline = document.querySelector('.MainHeader-tagline');
    var taglinePart = document.querySelector('.MainHeader-taglinePart');
    var taglineList = document.querySelector('.MainHeader-taglineList');
    var taglineCounter = taglineList.children.length;
    function shuffleTaglines() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"shuffleTaglines","fileName":"${__filename}","paramsNumber":0},`);

      for (var i = taglineList.children.length; i >= 0; i--) {
        taglineList.appendChild(taglineList.children[Math.random() * i | 0]);
      }
            SRTlib.send('{"type":"FUNCTIONEND","function":"shuffleTaglines","paramsNumber":0},');

    }
    function loopTaglines() {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"loopTaglines","fileName":"${__filename}","paramsNumber":0},`);

      taglineCounter--;
      if (taglineCounter >= 0) {
        var taglineText = taglineList.children[taglineCounter].textContent;
        showTagline(taglineText);
                SRTlib.send('{"type":"FUNCTIONEND","function":"loopTaglines"},');

        return;
      }
      taglineCounter = taglineList.children.length;
      loopTaglines();
            SRTlib.send('{"type":"FUNCTIONEND","function":"loopTaglines","paramsNumber":0},');

    }
    function showTagline(taglineText) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"showTagline","fileName":"${__filename}","paramsNumber":1},`);

      tagline.classList.remove('is-visible');
      setTimeout(function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"setTimeout","fileName":"${__filename}","paramsNumber":0},`);

        taglinePart.innerHTML = taglineText;
        tagline.classList.add('is-visible');
                SRTlib.send('{"type":"FUNCTIONEND","function":"setTimeout"},');

      }, 800);
            SRTlib.send('{"type":"FUNCTIONEND","function":"showTagline","paramsNumber":1},');

    }
    shuffleTaglines();
    loopTaglines();
    setInterval(loopTaglines, 4000);
        SRTlib.send('{"type":"FUNCTIONEND","function":"IndexPage","paramsNumber":0},');

  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"emptyKey"},');

  // Search with SwiftType
  // @todo get our own swifttype
  // (function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
  // (w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
  // e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);
  // })(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');
  // _st('install','HgpxvBc7pUaPUWmG9sgv','2.0.0');
  // version select
  // document.querySelector('.version-select').addEventListener('change', function (e) {
  // var version = e.target.value
  // if (version.indexOf('1.') !== 0) {
  // version = version.replace('.', '')
  // var section = window.location.pathname.match(/\/(\w+?)\//)[1]
  // window.location.assign('http://' + version + '.uppy.io/' + section + '/')
  // } else {
  // // TODO when 1.x is out
  // }
  // })
})();
