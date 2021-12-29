import { setCookie } from '@/helpers';

export function deleteCookie(name) {
	setCookie(name, '', {
		'max-age': -1,
	});
}
