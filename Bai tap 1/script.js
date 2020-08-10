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
			},
			
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

		document.addEventListener('DOMContentLoaded',function(){
		
			var list = getData();

			localStorage.setItem("ListAccount",list);
			console.log(localStorage.getItem("ListAccount"))
			HanhDongDangKi();
			
		});

		function HanhDongDangKi(){
			console.log("laod")
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
				// doi tuong cu the
				var taikhoan1 = new taiKhoan(1,hoVl.value,tenVl.value,namSinhVl.value,gmailVl.value,matKhauVl.value,mailPhuVl.value,diaChuvl.value,taikhoanvl.value,sodtvl.value);

				//json duoc luu tru duoi dang string
				var newJSON = JSON.stringify(taikhoan1);

				// localStorage.setItem('itemaccount',newJSON);
				// console.log(msg)


			}


		}