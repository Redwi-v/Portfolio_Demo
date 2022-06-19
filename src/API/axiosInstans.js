import axios from 'axios';

const axsiosInstans = axios.create({
	withCredentials: true,
	baseURL: '',
	headers: {
		Authorization: `Bearer ${sessionStorage.getItem('token') || null}`,
	},
});

export default axsiosInstans;
