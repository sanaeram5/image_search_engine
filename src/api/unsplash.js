import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers:{
				Authorization: 'Client-ID EQTanfr5f2l4l9p5B1Mlg_l-0tCQbZcZHrjsQksX_3w'
			}
});