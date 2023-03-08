function calculateCalories() {
	let age = document.getElementById("age").value;
	let weight = document.getElementById("weight").value;
	let height = document.getElementById("height").value;
	let result = document.getElementById("result");
	let foodTips = document.getElementById("foodTips");

	if (age && weight && height) {
		let calories = 10 * weight + 6.25 * height - 5 * age + 5;
		result.innerHTML = `You need ${calories.toFixed(2)} calories per day`;

		// Display food tips based on calorie count
		if (calories < 1500) {
			foodTips.innerHTML = "You should focus on eating nutrient-dense foods such as vegetables, fruits, whole grains, lean protein, and healthy fats.";
		} else if (calories < 2000) {
			foodTips.innerHTML = "You should eat a balanced diet that includes a variety of foods from all food groups, such as vegetables, fruits, whole grains, lean protein, and healthy fats.";
		} else {
			foodTips.innerHTML = "You may need to consume more calories to maintain your weight. You should focus on eating a balanced diet that includes a variety of nutrient-dense foods from all food groups.";
		}
	} else {
		result.innerHTML = "Please enter your age, weight, and height";
	}
}
