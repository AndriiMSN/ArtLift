const activityStats = () => {
	const bodyStats = document.querySelector('.js-body-shots');

	if (bodyStats) {
		let postStats = document.querySelectorAll('.js-body-shots > .body-shots__post');
		
		postStats.forEach(item => {
			let buttonStats = item.querySelector('.body-shots__button');

			buttonStats.addEventListener('click', (e) => {
				item.classList.toggle('active');
				for (let index = 0; index < postStats.length; index++) {
					if (item.classList.contains('active')) {
						buttonStats.innerText = 'Activate';
						item.classList.remove('active');
					}else{
						item.classList.add('active');
						buttonStats.innerText = 'Deactivate';
					}
				}
				
			});
		});
	}
}

export default activityStats;