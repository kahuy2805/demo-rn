import Api from 'apis/Api'


class SignInApi {
    static login(userCredentials) {
        let url = 'trainees/login'
        return Api.post(url, userCredentials)
    } 
}