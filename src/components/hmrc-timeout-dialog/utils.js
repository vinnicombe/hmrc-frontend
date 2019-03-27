const utils = {

  generateDomElementFromString: (str) => {
    const abc = document.createElement('div')
    abc.innerHTML = str
    return abc.firstChild
  },

  generateDomElementFromStringAndAppendText: (str, text) => {
    const $tmp = utils.generateDomElementFromString(str)
    $tmp.innerText = text
    return $tmp
  },

  hasClass: (selector, className) => {
    return document.querySelector(selector).classList.contains(className)
  },

  addClass: (selector, className) => {
    document.querySelectorAll(selector).forEach(i => i.classList.add(className))
  },

  removeClass: (selector, className) => {
    document.querySelectorAll(selector).forEach(i => i.classList.remove(className))
  },

  removeElement: ($elem) => {
    const parent = $elem.parentNode
    if (parent) {
      parent.removeChild($elem)
    } else {
      console.warn('couldn\'t find parent for elem', $elem)
    }
  }
}

export default utils
