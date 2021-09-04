#!/bin/bash

set -eu

for f in .??*
do
  [[ $f == ".git" ]] && continue
  [[ $f == ".DS_Store" ]] && continue
  [[ $f == ".vim" ]] && continue
  [[ $f == ".config" ]] && continue
  [[ $f == ".zsh" ]] && continue
  echo "$f"
  ln -sf ~/dotfiles/$f ~/
done

ln -sf iTerm2/com.googlecode.iterm2.plist ~/Library/Preferences
