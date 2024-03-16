const accountModal = document.querySelector('.account')

if(accountModal){
  const accBtn = document.querySelector('.lk-header__account')

  const accountModalBody = accountModal.querySelector('.modal__body')

  accBtn.addEventListener('click', e => {
    accountModal.classList.add('active')
  })

  accountModal.addEventListener('click', e => {
    accountModal.classList.remove('active')
  })
  accountModalBody.addEventListener('click', e => {
    e.stopPropagation()
  })
}
