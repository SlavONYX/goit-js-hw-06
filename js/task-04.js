  const valueEL = document.querySelector('#value');
  console.log(valueEL.nextElementSibling)
  let counterValue = 0;
  valueEL.previousElementSibling.addEventListener('click',() =>{
    counterValue -= 1
        valueEL.textContent = counterValue
  })
  valueEL.nextElementSibling.addEventListener('click',() => {
    counterValue += 1
        valueEL.textContent = counterValue
  })

