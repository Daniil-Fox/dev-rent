const tabs = document.querySelectorAll('.lk-sites__btn[data-sites-btn]')
const content = document.querySelectorAll('.lk-sites__content[data-sites-content]')

tabs.forEach(btn => {
  btn.addEventListener('click', e => {
    tabs.forEach(el => {
      el.classList.remove('active')
    })
    content.forEach(el => {
      el.classList.remove('active')
    })
    const dataset = btn.dataset.sitesBtn
    const currentContent = document.querySelector(`.lk-sites__content[data-sites-content="${dataset}"]`)
    btn.classList.add('active')
    currentContent.classList.add('active')

  })
})
