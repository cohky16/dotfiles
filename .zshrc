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
alias c='code .'

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
alias gf='git fetch'
alias t='tig'

## docker
alias dp='docker ps'
alias dcu='docker-compose up -d'
alias dcd='docker-compose down --volumes'
alias dce='docker-compose exec'

## atcoder
alias at='(){mkdir $1 && cd $1 && oj-prepare https://atcoder.jp/contests/$1}'
alias att='oj t -c "python3 main.py"'
alias atte='oj t -e 1e-6 -c "python3 main.py"'
alias atg='oj generate-input "python3 generate.py"'
alias ats='oj s -y --guess-python-interpreter pypy main.py'

