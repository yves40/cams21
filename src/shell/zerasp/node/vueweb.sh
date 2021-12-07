#--------------------------------------------------------------------------------
#       vueweb.sh
#
#       Dec 05 2021 Initial
#       Dec 07 2021 vueweb start / stop execute problem
#					Problem came from the service definition in 
#					/lib/systemd/system/vueweb.service
#--------------------------------------------------------------------------------
VERSION="vueweb.sh 1.07: Dec 07 2021"
LOG="/tmp/vueweb.log"
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
		log " >>>>> starting Vue web server now" 
            	x=`hostname`
            	log "Vue cli web service starting on $x"
            	ret=`pwd`
            	cd $CAMSHOME
		log "Switching to $CAMSHOME"
		case $x in
       		       	'zerasp')
                        	npm run devzeraspeth&
       		               	;;
              		'vboxnode')
                        	npm run dev&
                      		;;
            	esac
            	;;
	"stop")
		log " >>>>> Stopping now" 
		ps -edf | grep -v grep | grep -i  -e 'webpack-dev-server
vue-cli-service' > processlist
            	while read line
            	do
              		pid=`echo "$line" | awk '/ / { print $2 }';`
              		log "[!!!] $pid killed"
              		kill $pid
            	done < processlist
            	rm -f processlist
		;;
	"status")
		systemctl status vueweb
		;;
esac
exit 0

