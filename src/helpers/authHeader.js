import { userServices } from '@/services';

export function authHeader() {
	// Возвращает заголовок авторизации с токеном
	return userServices.getToken().then(
		(token) => {
			return { Authorization: 'JWT ' + token };
		},
		(error) => {
			console.log(error);
			return {};
		}
	);
}
