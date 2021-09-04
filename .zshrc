eval "$(starship init zsh)"
export GO111MODULE=on
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh

# alias
alias y='yarn'
alias yi='yarn install'
alias ya='yarn add'
alias g='git'
alias gd='git diff'
alias ga='git add'
alias gcm='git commit -m'
alias gps='git push origin $(git rev-parse --abbrev-ref HEAD)'
alias gpl='git pull origin $(git rev-parse --abbrev-ref HEAD)'
alias gc='git checkout'
alias gs='git status'
alias gb='git branch'
alias gsh='git stash'
alias gsl='git stash list'
alias gsa='git stash apply'
alias gff='git flow feature start'
alias gfb='git flow bugfix start'
alias gfh='git flow hotfix start'
alias dcu='docker-compose up -d'
alias dcd='docker-compose down --volumes'
