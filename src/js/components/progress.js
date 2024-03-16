const circle = document.querySelectorAll('.lk-info__circle')


  circle.forEach(el => {
    const circleProgress = el.querySelector('.lk-info__circle .progress')
    const lkCard = el.closest('.lk-card')
    let percentageProgress = +lkCard.dataset.ready

    let radius = circleProgress.getAttribute('r')

    let circleLength = 2 * Math.PI * radius;
    percentageProgress == 100 ? lkCard.classList.add('disabled') : null
    lkCard.querySelector('.lk-info__value').textContent = percentageProgress + '%'
    circleProgress.setAttribute('stroke-dasharray', circleLength)
    circleProgress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100)
  })




