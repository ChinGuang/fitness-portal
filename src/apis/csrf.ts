import type { AxiosResponse } from 'axios'
import { API } from '.'

let csrfReady: Promise<void> | null = null

export function fetchCsrfToken() {
  if (!csrfReady) {
    csrfReady = API.get('/auth/csrf-token', { withCredentials: true })
      .then((res: AxiosResponse) => {
        API.defaults.headers.common['X-CSRF-TOKEN'] = res.data.csrfToken
      })
      .catch((err: Error) => {
        console.error('Error fetching CSRF token:', err)
      })
  }
  return csrfReady
}
