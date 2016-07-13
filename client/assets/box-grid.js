// For each element in the document that possesses the [x-wide]
// attribute, set 'widths' to be an array of values extracted
// from said attribute. For each of the 5 values, set the
// corresponding class.

Array.from(document.querySelectorAll('[x-wide]')).map((elem) => {
	let widths = elem.getAttribute('x-wide').split(/\D/g).filter(Boolean);
	elem.className += ` xs-${widths[0]}`;
	elem.className += ` sm-${widths[1]}`;
	elem.className += ` md-${widths[2]}`;
	elem.className += ` lg-${widths[3]}`;
	elem.className += ` xl-${widths[4]}`;
});
