var SRTlib = require('SRT-util');
(function () {
    SRTlib.send(`{ "anonymous": true, "function": "emptyKey8", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  var each = [].forEach;
  var doc = document.documentElement;
  var body = document.body;
  var isIndex = body.classList.contains('page-index');
  if (isIndex) {
    IndexPage();
  } else {
    InnerPage();
  }
  function InnerPage() {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var menuButton = document.querySelector('.js-MenuBtn');
    var header = document.querySelector('.js-MainHeader');
    var menu = document.querySelector('.js-Sidebar');
    var content = document.querySelector('.js-Content');
    var animating = false;
    var allLinks = [];
    function updateSidebar() {
            SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var top = doc && doc.scrollTop || body.scrollTop;
      var headerHeight = header.offsetHeight;
      if (top > headerHeight - 25) {
        header.classList.add('fix-header');
      } else {
        header.classList.remove('fix-header');
      }
      if (animating || !allLinks) {
                SRTlib.send("]},");

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
            SRTlib.send("]},");

    }
    function makeLink(h) {
            SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var link = document.createElement('li');
      var text = h.textContent.replace(/\(.*\)$/, '');
      h.id = h.id.replace(/\(.*\)$/, '').replace(/\$/, '');
      link.innerHTML = '<a class="section-link" data-scroll href="#' + h.id + '">' + text + '</a>';
            SRTlib.send("]},");

      return link;
            SRTlib.send("]},");

    }
    function collectH3s(h) {
            SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var h3s = [];
      var next = h.nextSibling;
      while (next && next.tagName !== 'H2') {
        if (next.tagName === 'H3') {
          h3s.push(next);
        }
        next = next.nextSibling;
      }
            SRTlib.send("]},");

      return h3s;
            SRTlib.send("]},");

    }
    function makeSubLinks(h3s, small) {
            SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      var container = document.createElement('ul');
      if (small) {
        container.className = 'menu-sub';
      }
      h3s.forEach(function (h) {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        container.appendChild(makeLink(h));
                SRTlib.send("]},");

      });
            SRTlib.send("]},");

      return container;
            SRTlib.send("]},");

    }
    function setActive(id) {
            SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var previousActive = menu.querySelector('.section-link.active');
      var currentActive = typeof id === 'string' ? menu.querySelector('.section-link[href="#' + id + '"]') : id;
      if (currentActive !== previousActive) {
        if (previousActive) previousActive.classList.remove('active');
        currentActive.classList.add('active');
      }
            SRTlib.send("]},");

    }
    function makeLinkClickable(link) {
            SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (link.getAttribute('data-scroll') === 'no') {
                SRTlib.send("]},");

        return;
      }
      var wrapper = document.createElement('a');
      wrapper.href = '#' + link.id;
      wrapper.setAttribute('data-scroll', '');
      link.parentNode.insertBefore(wrapper, link);
      wrapper.appendChild(link);
            SRTlib.send("]},");

    }
    menuButton.addEventListener('click', function () {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      menu.classList.toggle('is-open');
            SRTlib.send("]},");

    });
    body.addEventListener('click', function (e) {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey3", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      if (e.target !== menuButton && !menu.contains(e.target)) {
        menu.classList.remove('is-open');
      }
            SRTlib.send("]},");

    });
    function initSubHeaders() {
            SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var currentPageAnchor = menu.querySelector('.sidebar-link.current');
      var isDocs = content.classList.contains('docs');
      if (!isDocs) {
                SRTlib.send("]},");

        return;
      }
      if (currentPageAnchor) {
        var sectionContainer;
        sectionContainer = document.createElement('ul');
        sectionContainer.className = 'menu-sub';
        currentPageAnchor.parentNode.appendChild(sectionContainer);
        var h2s = content.querySelectorAll('h2');
        if (h2s.length) {
          each.call(h2s, function (h) {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey4", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            sectionContainer.appendChild(makeLink(h));
            var h3s = collectH3s(h);
            allLinks.push(h);
            allLinks.push.apply(allLinks, h3s);
            if (h3s.length) {
              sectionContainer.appendChild(makeSubLinks(h3s, isDocs));
            }
                        SRTlib.send("]},");

          });
        } else {
          var h3s = content.querySelectorAll('h3');
          each.call(h3s, function (h) {
                        SRTlib.send(`{ "anonymous": true, "function": "emptyKey5", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

            sectionContainer.appendChild(makeLink(h));
            allLinks.push(h);
                        SRTlib.send("]},");

          });
        }
        sectionContainer.addEventListener('click', function (e) {
                    SRTlib.send(`{ "anonymous": true, "function": "emptyKey6", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

          e.preventDefault();
          if (e.target.classList.contains('section-link')) {
            menu.classList.remove('open');
            setActive(e.target);
            animating = true;
            setTimeout(function () {
                            SRTlib.send(`{ "anonymous": true, "function": "setTimeout", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

              animating = false;
                            SRTlib.send("]},");

            }, 400);
          }
                    SRTlib.send("]},");

        }, true);
        allLinks.forEach(makeLinkClickable);
        window.smoothScroll.init({
          speed: 400
        });
      }
      window.addEventListener('scroll', updateSidebar);
      window.addEventListener('resize', updateSidebar);
            SRTlib.send("]},");

    }
    var isBlog = menu.classList.contains('is-blog');
    if (!isBlog) {
      initSubHeaders();
    }
        SRTlib.send("]},");

  }
  function IndexPage() {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    window.addEventListener('load', function () {
            SRTlib.send(`{ "anonymous": true, "function": "emptyKey7", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      var tabs = document.querySelectorAll('.Tabs-link');
      function myTabClicks(tabClickEvent) {
                SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
        var anchorReference = tabClickEvent.currentTarget;
        var activePaneId = anchorReference.getAttribute('href');
        var activePane = document.querySelector(activePaneId);
        activePane.classList.add('TabPane--active');
                SRTlib.send("]},");

      }
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', myTabClicks);
      }
            SRTlib.send("]},");

    });
    var tagline = document.querySelector('.MainHeader-tagline');
    var taglinePart = document.querySelector('.MainHeader-taglinePart');
    var taglineList = document.querySelector('.MainHeader-taglineList');
    var taglineCounter = taglineList.children.length;
    function shuffleTaglines() {
            SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      for (var i = taglineList.children.length; i >= 0; i--) {
        taglineList.appendChild(taglineList.children[Math.random() * i | 0]);
      }
            SRTlib.send("]},");

    }
    function loopTaglines() {
            SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

      taglineCounter--;
      if (taglineCounter >= 0) {
        var taglineText = taglineList.children[taglineCounter].textContent;
        showTagline(taglineText);
                SRTlib.send("]},");

        return;
      }
      taglineCounter = taglineList.children.length;
      loopTaglines();
            SRTlib.send("]},");

    }
    function showTagline(taglineText) {
            SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      tagline.classList.remove('is-visible');
      setTimeout(function () {
                SRTlib.send(`{ "anonymous": true, "function": "setTimeout2", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        taglinePart.innerHTML = taglineText;
        tagline.classList.add('is-visible');
                SRTlib.send("]},");

      }, 800);
            SRTlib.send("]},");

    }
    shuffleTaglines();
    loopTaglines();
    setInterval(loopTaglines, 4000);
        SRTlib.send("]},");

  }
    SRTlib.send("]},");

})();
