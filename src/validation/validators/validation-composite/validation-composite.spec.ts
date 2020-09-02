import { ValidationComposite } from './validation-composite'
import { FieldValidateSpy } from '../test/mock-field-validation'

describe('ValidationComposite', () => {
  test('Should retunr error if any validation fails', () => {
    const fieldValidationSpy = new FieldValidateSpy('any_field')
    fieldValidationSpy.error = new Error('first_error_message')
    const fieldValidationSpy2 = new FieldValidateSpy('any_field')
    fieldValidationSpy2.error = new Error('secound_error_message')
    const sut = new ValidationComposite([
      fieldValidationSpy,
      fieldValidationSpy2
    ])
    const error = sut.validate('any_field', 'any_value')
    expect(error).toBe('first_error_message')
  })
})
