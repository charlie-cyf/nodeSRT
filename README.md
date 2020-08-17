# Selective Regression Testing for Node.js

## Steps: <br /> 
1. ~~static analysis on each js file, generate dependency graph on functions and fields~~
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
	[] static method and field <br />
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
2. Although astring can handle comments, some special comments are misplaced after injection. e.g. @ts-ignore Therefore, they need to be ignore when doing code injection. Otherwise we will have a build error.

## docker comamnd
`docker build -t srtdock:latest .`<br /> 
`docker run --rm -ti srtdock` <br /> 

push to docker hub: https://ropenscilabs.github.io/r-docker-tutorial/04-Dockerhub.html
``` 
docker login
docker tag f645182d6e68 charlie9731/srtdock:v2
docker push 
```
singularity command:
```
 singularity build -s srtSingular.sif docker://charlie9731/srtdock:v2

```
RHEL install docker script
```
sudo dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
sudo dnf install -y vim git curl
sudo dnf install --nobest docker-ce
sudo groupadd docker
sudo usermod -aG docker ec2-user
```


