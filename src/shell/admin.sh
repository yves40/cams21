#--------------------------------------------------------------------------------
#	admin.sh
#
#	  Feb 29 2020  	Initial
#	  Mar 01 2020  	Find how to start webpack-dev-server in background
#                 Deployment campaign on zerasp ;-)
#	  Mar 02 2020  	Unified for all manage nodes
#	  Mar 09 2020  	Refresh for zerasp
#	  Jun 19 2021  	mongodb service changed to mongod service
#                 Change CAMSHOME to point on cams2021
#	  Jun 22 2021  	Some new command line qualifiers
#	  Jun 29 2021  	RECO start new cams2021 web app on zerasp
#	  Aug 09 2021  	Start the node server with --watch on zerasp
#	  Nov 01 2021  	Why define CAMSHOME in this script ? 
#	  Nov 02 2021  	devzerasp. Start the web on the eth0 interface
#                 ( package.json modified )
#--------------------------------------------------------------------------------
VERSION="admin.sh v 1.23, "
VERSIONDATE="Nov 02 2021 "
LOG="/tmp/nodeadmin.log"
# CAMSHOME='/home/node/cams2021'
#--------------------------------------------------------------------------------
# Logger
#--------------------------------------------------------------------------------
log()
{
        echo "`date '+%Y-%m-%d %H:%M:%S'` : $VERSION $1" >> $LOG
        echo "`date '+%Y-%m-%d %H:%M:%S'` : $1"
}
#---------------------------------------------------------------------------------------
#   usage
#---------------------------------------------------------------------------------------
Usage()
{
  echo
  echo
  echo "./admin.sh start|stop|status [procselector]"
  echo "./admin.sh -v"
  echo "./admin.sh --version"
  echo 
  echo "With start, can optionnaly specify a procselector."
  echo "Possible values are : all|web|api|mongo"
  echo
  echo
}
#---------------------------------------------------------------------------------------
#   Node processes startup
#---------------------------------------------------------------------------------------
Start()
{
  curdir=`pwd`
  cd $CAMS
  echo
  echo

  case $proclist in 
    ALL)  log "Start all processes"
            log "#1 Web app"
            ret=`pwd`
            cd $CAMSHOME
            npm run devx&
            cd $ret
            echo
            log "#2 the API server"
            pm2 start $CAMSHOME/src/server.js --watch
            ;;
    WEB)  log "Start WEB process"
            x=`hostname`
            log "#1 Web app on $x"
            ret=`pwd`
            cd $CAMSHOME
            case $x in 
              'zerasp')    # avoid -watch on the raspberry to spare some cpu
                        npm run devzeraspeth&
                      ;;
              'vboxnode')  
                        npm run dev&
                      ;;
            esac
            echo
            cd $ret
            ;;
    API)  log "Start API processes"
            x=`hostname`
            log "#2 the API server on $x"
            case $x in 
              'zerasp')    # avoid -watch on the raspberry to spare some cpu
                      pm2 start $CAMSHOME/src/server.js --name camsserver --watch
                      ;;
              'vboxnode')  
                      pm2 start $CAMSHOME/src/server.js --watch --ignore-watch='node_modules' --name camsserver
                      ;;
            esac
            ;;
    MONGO)  log "Start mongodb"
            log "#3 the DB server: log in mongo account"
            sudo systemctl start mongod.service
            ;;
  esac

  echo
  cd $curdir
  tput sgr0
  echo
}
#---------------------------------------------------------------------------------------
#   Node and mongodb processes: stop
#---------------------------------------------------------------------------------------
Stop()
{
  echo
  echo
  echo

  case $proclist in 
    ALL)    log "Stop all node processes (except mongo)"
            ps -edf | grep -v grep | grep -i -e 'webpack-dev-server
/src/server
vue-cli-service' > processlist
            while read line
            do  
              pid=`echo "$line" | awk '/ / { print $2 }';`
              log "[!!!] $pid killed"
              kill $pid
            done < processlist
            rm -f processlist
            ;;
    WEB)    log "Stop the WEBpack node process"
            ps -edf | grep -v grep | grep -i -e 'webpack-dev-server
vue-cli-service' > processlist
            while read line
            do  
              pid=`echo "$line" | awk '/ / { print $2 }';`
              log "[!!!] $pid killed"
              kill $pid
            done < processlist
            rm -f processlist
            ;;
    API)    log "Stop the API node process"
            pm2 delete all
            ;;
    MONGO)  log "Stop mongodb"
            sudo systemctl stop mongodb.service
            ;;
  esac
  echo
  echo
}

#---------------------------------------------------------------------------------------
#   Node and mongodb processes status
#---------------------------------------------------------------------------------------
Status()
{
  echo
  echo $VERSION $VERSIONDATE
  echo 'Node and mongodb processes status'
  echo '-------------------------------------------------'
  echo
  ps -edf | grep -v grep | grep -i -e 'webpack-dev-server
server.js
vue-cli-service
mongod' > processlist

  while read line
  do  
    pid=`echo "$line" | awk '/ / { print $2 }';`
    ppid=`echo "$line" | awk '/ / { print $3 }';`
    processname=`echo $line | cut -d ' ' -f 8-`
    log "[] $pid $ppid $processname"
  done < processlist
  rm -f processlist
  echo
  echo "Shell variables:"
  echo "-----------------------------------------"
  echo "LOG          : $LOG"
  echo "CAMSHOME     : $CAMSHOME"
  echo "NODE         : $NODE"
  echo "MONGO        : $MONGO"
  echo "NODEDEVMODE  : $NODEDEVMODE"
  echo "CAMUSER      : $CAMUSER"
  echo "COMPUTERNAME : $COMPUTERNAME"
  echo
  pm2 list
  echo
}
#---------------------------------------------------------------------------------------
#   Just display version
#---------------------------------------------------------------------------------------
showVersion()
{
  echo
  echo $VERSION $VERSIONDATE
  echo
}

#---------------------------------------------------------------------------------------
#   Start here
#---------------------------------------------------------------------------------------
clear
if [ -z $1 ]
then
  Usage
  echo
  exit 1
fi
if [ -z $2 ]
then
  proclist="ALL"
else
  procselector=`echo $2 | tr a-z A-Z`
  case $procselector in 
    'ALL')  
            proclist="ALL"
            ;;
    'WEB')  
            proclist="WEB"
            ;;
    'API')  
            proclist="API"
            ;;
    'MONGO')  
            proclist="MONGO"
            ;;
    *)      log "Invalid selector : $procselector"
            Usage
            exit 1
            ;;
  esac
fi

case $1 in 
  'start')  Start
            ;;
  'stop')   Stop
            ;;
  'status') Status
            ;;
  '-v') showVersion
            ;;
  '--version') showVersion
            ;;
  *)        Status
            ;;
esac

exit 0
