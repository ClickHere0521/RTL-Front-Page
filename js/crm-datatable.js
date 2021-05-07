var data = [
  {
    spread: true,
    data1: "03/09/2020",
    data2: "10:32",
    data3: "הילה",
    data4: "מי מטעם הלקוח",
    data5: "נורית ישראלי",
    data6: "פנייה טלפונית",
    data7: "תיאום פגישת היכרות",
    data8: " לגוף מנהל",
    data9: "גנית",
    data10: "בתהליך",
    data11: "נמוך",
    data12: "03/09/2020",
    data13: "טקסט  (ניתן לערוך)",
  },
  {
    spread: false,
    data1: "02/09/2020",
    data2: "16:32",
    data3: "טלפונית",
    data4: "הילה",
    data5: "נורית ישראלי",
    data6: "פנייה טלפונית",
    data7: "תיאום פגישת היכרות",
    data8: " לגוף מנהל",
    data9: "גנית",
    data10: "בתהליך",
    data11: "נמוך",
    data12: "03/09/2020",
    data13: "טקסט  (ניתן לערוך)",
  },
  {
    spread: false,
    data1: "01/09/2020",
    data2: "14:39",
    data3: "הילה",
    data4: "מי מטעם הלקוח",
    data5: "הילה",
    data6: "פנייה טלפונית",
    data7: "תיאום פגישת היכרות",
    data8: " לגוף מנהל",
    data9: "גנית",
    data10: "בתהליך",
    data11: "נמוך",
    data12: "03/19/2020",
    data13: "טקסט  (ניתן לערוך)",
  },
  {
    spread: false,
    data1: "03/09/2021",
    data2: "14:32",
    data3: "הילה",
    data4: "מי מטעם הלקוח",
    data5: "נורית ישראלי",
    data6: "הילה",
    data7: "תיאום פגישת היכרות",
    data8: " לגוף מנהל",
    data9: "גנית",
    data10: "בתהליך",
    data11: "נמוך",
    data12: "03/09/2020",
    data13: "טקסט  (ניתן לערוך)",
  },
  {
    spread: false,
    data1: "03/09/2020",
    data2: "14:32",
    data3: "הילה",
    data4: "מי מטעם הלקוח",
    data5: "נורית ישראלי",
    data6: "פנייה טלפונית",
    data7: "הילה",
    data8: " לגוף מנהל",
    data9: "גנית",
    data10: "בתהליך",
    data11: "נמוך",
    data12: "03/09/2020",
    data13: "טקסט  (ניתן לערוך)",
  },
];

var sortFlag = [];
for (i = 0; i < 12; i++) {
  sortFlag[i] = false;
}

$("document").ready(function () {
  renderTable(data);
});

const sort = (index) => {
  switch (index) {
    case 0: {
      if (sortFlag[index]) {
        data.sort(function (a, b) {
          var x = a.data1.toLowerCase();
          var y = b.data1.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      } else {
        data.sort(function (a, b) {
          var x = a.data1.toLowerCase();
          var y = b.data1.toLowerCase();
          if (x < y) {
            return 1;
          }
          if (x > y) {
            return -1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 1: {
      if (sortFlag[index]) {
        data.sort(function (a, b) {
          var x = a.data2.toLowerCase();
          var y = b.data2.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      } else {
        data.sort(function (a, b) {
          var x = a.data2.toLowerCase();
          var y = b.data2.toLowerCase();
          if (x < y) {
            return 1;
          }
          if (x > y) {
            return -1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 2: {
      if (sortFlag[index]) {
        data.sort(function (a, b) {
          var x = a.data3.toLowerCase();
          var y = b.data3.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      } else {
        data.sort(function (a, b) {
          var x = a.data3.toLowerCase();
          var y = b.data3.toLowerCase();
          if (x < y) {
            return 1;
          }
          if (x > y) {
            return -1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 3: {
      if (sortFlag[index]) {
        data.sort(function (a, b) {
          var x = a.data4.toLowerCase();
          var y = b.data4.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      } else {
        data.sort(function (a, b) {
          var x = a.data4.toLowerCase();
          var y = b.data4.toLowerCase();
          if (x < y) {
            return 1;
          }
          if (x > y) {
            return -1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 4: {
      if (sortFlag[index]) {
        data.sort(function (a, b) {
          var x = a.data5.toLowerCase();
          var y = b.data5.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      } else {
        data.sort(function (a, b) {
          var x = a.data5.toLowerCase();
          var y = b.data5.toLowerCase();
          if (x < y) {
            return 1;
          }
          if (x > y) {
            return -1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 5: {
      if (sortFlag[index]) {
        data.sort(function (a, b) {
          var x = a.data6.toLowerCase();
          var y = b.data6.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      } else {
        data.sort(function (a, b) {
          var x = a.data6.toLowerCase();
          var y = b.data6.toLowerCase();
          if (x < y) {
            return 1;
          }
          if (x > y) {
            return -1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 6: {
      if (sortFlag[index]) {
        data.sort(function (a, b) {
          var x = a.data7.toLowerCase();
          var y = b.data7.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      } else {
        data.sort(function (a, b) {
          var x = a.data7.toLowerCase();
          var y = b.data7.toLowerCase();
          if (x < y) {
            return 1;
          }
          if (x > y) {
            return -1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 7: {
      if (sortFlag[index]) {
        data.sort(function (a, b) {
          var x = a.data8.toLowerCase();
          var y = b.data8.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      } else {
        data.sort(function (a, b) {
          var x = a.data8.toLowerCase();
          var y = b.data8.toLowerCase();
          if (x < y) {
            return 1;
          }
          if (x > y) {
            return -1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 8: {
      if (sortFlag[index]) {
        data.sort(function (a, b) {
          var x = a.data9.toLowerCase();
          var y = b.data9.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      } else {
        data.sort(function (a, b) {
          var x = a.data9.toLowerCase();
          var y = b.data9.toLowerCase();
          if (x < y) {
            return 1;
          }
          if (x > y) {
            return -1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 9: {
      if (sortFlag[index]) {
        data.sort(function (a, b) {
          var x = a.data10.toLowerCase();
          var y = b.data10.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      } else {
        data.sort(function (a, b) {
          var x = a.data10.toLowerCase();
          var y = b.data10.toLowerCase();
          if (x < y) {
            return 1;
          }
          if (x > y) {
            return -1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 10: {
      if (sortFlag[index]) {
        data.sort(function (a, b) {
          var x = a.data11.toLowerCase();
          var y = b.data11.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      } else {
        data.sort(function (a, b) {
          var x = a.data11.toLowerCase();
          var y = b.data11.toLowerCase();
          if (x < y) {
            return 1;
          }
          if (x > y) {
            return -1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
    case 11: {
      if (sortFlag[index]) {
        data.sort(function (a, b) {
          var x = a.data12.toLowerCase();
          var y = b.data12.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = false;
      } else {
        data.sort(function (a, b) {
          var x = a.data12.toLowerCase();
          var y = b.data12.toLowerCase();
          if (x < y) {
            return 1;
          }
          if (x > y) {
            return -1;
          }
          return 0;
        });
        renderTable(data);
        sortFlag[index] = true;
      }
      break;
    }
  }
};

const minus = (index) => {
  data[index].spread = false;
  renderTable(data);
};

const plus = (index) => {
  data[index].spread = true;
  renderTable(data);
};

const edit = (index) => {
  $(".crm-modal").css({ display: "block" });
  $("#crm-modal-back").css({ display: "block" });
  $(".crm-side-modal-container").css({ display: "block" });
  $(".crm-side-modal-container2").css({ display: "none" });
  $(".crm-side-modal-container3").css({ display: "none" });
  $(".crm-side-modal-container4").css({ display: "none" });
};

const qa = (index) => {
  $(".crm-modal").css({ display: "block" });
  $("#crm-modal-back").css({ display: "block" });
  $(".crm-side-modal-container").css({ display: "none" });
  $(".crm-side-modal-container2").css({ display: "none" });
  $(".crm-side-modal-container3").css({ display: "none" });
  $(".crm-side-modal-container4").css({ display: "block" });
};

const btn1 = (val, index) => {
  data[index].data10 = val;
  switch (val) {
    case "ישראלי": {
      data[index].databack10 = "#de0101";
      break;
    }
    case "מנהל": {
      data[index].databack10 = "#7abbfc";
      break;
    }
    case "נמוך": {
      data[index].databack10 = "#c2c3c5";
      break;
    }
    case "בתהליך": {
      data[index].databack10 = "#1e87f0";
      break;
    }
    case "פגישת": {
      data[index].databack10 = "#ecc528";
      break;
    }
  }
  renderTable(data);
};

const btn2 = (val, index) => {
  data[index].data11 = val;
  switch (val) {
    case "נמוך": {
      data[index].databack11 = "#de0101";
      break;
    }
    case "ישראלי": {
      data[index].databack11 = "#7abbfc";
      break;
    }
    case "מנהל": {
      data[index].databack11 = "#c2c3c5";
      break;
    }
    case "בתהליך": {
      data[index].databack11 = "#1e87f0";
      break;
    }
    case "פגישת": {
      data[index].databack11 = "#ecc528";
      break;
    }
  }
  renderTable(data);
};

const btn3 = (val) => {
  switch (val) {
    case "ישראלי": {
      $(".dropbtnhead3").css("background-color", "#de0101");
      $(".dropbtnhead3").text("ישראלי");
      break;
    }
    case "מנהל": {
      $(".dropbtnhead3").css("background-color", "#7abbfc");
      $(".dropbtnhead3").text("מנהל");
      break;
    }
    case "נמוך": {
      $(".dropbtnhead3").css("background-color", "#c2c3c5");
      $(".dropbtnhead3").text("נמוך");
      break;
    }
    case "בתהליך": {
      $(".dropbtnhead3").css("background-color", "#1e87f0");
      $(".dropbtnhead3").text("בתהליך");
      break;
    }
    case "פגישת": {
      $(".dropbtnhead3").css("background-color", "#ecc528");
      $(".dropbtnhead3").text("פגישת");
      break;
    }
  }
};

const btn4 = (val) => {
  switch (val) {
    case "ישראלי": {
      $(".dropbtnhead4").css("background-color", "#de0101");
      $(".dropbtnhead4").text("ישראלי");
      break;
    }
    case "מנהל": {
      $(".dropbtnhead4").css("background-color", "#7abbfc");
      $(".dropbtnhead4").text("מנהל");
      break;
    }
    case "נמוך": {
      $(".dropbtnhead4").css("background-color", "#c2c3c5");
      $(".dropbtnhead4").text("נמוך");
      break;
    }
    case "בתהליך": {
      $(".dropbtnhead4").css("background-color", "#1e87f0");
      $(".dropbtnhead4").text("בתהליך");
      break;
    }
    case "פגישת": {
      $(".dropbtnhead4").css("background-color", "#ecc528");
      $(".dropbtnhead4").text("פגישת");
      break;
    }
  }
};

const btn5 = (val, index) => {
  data[index].data8 = val;
  renderTable(data);
};

const btn6 = (val, index) => {
  data[index].data9 = val;
  renderTable(data);
};

const renderTable = (data) => {
  $("#crm-datatable").html("");
  var row_num = 0;

  data.map(function (val, index) {
    var img_spread = val.spread
      ? `<img onclick="minus(${index})" src="./images/ic_minus_24px.svg" style="padding-left: 6px; cursor: pointer;">`
      : `<img onclick="plus(${index})" src="./images/ic_plus.svg" style="padding-left: 6px; cursor: pointer;">`;
    var text_spread = val.spread
      ? `<tr><td colspan="13"> <textarea style=" background: transparent; margin:10px; border: 0; font-size: 14px; resize: none; width: 77vw; outline: none; height: 100px; " placeholder="${val.data13}" /><td> <tr>`
      : null;
    row_num = index + 3;
    $("#crm-datatable").append(`
      <tr id="${index}" style="border-bottom: 1px solid ; box-shadow: 0px 1px 5px rgb(0 0 0 / 30%); text-align: center;">
        <td style="display: inline-flex; padding-top: 22px;">
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
                <span>${val.data2}</span>
            </div>
        </td>
        <td>
            <div class="crm-td-body">
                <span>${val.data3}</span>
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
            <div class="dropdown2">
                <button class="dropbtn2" style="cursor: pointer;
                border: 0;
                background-color: transparent;
                border-radius: 10px;
                margin: 10px 5px;
                padding: 7px 24px;
                font-size: 14px;
                min-width: 6vw;
                color: #777; ">${val.data8}</button>
                <div class="dropdown-option">
                <span onclick="btn5('ישראלי', ${index})" >ישראלי</span>
                <span onclick="btn5('מנהל', ${index})" >מנהל</span>
                <span onclick="btn5('נמוך', ${index})" >נמוך</span>
                <span onclick="btn5('בתהליך', ${index})" >בתהליך</span>
                <span onclick="btn5('פגישת', ${index})" >פגישת</span>
                </div>
            </div>
        </td>
        <td>
            <div class="dropdown2">
                <button class="dropbtn2" style="cursor: pointer;
                border: 0;
                background-color: transparent;
                border-radius: 10px;
                margin: 10px 5px;
                padding: 7px 24px;
                font-size: 14px;
                min-width: 6vw;
                color: #777; ">${val.data9}</button>
                <div class="dropdown-option">
                <span onclick="btn6('ישראלי', ${index})" >ישראלי</span>
                <span onclick="btn6('מנהל', ${index})" >מנהל</span>
                <span onclick="btn6('נמוך', ${index})" >נמוך</span>
                <span onclick="btn6('בתהליך', ${index})" >בתהליך</span>
                <span onclick="btn6('פגישת', ${index})" >פגישת</span>
                </div>
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
                <span onclick="btn1('פגישת', ${index})" >פגישת</span>
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
                <span onclick="btn2('מנהל', ${index})" >מנהל</span>
                <span onclick="btn2('בתהליך', ${index})" >בתהליך</span>
                <span onclick="btn2('פגישת', ${index})" >פגישת</span>
                <p></p>
                </div>
            </div>
        </td>
        <td>
            <div class="crm-td-hover" style="width: 40px;">
              <div class='input-group date' id='datetimepicker${index + 3}'>
                  <input type='text' class="form-control" style="border: 0; box-shadow: none; padding: 0; background-color: transparent; margin-top: -9px; margin-bottom: -10px; font-size: 12px;"  placeholder=${
                    val.data12
                  } />                                       
                  <span class="input-group-addon" style="background: transparent; border: 0; display: none">
                  
                  </span>
              </div>
              <img src="./images/ic_date_range_24px.svg" style=" position: absolute; top: 9px; left: 0px;  width: 16px; margin-left: 1px;" >
            </div>
        </td>
      </tr>
    `);
    if (text_spread) $("#crm-datatable").append(text_spread);
                  
  });
  $(function () {
    for (i = 1; i < row_num; i++) {
      $("#datetimepicker" + i).datepicker({
        autoclose: true,
        format: "mm/dd/yyyy",
        todayHighlight: true,
        // orientation: 'bottom'
      });
      $("#datetimepicker" + i).click(function () {
        var popup = $(this).offset();
        var popupTop = popup.top - 40;
        $(".ui-datepicker").css({
          top: popupTop,
        });
      });
      $("#crm-add-datetimepicker").datepicker({
        autoclose: true,
        format: "mm/dd/yyyy",
        todayHighlight: true,
        // orientation: 'bottom'
      });
      $("#crm-add-datetimepicker").click(function () {
        var popup = $(this).offset();
        var popupTop = popup.top - 40;
        $(".ui-datepicker").css({
          top: popupTop,
        });
      });
    }
  });
};

window.onload = function () {
  crear_select();
};

function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

var li = new Array();
function crear_select() {
  var div_cont_select = document.querySelectorAll(
    "[data-mate-select='active']"
  );
  var select_ = "";
  for (var e = 0; e < div_cont_select.length; e++) {
    div_cont_select[e].setAttribute("data-indx-select", e);
    div_cont_select[e].setAttribute("data-selec-open", "false");
    var ul_cont = document.querySelectorAll(
      "[data-indx-select='" + e + "'] > .cont_list_select_mate > ul"
    );
    select_ = document.querySelectorAll(
      "[data-indx-select='" + e + "'] >select"
    )[0];
    if (isMobileDevice()) {
      select_.addEventListener("change", function () {
        _select_option(select_.selectedIndex, e);
      });
    }
    var select_optiones = select_.options;
    document
      .querySelectorAll(
        "[data-indx-select='" + e + "']  > .selecionado_opcion "
      )[0]
      .setAttribute("data-n-select", e);
    document
      .querySelectorAll(
        "[data-indx-select='" + e + "']  > .icon_select_mate "
      )[0]
      .setAttribute("data-n-select", e);
    for (var i = 0; i < select_optiones.length; i++) {
      li[i] = document.createElement("li");
      if (
        select_optiones[i].selected == true ||
        select_.value == select_optiones[i].innerHTML
      ) {
        li[i].className = "active";
        document.querySelector(
          "[data-indx-select='" + e + "']  > .selecionado_opcion "
        ).innerHTML = select_optiones[i].innerHTML;
      }
      li[i].setAttribute("data-index", i);
      li[i].setAttribute("data-selec-index", e);
      // funcion click al selecionar
      li[i].addEventListener("click", function () {
        _select_option(
          this.getAttribute("data-index"),
          this.getAttribute("data-selec-index")
        );
      });

      li[i].innerHTML = select_optiones[i].innerHTML;
      ul_cont[0].appendChild(li[i]);
    } // Fin For select_optiones
  } // fin for divs_cont_select
} // Fin Function

var cont_slc = 0;
function open_select(idx) {
  var idx1 = idx.getAttribute("data-n-select");
  var ul_cont_li = document.querySelectorAll(
    "[data-indx-select='" + idx1 + "'] .cont_select_int > li"
  );
  var hg = 0;
  var slect_open = document
    .querySelectorAll("[data-indx-select='" + idx1 + "']")[0]
    .getAttribute("data-selec-open");
  var slect_element_open = document.querySelectorAll(
    "[data-indx-select='" + idx1 + "'] select"
  )[0];
  if (isMobileDevice()) {
    if (window.document.createEvent) {
      // All
      var evt = window.document.createEvent("MouseEvents");
      evt.initMouseEvent(
        "mousedown",
        false,
        true,
        window,
        0,
        0,
        0,
        0,
        0,
        false,
        false,
        false,
        false,
        0,
        null
      );
      slect_element_open.dispatchEvent(evt);
    } else if (slect_element_open.fireEvent) {
      // IE
      slect_element_open.fireEvent("onmousedown");
    } else {
      slect_element_open.click();
    }
  } else {
    for (var i = 0; i < ul_cont_li.length; i++) {
      hg += ul_cont_li[i].offsetHeight;
    }
    if (slect_open == "false") {
      document
        .querySelectorAll("[data-indx-select='" + idx1 + "']")[0]
        .setAttribute("data-selec-open", "true");
      document.querySelectorAll(
        "[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul"
      )[0].style.height = hg + "px";
      document.querySelectorAll(
        "[data-indx-select='" + idx1 + "'] > .icon_select_mate"
      )[0].style.transform = "rotate(180deg)";
    } else {
      document
        .querySelectorAll("[data-indx-select='" + idx1 + "']")[0]
        .setAttribute("data-selec-open", "false");
      document.querySelectorAll(
        "[data-indx-select='" + idx1 + "'] > .icon_select_mate"
      )[0].style.transform = "rotate(0deg)";
      document.querySelectorAll(
        "[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul"
      )[0].style.height = "0px";
    }
  }
} // fin function open_select

function salir_select(indx) {
  var select_ = document.querySelectorAll(
    "[data-indx-select='" + indx + "'] > select"
  )[0];
  document.querySelectorAll(
    "[data-indx-select='" + indx + "'] > .cont_list_select_mate > ul"
  )[0].style.height = "0px";
  document.querySelector(
    "[data-indx-select='" + indx + "'] > .icon_select_mate"
  ).style.transform = "rotate(0deg)";
  document
    .querySelectorAll("[data-indx-select='" + indx + "']")[0]
    .setAttribute("data-selec-open", "false");
}

function _select_option(indx, selc) {
  if (isMobileDevice()) {
    selc = selc - 1;
  }
  var select_ = document.querySelectorAll(
    "[data-indx-select='" + selc + "'] > select"
  )[0];

  var li_s = document.querySelectorAll(
    "[data-indx-select='" + selc + "'] .cont_select_int > li"
  );
  var p_act = (document.querySelectorAll(
    "[data-indx-select='" + selc + "'] > .selecionado_opcion"
  )[0].innerHTML = li_s[indx].innerHTML);
  var select_optiones = document.querySelectorAll(
    "[data-indx-select='" + selc + "'] > select > option"
  );
  for (var i = 0; i < li_s.length; i++) {
    if (li_s[i].className == "active") {
      li_s[i].className = "";
    }
    li_s[indx].className = "active";
  }
  select_optiones[indx].selected = true;
  select_.selectedIndex = indx;
  select_.onchange();
  salir_select(selc);
}
var num_input = 0;
function modal_input() {
  num_input++;
  if (num_input > 5) {
    return;
  }
  else {
    $(".crm-hover-modal-input-list").html('');
    for(i=0;i<num_input;i++)
    {
      $(".crm-hover-modal-input-list").append(`
        <div class="form-group" id="modal-input${i}" style="display: inline-flex;">
          <input type="email" class="form-control" id="email" placeholder="מספר טלפון" style="width: 240px;">
          <img onclick="modal_minus(${i})" src="./images/ic_red_minus.svg" style="padding-right: 7px; cursor: pointer;">
        </div>
      `);
    }

  }
}
function modal_minus(index) {
  $("#modal-input"+index).remove();
  num_input--;
}