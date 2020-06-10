# Selective Regression Testing for Node.js

## Steps: <br /> 
~~ 1. static analysis on each js file, generate dependency graph on functions and fields ~~
2. inject dynamic analysis code to each function
3. run tests one by one, get entities influenced by each tests. Store as json file.
4. parse diff file, identify changes.
5. generate a list of tests on test-entities relationship.


## special Javascript features to handle<br /> 
1) Object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects <br /> 
	[] dynamic property key(i.e. pan[cake], pan['size']) <br />
	[] constructor & factory <br />
	[] defineProperties: getter and setter <br />
	[] deleting properties. e.g. delete obj.key;  <br />

2) Class: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes <br />
   `classes are in fact special functions` <br />
	[] unnamed class: let rec = class {}; <br />
	[] prototype <br />
	[] static method <br />
	[] public & private field <br />
	[] inheritance <br />


3) Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions <br />
	[] Hoisting: use functions before declear https://developer.mozilla.org/en-US/docs/Glossary/Hoisting <br />
	[] anonymous function <br />
	[] nested function <br />
	[] arguments object <br />


4) async & promises <br />
	[] chained promises

## design decisions
1. since the selection is at method level, if a modification is on a uncovered method, we will run all tests have dependencies on this file. ThereFore static analysis in unnecessary.

