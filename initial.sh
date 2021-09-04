#!/bin/bash

set -eu

brew bundle install
source ~/dotfiles/lib/npm.sh
run_npm
./deploy.sh
