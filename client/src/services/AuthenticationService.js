import Api from '@/services/Api'

export default {
  register (credintials) {
    return Api().post('register', credintials)
  }
}
