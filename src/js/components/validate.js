import { validateForms } from './../functions/validate-forms';





const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
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
  validateForms('.cta__form', ctaRules, afterForm);
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
  validateForms('.login-form', loginRules, afterForm);
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
  validateForms('.logup-form', logupRules, afterForm);
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

  validateForms('.settings-form', settingsRules, afterForm);
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
  validateForms('.support-form', supportsRules, afterForm);
}
