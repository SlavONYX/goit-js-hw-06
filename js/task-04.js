  const valueEL = document.querySelector('#value');
  let counterValue = 0;
  valueEL.previousElementSibling.addEventListener('click',() =>{
    counterValue -= 1
        valueEL.textContent = counterValue
  })
  valueEL.nextElementSibling.addEventListener('click',() => {
    counterValue += 1
        valueEL.textContent = counterValue
  })

