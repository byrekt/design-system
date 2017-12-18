import React from 'react'
import renderer from 'react-test-renderer'
import { Radio, ThemeProvider } from '..'

describe('Radio', () => {
  test('Selected, rendering', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <Radio checked id="radio-input" />
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Not Selected, rendering', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <Radio id="radio-input" />
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })

  test('Disabled, rendering', () => {
    const json = renderer
      .create(
        <ThemeProvider>
          <Radio disabled id="radio-input" />
        </ThemeProvider>
      )
      .toJSON()
    expect(json).toMatchSnapshot()
  })
})
