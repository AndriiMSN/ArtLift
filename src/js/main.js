import "./modules/grafic"
import dropdown from "./modules/dropdown"
import tabs from "./modules/tabs"
import sorting from "./modules/sorting"
import activityStats from "./modules/activity-stats"

window.addEventListener('DOMContentLoaded', () => {
	dropdown();
	tabs();
	sorting();
	activityStats();
});

