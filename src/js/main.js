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
const burgerMenuClose = document.querySelector('.burger-menu__close')
const burgerMenu = document.querySelector('.burger-menu')

if(burgerMenu){
  burgerMenuBtn.addEventListener('click', e => {
    burgerMenu.classList.add('active')
  })
  burgerMenuClose.addEventListener('click', e => {
    burgerMenu.classList.remove('active')
  })
}
