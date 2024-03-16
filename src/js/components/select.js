const select = document.querySelectorAll('.select')

select.forEach(s => {
  const btn = s.querySelector('.select__header')
  const dropdown = s.querySelector('.dropdown')
  const dropdownItems = s.querySelectorAll('.dropdown__item')
  const selectText = s.querySelector('.select__value')
  btn.addEventListener('click', e => {
    let isActive = s.classList.toggle('active')

    dropdown.style.maxHeight = isActive ? dropdown.scrollHeight + 'px' : null
  })

  dropdownItems.forEach(el => {
    el.addEventListener('click', e => {
      const content = el.textContent.trim()
      selectText.innerText = content
      dropdown.style.maxHeight = null
    })
  })
})
