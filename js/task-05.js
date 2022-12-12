
const link = {
    inputTX:document.querySelector('#name-input'),
    outputTX:document.querySelector('#name-output'),
}
link.inputTX.addEventListener('input', onIputChange)

function onIputChange(event) {
    link.outputTX.textContent = event.currentTarget.value || 'Anonymous'
}
