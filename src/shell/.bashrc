#----------------------------------------------------------------------------------------
# .bashrc
#
#	Jun 19 2021		Initial
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
export NODE=/TOOLS/node-v12.16.1-linux-x64
export PATH=$NODE/bin:$PATH
export MONGO=/TOOLS/mongo/mongodb-linux-x86_64-rhel62-3.4.10/
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

# User specific aliases and functions
alias shsys='ps -edf | grep -i '
alias hh='history | grep -i '
alias lrtl='ls -rtl'
alias lal='ls -al'
alias motd='cat /etc/motd'
alias sshagent='eval "$(ssh-agent -s)"'
alias mongo='mongo --port 4100 --quiet'
alias nodemon='nodemon --no-colors'
alias renv='. ~/.bashrc'
alias forever='$CAMS/node_modules/forever/bin/forever --no-colors'
alias nod='$CAMS/shell/nodeadmin.sh'

