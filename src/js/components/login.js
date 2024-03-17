const login = document.querySelector('.header__btn--login')
if(login){
  const modal = document.querySelector('[data-modal-login]')
  const modalBody = modal.querySelector('.modal__body')
  const modalClose = modal.querySelector('.modal__close')
  login.addEventListener('click', e => {
    modal.classList.add('active')
  })
  modalBody.addEventListener('click', e => {
    e.stopPropagation()
  })
  modal.addEventListener('click', e => {
    modal.classList.remove('active')
  })
  modalClose.addEventListener('click', e => {
    modal.classList.remove('active')
  })


  const modalButtons = document.querySelectorAll('.modal__btn')
  const modalContent = document.querySelectorAll('.modal__form')

  modalButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      clearActive()

      btn.classList.add('active')

      document.querySelector(`.modal__form[data-modal-content="${btn.dataset.modalType}"]`).classList.add('active')
    })
  })

  function clearActive(){
    modalButtons.forEach(el => el.classList.remove('active'))
    modalContent.forEach(el => el.classList.remove('active'))
  }
}
