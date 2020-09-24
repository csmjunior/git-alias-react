import { HttpGetClient } from '@/data/protocols/http'
import faker from 'faker'

export class RemoteLoadSurveyList {
  constructor (
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async loadAll (): Promise<void> {
    await this.httpGetClient.get({ url: this.url })
  }
}
