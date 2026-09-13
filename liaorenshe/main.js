"use strict";
function hidden_div() {
	document.getElementById("cover").style.display = "none"
}
function isWeiXin() {
	var e = window.navigator.userAgent.toLowerCase();
	return "micromessenger" == e.match(/MicroMessenger/i) || "qq" == e.match(/QQ/i)
}
function osType() {
	return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ? "ios": /(Android)/i.test(navigator.userAgent) ? "android": "pc"
}
function getCaptcha() {
	//document.getElementById("captchaImg").src=""
	//function(e) {
		//alert(e)
	//})
}
function setCity(e) {
	"0" === e ? (document.getElementById("titleID").innerHTML = "辽宁人社电子表单验证", document.getElementById("topNmae").innerHTML = "辽宁人社电子表单在线验证平台", document.getElementById("inputNo").innerHTML = "目前可提供验证的单据凭证包括：南宁社会保险缴费证明") : "1" === e && (document.getElementById("titleID").innerHTML = "辽宁人社电子表单验证", document.getElementById("topNmae").innerHTML = "辽宁人社电子表单在线验证平台", document.getElementById("inputNo").innerHTML = "录入验证号码为32位数字与字母的组合，录入时请认真核对")
}
function closeDialog() {
	document.getElementById("haha").style.display = "none",
	document.getElementById("hehe").style.display = "none"
}
function submintCode() {
	var e = document.getElementById("verificationValue").value,
	t = document.getElementById("captchaValue").value,
	n = "https://ybj.hubei.gov.cn/hubeiHallSt/api/hsa-pss-pw/stamper/api/verify/verifyFileWebServerUrl?signNumber=" + e + "&captchId=" + captchaId + "&captchaword=" + t,
	o = "https://ybj.hubei.gov.cn/hubeiHallSt/api/hsa-pss-pw/stamper/api/verify/getFileWebServerUrl?signNumber=" + e;
	"" === e || "" === t ? "" === e && "" != t ? alert("请输入验证号码。") : "" != e && "" === t ? alert("请输入验证码。") : alert("请输入查询信息。") : "ios" === osType() ? $http(n, "get", !1, 3e3,
	function(e) {
		var t = JSON.parse(e).url;
		if (void 0 === t) {
			var n = JSON.parse(e).detail;
			void 0 === n ? alert("验证码有误") : alert(n)
		}
		t === !0 && (window.location.href = o),
		getCaptcha()
	},
	function(e) {
		var t = (JSON.parse(e), JSON.parse(e).detail);
		void 0 === t ? alert("验证码有误") : alert(t),
		getCaptcha()
	}) : $http(n, "get", !1, 3e3,
	function(e) {
		var t = JSON.parse(e).url;
		if (void 0 === t) {
			var n = JSON.parse(e).detail;
			void 0 === n ? alert("验证码有误") : alert(n)
		}
		t === !0 && window.open(o),
		getCaptcha()
	},
	function(e) {
		var t = (JSON.parse(e), JSON.parse(e).detail);
		void 0 === t ? alert("验证码有误") : alert(t),
		getCaptcha()
	})
}
function b64Encode(e) {
	return btoa(encodeURIComponent(e))
}
function _base64ToArrayBuffer(e) {
	for (var t = window.atob(e), n = t.length, o = new Uint8Array(n), a = 0; a < n; a++) o[a] = t.charCodeAt(a);
	return o.buffer
}
function $http(e, t, n, o, a, i) {
	var r = new XMLHttpRequest,
	s = !1,
	d = setTimeout(function() {
		s = !0,
		r.abort()
	},
	o);
	r.open(t, e, n),
	r.onreadystatechange = function() {
		4 === r.readyState && (s || (clearTimeout(d), r.status >= 200 && r.status < 300 ? a(r.responseText) : i(r.responseText)))
	},
	r.send(null)
}
function $http1(e, t, n, o, a, i) {
	var r = new XMLHttpRequest,
	s = !1,
	d = setTimeout(function() {
		s = !0,
		r.abort()
	},
	o);
	r.responseType = "arraybuffer",
	r.open(t, e, n),
	r.onreadystatechange = function() {
		4 === r.readyState && (s || (clearTimeout(d), r.status >= 200 && r.status < 300 ? a(r.response) : i(r.response)))
	},
	r.send(null)
}
function removeClass(e, t) {
	hasClass(e, t) && (e.className = e.className.replace(new RegExp("(\\s|^)" + t + "(\\s|$)"), " "))
}
function browserRedirect() {
	var e = navigator.userAgent.toLowerCase(),
	t = "ipad" == e.match(/ipad/i),
	n = "iphone os" == e.match(/iphone os/i),
	o = "midp" == e.match(/midp/i),
	a = "rv:1.2.3.4" == e.match(/rv:1.2.3.4/i),
	i = "ucweb" == e.match(/ucweb/i),
	r = "android" == e.match(/android/i),
	s = "windows ce" == e.match(/windows ce/i),
	d = "windows mobile" == e.match(/windows mobile/i);
	if (t || n || o || a || i || r || s || d) {
		var c = document.getElementById("form"),
		l = document.getElementsByTagName("label");
		c.style.width = "auto",
		c.style.margin = "auto",
		c.style.height = "auto";
		for (var u = 0; u < l.length; u++) l[u].style.display = "none";
		var m = document.getElementById("captchaImg");
		document.getElementById("verificationValue").style.width = "100%",
		document.getElementById("captchaValue").style.width = "calc(100% - 100px)",
		document.getElementById("captchaValue").style.cssFloat = "left",
		m.style.width = "100px",
		m.style.cssFloat = "left",
		e.indexOf("samsung") > 0 || e.indexOf("xiaomi") > 0 || e.indexOf("mqqbrowser") > 0 || e.indexOf("chrome") > 0 ? (document.getElementById("footer_img1").style.display = "none", document.getElementById("footer_img2").style.display = "block", document.getElementById("descript").style.display = "none", getFocus = function() {},
		loseFocus = function() {}) : (document.getElementById("footer_img1").style.display = "none", document.getElementById("footer_img2").style.display = "block", document.getElementById("descript").style.display = "none")
	}
}
function sAlert(e) {
	var t, n, o;
	t = 350,
	n = 100,
	o = "#336699";
	var a, i;
	a = document.body.offsetWidth,
	i = document.body.offsetHeight,
	console.log("sWidth：" + a + ",msgw:" + t);
	var r = document.createElement("div");
	r.setAttribute("id", "bgDiv"),
	r.style = "position:absolute;top:0;left:0;background-color:#777;opacity:0.6;filter:progid:DXImageTransform.Microsoft.Alpha(style=3,opacity=25,finishOpacity=75);width:" + a + "px; height:" + i + "px;",
	document.body.appendChild(r);
	var s = document.createElement("div");
	s.setAttribute("id", "msgDiv"),
	s.setAttribute("align", "center"),
	s.style.position = "absolute",
	s.style.left = (a - t) / 2 + "px",
	s.style.top = document.documentElement.scrollTop + (i - n) / 6 + "px",
	s.style.backgroundColor = "white",
	s.style.font = "14px/1.6em Verdana, Geneva, Arial, Helvetica, sans-serif",
	s.style.border = "1px solid" + o,
	s.style.width = t + "px",
	s.style.height = n + "px";
	var d = document.createElement("h6");
	d.setAttribute("id", "msgTitle"),
	d.setAttribute("align", "right"),
	d.style.margin = "0",
	d.style.height = "18px",
	d.style.padding = "3px",
	d.style.lineHeight = "10px !important",
	d.style.backgroundColor = "#336699",
	d.style.border = "1px solid #336699",
	d.style.font = "12px !important Verdana, Geneva, Arial, Helvetica, sans-serif",
	d.style.color = "white",
	d.style.cursor = "pointer",
	d.style.filter = "progid:DXImageTransform.Microsoft.Alpha(startX=20, startY=20,finishX=100, finishY=100,style=1,opacity=75,finishOpacity=100)",
	d.innerHTML = "关闭",
	d.onclick = function() {
		document.body.removeChild(r),
		document.getElementById("msgDiv").removeChild(d),
		document.body.removeChild(s)
	},
	document.body.appendChild(s),
	document.getElementById("msgDiv").appendChild(d);
	var c = document.createElement("p");
	c.style.margin = "1em 0",
	c.setAttribute("id", "msgTxt"),
	c.innerHTML = e,
	document.getElementById("msgDiv").appendChild(c)
}
function stringToBytes(e) {
	for (var t, n, o = [], a = 0; a < e.length; a++) {
		t = e.charCodeAt(a),
		n = [];
		do n.push(255 & t),
		t >>= 8;
		while (t);
		o = o.concat(n.reverse())
	}
	return o
}
function showPdf(e) {
	document.getElementById("container");
	container.style.display = "block";
	var t = convertDataURIToBinary(e);
	PDFJS.workerSrc = "../app/scripts/pdf.worker.js",
	PDFJS.getDocument(t).then(function(e) {
		var t = (document.getElementById("pop"), e.numPages),
		n = function(o) {
			e.getPage(o).then(function(e) {
				var t = 2,
				n = e.getViewport(t),
				o = document.getElementById("the-canvas");
				o.height = n.height,
				o.width = n.width,
				e.render({
					canvasContext: o.getContext("2d"),
					viewport: n
				})
			}),
			o < t && (o++, n(o))
		};
		n(1)
	})
}
function convertDataURIToBinary(e) {
	for (var t = window.atob(e), n = t.length, o = new Uint8Array(new ArrayBuffer(n)), a = 0; a < n; a++) o[a] = t.charCodeAt(a);
	return o
}
function go() {
	window.open("/app/showPDF.html")
}
function goto(e) {
	var t = atob(e);
	PDFJS.workerSrc = "//mozilla.github.io/pdf.js/build/pdf.worker.js";
	var n = PDFJS.getDocument({
		data: t
	});
	n.promise.then(function(e) {
		console.log("PDF loaded");
		var t = 1;
		e.getPage(t).then(function(e) {
			console.log("Page loaded");
			var t = 1.5,
			n = e.getViewport(t),
			o = document.getElementById("the-canvas"),
			a = o.getContext("2d");
			o.height = n.height,
			o.width = n.width;
			var i = {
				canvasContext: a,
				viewport: n
			},
			r = e.render(i);
			r.then(function() {
				console.log("Page rendered")
			})
		})
	},
	function(e) {
		console.error(e)
	})
}
window.onload = function() {};
var captchaId, getUrlParamObj = function() {
	function e(e) {
		var t;
		for (t in e) return ! 1;
		return ! 0
	}
	for (var t = {},
	n = location.search.substring(1), o = n.split("&"), a = 0; a < o.length; a++) {
		var i = o[a].indexOf("=");
		if (i != -1) {
			var r = o[a].substring(0, i),
			s = o[a].substring(i + 1);
			t[r] = decodeURI(s)
		}
	}
	return ! e(t) && t
},
param = getUrlParamObj();
0 != param && void 0 != param.code && "undefined" != param.code && (document.getElementById("verificationValue").value = param.code),
getCaptcha();
var cityType = "1";
setCity(cityType);
var getFocus = function() {},
loseFocus = function() {};
browserRedirect();