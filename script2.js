//置入按鈕

/*var _table  = document.getElementsByClassName('table')[0],
	_tbody  = _table.getElementsByTagName('tbody')[0],
	_tr     = _tbody.getElementsByTagName('tr')[0],
	_lasttd = _tr.getElementsByTagName('td')[4],
	bootclas= ['danger','warning','success','default'],
	btnTxt  = ['Red','Yellow','Green','Edit'];

for (var y=0 ; y<4 ; y++) {
	var btn     = document.createElement('BUTTON'),
		colorTxt= document.createTextNode(btnTxt[y]);
	btn.appendChild(colorTxt);
	btn.setAttribute('type','button');
	btn.setAttribute('class','btn btn-'+bootclas[y]);
	_lasttd.appendChild(btn);
}*/

//改變顏色(待修)
var changeColor = document.getElementsByName('changeColor');
function changing(){
	this.parentNode.parentNode.style.backgroundColor = this.innerHTML;
};
for(var i=0; i<changeColor.length; i++){
	changeColor[i].onclick = changing;
}

//清空顏色
function refreshColor (){
	var tbody   = document.getElementsByTagName('tbody')[0],
		childtr = tbody.getElementsByTagName('tr');
	for (var all=0 ; all<childtr.length ; all++ ){
		childtr[all].style.backgroundColor = '';
	}
}
document.getElementsByName('refresh')[0].onclick = refreshColor;

//放到下面文字
var editArray = new Array();
function editTxt () {
	var editRow = document.getElementById('editRow');
	editRow.style.display = 'table-row';
	for (var x=0 ; x<document.getElementsByTagName('tr').length ; x++ ){
		document.getElementsByTagName('tr')[x].className='';
	}
	this.parentNode.parentNode.className='editing';
	for (var trtxt=0 ; trtxt < 4 ; trtxt++ ) {
		var allTxt=this.parentNode.parentNode.getElementsByTagName('td')[trtxt].innerHTML;
		editArray.push(allTxt);
	}
	for (var setval=0 ; setval < editArray.length ; setval++){
		document.getElementById('editRow').getElementsByTagName('input')[setval].value=editArray[setval];
		//console.log(document.getElementById('editRow').getElementsByTagName('input')[setval]);
	}
	editArray=[];
}
for (var ed = 0 ; ed < 6 ; ed ++){
	document.getElementsByName('edit')[ed].onclick = editTxt;
}

//儲存文字
var saveArray = new Array();
function saveTxt () {
	var editRow = document.getElementById('editRow');
	editRow.style.display = 'none';
	for (var setval=0 ; setval < 4 ; setval++){
		saveArray[setval]=document.getElementById('editRow').getElementsByTagName('input')[setval].value;
	}
	for (var trtxt=0 ; trtxt < 4 ; trtxt++ ) {
		document.getElementsByClassName('editing')[0].getElementsByTagName('td')[trtxt].innerHTML = saveArray[trtxt];
	}
}
document.getElementsByName('save')[0].onclick = saveTxt;

//搜尋功能
function keywordsearch () {
	var targettxt = document.getElementById('targetkey').value,
		wrap      = document.getElementsByTagName('tbody')[0],
		clearser  = wrap.getElementsByTagName('tr'),
		items     = wrap.getElementsByTagName('td');
	for (var cl=0; cl<clearser.length ; cl++){
		clearser[cl].style.backgroundColor = '';
	}
	for (var i=0; i<items.length ; i++){
		if ((i-4)%5!=0 && items[i].innerText.indexOf(targettxt)>=0){ //這樣寫加新項目的話很麻煩
			items[i].parentNode.style.backgroundColor = '#c3e4ef';
		}
	}
	//console.log(targettxt);
}
document.getElementsByName('search')[0].onclick = keywordsearch;

//開啟新增功能
var plusbtn = document.getElementsByName('plus')[0],
	addRow  = document.getElementById('addRow');
function plusShow () {
	addRow.style.display = 'table-row';
	var tbody  = document.getElementsByTagName('tbody')[0],
		trs    = tbody.getElementsByTagName('tr'),
		selnum = document.getElementsByName('posi')[0];
	for (var tn=0 ; tn<trs.length+1 ; tn++) {
		var option   = document.createElement('option'),
			optTxt   = document.createTextNode('插入空隙 '+(tn+1));
		option.appendChild(optTxt);
		option.setAttribute('value',tn);
		selnum.appendChild(option);
	}
}
plusbtn.onclick = plusShow;

//新增功能
var newInfo = new Array(),
	addbtn  = document.getElementsByName('add')[0],
	newBox  = addRow.getElementsByTagName('input'),
	tbody   = document.getElementsByTagName('tbody')[0];
	
function adding () {
	var posi    = document.getElementsByName('posi')[0],
		tposi   = posi.value,
		newtr   = document.createElement('tr'),
		btnbox  = document.createElement('td'),
		btnclas = ['danger','warning','success','default'],
		btnTxt  = ['Red','Yellow','Green','Edit'];
	for (var tb=0 ; tb < btnclas.length ; tb++ ){
		var newbtn    = document.createElement('button'),
			newbtntxt = document.createTextNode(btnTxt[tb]);
		newbtn.setAttribute('type','button');
		newbtn.setAttribute('class','btn btn-'+btnclas[tb]);
		newbtn.appendChild(newbtntxt);
		if (tb < btnclas.length-1) {
			newbtn.setAttribute('name','changeColor');
			newbtn.onclick = changing;
		} else {
			newbtn.setAttribute('name','edit');
			newbtn.onclick = editTxt;
		}
		btnbox.appendChild(newbtn);
	}

	//console.log(tposi);
	for (var st=0 ; st < newBox.length ; st++ ){
		newInfo.push(newBox[st].value);
	}
	for (var pu=0 ; pu < newInfo.length ; pu++ ){
		var newtd    = document.createElement('td');
		newtrtxt = document.createTextNode(newInfo[pu]);
		newtd.appendChild(newtrtxt);
		newtr.appendChild(newtd);
		newtr.appendChild(btnbox);

		if (tposi == 0) {
			tbody.insertBefore(newtr,tbody.getElementsByTagName('tr')[0]);
		} else if (tposi == tbody.getElementsByTagName('tr').length){
			tbody.appendChild(newtr);
		} else {
			tbody.insertBefore(newtr,tbody.getElementsByTagName('tr')[tposi]);
		}
	}
	posi.innerHTML = '';
	document.getElementById('addRow').style.display = 'none';
	newInfo =[];
}
addbtn.onclick = adding;