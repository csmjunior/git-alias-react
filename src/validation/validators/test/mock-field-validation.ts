import { FieldValidation } from '@/validation/protocols/field-validation'

export class FieldValidateSpy implements FieldValidation {
  error: Error = null

  constructor (readonly field: string) {}

  validate (value: string): Error {
    return this.error
  }
}
