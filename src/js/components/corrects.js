const correctsModal = document.querySelector('.correct')

if(correctsModal){
  const correctsBtn = document.querySelectorAll('[data-correct-btn]')
  const correctsModalBody = correctsModal.querySelector('.modal__body')
  const correctsModalClose = correctsModal.querySelector('.modal__close')
  const correctsList = correctsModal.querySelectorAll('.correct__list')
  correctsBtn.forEach(btn => {
    btn.addEventListener('click', e => {
      correctsModal.classList.add('active')
    })
  })
  function checkList(correctsList){
    if(correctsList.children.length == 1){
      correctsList.querySelector('.text').classList.add('active')
    }
  }
  correctsList.forEach(list => {
    checkList(list)
  })
  correctsModal.addEventListener('click', e => {
    correctsModal.classList.remove('active')
  })
  correctsModalClose.addEventListener('click', e => {
    correctsModal.classList.remove('active')
  })
  correctsModalBody.addEventListener('click', e => {
    e.stopPropagation()
  })
}
