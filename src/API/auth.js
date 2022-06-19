import axiosInstans from './axiosInstans';

class AuthApi {
	async login(adminname, password) {
		const res = await axiosInstans.post(`admin/login`, { adminname, password });

		const token = res.data.token;
		return token;
	}
}

export default new AuthApi();
