import React from 'react'
import { Login } from '@/presentation/pages'
import { makeLoginValidation } from './login-validation-factory'
import { makeRemoteAuthentication } from '@/main/config/factories/usecases/authentication/remote-authentication-factory'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
    />
  )
}
