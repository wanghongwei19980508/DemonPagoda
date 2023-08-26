"use strict";
const common_vendor = require("../common/vendor.js");
const http = {
  api: "http://jiuaibuni.top:9099/",
  getDeviceInfo(key) {
    let res = common_vendor.index.getSystemInfoSync();
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
      "token": "aa1170338b82e4e54586beb9fd618317"
    };
  },
  request(url, method, data, isLoad) {
    let _this = this;
    if (isLoad) {
      common_vendor.index.showLoading({
        title: "\u52A0\u8F7D\u4E2D..."
      });
    }
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: _this.api + url,
        data,
        header: _this.setHeader(),
        method,
        success(res) {
          resolve(_this.response(res.data, _this.api + url));
        },
        fail(res) {
          console.log(res);
          common_vendor.index.showToast({
            title: "\u8BF7\u6C42\u8D85\u65F6\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5!",
            icon: "none"
          });
        },
        complete() {
          if (isLoad) {
            common_vendor.index.hideLoading();
          }
        }
      });
    });
  },
  response(result, url) {
    if (result.code == "0000") {
      return result;
    }
    switch (result.error_code) {
      case 401:
        console.log("\u6743\u9650\u4E0D\u8DB3\uFF0C\u67E5\u770B\u8BF7\u6C42\u5934");
        break;
      case 402:
        common_vendor.index.removeStorageSync("token");
        console.log("\u672A\u767B\u9646\uFF0C\u8BF7\u505A\u8F6C\u767B\u9646\u9875\u9762");
        common_vendor.index.navigateTo({
          url: "/pages/login/login"
        });
        break;
      case 403:
        console.log(result);
        console.log("\u8BF7\u6C42\u53C2\u6570\u6709\u8BEF");
        return result;
      case 404:
        return result;
      case 500:
        console.log("\u670D\u52A1\u5668\u9519\u8BEF");
        console.log(url);
        break;
    }
  },
  async get(url, data = {}, isLoad = true) {
    return await this.request(url, "GET", data, isLoad);
  },
  async post(url, data = {}, isLoad = true) {
    return await this.request(url, "POST", data, isLoad);
  },
  async put(url, data = {}, isLoad = true) {
    return await this.request(url, "PUT", data, isLoad);
  },
  async delete(url, isLoad = true, data = {}) {
    return await this.request(url, "DELETE", data, isLoad);
  },
  upload(url, file, progress, name = "file", data = {}, isLoad = false) {
    const _this = this;
    let filePath = "";
    let files = [];
    if (typeof file === "string") {
      filePath = file;
    } else {
      files = file;
    }
    return new Promise((resolve, reject) => {
      const up = common_vendor.index.uploadFile({
        url: this.api + url,
        data,
        header: _this.setHeader(),
        filePath,
        name,
        files,
        success(res) {
          resolve(res);
          console.log(res);
        },
        fail(res) {
          console.log(res);
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
      const up = common_vendor.index.uploadFile({
        url,
        formData: data,
        filePath: file,
        name: "file",
        success(res) {
          console.log(res);
          resolve(res);
        },
        fail(res) {
          reject(res);
          console.log(res);
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
exports.http = http;
