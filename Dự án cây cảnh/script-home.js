






document.addEventListener('DOMContentLoaded',function(){

	// lay ve danh sach cay canh tu localstorage
	var layDanhSachCay = JSON.parse(localStorage.getItem("danhSachCayCanh"));
	console.log(layDanhSachCay);


	var blockcaycanh = document.getElementById('block-caycanh');
	for (var i = 0; i < layDanhSachCay.length; i++) {
		var itemcaycanh = layDanhSachCay[i];

		var itemcayHTML = `
			<div class="col-md-4 item-caycanh mt-4">
				<div class="card">
					<img class="card-img-top" src="${itemcaycanh.linkanh}" alt="ảnh">
					<div class="card-body">
						<h5 class="card-title">${itemcaycanh.tencay}</h5>
						<p class="card-text">Giá bán: ${itemcaycanh.gia}</p>
						<a href="#" class="btn btn-primary">Thêm vào giỏ hàng</a>
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


		// blockcaycanh.innerHTML = "";
		// for(var i = 0; i < layDanhSachCay.length; i++){
		// 	var itemcaycanh = layDanhSachCay[i];
		// 	if(itemcaycanh.tencay == timKiemVl.value){
		// 		alert("tìm kiếm đúng " + itemcaycanh.tencay);
		// 	}else{
		// 		alert("" + itemcaycanh.tencay);
		// 	}
		// }

		var cay = layDanhSachCay.filter(cayCanhNew => cayCanhNew.tencay == timKiemVl.value);


		console.log(cay)
		blockcaycanh.innerHTML = "";

		// if(cay.tencay == timKiemVl.value){
		// 	console.log('da vao')
			
			
		// }
		
		for (var i = 0; i < cay.length; i++) {
				var itemcaycanh = cay[i];

				var itemcayHTML = `
					<div class="col-md-4 item-caycanh mt-4">
						<div class="card">
							<img class="card-img-top" src="${itemcaycanh.linkanh}" alt="ảnh">
							<div class="card-body">
								<h5 class="card-title">${itemcaycanh.tencay}</h5>
								<p class="card-text">Giá bán: ${itemcaycanh.gia}</p>
								<a href="#" class="btn btn-primary">Thêm vào giỏ hàng</a>
							</div>
						</div>
					</div>
				`
				blockcaycanh.innerHTML  += itemcayHTML;
			}
	}

	



});