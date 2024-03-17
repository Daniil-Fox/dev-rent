const accountModal = document.querySelector('.account')

if(accountModal){
  const accBtn = document.querySelectorAll('.lk-header__account')

  const accountModalBody = accountModal.querySelector('.modal__body')
  const accountModalClose = accountModal.querySelector('.modal__close')

  accBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      accountModal.classList.add('active')
    })
  })

  accountModal.addEventListener('click', e => {
    accountModal.classList.remove('active')
  })
  accountModalClose.addEventListener('click', e => {
    accountModal.classList.remove('active')
  })
  accountModalBody.addEventListener('click', e => {
    e.stopPropagation()
  })
}
