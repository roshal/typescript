
interface i__it {
	name: string,
	age: number,
	color: string,
}

function call_it (pet: i__it): void {
	const string = ['hey', pet.name, 'come here'].join(' ')
	console.log(string)
}

call_it({
	name: 'bobby',
	age: 2,
	color: 'white',
})

interface i__pet {
	name: string,
	//	readonly age: number,
	readonly color: string,
	readonly birthday: Date,
	toy?: string,
	speak(): void,
	run(meters: number): void,
	bring_toy?(toy?: string): string,
}

class c__dog implements i__pet {
	name: string
	readonly color: string
	readonly birthday: Date
	readonly breed: string
	constructor (name: string, color: string, birthday: Date) {
		this.name = name
		this.color = color
		this.birthday = birthday
	}
	//	get age() {
	//		const date = new Date(Date.now() - this.birthday.getTime())
	//		return date.getFullYear() - new Date(0).getFullYear()
	//	}
	speak(): void {
		const string = 'bark'
		console.log(string)
	}
	run(meters: number): void {
		const string = [this.name, 'ran for', meters, 'meters'].join(' ') 
		console.log(string)
	}
}

class c__german_shepherd extends c__dog {
	readonly breed: string = 'german shepherd'
}

class c__dalmatian extends c__dog {
	readonly breed = 'dalmatian'
}

const bobby = new c__dog('Bobby', 'black', new Date(2010, 4, 12))

const rex = new c__german_shepherd('rex', 'black', new Date(2014, 2, 10))

const pongo = new c__dalmatian('pongo', 'dotted', new Date(2012, 7, 3))

interface i__shelter {
	[index: number]: i__pet
}

interface i__building {
	address: string
	type: string
}

class c__dog_shelter extends Array<c__dog> implements i__shelter, i__building {
	address: string
	type: string
	constructor(address: string, dogs: c__dog[]) {
		super(...dogs)
		this.address = address
		this.type = 'shelter'
	}
}

const shelter = new c__dog_shelter('palace square', [
	bobby, rex, pongo,
])

shelter.forEach((dog) => {
	dog.speak()
})

interface i__build {
	(address: string, type: string): i__building
}

const build_house: i__build = function (address: string, type: string) {
	return {
		address, type,
	}
}

const winter_palace = build_house('palace square', 'palace')

interface i__hybrid {
	// описание функции
	(name: string, address: string, type: string): i__building
	// описание полей объекта
	developer: string
	started: Date
	// индексируемый тип
	buildings: {
		[buildingName: string]: i__building,
	}
}

function developing_project(developer: string, started: Date) {
	let project = 
		<i__hybrid> function (
			name: string,
			address: string,
			type: string 
		): i__building {
			const building: i__building = {address, type}
			project.buildings[name] = building
			return building
		}
		project.buildings = {}
		project.developer = developer
		project.started = started
		return project
}

const petersburg = developing_project('peter the great', new Date(1703))

const fortress = petersburg('peter and paul fortress', 'rabbit island', 'fortress')
