function Excuse() {
	
	var live = ['ninja', 'cat', 'grandma','owner'];
	var action = ['kicked', 'snapped', 'minced','throw'];
	var work = ['homework', 'project', 'report','presentation'];
	
	var who = live[Math.round(Math.random()*(live.length-1))];
	var did = action[Math.round(Math.random()*(action.length-1))];
	var what = work[Math.round(Math.random()*(work.length-1))];
	
	document.getElementById('excuses').innerHTML = '<div>My ' + who + ' ' + did + ' my ' + what + '.</div>'
	
}