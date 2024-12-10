const faqItems = document.querySelectorAll('.faq-item')

if(faqItems && faqItems.length > 0){
  faqItems.forEach(el => {
    const btn = el.querySelector('.faq-item__btn')
    const body = el.querySelector('.faq-item__body')

    btn.addEventListener('click', e => {
      let isActive = btn.classList.toggle('active')
      body.style.maxHeight = isActive ? body.scrollHeight + 'px' : null
    })
  })
}
