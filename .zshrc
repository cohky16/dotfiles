# starship
eval "$(starship init zsh)"
export GO111MODULE=on

# autosuggestion
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh

# nodenv
eval "$(nodenv init -)"

# alias

## system
alias v='vim'
alias e='exit'
alias sz='source ~/.zshrc'
alias ..1='cd ../'
alias ..2='cd ../../'
alias ..3='cd ../../../'

## package 
alias y='yarn'
alias yi='yarn install'
alias ya='yarn add'
alias n='npm'
alias ni='npm install'

## git
alias g='git'
alias gs='git status'
alias gc='git checkout'
alias gp='git push origin $(git rev-parse --abbrev-ref HEAD)'
alias gl='git pull origin $(git rev-parse --abbrev-ref HEAD)'
alias glm='git pull origin master'
alias t='tig'

## docker
alias dp='docker ps'
alias dcu='docker-compose up -d'
alias dcd='docker-compose down --volumes'
