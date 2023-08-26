export default {
	api: 'http://jiuaibuni.top:9099/',
	getDeviceInfo(key) {
		let res = uni.getSystemInfoSync();
		if (key) {
			return res[key];
		}
		return res;
	},
	getTimestamp() {
		let d = new Date();
		return d.getTime();
	},
	setHeader() {
		return {
			"token": "aa1170338b82e4e54586beb9fd618317",
		}
	},
	request(url, method, data, isLoad) {
		let _this = this;
		if (isLoad) {
			uni.showLoading({
				title: '加载中...'
			});
		}
		return new Promise((resolve, reject) => {
			uni.request({
				url: _this.api + url,
				data: data,
				header: _this.setHeader(),
				method: method,
				success(res) {
					resolve(_this.response(res.data, _this.api + url));
				},
				fail(res) {
					console.log(res)
					uni.showToast({
						title: '请求超时，请稍后重试!',
						icon: "none"
					});
				},
				complete() {
					if (isLoad) {
						uni.hideLoading();
					}
				}
			});
		});

	},
	response(result, url) {
		if (result.code == '0000') {
			// console.log(result);
			// console.log(url)
			return result
		}
		switch (result.error_code) {
			case 401:
				console.log('权限不足，查看请求头');
				break;

			case 402:
				uni.removeStorageSync('token')
				console.log('未登陆，请做转登陆页面');
				uni.navigateTo({
					url: '/pages/login/login'
				});
				break;

			case 403:
				console.log(result);
				console.log('请求参数有误');
				return result;
				break;

			case 404:
				return result;
				break;

			case 500:
				console.log('服务器错误');
				console.log(url)
				break;
		}
	},
	async get(url, data = {}, isLoad = true ) {
		return await this.request(url, 'GET', data, isLoad);
	},
	async post(url, data = {}, isLoad = true) {
		return await this.request(url, 'POST', data, isLoad)
	},
	async put(url, data = {}, isLoad = true) {
		return await this.request(url, 'PUT', data, isLoad);
	},
	async delete(url, isLoad = true, data = {}) {
		return await this.request(url, 'DELETE', data, isLoad)
	},
	upload(url, file, progress, name = 'file', data = {}, isLoad = false) {
		const _this = this;
		let filePath = '';
		let files = [];
		if (typeof(file) === 'string') {
			filePath = file;
		} else {
			files = file;
		}
		return new Promise((resolve, reject) => {
			const up = uni.uploadFile({
				url: this.api + url,
				data: data,
				header: _this.setHeader(),
				filePath: filePath,
				name: name,
				files: files,
				success(res) {
					resolve(res)
					console.log(res)
				},
				fail(res) {
					console.log(res)
				}
			});

			if (progress) {
				up.onProgressUpdate((res) => {
					progress(res.progress);
				});
			}
		});
	},
	uploadToHW(url, file, data, progress) {
		return new Promise((resolve, reject) => {
			const up = uni.uploadFile({
				url: url,
				formData: data,
				filePath: file,
				name: 'file',
				success(res) {
					console.log(res)
					resolve(res);
				},
				fail(res) {
					reject(res);
					console.log(res)
				},
				complete() {

				}
			});

			up.onProgressUpdate((res) => {
				progress(res.progress);
			});
		});
	}
};
