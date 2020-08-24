// B1 nhap mail va mat khau moi
// b2 xác nhận => den tran dang nhap va cho phep dang nhap voi mat khau moi da tao



//  1. lay danh sach tât cac ca account da dan ky(co o localstoge)
//   2. Tìm đên account có mail tương ứng  (Tham khao code login)
// Luu ý kiem tra xem mail da dc dang ky hay chua can dua r thong bao consolog
// 3 update mat khau vao doi tuong da tim thay.
//4 Xử làm sao để update acount có mật khẩu mới lên localstoge.
// Gợi ý: tìm kiếm Update object in array
// cách 2 chawncs chắn làm dc
//4.1 Sử dụng vòng for duyetj từng phần tử mảng
// kiểm tra nếu khác gamail thì add vao list mới, nếu trùng thì add tai khoản đã thay đôi mật khâu


			 // cu load lai trang no se chay vao day dung chua
		document.addEventListener('DOMContentLoaded',function(){
			// var listTk = [
			// {
			// 	id:1,
			// 	ho:"Nam",
			// 	ten: "23",
			// 	namSinh: '1997',
			// 	gmail: "nam@gmail.com",
			// 	matKhau:'123456',
			// 	gmailPhu: 'namtb@gmail.com',
			// 	diaChi: 'tb',
			// 	taikhoan:'namdaica',
			// 	soDt: '0976809926'
			// },
			// {
			// 	id:2,
			// 	ho:"Minh",
			// 	ten: "234",
			// 	namSinh: '1997',
			// 	gmail: "BG",
			// 	matKhau:'123456',
			// 	gmailPhu: 'minh@gmail.com',
			// 	diaChi: 'tb',
			// 	taikhoan:'minhdaica',
			// 	soDt: '0976809927'
			// },
			// {
			// 	id:3,
			// 	ho:"Tran",
			// 	ten: "232",
			// 	namSinh: '1997',
			// 	gmail: "tran@gmail.com",
			// 	matKhau:'123456',
			// 	gmailPhu: 'minhnb@gmail.com',
			// 	diaChi: 'nb',
			// 	taikhoan:'trandaica',
			// 	soDt: '0976809928'
			// }
			// ];





			// console.log(listTk)


			var danhSachTaiKhoanCuaHeThong3 = JSON.parse(localStorage.getItem("ListAccount"));
			console.log(danhSachTaiKhoanCuaHeThong3);



			// mailnhapvao="nam@gmail.com";
			// matkhaumoi="123abc";
			// thay mat khau cho mail tuong ung

			// var tk = listTk.find(taikhoanNew => taikhoanNew.gmail == mailnhapvao)
			// tk.matKhau = matkhaumoi;
			// console.log(listTk)

			// push len la xong localsotgate


			var nutXacThuc = document.getElementById('btnXacThuc');
			var mailNhap = document.getElementById('inputAccount');
			var mkMoi = document.getElementById('inputPassword');

			nutXacThuc.onclick = function(){
				var tk = danhSachTaiKhoanCuaHeThong3.find(taikhoanNew => taikhoanNew.gmail == mailNhap.value);

				

				tk.matKhau = mkMoi.value;

				danhSachTaiKhoanCuaHeThong3.push(tk);

				localStorage.removeItem("ListAccount");
				// localStorage.setItem("ListAccount",listUpdate);

				var listUpdateMk = JSON.stringify(danhSachTaiKhoanCuaHeThong3);
				localStorage.setItem("ListAccount",listUpdateMk);



				var danhSachTaiKhoanCuaHeThong4 = JSON.parse(localStorage.getItem("ListAccount"));
				console.log(danhSachTaiKhoanCuaHeThong4);
			}
			



		});
		