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
			document.getElementById('create-ac').onclick = function(){
				window.location.href = "dangky.html";
			}
		
			HanhDongDangNhap();
			//HanhDongChiTiet();
			HanhDongDangKi();
			
			
		});

		// js xu ly cho man hinh Chi tiet
		function HanhDongChiTiet(){

			
		
		

		}

		
		
