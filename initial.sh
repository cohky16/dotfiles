#!/bin/bash

set -eu

brew bundle install
source ~/dotfiles/lib/npm.sh
run_npm
./deploy.sh
cat << EOS
-----------------------------
1. .awsを作成する
2. .sshを作成する
3. (必要であれば git flow init を走らせる)
-----------------------------
EOS