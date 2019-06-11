export default {
	getUrl:function{
		return new Promise((resolve,reject) => {
			var xhr = new XMLHttpRequest();
			xhr.responseType = `arraybuffer`;
			xhr.onload = function() {
				if (xhr.status == 200){
					resolve(xhr)
				} else {
					reject(new Error(req.statusText))
				}
			}
			xhr.onError = function() {
				reject(new Error(req.statusTexta))
			}
			xhr.send();
		})
	}
}