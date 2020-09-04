import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { Authentication } from '@/domain/usecases'
import { makeApiUrl } from '@/main/config/factories/http/api-url-factory'
import { makeAxiosHttpClient } from '@/main/config/factories/http/axios-http-client-factory'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl('/login'), makeAxiosHttpClient())
}
