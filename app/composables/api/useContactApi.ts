import type { ContactRequest } from '~~/server/types/contact/index.post'

export const useContactPostApi = async (params: ContactRequest) => {
  const sendContactPostResponse = ref()
  const sendContactPostError = ref()

  try {
    const url = '/api/contact'
    const response = await $fetch(url, {
      method: 'POST',
      body: params
    })

    sendContactPostResponse.value = response
  } catch (e) {
    sendContactPostError.value = e
  }

  return { sendContactPostResponse, sendContactPostError }
}
