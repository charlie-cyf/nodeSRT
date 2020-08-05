#!/bin/bash

echo "first arg: $1"
echo "installing dependency"


echo "node version:"
node -v

git clone https://github.com/transloadit/uppy.git
git clone https://github.com/charlie-cyf/nodeSRT.git

cd ./nodeSRT

npm i
echo "installing nodeSRT..."

npm i -g .

cd ../uppy
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
nodeSRT -b ./uppy -d ./diff.patch --docker true  --config ./nodeSRT/example/dockerConfig.json



