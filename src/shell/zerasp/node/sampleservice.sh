echo "Sample service : $1  `date`" >> /tmp/sampleservice.log
case $1 in 
	"start")
		echo ">>>>> Starting now" >> /tmp/sampleservice.log
		while true; do echo "`date` : Alive" >> /tmp/sampleservice.log; sleep 60; done
		;;
	"stop")
		echo ">>>>> Stopping now" >> /tmp/sampleservice.log
		ps -edf | grep -v grep | grep -i sampleservice.sh > processlist
            	while read line
            	do
              		pid=`echo "$line" | awk '/ / { print $2 }';`
              		echo "[!!!] $pid killed" >> /tmp/sampleservice.log
              		kill $pid
            	done < processlist
            	rm -f processlist
		;;
	"status")
		ps -edf | grep -v grep | grep -i sampleservice.sh
		;;
esac
exit 0

