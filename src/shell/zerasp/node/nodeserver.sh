#--------------------------------------------------------------------------------
#       nodeserver.sh
#
#       Dec 07 2021   Initial
#--------------------------------------------------------------------------------
VERSION="nodeserver.sh 1.02: Dec 07 2021"
LOG="/tmp/cams21.log"
CAMSHOME="/home/node/cams21"
#--------------------------------------------------------------------------------
# Logger
#--------------------------------------------------------------------------------
log()
{
        echo "`date '+%Y-%m-%d %H:%M:%S'` : $VERSION $1" >> $LOG
        echo "`date '+%Y-%m-%d %H:%M:%S'` : $1"
}

case $1 in 
	"start")
		log " >>>>> starting the API node server now" 
            	x=`hostname`
            	ret=`pwd`
            	cd $CAMSHOME
		log "Switching to $CAMSHOME"
		case $x in
       		       	'zerasp')
                        	pm2 start $CAMSHOME/src/server.js --name camsserver --watch
       		               	;;
              		'vboxnode')
                        	pm2 start $CAMSHOME/src/server.js --watch --ignore-watch='node_modules' --name camsserver
                      		;;
            	esac
            	;;
	"stop")
		log " >>>>> Stopping now the API node server" 
		pm2 delete all
		;;
	"status")
		systemctl status nodeserver
		;;
esac
exit 0

