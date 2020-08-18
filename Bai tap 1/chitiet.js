

// cu load lai trang no se chay vao day dung chua
	document.addEventListener('DOMContentLoaded',function(){
		
		var local=localStorage.getItem("AccountLoginNow");
		var convertdulieuchitiet = JSON.parse(local);
		document.getElementById('ho').innerHTML = (convertdulieuchitiet.ho == undefined) ? "" :  convertdulieuchitiet.ho;
		document.getElementById('ten').innerHTML = (convertdulieuchitiet.ten == undefined) ? "" :  convertdulieuchitiet.ten;
		document.getElementById('namsinh').innerHTML = (convertdulieuchitiet.namsinh == undefined) ? "" :  convertdulieuchitiet.namsinh;
		document.getElementById('gmail').innerHTML = (convertdulieuchitiet.gmail == undefined) ? "" :  convertdulieuchitiet.gmail;
		document.getElementById('gmailphu').innerHTML = (convertdulieuchitiet.gmailphu == undefined) ? "" :  convertdulieuchitiet.gmailphu;
		document.getElementById('diachi').innerHTML = (convertdulieuchitiet.diachi == undefined) ? "" :  convertdulieuchitiet.diachi;
		document.getElementById('taikhoan').innerHTML = (convertdulieuchitiet.taikhoan == undefined) ? "" :  convertdulieuchitiet.taikhoan;
		//																					dk            dung      sai
		document.getElementById('dienthoai').innerHTML = (convertdulieuchitiet.dienthoai == undefined) ? "" :  convertdulieuchitiet.dienthoai;
		
	});