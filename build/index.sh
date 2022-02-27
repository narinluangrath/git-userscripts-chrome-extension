#! /bin/bash

rm -rf ./dist/* && \
webpack --config ./build/webpack.config.options.js && \
webpack --config ./build/webpack.config.popup.js && \
webpack --config ./build/webpack.config.background.js && \
webpack --config ./build/webpack.config.content-script.js && \
cp -r ./src/images ./src/manifest.json dist