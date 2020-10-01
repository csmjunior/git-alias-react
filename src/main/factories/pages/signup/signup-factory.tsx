import React from 'react'
import { makeSignupValidation } from './signup-validation-factory'
import { SignUp } from '@/presentation/pages'
import { makeRemoteAddAccount } from '../../usecases/add-account/remote-add-account-factory'

export const makeSignUp: React.FC = () => {
  return (
    <SignUp
      addAccount={makeRemoteAddAccount()}
      validation={makeSignupValidation()}
    />
  )
}
