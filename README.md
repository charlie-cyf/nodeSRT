# Selective Regression Testing for Node.js

## install:
```
# install dependencies
npm i

# install NodeSRT package
cd nodeSRT
sudo npm i .
```

## usage:
use ` nodeSRT --help ` to get help <br/>
use this command to run nodeSRT
```nodeSRT -b <codebase dir> -d <diff patch dir> <options>``` <br/>

### options
`-b, --basefolder <path>` the path to codebase to be analyzed  <br/>
`-d --diffFile <path>` path to diff file <br/>
`--config <path>` path to JSON config file <br/>
`--e2e <boolean>` run analyze on e2e tests <br/>
`--skipGetDependency <boolean>` skip get denpendency graph step, has to set  --callGraph --fileDependencyGraph --E2EdenpendencyGraph as well <br/>
`--callGraph <path>` path to callgraph <br/>
`--fileDependencyGraph <path>` path to file denpendency graph <br/>
`--E2EdenpendencyGraph <path>` dir to E2e dependencyGraph <br/>
`--excepts <array>` array of files to be excluded when injection <br/>
`--docker <boolean>` whether running in docker or ci environment, if it is then skip user inputs<br/>

options only in configuration files only: <br/>
`excepts: <array of file paths>` files to be excepted in injection step <br/>
`e2eTestSuite: <object>` e2e configuration object, includes `specs` and `exclude` to specify e2e test suite <br/>
`includesE2E: <boolean>` run analyze on e2e tests <br/>
`onlyE2E: <boolean>` only run e2e analysis, skip unit tests <br/>
`runUnitTestsInstr: <string>` instructions to run unit test. e.g. `npm run test:unit` <br/>
`E2EprerunInstr: <string>` instructions to setup e2e tests <br/>
`E2EpostrunInstr: <string>` instructions to run after e2e tests finished <br/>
`buildE2EInstr: <string>` instructions to build code for e2e tests <br/>
`runE2EInstr: <string>` instructions to run e2e tests <br/>
`E2Edir: <string>` path E2E test folder <br/>
`E2Etemp: <string>` test folder to be copied to E2E test folder if you want to use your own E2E test folder <br/>

- since each End-to-end test suite set up differently, you might want to customize [e2e test handler](https://github.com/charlie-cyf/nodeSRT/tree/master/e2eTestsHandler) for your e2e test suite

### examples
sample nodeSRT command:
```
nodeSRT -b ./simorgh -d ./diff.patch --config ./nodeSRT/example/dockerConfig.json
```
you can find some sample configuration files in [here](https://github.com/charlie-cyf/nodeSRT/tree/master/example)


## How it works
### Steps: <br /> 
1. static analysis on each js file, generate dependency graph on functions and fields
2. inject dynamic analysis code to each function
3. run tests one by one, get entities influenced by each tests. Store as json file.
4. parse diff file, identify changes.
5. generate a list of tests on test-entities relationship.

### design decisions
1. since the selection is at method level, if a modification is outsid of the method, we will run all tests have dependencies on this file. 
2. Although astring can handle comments, some special comments are misplaced after injection. e.g. @ts-ignore Therefore, they need to be ignore when doing code injection. Otherwise we will have a build error.

## docker comamnd
`docker build -t srtdock:latest .`<br /> 
`docker run --rm -ti srtdock` <br /> 

push to docker hub: https://ropenscilabs.github.io/r-docker-tutorial/04-Dockerhub.html
``` 
docker login
docker tag f645182d6e68 charlie9731/srtdock:v2
docker push charlie9731/srtdock
```
singularity command:
```
singularity build -s srtSingular.sif docker://charlie9731/srtdock:v2
singularity run -w -e srtSingular.sif <commit id>
```
RHEL install docker script
```
sudo dnf config-manager --add-repo=https://download.docker.com/linux/centos/docker-ce.repo
sudo dnf install -y vim git curl
sudo dnf install --nobest docker-ce
sudo groupadd docker
sudo usermod -aG docker ec2-user
```

## experiment data
you can find experiment data in [here](https://github.com/charlie-cyf/nodeSRT/tree/master/experiment)