var equationField = document.getElementById('total');
var normalize = function(operation) {
    return operation
            .replace('−','-')
            .replace('÷','/')
            .replace('×','*');
};

$('.operators a, .numbers a').click(function() {
    var value = $(this).text();
    if (value !== 'AC' && value !== '=' && value !== '%' && value !== '+/-') {
        equationField.value += value;
    } else if (value === 'AC') {
        equationField.value = '';
    } else if (value === '+/-') {
        equationField.value = parseInt(equationField.value, 10) * -1;
    } else if (value === '%') {
        equationField.value /= 100;
    } else {                
        equationField.value = eval(normalize(equationField.value));
    }
});