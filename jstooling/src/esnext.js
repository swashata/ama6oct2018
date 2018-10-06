class MyClass {
	myMethod() {
		return 'foo';
	}

	isCool() {
		return true;
	}

	somethingReallyCool(param) {
		const {stuff, ...moreStuff} = param;
		console.log(stuff, moreStuff);
	}
}

const stuff = new MyClass();

console.log(stuff.myMethod());
stuff.somethingReallyCool({stuff: 'foo', biz: 'bar', bam: 'foo', saikat: true, mahesh: true, amitavo: true});

// You need something in order
