#!/bin/bash

set -eu

ln -sf ~/dotfiles/.vimrc ~/.vimrc
ln -sf ~/dotfiles/.zsh ~/.zsh
ln -sf ~/dotfiles/.zshrc ~/.zshrc
ln -sf ~/dotfiles/.config ~/.config
ln -sf ~/dotfiles/.vim ~/.vim
ln -sf ~/dotfiles/.tigrc ~/.tigrc
ln -sf ~/dotfiles/.czrc ~/.czrc
source ~/.zshrc
bash ./iTerm2/init.sh
