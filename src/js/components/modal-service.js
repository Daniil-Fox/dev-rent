const serviceModal = document.querySelector('.service-modal')

if(serviceModal){
  const serviceBtn = document.querySelectorAll('.lk-service__btn')

  const serviceModalBody = serviceModal.querySelector('.modal__body')

  const serviceModalInput = serviceModal.querySelector('.service-modal__value')
  serviceBtn.forEach(el => {
    el.addEventListener('click', e => {
      serviceModal.classList.add('active')
      const title = el.closest('.lk-service').querySelector('.lk-service__title').textContent.trim()
      serviceModalInput.value = title
    })
  })

  serviceModal.addEventListener('click', e => {
    serviceModal.classList.remove('active')
  })
  serviceModalBody.addEventListener('click', e => {
    e.stopPropagation()
  })
}
