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