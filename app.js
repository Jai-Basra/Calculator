const onButtonClick = (e) => {
     const input = document.getElementById('NumInput');
     let value = e.innerHTML.toString();
     if (value === '*' || value === '/' || value === '-' || value === '+') {
          value = ' ' + value + ' ';
     } else if (value === 'π') {
          value = '3.14159265359'
     }
     input.value += value;
}

const calculate = (e) => {
     const input = document.getElementById('NumInput');
     const value = eval(input.value);
     input.value = value;
}

const onClear = () => {
     const input = document.getElementById('NumInput');
     input.value = '';
}

const onMayank = () => {
     document.body.style.background = 'green';    
     setInterval(() => { document.body.style.background = 'black' }, 3000)
}
