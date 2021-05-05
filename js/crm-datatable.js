var data = [
  {
    spread: true,
    data1: "03.09.2020",
    data2: "10:32",
    data3: "הילה",
    data4: "מי מטעם הלקוח",
    data5: "נורית ישראלי",
    data6: "פנייה טלפונית",
    data7: "תיאום פגישת היכרות",
    data8: "הועבר לגוף מנהל",
    data9: "גנית",
    data10: "בתהליך",
    data11: "נמוך",
    data12: "03.09.2020",
    data13: "טקסט  (ניתן לערוך)",    
  },
  {
    spread: false,
    data1: "02.09.2020",
    data2: "16:32",
    data3: "טלפונית",
    data4: "הילה",
    data5: "נורית ישראלי",
    data6: "פנייה טלפונית",
    data7: "תיאום פגישת היכרות",
    data8: "הועבר לגוף מנהל",
    data9: "גנית",
    data10: "בתהליך",
    data11: "נמוך",
    data12: "03.09.2020",
    data13: "טקסט  (ניתן לערוך)"
  },
  {
    spread: false,
    data1: "01.09.2020",
    data2: "14:39",
    data3: "הילה",
    data4: "מי מטעם הלקוח",
    data5: "הילה",
    data6: "פנייה טלפונית",
    data7: "תיאום פגישת היכרות",
    data8: "הועבר לגוף מנהל",
    data9: "גנית",
    data10: "בתהליך",
    data11: "נמוך",
    data12: "03.19.2020",
    data13: "טקסט  (ניתן לערוך)"
  },
  {
    spread: false,
    data1: "03.09.2021",
    data2: "14:32",
    data3: "הילה",
    data4: "מי מטעם הלקוח",
    data5: "נורית ישראלי",
    data6: "הילה",
    data7: "תיאום פגישת היכרות",
    data8: "הועבר לגוף מנהל",
    data9: "גנית",
    data10: "בתהליך",
    data11: "נמוך",
    data12: "03.09.2020",
    data13: "טקסט  (ניתן לערוך)"
  },
  {
    spread: false,
    data1: "03.09.2020",
    data2: "14:32",
    data3: "הילה",
    data4: "מי מטעם הלקוח",
    data5: "נורית ישראלי",
    data6: "פנייה טלפונית",
    data7: "הילה",
    data8: "הועבר לגוף מנהל",
    data9: "גנית",
    data10: "בתהליך",
    data11: "נמוך",
    data12: "03.09.2020",
    data13: "טקסט  (ניתן לערוך)"
  }
];

var sortFlag = [];
for (i=0; i<12; i++) {
  sortFlag[i] = false;
}

$('document').ready( function () {
  renderTable(data);
});

const sort = (index) => {
  switch (index) {
    case 0: {
      if(sortFlag[index]) {
        data.sort(function(a, b){
          var x = a.data1.toLowerCase();
          var y = b.data1.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      }
      else {
        data.sort(function(a, b){
          var x = a.data1.toLowerCase();
          var y = b.data1.toLowerCase();
          if (x < y) {return 1;}
          if (x > y) {return -1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 1: {
      if(sortFlag[index]) {
        data.sort(function(a, b){
          var x = a.data2.toLowerCase();
          var y = b.data2.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      }
      else {
        data.sort(function(a, b){
          var x = a.data2.toLowerCase();
          var y = b.data2.toLowerCase();
          if (x < y) {return 1;}
          if (x > y) {return -1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 2: {
      if(sortFlag[index]) {
        data.sort(function(a, b){
          var x = a.data3.toLowerCase();
          var y = b.data3.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      }
      else {
        data.sort(function(a, b){
          var x = a.data3.toLowerCase();
          var y = b.data3.toLowerCase();
          if (x < y) {return 1;}
          if (x > y) {return -1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 3: {
      if(sortFlag[index]) {
        data.sort(function(a, b){
          var x = a.data4.toLowerCase();
          var y = b.data4.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      }
      else {
        data.sort(function(a, b){
          var x = a.data4.toLowerCase();
          var y = b.data4.toLowerCase();
          if (x < y) {return 1;}
          if (x > y) {return -1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 4: {
      if(sortFlag[index]) {
        data.sort(function(a, b){
          var x = a.data5.toLowerCase();
          var y = b.data5.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      }
      else {
        data.sort(function(a, b){
          var x = a.data5.toLowerCase();
          var y = b.data5.toLowerCase();
          if (x < y) {return 1;}
          if (x > y) {return -1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 5: {
      if(sortFlag[index]) {
        data.sort(function(a, b){
          var x = a.data6.toLowerCase();
          var y = b.data6.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      }
      else {
        data.sort(function(a, b){
          var x = a.data6.toLowerCase();
          var y = b.data6.toLowerCase();
          if (x < y) {return 1;}
          if (x > y) {return -1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 6: {
      if(sortFlag[index]) {
        data.sort(function(a, b){
          var x = a.data7.toLowerCase();
          var y = b.data7.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      }
      else {
        data.sort(function(a, b){
          var x = a.data7.toLowerCase();
          var y = b.data7.toLowerCase();
          if (x < y) {return 1;}
          if (x > y) {return -1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 7: {
      if(sortFlag[index]) {
        data.sort(function(a, b){
          var x = a.data8.toLowerCase();
          var y = b.data8.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      }
      else {
        data.sort(function(a, b){
          var x = a.data8.toLowerCase();
          var y = b.data8.toLowerCase();
          if (x < y) {return 1;}
          if (x > y) {return -1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 8: {
      if(sortFlag[index]) {
        data.sort(function(a, b){
          var x = a.data9.toLowerCase();
          var y = b.data9.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      }
      else {
        data.sort(function(a, b){
          var x = a.data9.toLowerCase();
          var y = b.data9.toLowerCase();
          if (x < y) {return 1;}
          if (x > y) {return -1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 9: {
      if(sortFlag[index]) {
        data.sort(function(a, b){
          var x = a.data10.toLowerCase();
          var y = b.data10.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      }
      else {
        data.sort(function(a, b){
          var x = a.data10.toLowerCase();
          var y = b.data10.toLowerCase();
          if (x < y) {return 1;}
          if (x > y) {return -1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 10: {
      if(sortFlag[index]) {
        data.sort(function(a, b){
          var x = a.data11.toLowerCase();
          var y = b.data11.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      }
      else {
        data.sort(function(a, b){
          var x = a.data11.toLowerCase();
          var y = b.data11.toLowerCase();
          if (x < y) {return 1;}
          if (x > y) {return -1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 11: {
      if(sortFlag[index]) {
        data.sort(function(a, b){
          var x = a.data12.toLowerCase();
          var y = b.data12.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      }
      else {
        data.sort(function(a, b){
          var x = a.data12.toLowerCase();
          var y = b.data12.toLowerCase();
          if (x < y) {return 1;}
          if (x > y) {return -1;}
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
  }
}

const minus = (index) => {
  data[index].spread = false;
  renderTable(data);
}

const plus = (index) => {
  data[index].spread = true;
  renderTable(data);
}

const edit = (index) => {
  $(".crm-modal").css({"display": "block"});
  $("#crm-modal-back").css({"display": "block"});
  $(".crm-side-modal-container").css({"display": "block"});
  $(".crm-side-modal-container2").css({"display": "none"});
  $(".crm-side-modal-container3").css({"display": "none"});
  $(".crm-side-modal-container4").css({"display": "none"});
}

const qa = (index) => {
  $(".crm-modal").css({"display": "block"});
  $("#crm-modal-back").css({"display": "block"});
  $(".crm-side-modal-container").css({"display": "none"});
  $(".crm-side-modal-container2").css({"display": "none"});
  $(".crm-side-modal-container3").css({"display": "none"});
  $(".crm-side-modal-container4").css({"display": "block"});
}

const btn1 = (val, index) => {
  data[index].data10 = val;
  switch (val) {
    case 'ישראלי': {
      data[index].databack10 = "#de0101";
      break;
    }
    case 'מנהל': {
      data[index].databack10 = "#7abbfc";
      break;
    }
    case 'נמוך': {
      data[index].databack10 = "#c2c3c5";
      break;
    }
    case 'בתהליך': {
      data[index].databack10 = "#1e87f0";
      break;
    }
  }
  renderTable(data);
}

const btn2 = (val, index) => {
  data[index].data11 = val;
  switch (val) {
    case 'נמוך': {
      data[index].databack11 = "#de0101";
      break;
    }
    case 'ישראלי': {
      data[index].databack11 = "#7abbfc";
      break;
    }
    case 'מנהל': {
      data[index].databack11 = "#c2c3c5";
      break;
    }
    case 'בתהליך': {
      data[index].databack11 = "#1e87f0";
      break;
    }
  }
  renderTable(data);
}

const renderTable = (data) => {
  $("#crm-datatable").html('');
  data.map(function( val, index ) {
    var img_spread = val.spread ? `<img onclick="minus(${index})" src="./images/ic_minus_24px.svg" style="padding-left: 6px; cursor: pointer;">` : `<img onclick="plus(${index})" src="./images/ic_plus.svg" style="padding-left: 6px; cursor: pointer;">`;
    var text_spread = val.spread ? `<tr><td colspan="13"> <textarea style=" background: transparent; margin:10px; border: 0; resize: none; width: 1200px; outline: none; height: 100px; " placeholder="${val.data13}" /><td> <tr>` : null;    
    
    $("#crm-datatable").append(`
      <tr id="${index}" style="border-bottom: 1px solid ; box-shadow: 0px 1px 5px rgb(0 0 0 / 30%);">
        <td style="display: inline-flex; padding-top: 14px;">
            ${img_spread}
            <label class="custom-radio" style="color:#485272; padding-bottom: 10px;">
                <input type="checkbox">
                <span class="checkmark-2"></span>
            </label>   
        </td>
        <td>
            <img onclick="edit(${index})" src="./images/Edit-small.svg" style="padding-left: 8px; cursor: pointer;">
            <img onclick="qa(${index})" src="./images/ic_question_answer_24px.svg" style="cursor: pointer;">
        </td>
        <td>
            <div class="crm-td-body">
                <span>${val.data1}</span>
            </div>
        </td>
        <td>
            <div class="crm-td-body">
                <span style="padding-left: 31px;">${val.data2}</span>
            </div>
        </td>
        <td>
            <div class="crm-td-body">
                <span style="padding-left: 46px;">${val.data3}</span>
            </div>
        </td>
        <td>
            <div class="crm-td-body">
                <span>${val.data4}</span>
            </div>
        </td>
        <td>
            <div class="crm-td-body">
                <span>${val.data5}</span>
            </div>
        </td>
        <td>
            <div class="crm-td-body">
                <span>${val.data6}</span>
            </div>
        </td>
        <td>
            <div class="crm-td-body">
                <span>${val.data7}</span>
            </div>
        </td>
        <td>
            <div class="crm-td-body">
                <span>${val.data8}</span>
                <img src="./images/ic_arrow_down.svg" style="opacity: 0;">
            </div>
        </td>
        <td>
            <div class="crm-td-body">
                <span style="padding-left: 52px;">${val.data9}</span>
                <img src="./images/ic_arrow_down.svg" style="opacity: 0;">
            </div>
        </td>
        <td>
            <div class="dropdown2">
                <button class="dropbtn2" style="cursor: pointer;
                border: 2px solid #e9e9e9;
                background-color: ${val.databack10};
                border-radius: 10px;
                margin: 10px 5px;
                padding: 5px 22px;
                font-size: 14px;
                min-width: 6vw;
                color: white; ">${val.data10}</button>
                <div class="dropdown-content2">
                <span onclick="btn1('ישראלי', ${index})" >ישראלי</span>
                <span onclick="btn1('מנהל', ${index})" >מנהל</span>
                <span onclick="btn1('נמוך', ${index})" >נמוך</span>
                <span onclick="btn1('בתהליך', ${index})" >בתהליך</span>
                <p></p>
                </div>
            </div>
        </td>
        <td>
            <div class="dropdown2">
                <button class="dropbtn2" style="cursor: pointer;
                border: 2px solid #e9e9e9;
                background-color: ${val.databack11};
                border-radius: 10px;
                margin: 10px 5px;
                padding: 5px 22px;
                font-size: 14px;
                min-width: 6vw;
                color: white; " >${val.data11}</button>
                <div class="dropdown-content2">
                <span onclick="btn2('נמוך', ${index})" >נמוך</span>
                <span onclick="btn2('ישראלי', ${index})" >ישראלי</span>
                <span onclick="btn2('מנהל')", ${index} >מנהל</span>
                <span onclick="btn2('בתהליך', ${index})" >בתהליך</span>
                <p></p>
                </div>
            </div>
        </td>
        <td>
            <div class="crm-td-body">
                <span>${val.data12}</span>
                <img src="./images/ic_date_range_24px.svg" style="opacity: 0;">
            </div>
        </td>
      </tr>
    `);
    if(text_spread)
      $("#crm-datatable").append(text_spread);
  });
}
