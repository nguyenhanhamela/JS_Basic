function run(n){
	let count = 0
	let i = n
	if (n >= 1 && n <= 1000000) {
		do {
			if ( i % 2 == 0) {
                i = i / 2
				count++
			}
		} while (i % 2 == 0)	
	}
	console.log('c',count);
}
console.log(run(20));
