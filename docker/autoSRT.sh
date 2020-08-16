#!/bin/bash

echo "first arg: $1"
echo "installing dependency"

echo "node version:"
node -v

git clone https://github.com/bbc/simorgh.git
git clone https://github.com/charlie-cyf/nodeSRT.git

cd ./nodeSRT

npm i
echo "installing nodeSRT..."

npm i -g .

cd ../simorgh
echo "go to uppy"
pwd 


echo "generating diff..."
git diff $1^ $1 > ../diff.patch

echo "resetting uppy..."
git reset --hard $1^
cd ..
echo "go back to /src"
pwd

echo "running SRT"
nodeSRT -b ./uppy -d ./diff.patch --docker true  --config ./nodeSRT/example/dockerConfig.json 2>&1 | tee output.txt


echo "+++++++++++++++++++++++++++++++++++++++++++++++++++++++"
echo "++++++++++++ test result ++++++++++++++++++++++++++++++"
echo "+++++++++++++++++++++++++++++++++++++++++++++++++++++++"
echo "all tests:"
awk '/Test Suites:/,/Ran all test suites./' output.txt

echo "selection time:"
awk '/selecting tests:/,/running selected tests .../' output.txt

echo "Jest --onlyChange result:"
cat output.txt | grep -B 6 "Ran all test suites related to changed files."
cat output.txt | grep "No tests found related to files changed since last commit."

echo "run selected tests:"
cat output.txt | grep -B 6 "Ran all test suites matching"

echo "++++++++++++++++++++++++++++++++++++++++++++++++++++++"
echo "finished! $1"





