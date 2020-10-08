

document.addEventListener('DOMContentLoaded',function(){



	// lay ve danh sach cay canh tu localstorage
	var layDanhSachCay = JSON.parse(localStorage.getItem("danhSachCayCanh"));
	console.log(layDanhSachCay);
	var blockcaycanh = document.getElementById('block-caycanh');

	//in tat ca cay canh ra man hinh
	for (var i = 0; i < layDanhSachCay.length; i++) {
		var itemcaycanh = layDanhSachCay[i];

		var itemcayHTML = `
			<div class="col-md-4 item-caycanh mt-4">
				<div class="card">
					<img class="card-img-top" src="${itemcaycanh.linkanh}" alt="ảnh">
					<div class="card-body">
						<h5 class="card-title">${itemcaycanh.tencay}</h5>
						<p class="card-text">Giá bán: ${itemcaycanh.gia}</p>
						<a href="javascript:0;" class="btn btn-primary addtocart" onclick="coutUp()">Thêm vào giỏ hàng</a>
					</div>
				</div>
			</div>
		`
		blockcaycanh.innerHTML  += itemcayHTML;
	}
	

	//hanh dong tim kiem
	var timKiemVl = document.getElementById('ip-search');
	var nutTimKiem = document.getElementById('btnTimKiem');


	nutTimKiem.onclick = function(){

		var cay = layDanhSachCay.filter(cayCanhNew => cayCanhNew.tencay == timKiemVl.value);
		// console.log(cay)
		blockcaycanh.innerHTML = "";

		for (var i = 0; i < cay.length; i++) {
			var itemcaycanh = cay[i];

			var itemcayHTML = `
				<div class="col-md-4 item-caycanh mt-4">
					<div class="card">
						<img class="card-img-top" src="${itemcaycanh.linkanh}" alt="ảnh">
						<div class="card-body">
							<h5 class="card-title">${itemcaycanh.tencay}</h5>
							<p class="card-text">Giá bán: ${itemcaycanh.gia}</p>
							<a href="javascript:0;" class="btn btn-primary addtocart" onclick="coutUp()">Thêm vào giỏ hàng</a>
						</div>
					</div>
				</div>
			`
			blockcaycanh.innerHTML  += itemcayHTML;
		}
	}

	//hanh dong bam vao trang chu

	var showTrangChu = document.getElementById('gohome');
	showTrangChu.onclick = function(){

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
							<a href="javascript:0;" class="btn btn-primary addtocart" onclick="coutUp()">Thêm vào giỏ hàng</a>
						</div>
					</div>
				</div>
			`
			blockcaycanh.innerHTML  += itemcayHTML;
		}
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

});


var count = 0;
	
function coutUp(){
	// console.log('msg')
	
	count += 1;
 	document.getElementById("number-cart").innerHTML = "Giỏ hàng: " + count;
}
