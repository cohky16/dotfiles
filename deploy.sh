#!/bin/bash

set -eu

for f in .??*
do
  [[ $f == ".git" ]] && continue
  [[ $f == ".DS_Store" ]] && continue
  [[ $f == ".vim" ]] && continue
  [[ $f == ".config" ]] && continue
  echo "$f"
  ln -sf ~/dotfiles/$f ~/
done

cp -f iTerm2/com.googlecode.iterm2.plist ~/Library/Preferences
