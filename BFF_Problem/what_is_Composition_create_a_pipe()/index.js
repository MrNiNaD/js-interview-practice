/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
	// your code here
	return (x) => {
		return funcs.reduce((total, fn) => fn(total), x)
	}
}