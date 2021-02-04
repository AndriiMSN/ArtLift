const tabs = () => {
	if (document.querySelector('.tabs-header')) {
		document.querySelectorAll('.tabs-header__item').forEach((item) => {
			item.addEventListener("click", (e) => {
				e.preventDefault();
				const id = e.target.getAttribute('href').replace('#', '')

				document.querySelectorAll('.tabs-header__item').forEach((child) => {
						child.classList.remove('active')
				});

				document.querySelectorAll('.tabs-content').forEach((child) => {
						child.classList.remove('show')
				});

				item.classList.add('active');
				document.getElementById(id).classList.add('show')
			});
		});
	}
}


export default tabs;