import { userAuthServices } from '@/services';

export function authHeader() {
	// Возвращает заголовок авторизации с токеном
	return userAuthServices.getToken().then(
		(token) => {
			return { Authorization: 'JWT ' + token };
		},
		(error) => {
			console.log(error);
			return {};
		}
	);
}
