import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


const sitesItems = document.querySelectorAll('.lk-sites__items')

sitesItems.forEach(items => {
  if(items.children.length == 0){
    const content = items.closest('.lk-sites__content')
    const notify = content.querySelector('.lk-sites__notify')
    notify.classList.add('active')
  }
})

const lkMenuButtons = document.querySelectorAll('[data-lk-content]')
const lkContent = document.querySelectorAll('.lk-content')

const lkAdmin = document.querySelector('.lk-header__admin')
const sidebarClose = document.querySelector('.sidebar__close')
const sidebar = document.querySelector('.sidebar')
lkMenuButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    clearActive()
    const dataset = btn.dataset.lkContent
    const content = document.getElementById(dataset)
    content.classList.add('active')
    document.querySelector(`.lk-menu-btn[data-lk-content="${dataset}"]`).classList.add('active')
    e.currentTarget.classList.add('active')

    sidebar.classList.remove('active')
  })

})

function clearActive(){
  lkMenuButtons.forEach(el => el.classList.remove('active'))
  lkContent.forEach(el => el.classList.remove('active'))
}


lkAdmin?.addEventListener('click', e => {
  sidebar.classList.add('active')
})
sidebarClose?.addEventListener('click', e => {
  sidebar.classList.remove('active')
})


const burgerMenuBtn = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.burger-menu')
if(burgerMenu){
  const burgerMenuClose = burgerMenu.querySelector('.burger-menu__close')
  const burgerLinks = burgerMenu.querySelectorAll('.nav__link')
  burgerMenuBtn.addEventListener('click', e => {
    burgerMenu.classList.add('active')
  })
  burgerMenuClose.addEventListener('click', e => {
    burgerMenu.classList.remove('active')
  })
  burgerLinks.forEach(link => {
    link.addEventListener('click', e => {
      burgerMenu.classList.remove('active')
    })
  })
}



const spM = document.querySelectorAll('.sp-m')

if(window.matchMedia("(max-width: 768px)").matches && spM && spM.length > 0){
  const res = document.querySelector('.sp__response')

  res.querySelector('.sp-back').addEventListener('click', e => {
    e.preventDefault()
    res.classList.remove('active')
  })
  spM.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault()
      res.classList.add('active')
    })
  })
}


const attach = document.querySelector('.in-file')
const attName = document.querySelector('.att-name')
if(attName){
  attach.addEventListener('change', e => {
    const text = attach.files[0].name
    attName.textContent = text
  })
}

const authorImg = document.querySelector('.in-author')
if(authorImg){
  authorImg.addEventListener('change', e => {
    console.log(authorImg.files[0])
  })
  const chBtn = document.querySelector('.author__btn')
  const authorName = document.querySelector('.author__name')

  chBtn.addEventListener('click', e => {
    e.preventDefault()
    let isActive = chBtn.classList.toggle('active')

    if(isActive){
      authorName.removeAttribute('disabled')
      authorName.focus()
      chBtn.textContent = 'Готово'
    } else {
      authorName.setAttribute('disabled', '')
       chBtn.textContent = 'Изменить'
    }
  })
}


