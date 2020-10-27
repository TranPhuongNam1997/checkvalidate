

document.addEventListener('DOMContentLoaded',function(){
	// lay ve danh sach cay canh tu localstorage
	var layDanhSachCay = JSON.parse(localStorage.getItem("danhSachCayCanh"));
	console.log(layDanhSachCay);
	var blockcaycanh = document.getElementById('block-caycanh');

	//in tat ca cay canh ra man hinh
	loadData(layDanhSachCay,blockcaycanh);
	gioHang = JSON.parse(localStorage.getItem("gioHang"));
	demGioHang(gioHang);

	//hanh dong tim kiem
	var timKiemVl = document.getElementById('ip-search');
	var nutTimKiem = document.getElementById('btnTimKiem');


	nutTimKiem.onclick = function(){

		var cay = layDanhSachCay.filter(cayCanhNew => cayCanhNew.tencay.includes(timKiemVl.value));
		// console.log(cay)
		loadData(cay,blockcaycanh);

	}

	//hanh dong bam vao trang chu

	var showTrangChu = document.getElementById('gohome');
	showTrangChu.onclick = function(){

		loadData(layDanhSachCay,blockcaycanh);
		timKiemVl.value='';
	}

	// tang number 

	// var soGioHang = document.getElementById("number-cart");
	// var themVaoGioHang = document.getElementsByClassName("addtocart")[0];
	
	
	// themVaoGioHang.onclick = function() {
	  
	// };
	//chuyen trang gio hang

	var nutChuyenTrangGioHang = document.getElementById('show-cart');

	nutChuyenTrangGioHang.onclick = function(){
		window.location.href = "pay.html";
	}

	// check su kien textbox tim kiem thay doi
	timKiemVl.onkeypress = function(){
		var cay = layDanhSachCay.filter(cayCanhNew => cayCanhNew.tencay.includes(timKiemVl.value));
		// console.log(cay)
		loadData(cay,blockcaycanh);
	};

});


var count = 0;
	
function coutUp(id){

	 //Xử lý khi thêm vào giỏ hàng

	var itemNew = {
		id: id,
		count: 1
	};
	 
	var gioHang = JSON.parse(localStorage.getItem("gioHang"));

	if(gioHang == null){

		gioHang = [];
		gioHang.push(itemNew);

	}
	else
	{
		var items = gioHang.filter(x => x.id == id);
		if(items.length == 0)
		{
			gioHang.push(itemNew);
		}
		else{

			items[0].count++;
		}
	}

	localStorage.setItem("gioHang", JSON.stringify(gioHang));
	 //Xử lý khi thêm vào giỏ hàng
	demGioHang(gioHang)
	//console.log(JSON.parse(localStorage.getItem("gioHang")))
}

function loadData(layDanhSachCay,blockcaycanh){

	blockcaycanh.innerHTML = "";

	for (var i = 0; i < layDanhSachCay.length; i++) {
		var itemcaycanh = layDanhSachCay[i];

		var itemcayHTML = `
			<div class="col-md-4 item-caycanh mt-4">
				<div class="card">
					<img class="card-img-top" src="${itemcaycanh.linkanh}" alt="ảnh">
					<div class="card-body">
						<h5 class="card-title">${itemcaycanh.tencay}</h5>
						<p class="card-text">Giá bán: ${itemcaycanh.gia}</p>
						<a href="javascript:0;" class="btn btn-primary addtocart" onclick="coutUp(${itemcaycanh.id})">Thêm vào giỏ hàng</a>
					</div>
				</div>
			</div>
		`
		blockcaycanh.innerHTML  += itemcayHTML;
	}
}

function demGioHang(gioHang)
{
	console.log(gioHang);
	if(gioHang == null){
		gioHang = JSON.parse(localStorage.getItem("gioHang"));
	}
	var count = gioHang.length;
	console.log(count);
	document.getElementById("number-cart").innerHTML = "Giỏ hàng: " + count;
}
