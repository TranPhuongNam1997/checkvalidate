// khai bao ham chua doi tuong 

function getDuLieu(){
	var cayCanh = [
		{
			id: 1,
			tencay: "cây kim ngân lượng",
			gia: "20000",
			linkanh: "https://img2.thuthuatphanmem.vn/uploads/2018/12/05/anh-cay-canh-the-dep_121226476.jpg"
		},
		{
			id: 2,
			tencay: "cây mini",
			gia: "30000",
			linkanh: "https://afamilycdn.com/2019/9/5/33-1567649196717622170194-crop-15676492145021350614745.jpg"
		},
		{
			id: 3,
			tencay: "cây si",
			gia: "100000",
			linkanh: "https://phongthuyluan.net/wp-content/uploads/2018/09/cay-si-phong-thuy-co-y-nghia-gi.png"
		},
		{
			id: 4,
			tencay: "cây si",
			gia: "500000",
			linkanh: "https://tin.nhadat.net/assets/uploads/2017/09/y_nghia_cua_cay_si_1.jpg"
		},
		{
			id: 5,
			tencay: "cây Sen đá",
			gia: "500000",
			linkanh: "https://tin.nhadat.net/assets/uploads/2017/09/y_nghia_cua_cay_si_1.jpg"
		}

		
	];
	return cayCanh;
}


//khuan mau
class cayCanh{
	constructer(id,tencay,gia,linkanh){
		this.id = id;
		this.tencay = tencay;
		this.gia = gia;
		this.linkanh = linkanh;
	}
}

document.addEventListener('DOMContentLoaded',function(){
	
	
	if(localStorage.getItem("danhSachCayCanh") == null){
		var danhSach = getDuLieu();
		var newDanhSachString = JSON.stringify(danhSach);
		localStorage.setItem("danhSachCayCanh", newDanhSachString);
	}

})