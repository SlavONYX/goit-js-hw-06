  const input = document.querySelector('input#validation-input');

const handleBlur = e => {
  if (
    Number(e.currentTarget.dataset.length) ===
    e.currentTarget.value.length
  ) {
    
    if (e.currentTarget.classList.contains('invalid')) {
      e.currentTarget.classList.remove('invalid');
    }
    e.currentTarget.classList.add('valid');
  } else if (e.currentTarget.value.length !== 0) {
    
    if (e.currentTarget.classList.contains('valid')) {
      e.currentTarget.classList.remove('valid');
    }
    e.currentTarget.classList.add('invalid');
  } else {

    if (e.currentTarget.classList.contains('valid')) {
      e.currentTarget.classList.remove('valid');
    }
    if (e.currentTarget.classList.contains('invalid')) {
      e.currentTarget.classList.remove('invalid');
    }
  }
};

input.addEventListener('blur', handleBlur);

