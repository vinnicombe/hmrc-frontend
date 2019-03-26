/* eslint-env jest */

const { render, getExamples } = require('../../../lib/jest-helpers')

const examples = getExamples('item-list')

describe('Item list', () => {
  describe('by default', () => {
    const $ = render('item-list', examples.default)
    const $itemListRows = $('.hmrc-item-list li')
    it('does not include any rows', () => {
      expect($itemListRows.length).toBe(0)
    })
  })

  describe('With a single text item', () => {
    const $ = render('item-list', examples['single-item'])
    const $itemListRows = $('.hmrc-item-list li')
    it('has a single <li> element in the list', () => {
      expect($itemListRows.length).toBe(1)
      expect($itemListRows.eq(0).text()).toContain('Item One')
    })
  })

  describe('With a single HTML item', () => {
    const $ = render('item-list', examples['html-item'])
    const $itemListRows = $('.hmrc-item-list li')
    it('has a single <li> element in the list', () => {
      expect($itemListRows.eq(0).html()).toContain('HTML Content for <strong>item one</strong>')
    })
  })

  describe('With a single action', () => {
    const $ = render('item-list', examples['single-action'])
    const $itemListRows = $('.hmrc-item-list li')
    it('has a single <li> element in the list', () => {
      expect($itemListRows.length).toBe(1)
      expect($itemListRows.eq(0).text()).toContain('Item One')
    })
  })

  describe('With a long item identifier', () => {
    const $ = render('item-list', examples['long-items'])
    const $itemListRows = $('.hmrc-item-list li')
    it('has a single <li> element in the list', () => {
      expect($itemListRows.length).toBe(1)
      expect($itemListRows.eq(0).text()).toContain('This is a longer item identifier with a --long modifier class')
    })
  })
})
