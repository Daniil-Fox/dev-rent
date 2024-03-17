const select = document.querySelectorAll('.select')
const realSelect = document.querySelector('.cta__real-select')

select.forEach(s => {
  const btn = s.querySelector('.select__header')
  const dropdown = s.querySelector('.dropdown')
  const dropdownItems = s.querySelectorAll('.dropdown__item')
  const selectText = s.querySelector('.select__value')
  btn.addEventListener('click', e => {
    let isActive = s.classList.toggle('active')

    dropdown.style.maxHeight = isActive ? dropdown.scrollHeight + 'px' : null
  })

  dropdownItems.forEach((el,i) => {
    el.addEventListener('click', e => {
      const content = el.textContent.trim()
      selectText.innerText = content
      realSelect.value = content
      console.log(realSelect);
      console.log(realSelect.value);
      dropdown.style.maxHeight = null
      s.classList.remove('active')
    })
  })
})
