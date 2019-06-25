
type t__console_method = 'log' | 'info' | 'warn' | 'error'

function log(message: string, args: any, prefix: string, type: t__console_method = 'log'): void {
	prefix  = prefix ? prefix + ': ' : ''
	message = prefix + message
	console[type](message, args)
}

log('test logging message', 123, 'logger', 'info')
