function selectRadioBtn() {
    //check the state of RADIO buttons
    if (document.getElementById('rbtn-1').checked == true) {
        //document.getElementById('email').value = '';
        document.getElementById('generate').innerHTML = "";
        document.getElementById('socialTable').getElementsByTagName('tbody')[0].innerHTML = "";
        document.getElementById('social').style.visibility = 'hidden';
        document.getElementById('social').style.opacity = '0';
    } else if (document.getElementById('rbtn-2').checked == true) {
        //document.getElementById('email').value = '';
        document.getElementById('generate').innerHTML = "";
        document.getElementById('social').style.visibility = 'visible';
        document.getElementById('social').style.opacity = '1';
        initialization();
    }
}
function initialization() {
    //create TABLE for social media info
    var tbl = document.getElementById('socialTable').getElementsByTagName('tbody')[0];
    var row = tbl.insertRow(tbl.rows.length);
    var cell = row.insertCell();
    var lbl = document.createElement('label');
    lbl.id = 'icon';
    lbl.setAttribute('for', 'name');
    lbl.innerHTML = '<i class="fa fa-list-ul"></i>';
    cell.appendChild(lbl);
    cell = row.insertCell();
    //create SELECT with social networks
    var sel = document.createElement('select');
    sel.id = 'socnetwork';
    sel.style.width = '213px';
    cell.appendChild(sel);
    //fill SELECT
    for (var soc in data) {
        if (data[soc].type=='contact') {
            break;
        }
        var opt = document.createElement('option');
        opt.value = data[soc].title;
        opt.text = data[soc].title;
        sel.add(opt);
    }
    //create BUTTON "+" social media info
    var btnplus = document.createElement('button');
    btnplus.className = 'btnPlusMinus';
    btnplus.innerHTML = '<i class="fa fa-plus"></i>';
    btnplus.setAttribute('onClick', "addSocial('socialTable','socnetwork');");
    cell.appendChild(btnplus);

}
//function for event CLICK on the "+"
function addSocial(tblId, selId) {
    var e = document.getElementById(selId);
    var tbl = document.getElementById(tblId).getElementsByTagName('tbody')[0];
    for (var soc in data) {
        if (e.options[e.selectedIndex].text == data[soc].title) {
            var row = tbl.insertRow(tbl.rows.length);
            var cell = row.insertCell();
            var lbl = document.createElement('label');
            lbl.id = 'icon';
            lbl.setAttribute('for', 'name');
            lbl.innerHTML = '<i class="' + data[soc].icon + '"></i>';
            cell.appendChild(lbl);
            cell = row.insertCell();
            var inpt = document.createElement('input');
            inpt.type = 'text';
            inpt.className = soc.toString();
            inpt.placeholder = data[soc].placehold;
            inpt.style.width = '203px';
            cell.appendChild(inpt);
            //create BUTTON "-" social media info
            var btnminus = document.createElement('button');
            btnminus.className = 'btnPlusMinus';
            btnminus.style.marginTop = '16px';
            btnminus.innerHTML = '<i class="fa fa-minus"></i>';
            btnminus.setAttribute('onClick', "deleteSocial('" + tblId + "', this)");
            cell.appendChild(btnminus);
            break;
        }
    }
}
//function for event CLICK on the "-"
function deleteSocial(tblId, x) {
    document.getElementById(tblId).deleteRow(x.parentNode.parentNode.rowIndex);
}