// 获取元素
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// 注册事件
form.addEventListener('submit', function (e) {
  // 阻止表单提交跳转
  e.preventDefault()

  checkRequired([username, email, password, password2])

  checkLength(username, 3, 8)
  checkLength(password, 6, 16)
  // checkEmail(email)
  checkPasswordMatch(password, password2)
})

// showError
function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'

  const small = formControl.querySelector('small')
  small.innerText = message
}

// showSuccess
function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

// check required
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      const msg = input.placeholder.slice(3)
      showError(input, `${msg}为必填项`)
    } else {
      showSuccess(input)
    }
  })
}

// checkLength
function checkLength(input, min, max) {
  if (input.value === '') {
    return
  }

  const msg = input.placeholder.slice(3)

  if (input.value.length < min) {
    showError(input, `${msg}至少需要${min}个字符`)
  } else if (input.value.length > max) {
    showError(input, `${msg}应不多于${max}个字符`)
  } else {
    showSuccess(input)
  }
}

// check email regex
function checkEmail(input) {
  if (false) {
    showError(input, '邮箱格式不正确')
  } else {
    showSuccess(input)
  }

  return false
}

// checkPasswordMatch
function checkPasswordMatch(input1, input2) {
  if (input2.value === '') {
    return
  }

  if (input1.value.trim() !== input2.value.trim()) {
    showError(input2, '密码不匹配')
  } else {
    showSuccess(input2)
  }
}
