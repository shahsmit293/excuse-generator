function Excuse() {
	
	var person = ['father', 'mother', 'grandma','grandfather'];
	var action = ['kicked', 'snapped', 'minced','throw'];
	var work = ['homework', 'project', 'report','presentation'];
	var time=['on monday','on thursday','onf riday','on sunday']
	
	var who = person[Math.round(Math.random()*(person.length-1))];
	var did = action[Math.round(Math.random()*(action.length-1))];
	var what = work[Math.round(Math.random()*(work.length-1))];
	var when = time[Math.round(Math.random()*(time.length-1))];
	document.getElementById('excuses').innerHTML = '<div>My ' + who + ' ' + did + ' my ' + what +' '+ when + '.</div>'
	
}
