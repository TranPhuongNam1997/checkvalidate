// cu load lai trang no se chay vao day dung chua
	document.addEventListener('DOMContentLoaded',function(){
		HanhDongDangKi();
		
	});

// js xu ly cho man hinh dang ki
		function HanhDongDangKi(){
			
				// chuyen huong sang trang chu

			var redirecthome = document.getElementById('redirect-home');

			redirecthome.onclick = function(){
				window.location.href = "trangchu.html";
			}
			//test

		    // khai bao gia trị các input 
		    var hoVl = document.getElementById('ho');
		    var tenVl = document.getElementById('ten');
		    var namSinhVl = document.getElementById('namSinh');
		    var gmailVl = document.getElementById('gmail');
		    var matKhauVl = document.getElementById('matKhau');
		    var xacNhanVl = document.getElementById('xacNhan');
		    var mailPhuVl = document.getElementById('mailPhu');
		    var diaChuvl = document.getElementById('diaChi');
		    var taikhoanvl = document.getElementById('taiKhoanchild');
		    var sodtvl = document.getElementById('soDienThoai');
		    var conFirmx = document.getElementById('conFirm');
		
		   


			conFirmx.onclick = function(){
				//B1 tao doi tuong
				// doi tuong cu the
				var taikhoanNew = new taiKhoan(1,hoVl.value,tenVl.value,namSinhVl.value,gmailVl.value,matKhauVl.value,mailPhuVl.value,diaChuvl.value,taikhoanvl.value,sodtvl.value);

				// cach khoi tao 2
				// var taikhoanNew = new taiKhoan();

				// taikhoanNew.Namsainh =namSinhVl.value;
				// .....

				//json duoc luu tru duoi dang string
				var newJSON = JSON.stringify(taikhoanNew);


				// b2 lay danh sach db tu localstoge

				var danhSachTaiKhoanCuaHeThong = JSON.parse(localStorage.getItem("ListAccount"));
				console.log(danhSachTaiKhoanCuaHeThong)


				taikhoanNew.id=danhSachTaiKhoanCuaHeThong.length+1;  // id = [so phan tu cua danh sach] + 1 
				// b3 add taikhoanNew vao danh db
				danhSachTaiKhoanCuaHeThong.push(taikhoanNew);

				var listUpdate = JSON.stringify(danhSachTaiKhoanCuaHeThong);
				localStorage.removeItem("ListAccount");
				localStorage.setItem("ListAccount",listUpdate);
				console.log("dangki thanh cong"); // thay bang di chuyen urrl den trang dang nhap

				var danhSachTaiKhoanCuaHeThong2 = JSON.parse(localStorage.getItem("ListAccount"));
				console.log(danhSachTaiKhoanCuaHeThong2)



			}


		}