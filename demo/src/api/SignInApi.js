import Api from 'apis/Api'


export default class SignInApi {
    static login(userCredentials) {
        let url = 'trainees/login'
        return Api.post(url, userCredentials)
    } 
}