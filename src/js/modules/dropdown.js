

const dropdown = () => {

document.querySelectorAll('.dropdown').forEach(function (Wrapperdropdown) {
const dropdownButton = Wrapperdropdown.querySelector('.dropdown__button');
const option = Wrapperdropdown.querySelector('.dropdown__option'); 
const dropdownItem = Wrapperdropdown.querySelectorAll('.dropdown__item'); 


dropdownButton.addEventListener('click', function (item) {
	
	for (let index = 0; index < item.length; index++) {
		item[index].classList.remove('active');
		option.classList.remove('active');
	}
	
	this.classList.toggle('active');
	option.classList.toggle('active');
});
	


dropdownItem.forEach(function(item){
	item.addEventListener('click', function (e) {
		e.stopPropagation();
		if(document.querySelector('.footer-shots__dropdawn')){
			Wrapperdropdown.querySelector('.dropdown__button').innerText = this.innerText;
		}
	})
});

document.addEventListener('click', function (e) {
	if(e.target != dropdownButton){
		option.classList.remove('active');
		dropdownButton.classList.remove('active');
	}
});

window.addEventListener('scroll', () => {
	const dropdownHeight = Wrapperdropdown.offsetHeight;
	const dropdownOffset = offset(Wrapperdropdown).top;

	let dropdownPoint = window.innerHeight - dropdownHeight;
	if (dropdownHeight > window.innerHeight) {
		dropdownPoint = window.innerHeight - window.innerHeight;
	}
	if ((pageYOffset > dropdownOffset - dropdownPoint) && pageYOffset < (dropdownOffset + dropdownHeight)) {
		option.classList.remove('active');
		dropdownButton.classList.remove('active');
	}

});
function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
});

}

export default dropdown;