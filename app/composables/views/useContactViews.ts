import { useContactPostApi } from '../api/useContactApi'

export const useContactViews = () => {
  const name = ref('')
  const email = ref('')
  const message = ref('')
  const loading = ref(false)
  const success = ref(false)
  const error = ref('')

  const handleSubmitContact = async () => {
    loading.value = true
    error.value = ''

    const requestContactData = {
      name: name.value,
      email: email.value,
      message: message.value,
      honeypot: '' // スパム対策
    }

    try {
      const { sendContactPostError } =
        await useContactPostApi(requestContactData)

      if (sendContactPostError.value) {
        throw sendContactPostError.value
      }

      success.value = true
      name.value = ''
      email.value = ''
      message.value = ''
    } finally {
      loading.value = false
    }
  }

  return {
    name,
    email,
    message,
    loading,
    success,
    error,
    handleSubmitContact
  }
}
