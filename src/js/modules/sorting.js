

const sorting = () => {	
	let bodyFilter = document.querySelector('.body-shots');
	if (bodyFilter) {
		document.querySelector('#shots-likes').addEventListener("click", () => {
			sort('data-likes');
		});
		document.querySelector('#shots-views').addEventListener("click", () => {
			sort('data-views');
		});
		document.querySelector('#shots-comments').addEventListener("click", () => {
			sort('data-comments');
		});
		document.querySelector('#shots-number').addEventListener("click", () => {
			sort('data-number');
		});

		function sort(dataType){
			for (let i = 0; i < bodyFilter.children.length; i++) {
				for (let n = i; n < bodyFilter.children.length; n++) {
					if (+bodyFilter.children[i].getAttribute(dataType) < +bodyFilter.children[n].getAttribute(dataType)) {
						let replacedNode = bodyFilter.replaceChild(bodyFilter.children[n], bodyFilter.children[i]);
						insertAfter(replacedNode, bodyFilter.children[i]);
					}
				}
			}
		}
		

		function insertAfter(elem, refElem) {
			return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
		}

	}

}

export default sorting;