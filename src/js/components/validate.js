import { validateForms } from './../functions/validate-forms';

const orderModal = document.querySelectorAll('.order-modal')
if(orderModal && orderModal.length > 0){
  orderModal.forEach(el => {
    const body = el.querySelector('.modal__body')
    const close = el.querySelector('.modal__close')

    close.addEventListener('click', e => {
      el.classList.remove('active')
    })
    el.addEventListener('click', e => {
      el.classList.remove('active')
    })
    body.addEventListener('click', e => {
      e.stopPropagation()
    })
  })
}

const afterCorrects = () => {
  const correctsModal = document.querySelector('.corrects-modal-thanks')
  correctsModal.classList.add('active')
};

const afterOrder = () => {
  const orderModal = document.querySelector('.order-modal-thanks')
  orderModal.classList.add('active')
};

if(document.querySelector('.cta__form')){
  const ctaRules = [
    {
      ruleSelector: '.input-name',
      rules: [
        {
          rule: 'minLength',
          value: 3
        },
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните имя!'
        }
      ]
    },
    {
      ruleSelector: '.input-tel',
      tel: true,
      telError: 'Введите корректный телефон',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните телефон!'
        }
      ]
    },
    {
      ruleSelector: '.input-email',
      rules: [
        {
          rule: 'required',
        },
        {
          rule: 'email',
        },
      ]
    },
    {
      ruleSelector: '.real-select',
      rules: [
        {
          rule: 'required',
        },
      ]
    },
    {
      ruleSelector: '.input-area',
      rules: [
        {
          rule: 'minLength',
          value: 3
        },
        {
          rule: 'required',
          value: true,
        }
      ]
    },
    {
      ruleSelector: '#check',
      rules: [
        {
          rule: 'required',
        },
      ]
    },
  ];
  validateForms('.cta__form', ctaRules);
}
if(document.querySelector('.login-form')){
  const loginRules = [
    {
      ruleSelector: '.input-email',
      rules: [
        {
          rule: 'required',
        },
        {
          rule: 'email',
        },
      ]
    },
    {
      ruleSelector: '.input-password',
      rules: [
        {
          rule: 'required',
        },
        {
          rule: 'password',
        },
      ]
    }
  ];
  validateForms('.login-form', loginRules);
}

if(document.querySelector('.logup-form')){

  const logupRules = [
    {
      ruleSelector: '.input-email',
      rules: [
        {
          rule: 'required',
        },
        {
          rule: 'email',
        },
      ]
    },
    {
      ruleSelector: '.input-name',
      rules: [
        {
          rule: 'minLength',
          value: 3
        },
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните имя!'
        }
      ]
    },
    {
      ruleSelector: '.input-nikname',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните имя!'
        }
      ]
    },
    {
      ruleSelector: '.input-tel',
      tel: true,
      telError: 'Введите корректный телефон',
      rules: [
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните телефон!'
        }
      ]
    },
  ];
  validateForms('.logup-form', logupRules);
}

if(document.querySelector('.settings-form')){
  const settingsRules = [
    {
      ruleSelector: '#new-pass',
      rules: [
        {
          rule: 'required',
        },
      ]
    },
    {
      ruleSelector: '#new-pass-repeat',
      rules: [
        {
          rule: 'required',
        },
        {
          validator: (value, fields) => {
            if (
              fields[1] &&
              fields[1].elem
            ) {
              const repeatPasswordValue =
                fields[1].elem.value;

              return value === repeatPasswordValue;
            }
            return true;
          },
          errorMessage: 'Passwords should be the same',
        }
      ]
    },
  ]

  validateForms('.settings-form', settingsRules);
}
if(document.querySelector('.support-form')){
  const supportsRules = [
    {
      ruleSelector: '.input-name',
      rules: [
        {
          rule: 'minLength',
          value: 3
        },
        {
          rule: 'required',
          value: true,
          errorMessage: 'Заполните имя!'
        }
      ]
    },
    {
      ruleSelector: '.input-email',
      rules: [
        {
          rule: 'required',
        },
        {
          rule: 'email',
        },
      ]
    },
    {
      ruleSelector: '.input-que',
      rules: [
        {
          rule: 'minLength',
          value: 3
        },
        {
          rule: 'required',
          value: true,
        }
      ]
    },
  ]
  validateForms('.support-form', supportsRules);
}
if(document.querySelector('.correct__form')){
  const correctRules = [
    {
      ruleSelector: '.input-wish',
      rules: [

        {
          rule: 'minLength',
          value: 3
        },
        {
          rule: 'required',
        },

      ]
    },

  ]
  validateForms('.correct__form', correctRules, afterCorrects);
}
if(document.querySelector('.service-modal')){
  const servicesRules = [
    {
      ruleSelector: '.input-name',
      rules: [
        {
          rule: 'required'
        }
      ]
    },
    {
      ruleSelector: '.input-wish',
      rules: [

        {
          rule: 'minLength',
          value: 3
        },
        {
          rule: 'required',
        },

      ]
    },

  ]
  validateForms('.service-modal__form', servicesRules, afterOrder);
}
