#!/bin/bash

set -eu

for f in .??*
do
  [[ $f == ".git" ]] && continue
  [[ $f == ".DS_Store" ]] && continue
  ln -sf ~/dotfiles/$f ~/
  echo "$f"
done

ln -sf iTerm2/com.googlecode.iterm2.plist ~/Library/Preferences
