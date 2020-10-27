document.addEventListener("DOMContentLoaded",function(){

	var gioHang = JSON.parse(localStorage.getItem("gioHang"));
	loadData(gioHang);

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

function loadData(gioHang){

	demGioHang(gioHang);
	// lấy data
	var layDanhSachCay = JSON.parse(localStorage.getItem("danhSachCayCanh"));

	var tableRef = document.getElementById('listCart').getElementsByTagName('tbody')[0];
	tableRef.innerHTML='';
	for (let index = 0; index < gioHang.length; index++) {
		element = gioHang[index];
		var items = layDanhSachCay.filter(x => x.id == element.id);
		
		var itemCayCanh = items[0];
	    var listHTML = 
	   		`
	   		<td scope="col"> ${index+1}</td>
	   		<td scope="col"><img src="${itemCayCanh.linkanh}" /></td>
	   		<td scope="col"> ${itemCayCanh.tencay}</td>
	        <td scope="col"> ${itemCayCanh.gia}</td>
	        <td scope="col"> ${element.count}</td>
	        <td scope="col"> ${element.count*itemCayCanh.gia}</td>
	        <td scope="col" onclick="removeItem(${itemCayCanh.id})"> <button class="btn btn-danger">Xóa</button></td>
			`;	
		tableRef.insertRow().innerHTML = listHTML;

	}

}

function removeItem(id)
{
	var gioHang = JSON.parse(localStorage.getItem("gioHang"));

	for (var i = 0; i < gioHang.length; i++) {
		var obj = gioHang[i];
	
		if (obj.id == id) {
			gioHang.splice(i, 1);
		}
	}
	localStorage.setItem("gioHang", JSON.stringify(gioHang));
	loadData(gioHang);
}