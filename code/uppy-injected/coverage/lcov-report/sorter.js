var SRTlib = require('SRT-util');
var addSorting = (function () {
    SRTlib.send(`{ "anonymous": true, "function": "addSorting", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

  'use strict';
  var cols, currentSort = {
    index: 0,
    desc: false
  };
  function getTable() {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return document.querySelector('.coverage-summary');
        SRTlib.send("]},");

  }
  function getTableHeader() {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return getTable().querySelector('thead tr');
        SRTlib.send("]},");

  }
  function getTableBody() {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

        SRTlib.send("]},");

    return getTable().querySelector('tbody');
        SRTlib.send("]},");

  }
  function getNthColumn(n) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

        SRTlib.send("]},");

    return getTableHeader().querySelectorAll('th')[n];
        SRTlib.send("]},");

  }
  function loadColumns() {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

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
        SRTlib.send("]},");

    return cols;
        SRTlib.send("]},");

  }
  function loadRowData(tableRow) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

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
        SRTlib.send("]},");

    return data;
        SRTlib.send("]},");

  }
  function loadData() {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var rows = getTableBody().querySelectorAll('tr'), i;
    for (i = 0; i < rows.length; i += 1) {
      rows[i].data = loadRowData(rows[i]);
    }
        SRTlib.send("]},");

  }
  function sortByIndex(index, desc) {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

    var key = cols[index].key, sorter = function (a, b) {
            SRTlib.send(`{ "anonymous": true, "function": "sorter", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

      a = a.data[key];
      b = b.data[key];
            SRTlib.send("]},");

      return a < b ? -1 : a > b ? 1 : 0;
            SRTlib.send("]},");

    }, finalSorter = sorter, tableBody = document.querySelector('.coverage-summary tbody'), rowNodes = tableBody.querySelectorAll('tr'), rows = [], i;
    if (desc) {
      finalSorter = function (a, b) {
                SRTlib.send(`{ "anonymous": true, "function": "emptyKey", "fileName": "${__filename}", "paramsNumber": 2, "calls" : [`);

                SRTlib.send("]},");

        return -1 * sorter(a, b);
                SRTlib.send("]},");

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
        SRTlib.send("]},");

  }
  function removeSortIndicators() {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var col = getNthColumn(currentSort.index), cls = col.className;
    cls = cls.replace(/ sorted$/, '').replace(/ sorted-desc$/, '');
    col.className = cls;
        SRTlib.send("]},");

  }
  function addSortIndicators() {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    getNthColumn(currentSort.index).className += currentSort.desc ? ' sorted-desc' : ' sorted';
        SRTlib.send("]},");

  }
  function enableUI() {
        SRTlib.send(`{ "anonymous": false, "function": "${arguments.callee.name}", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    var i, el, ithSorter = function ithSorter(i) {
            SRTlib.send(`{ "anonymous": true, "function": "ithSorter.ithSorter", "fileName": "${__filename}", "paramsNumber": 1, "calls" : [`);

      var col = cols[i];
            SRTlib.send("]},");

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
                SRTlib.send("]},");

      };
            SRTlib.send("]},");

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
        SRTlib.send("]},");

  }
    SRTlib.send("]},");

  return function () {
        SRTlib.send(`{ "anonymous": true, "function": "addSorting.ReturnStatement", "fileName": "${__filename}", "paramsNumber": 0, "calls" : [`);

    if (!getTable()) {
            SRTlib.send("]},");

      return;
    }
    cols = loadColumns();
    loadData();
    addSortIndicators();
    enableUI();
        SRTlib.send("]},");

  };
    SRTlib.send("]},");

})();
window.addEventListener('load', addSorting);
