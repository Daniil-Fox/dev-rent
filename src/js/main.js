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

const lkMenuButtons = document.querySelectorAll('.lk-menu-btn')
const lkContent = document.querySelectorAll('.lk-content')

lkMenuButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    clearActive()
    const dataset = btn.dataset.lkContent
    const content = document.getElementById(dataset)
    content.classList.add('active')

    e.currentTarget.classList.add('active')
  })

})

function clearActive(){
  lkMenuButtons.forEach(el => el.classList.remove('active'))
  lkContent.forEach(el => el.classList.remove('active'))
}
