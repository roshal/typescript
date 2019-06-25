
class c__phone {
	readonly type: string = 'smartphone'
	private number: number
	constructor (readonly brand: string, number: number, type?: string) {
		this.number = number
		if (type) {
			this.type = type
		}
	}
}

const phone = new c__phone('iphone', 0)

abstract class a__phone {
	readonly type: string = 'smartphone'
	constructor (readonly brand: string, type?: string) {
		if (type) {
			this.type = type
		}
	}
	call = (name: string) => {
		const string = ['calling', name].join(' ')
		console.log(string)
	}
	abstract charge (charger: string)
}

class c__iphone extends a__phone {
	constructor () {
		super('apple')
	}
	charge = (charger: string) => {
		if (charger !== 'lightning') {
			throw Error('iphone does not support this charger')
		}
	}
}

class c__pixel extends a__phone {
	constructor () {
		super('google')
	}
	charge (charger: string) {
		if (charger !== 'usb-c') {
			throw Error('pixel does not support this charger')
		}
	}
}

const pixel = new c__pixel()

pixel.charge('usb-c')
pixel.call('mom')

interface i__android extends c__phone {
	version: string
}
