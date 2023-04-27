const obj = {
	numbers: {
		a: 1,
		b: 2,
	},
};

const {
	numbers: { a, b },
} = obj;

const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

const raceResults = ([first, second, third, ...rest]) => ({
	first,
	second,
	third,
	rest,
});
