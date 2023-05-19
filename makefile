ARTIFACTS ?= ./artifacts
VERSION ?= $(shell cat package.json | jq --raw-output .version)
BUILD_NUM ?= 1
APPNAME := $(if $(TARGET), warehouse ($(TARGET)),warehouse)
TARGET_ANDROID := app/android
TARGET_IOS := app/ios
ENV ?= dev
NODE_BIN = $(shell npm bin)
REPO_ROOT ?= ./

# METRO START
start:
	# start the react-native javascript packager
	node node_modules/react-native/local-cli/cli.js start

# ANDROID COMMANDS
run-android:
	. prepare-env.sh .env.$(ENV) .env && . run-packager.sh& react-native run-android --variant=$(ENV)Debug --appIdSuffix "$(ENV)"

# IOS COMMANDS
run-ios:
	. prepare-env.sh .env.$(ENV) .env && . run-packager.sh& react-native run-ios --simulator="iPhone 12"
