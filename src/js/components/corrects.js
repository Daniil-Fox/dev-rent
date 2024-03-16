const correctsModal = document.querySelector('.correct')

if(correctsModal){
  const correctsBtn = document.querySelectorAll('[data-correct-btn]')
  const correctsModalBody = correctsModal.querySelector('.modal__body')

  correctsBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      correctsModal.classList.add('active')
    })
  })

  correctsModal.addEventListener('click', e => {
    correctsModal.classList.remove('active')
  })
  correctsModalBody.addEventListener('click', e => {
    e.stopPropagation()
  })
}
