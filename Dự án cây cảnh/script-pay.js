document.addEventListener("DOMContentLoaded",function(){




	// lấy data

	var layDanhSachCay = JSON.parse(localStorage.getItem("danhSachCayCanh"));
	console.log(layDanhSachCay);


	var gioHang = JSON.parse(localStorage.getItem("gioHang"));


	var tableRef = document.getElementById('listCart').getElementsByTagName('tbody')[0];

	for (let index = 0; index < gioHang.length; index++) {
		element = gioHang[index];
		var items = layDanhSachCay.filter(x => x.id == element.id);
		
		var itemCayCanh = items[0];
	    var listHTML = 
	   		`
	   		<td scope="col"> ${itemCayCanh.id}</td>
	   		<td scope="col"><img src="${itemCayCanh.linkanh}" /></td>
	   		<td scope="col"> ${itemCayCanh.tencay}</td>
	        <td scope="col"> ${itemCayCanh.gia}</td>
	        <td scope="col"> ${element.count}</td>
	        <td scope="col"> ${element.count*itemCayCanh.gia}</td>
	        <td scope="col"> <button class="btn btn-danger">Xóa</button></td>
	        `;	
		tableRef.insertRow().innerHTML = listHTML;

	}

	// //insert Row
	// for (var i = 0; i < layDanhSachCay.length; i++) {
	// 	var itemCayCanh = layDanhSachCay[i];

	//     var listHTML = 
	//    		`
	//    		<td scope="col"> ${itemCayCanh.id}</td>
	//    		<td scope="col"><img src="${itemCayCanh.linkanh}" /></td>
	//    		<td scope="col"> ${itemCayCanh.tencay}</td>
	//         <td scope="col"> ${itemCayCanh.gia}</td>
	//         <td scope="col"> </td>
	//         <td scope="col"> </td>
	//         <td scope="col"> <button class="btn btn-danger">Xóa</button></td>
	//         `;	
	// 	tableRef.insertRow().innerHTML = listHTML;
	// }

},false);