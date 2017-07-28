var equationField = document.getElementById('equation');

$('.btn').click(function() {
	//console.log('value of the field', equationField.value);
	if (this.value !== 'C' && this.value !== '=') {
		equationField.value += this.value;	
	} else if (this.value === 'C') {
		equationField.value = '';
	} else {				
		equationField.value = eval(equationField.value);
	}
});