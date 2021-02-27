import { observable, action, autorun, decorate } from 'mobx'
import Cookie from "js-cookie"

class AppStore {
	authToken = '';


	setToken(token) {
		this.authToken = token;
		Cookie.set('authToken', token);
	}

	// async login(data) {
	// 	const token = (await loginReq(data)).data;
	// 	this.setToken(token)
	// }
}

decorate(AppStore, {
	authToken: observable,
	setToken: action,
});

const appStore = new AppStore();

autorun(() => {
	const token = Cookie.get('authToken');

	if (token) {
		appStore.setToken(token);
	}
});

export default appStore;