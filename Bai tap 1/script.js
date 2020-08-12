//khai bao ham chua doi tuong
		function getData(){
			var taikhoan1 = [
			{
				id:1,
				ho:"Nam",
				ten: "23",
				namSinh: '1997',
				gmail: "nam@gmail.com",
				matKhau:'123456',
				gmailPhu: 'namtb@gmail.com',
				diaChi: 'tb',
				taikhoan:'namdaica',
				soDt: '0976809926'
			},
			{
				id:2,
				ho:"Minh",
				ten: "234",
				namSinh: '1997',
				gmail: "BG",
				matKhau:'123456',
				gmailPhu: 'minh@gmail.com',
				diaChi: 'tb',
				taikhoan:'minhdaica',
				soDt: '0976809927'
			},
			{
				id:3,
				ho:"Tran",
				ten: "232",
				namSinh: '1997',
				gmail: "tran@gmail.com",
				matKhau:'123456',
				gmailPhu: 'minhnb@gmail.com',
				diaChi: 'nb',
				taikhoan:'trandaica',
				soDt: '0976809928'
			}
			];
			return taikhoan1;
		}
		
		// function load(list){
		// 	for (var i = 0; i < list.length; i++) {
		// 		var itemlist = list[i];

		// 	}
		// }

		// khuan mau
	    class taiKhoan{
	    	constructor(id,ho,ten,namSinh,gmail,matKhau,gmailPhu,diaChi,taikhoan,soDt){
	    		this.id = id;
	    		this.ho = ho;
	    		this.ten = ten;
	    		this.namSinh = namSinh;
	    		this.gmail = gmail;
	    		this.matKhau = matKhau;
	    		this.gmailPhu = gmailPhu;
	    		this.diaChi = diaChi;
	    		this.taikhoan = taikhoan;
	    		this.soDt = soDt;
	    	}
	    }

	    // cu load lai trang no se chay vao day dung chua
		document.addEventListener('DOMContentLoaded',function(){
		
			if (localStorage.getItem("ListAccount") == null) {

	    		// Khoi tao list data ban dau
				var list = getData();
				var newJSON = JSON.stringify(list);
				localStorage.setItem("ListAccount",newJSON);
				
			}
		
			HanhDongDangNhap();
			//HanhDongChiTiet();
			HanhDongDangKi();
			
			
		});



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

			/// Cach 2

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
		


		}

		// js xu ly cho man hinh Chi tiet
		function HanhDongChiTiet(){

			
		
		

		}

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
				// console.log(danhSachTaiKhoan)


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
		
