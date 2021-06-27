#----------------------------------------------------------------------------------------
# .bashrc
#
#	Jun 19 2021		Initial
#	Jun 20 2021		Fix some PATH problems
#	Jun 21 2021		Remove echo messages to avoid ant deployment process failure
#	Jun 22 2021		ll alias
#	Jun 27 2021		motd
#----------------------------------------------------------------------------------------

# Source global definitions
if [ -f /etc/bashrc ]; then
	. /etc/bashrc
fi

export JAVA_HOME=/app/oracle/products/jdk1.8.0_60
export JH=/app/oracle/products/jdk1.8.0_60
export PATH=$JAVA_HOME/bin:/var/opt/Python-2.7.11:$PATH
export AH=/etc/httpd
export WEB=/var/www/html
export HOST=zeraspeth

# export NODE=/TOOLS/node
export NODE=/usr/bin
export PATH=$NODE/bin:$PATH
export MONGO=/usr/bin
export PATH=$MONGO/bin:$PATH
export NODE_DISABLE_COLORS=1

# Used to switch node programs from DEV to PROD
export NODEDEVMODE=true
export NODEURLPREFIX=http://zeraspeth:8081
export NODESECRET=thisisthesecretkey
# Vuex tutorial and CAMS tests
export CAMUSER=yves
export CAMPASS=dumb
export CAMURL="https://jsonplaceholder.typicode.com/users/2"

export COMPUTERNAME=`hostname`
export CAMSHOME='/home/node/cams2021'
export CH='/home/node/cams2021'

# User specific aliases and functions
alias shsys='ps -edf | grep -i '
alias hh='history | grep -i '
alias lrtl='ls -rtl'
alias lal='ls -al'
alias ll='ls -l'
alias motd='cat $CAMSHOME/src/shell/motd.txt'
alias sshagent='eval "$(ssh-agent -s)"'
alias mongo='mongo --port 27017 --quiet'
alias nodemon='nodemon --no-colors'
alias renv='. ~/.bashrc'
alias forever='$CAMS/node_modules/forever/bin/forever --no-colors'
alias nod='$CAMSHOME/src/shell/admin.sh'

# No cat in .bashrc as it breaks the ant deplyment script.......!!!!!!!!!!
# cat $CAMSHOME/src/shell/motd.txt
