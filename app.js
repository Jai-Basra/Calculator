const onButtonClick = (e) => {
     const input = document.getElementById('NumInput');
     let value = e.innerHTML.toString();
     if (value === '*' || value === '' || value === '-' || value === '+') {
          value = ' ' + value + ' ';
     }
     input.value += value;
}

const calculate = () => {
     const input = document.getElementById('NumInput');
     const value = eval(input.value);
     input.value = value;
}