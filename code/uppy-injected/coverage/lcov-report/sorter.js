const SRTlib = require('SRT-util');

var addSorting = (function () {
    SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"addSorting","fileName":"${__filename}","paramsNumber":0},`);

  'use strict';
  var cols, currentSort = {
    index: 0,
    desc: false
  };
  function getTable() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getTable","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getTable"},');

    return document.querySelector('.coverage-summary');
        SRTlib.send('{"type":"FUNCTIONEND","function":"getTable","paramsNumber":0},');

  }
  function getTableHeader() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getTableHeader","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getTableHeader"},');

    return getTable().querySelector('thead tr');
        SRTlib.send('{"type":"FUNCTIONEND","function":"getTableHeader","paramsNumber":0},');

  }
  function getTableBody() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getTableBody","fileName":"${__filename}","paramsNumber":0},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getTableBody"},');

    return getTable().querySelector('tbody');
        SRTlib.send('{"type":"FUNCTIONEND","function":"getTableBody","paramsNumber":0},');

  }
  function getNthColumn(n) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"getNthColumn","fileName":"${__filename}","paramsNumber":1},`);

        SRTlib.send('{"type":"FUNCTIONEND","function":"getNthColumn"},');

    return getTableHeader().querySelectorAll('th')[n];
        SRTlib.send('{"type":"FUNCTIONEND","function":"getNthColumn","paramsNumber":1},');

  }
  function loadColumns() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"loadColumns","fileName":"${__filename}","paramsNumber":0},`);

    var colNodes = getTableHeader().querySelectorAll('th'), colNode, cols = [], col, i;
    for (i = 0; i < colNodes.length; i += 1) {
      colNode = colNodes[i];
      col = {
        key: colNode.getAttribute('data-col'),
        sortable: !colNode.getAttribute('data-nosort'),
        type: colNode.getAttribute('data-type') || 'string'
      };
      cols.push(col);
      if (col.sortable) {
        col.defaultDescSort = col.type === 'number';
        colNode.innerHTML = colNode.innerHTML + '<span class="sorter"></span>';
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"loadColumns"},');

    return cols;
        SRTlib.send('{"type":"FUNCTIONEND","function":"loadColumns","paramsNumber":0},');

  }
  function loadRowData(tableRow) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"loadRowData","fileName":"${__filename}","paramsNumber":1},`);

    var tableCols = tableRow.querySelectorAll('td'), colNode, col, data = {}, i, val;
    for (i = 0; i < tableCols.length; i += 1) {
      colNode = tableCols[i];
      col = cols[i];
      val = colNode.getAttribute('data-value');
      if (col.type === 'number') {
        val = Number(val);
      }
      data[col.key] = val;
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"loadRowData"},');

    return data;
        SRTlib.send('{"type":"FUNCTIONEND","function":"loadRowData","paramsNumber":1},');

  }
  function loadData() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"loadData","fileName":"${__filename}","paramsNumber":0},`);

    var rows = getTableBody().querySelectorAll('tr'), i;
    for (i = 0; i < rows.length; i += 1) {
      rows[i].data = loadRowData(rows[i]);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"loadData","paramsNumber":0},');

  }
  function sortByIndex(index, desc) {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"sortByIndex","fileName":"${__filename}","paramsNumber":2},`);

    var key = cols[index].key, sorter = function (a, b) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"sorter","fileName":"${__filename}","paramsNumber":2},`);

      a = a.data[key];
      b = b.data[key];
            SRTlib.send('{"type":"FUNCTIONEND","function":"sorter"},');

      return a < b ? -1 : a > b ? 1 : 0;
            SRTlib.send('{"type":"FUNCTIONEND","function":"sorter"},');

    }, finalSorter = sorter, tableBody = document.querySelector('.coverage-summary tbody'), rowNodes = tableBody.querySelectorAll('tr'), rows = [], i;
    if (desc) {
      finalSorter = function (a, b) {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"finalSorter","fileName":"${__filename}","paramsNumber":2},`);

                SRTlib.send('{"type":"FUNCTIONEND","function":"finalSorter"},');

        return -1 * sorter(a, b);
                SRTlib.send('{"type":"FUNCTIONEND","function":"finalSorter"},');

      };
    }
    for (i = 0; i < rowNodes.length; i += 1) {
      rows.push(rowNodes[i]);
      tableBody.removeChild(rowNodes[i]);
    }
    rows.sort(finalSorter);
    for (i = 0; i < rows.length; i += 1) {
      tableBody.appendChild(rows[i]);
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"sortByIndex","paramsNumber":2},');

  }
  function removeSortIndicators() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"removeSortIndicators","fileName":"${__filename}","paramsNumber":0},`);

    var col = getNthColumn(currentSort.index), cls = col.className;
    cls = cls.replace(/ sorted$/, '').replace(/ sorted-desc$/, '');
    col.className = cls;
        SRTlib.send('{"type":"FUNCTIONEND","function":"removeSortIndicators","paramsNumber":0},');

  }
  function addSortIndicators() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"addSortIndicators","fileName":"${__filename}","paramsNumber":0},`);

    getNthColumn(currentSort.index).className += currentSort.desc ? ' sorted-desc' : ' sorted';
        SRTlib.send('{"type":"FUNCTIONEND","function":"addSortIndicators","paramsNumber":0},');

  }
  function enableUI() {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"enableUI","fileName":"${__filename}","paramsNumber":0},`);

    var i, el, ithSorter = function ithSorter(i) {
            SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":false,"function":"ithSorter","fileName":"${__filename}","paramsNumber":1},`);

      var col = cols[i];
            SRTlib.send('{"type":"FUNCTIONEND","function":"ithSorter"},');

      return function () {
                SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"ithSorter.ithSorter.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

        var desc = col.defaultDescSort;
        if (currentSort.index === i) {
          desc = !currentSort.desc;
        }
        sortByIndex(i, desc);
        removeSortIndicators();
        currentSort.index = i;
        currentSort.desc = desc;
        addSortIndicators();
                SRTlib.send('{"type":"FUNCTIONEND","function":"ithSorter.ithSorter.ReturnStatement"},');

      };
            SRTlib.send('{"type":"FUNCTIONEND","function":"ithSorter"},');

    };
    for (i = 0; i < cols.length; i += 1) {
      if (cols[i].sortable) {
        el = getNthColumn(i).querySelector('.sorter').parentElement;
        if (el.addEventListener) {
          el.addEventListener('click', ithSorter(i));
        } else {
          el.attachEvent('onclick', ithSorter(i));
        }
      }
    }
        SRTlib.send('{"type":"FUNCTIONEND","function":"enableUI","paramsNumber":0},');

  }
    SRTlib.send('{"type":"FUNCTIONEND","function":"addSorting"},');

  return function () {
        SRTlib.send(`{"type":"FUNCTIONSTART","anonymous":true,"function":"addSorting.ReturnStatement","fileName":"${__filename}","paramsNumber":0},`);

    if (!getTable()) {
            SRTlib.send('{"type":"FUNCTIONEND","function":"addSorting.ReturnStatement"},');

      return;
    }
    cols = loadColumns();
    loadData();
    addSortIndicators();
    enableUI();
        SRTlib.send('{"type":"FUNCTIONEND","function":"addSorting.ReturnStatement"},');

  };
    SRTlib.send('{"type":"FUNCTIONEND","function":"addSorting"},');

})();
window.addEventListener('load', addSorting);
