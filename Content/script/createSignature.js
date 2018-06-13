var id = 0;
function createSignature() {
    document.getElementById('generate').innerHTML = "";
    var body = document.getElementById('generate');
    //create table for signature
    var tbl = document.createElement('table');
    tbl.id = 'tableSignature';
    tbl.style.width = '450px';
    tbl.style.font = 'bold 12px Century Gothic';
    tbl.setAttribute('border', '0');
    tbl.style.borderCollapse = 'collapse';
    var tbdy = document.createElement('tbody');
    var id = 0;
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.id = '0';
    tr.appendChild(td);
    var td = document.createElement('td');
    td.id = '1';
    tr.appendChild(td);
    tbdy.appendChild(tr);
    tbl.appendChild(tbdy);
    body.appendChild(tbl);
    //fill the table
    document.getElementById('0').innerHTML = '<img src="Content/icon/label.png" />';
    document.getElementById('0').style.width = '119px';
    document.getElementById('0').style.padding = '0px 10px 0px 10px';
    document.getElementById('0').style.borderRightWidth = 'medium';
    document.getElementById('0').style.borderRightStyle = 'solid';
    document.getElementById('0').style.borderRightColor = '#cbc9c9';
    var text = document.getElementById('name').value + '<br>';
    text += document.getElementById('position').value + ', Corporation LLC' + '<br>';
    text += document.getElementById('location').options[document.getElementById('location').selectedIndex].value + '<br>';
    //write personal info
    var phone = '';
    var email = '';
    var workskype = '';
    for (var val in data) {
        var inpt = document.getElementsByClassName(val.toString());
        for (var i = 0; i < inpt.length; i++) {
            if (inpt[i].value != '') {
                if ((data[val].type == 'contact') && (val.toString() == 'email')) {
                    email += '<img src="Content/icon/' + data[val].png + '" />' + '&nbsp' + '<a href="mailto:' + inpt[i].value + '" style="color:#3a57af; text-decoration: none;" title="Click to send email">' + inpt[i].value + '</a>' + '&nbsp';
                }
                else if ((data[val].type == 'contact') && ((val.toString() == 'work') || (val.toString() == 'personal'))) {
                    phone += '<img src="Content/icon/' + data[val].png + '" />' + '&nbsp' + inpt[i].value + '&nbsp';
                }
                else if ((data[val].type == 'contact') && (val.toString() == 'workskype')) {
                    workskype += '<img src="Content/icon/' + data[val].png + '" />' + '&nbsp' + inpt[i].value + '&nbsp';
                }
            }
        }
    }
    //break between phone & email
    if (phone != '') {
        phone += '<br>';
    }
    text += phone + email;
    if (email != '') {
        text += '<br>';
    }
    text += workskype;
    if (workskype != '') {
        text += '<br>';
    }
    //create signature for company letters

    if (document.getElementById('rbtn-1').checked == true) {
        text += '<img src="Content/icon/www.png" />' + '&nbsp' + '<a href="http://www.CorporationLLC.com/" style="color:#3a57af; text-decoration: none;" title="Web site Corporation LLC" target="_blank">www.CorporationLLC.com</a><br>' +
            '<img src="Content/icon/fb16x16.png" />' + '&nbsp' + '<a href="https://www.facebook.com/CorporationLLC/" style="color:#3a57af; text-decoration: none;" title="Web site CorporationLLC" target="_blank">CorporationLLC</a>' + '&nbsp &nbsp' +
            '<img src="Content/icon/fb16x16.png" />' + '&nbsp' + '<a href="https://www.facebook.com/CorporationLLC2/" style="color:#3a57af; text-decoration: none;" title="Web site CorporationLLC2" target="_blank">CorporationLLC2</a><br>';
        text += '<a href="https://play.google.com/store/apps/CorporationLLC"><img src="Content/icon/android.png" /></a>' + '&nbsp &nbsp' +
            '<a href="https://www.amazon.com/s/CorporationLLC"><img src="Content/icon/amazon.png" /></a>' + '&nbsp &nbsp' +
            '<a href="https://itunes.apple.com/us/developer/CorporationLLC"><img src="Content/icon/apple.png" /></a>' + '&nbsp &nbsp' +
            '<a href="https://www.linkedin.com/company/CorporationLLC"><img src="Content/icon/linkedin.png" /></a>';
    }
        //create signature for personal letters
    else if (document.getElementById('rbtn-2').checked == true) {
        //create info about messengers and social networks
        var messenger = '';
        var socnet = '';
        for (var val in data) {
            var inpt = document.getElementsByClassName(val.toString());
            for (var i = 0; i < inpt.length; i++) {
                if (inpt[i].value != '') {
                    if (data[val].type == 'mess') {
                        messenger += '<img src="Content/icon/' + data[val].png + '" />' + '&nbsp' + inpt[i].value + '&nbsp';
                    }
                    if (data[val].type == 'socnet') {
                        socnet += '<a href="' + inpt[i].value + '" target="_blank"><img src="Content/icon/' + data[val].png + '" /></a>' + '&nbsp &nbsp';
                    }
                }
            }
        }
        text += messenger;
        if (messenger != '') {
            text += '<br>';
        }
        text += socnet;
    }
    document.getElementById('1').style.padding = '0px 10px 0px 10px';
    document.getElementById('1').innerHTML = text;
    //create button 'copy to clipboard'
    var btn = document.createElement('input');
    btn.type = 'button';
    btn.className = 'buttonblue';
    btn.value = 'To clipboard';
    btn.setAttribute('onClick', "copySignature(document.getElementById('tableSignature'));");
    body.appendChild(btn);
}