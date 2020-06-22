var SRTlib = require('SRT-util');
var addSorting = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "addSorting", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  'use strict';
  var cols, currentSort = {
    index: 0,
    desc: false
  };
  function getTable() {
        SRTlib.send(`{ "anonymous": false, "function": "getTable", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "getTable"},');

    return document.querySelector('.coverage-summary');
        SRTlib.send('], "end": "getTable"},');

  }
  function getTableHeader() {
        SRTlib.send(`{ "anonymous": false, "function": "getTableHeader", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "getTableHeader"},');

    return getTable().querySelector('thead tr');
        SRTlib.send('], "end": "getTableHeader"},');

  }
  function getTableBody() {
        SRTlib.send(`{ "anonymous": false, "function": "getTableBody", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send('], "end": "getTableBody"},');

    return getTable().querySelector('tbody');
        SRTlib.send('], "end": "getTableBody"},');

  }
  function getNthColumn(n) {
        SRTlib.send(`{ "anonymous": false, "function": "getNthColumn", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send('], "end": "getNthColumn"},');

    return getTableHeader().querySelectorAll('th')[n];
        SRTlib.send('], "end": "getNthColumn"},');

  }
  function loadColumns() {
        SRTlib.send(`{ "anonymous": false, "function": "loadColumns", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
        SRTlib.send('], "end": "loadColumns"},');

    return cols;
        SRTlib.send('], "end": "loadColumns"},');

  }
  function loadRowData(tableRow) {
        SRTlib.send(`{ "anonymous": false, "function": "loadRowData", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
        SRTlib.send('], "end": "loadRowData"},');

    return data;
        SRTlib.send('], "end": "loadRowData"},');

  }
  function loadData() {
        SRTlib.send(`{ "anonymous": false, "function": "loadData", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var rows = getTableBody().querySelectorAll('tr'), i;
    for (i = 0; i < rows.length; i += 1) {
      rows[i].data = loadRowData(rows[i]);
    }
        SRTlib.send('], "end": "loadData"},');

  }
  function sortByIndex(index, desc) {
        SRTlib.send(`{ "anonymous": false, "function": "sortByIndex", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var key = cols[index].key, sorter = function (a, b) {
            SRTlib.send(`{ "anonymous": false, "function": "sorter", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      a = a.data[key];
      b = b.data[key];
            SRTlib.send('], "end": "sorter"},');

      return a < b ? -1 : a > b ? 1 : 0;
            SRTlib.send('], "end": "sorter"},');

    }, finalSorter = sorter, tableBody = document.querySelector('.coverage-summary tbody'), rowNodes = tableBody.querySelectorAll('tr'), rows = [], i;
    if (desc) {
      finalSorter = function (a, b) {
                SRTlib.send(`{ "anonymous": true, "function": "finalSorter", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                SRTlib.send('], "end": "finalSorter"},');

        return -1 * sorter(a, b);
                SRTlib.send('], "end": "finalSorter"},');

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
        SRTlib.send('], "end": "sortByIndex"},');

  }
  function removeSortIndicators() {
        SRTlib.send(`{ "anonymous": false, "function": "removeSortIndicators", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var col = getNthColumn(currentSort.index), cls = col.className;
    cls = cls.replace(/ sorted$/, '').replace(/ sorted-desc$/, '');
    col.className = cls;
        SRTlib.send('], "end": "removeSortIndicators"},');

  }
  function addSortIndicators() {
        SRTlib.send(`{ "anonymous": false, "function": "addSortIndicators", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    getNthColumn(currentSort.index).className += currentSort.desc ? ' sorted-desc' : ' sorted';
        SRTlib.send('], "end": "addSortIndicators"},');

  }
  function enableUI() {
        SRTlib.send(`{ "anonymous": false, "function": "enableUI", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var i, el, ithSorter = function ithSorter(i) {
            SRTlib.send(`{ "anonymous": false, "function": "ithSorter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var col = cols[i];
            SRTlib.send('], "end": "ithSorter"},');

      return function () {
                SRTlib.send(`{ "anonymous": true, "function": "ithSorter.ithSorter.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        var desc = col.defaultDescSort;
        if (currentSort.index === i) {
          desc = !currentSort.desc;
        }
        sortByIndex(i, desc);
        removeSortIndicators();
        currentSort.index = i;
        currentSort.desc = desc;
        addSortIndicators();
                SRTlib.send('], "end": "ithSorter.ithSorter.ReturnStatement"},');

      };
            SRTlib.send('], "end": "ithSorter"},');

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
        SRTlib.send('], "end": "enableUI"},');

  }
    SRTlib.send('], "end": "addSorting"},');

  return function () {
        SRTlib.send(`{ "anonymous": true, "function": "addSorting.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (!getTable()) {
            SRTlib.send('], "end": "addSorting.ReturnStatement"},');

      return;
    }
    cols = loadColumns();
    loadData();
    addSortIndicators();
    enableUI();
        SRTlib.send('], "end": "addSorting.ReturnStatement"},');

  };
    SRTlib.send('], "end": "addSorting"},');

})();
window.addEventListener('load', addSorting);
