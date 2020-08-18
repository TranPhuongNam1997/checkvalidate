// js xu ly cho man hinh dang nhap
		function HanhDongDangNhap(){

			var danhSachTaiKhoanCuaHeThong = JSON.parse(localStorage.getItem("ListAccount"));
			console.log(danhSachTaiKhoanCuaHeThong);

				//khai bao bien
		
			document.getElementById("login").onclick=function(){
				var accountVl = document.getElementById("inputAccount").value;
				var passwordVl = document.getElementById("inputPassword").value;
				// /// cach 1
				// for (var i = 0; i < danhSachTaiKhoanCuaHeThong.length; i++) {

				// 	var taikhoanHienTai = danhSachTaiKhoanCuaHeThong[i];
				// 	if (taikhoanHienTai.gmail == accountVl || taikhoanHienTai.taikhoan == accountVl) {
				// 		if (taikhoanHienTai.matKhau == passwordVl) {
				// 			console.log("Oke")
				// 			// chuyen tran la xong
				// 			return;
				// 		}
				// 	}
					
				// }
				// console.log("Not Oke")// show messsage tai khoan mat khau ko dung

				/// Cach 2 tìm ra item chứa các
				
				var taiKhoan = danhSachTaiKhoanCuaHeThong.find(taiKhoan => (taiKhoan.gmail == accountVl && taiKhoan.matKhau == passwordVl ) ||  (taiKhoan.taikhoan == accountVl && taiKhoan.matKhau == passwordVl)); // tra ve doi tuong
				
				if (taiKhoan == undefined) {

					console.log("Not Oke")// show messsage tai khoan mat khau ko dung Nam tu xur ly
				}
				else{

					//checkvalidate
					checkAccount();
					checkPassword();


					var taiKhoanJson = JSON.stringify(taiKhoan);
					localStorage.setItem("AccountLoginNow",taiKhoanJson);
					window.location.href = "chitiet.html";
				}

			}
			

			// chuc nang chuyen sang trang mật khẩu
			var quenmatkhau = document.getElementById('quen-matkhau');
			quenmatkhau.onclick = function(){
				window.location.href = "quenmatkhau.html";
			}


		}

		 // var accountVl = null;
		 // var passwordVl = null;

		document.addEventListener('DOMContentLoaded',function(){
			HanhDongDangNhap();

			 accountVl = document.getElementById("inputAccount");
			 passwordVl = document.getElementById("inputPassword");

			 document.getElementById('create-ac').onclick = function(){
				window.location.href = "dangky.html";
			};
		});


		//ham kiem tra tai khoan

		function checkAccount(){
			
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

			if(accountVl.value == ""){
				document.getElementById("er-accountnotnull").style.display = "block";
				document.getElementById("er-account").style.display = "none";
			}
			
			else if(!re.test(accountVl.value) &&  accountVl.value != "") {
				document.getElementById("er-accountnotnull").style.display = "none";
			    document.getElementById("er-account").style.display = "block";
			} 
			
			else {
			    document.getElementById("er-accountnotnull").style.display = "none";
			    document.getElementById("er-account").style.display = "none";
			}
		}
		
		//ham kiem tra mat khau
		function checkPassword(){
			if (passwordVl.value == "") {
			    document.getElementById("er-password").style.display = "block";
			} 

			else {
			    document.getElementById("er-password").style.display = "none";
			}
		}