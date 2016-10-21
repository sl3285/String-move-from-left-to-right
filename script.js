  var left_len;
  var right_len;
  var left_value;
  var right_value;
  var l_click;
  var r_click;




function left_click(){
  clearInterval(r_click);
  l_click = setInterval(left_event, 1000);
}

function left_event() {
  var left_len = document.getElementById('left_box').value.length;
  var right_len = document.getElementById('right_box').value.length;
  var left_value = document.getElementById('left_box').value;
  var right_value = document.getElementById('right_box').value;
  
  if (left_len>0) {
    document.getElementById('left_box').value = left_value.slice(1,left_len);
    document.getElementById('right_box').value = 
      document.getElementById('right_box').value + left_value.slice(0,1);
    document.getElementById('left_button').addEventListener("left_move", left_event);
  }else{
    clearInterval(l_click);
  }
}

function right_click(){
  clearInterval(l_click);
  r_click = setInterval(right_event, 1000);
}

function right_event() {
  var left_len = document.getElementById('left_box').value.length;
  var right_len = document.getElementById('right_box').value.length;
  var left_value = document.getElementById('left_box').value;
  var right_value = document.getElementById('right_box').value;
  
  if (right_len>0) {
    document.getElementById('right_box').value = right_value.slice(0,right_len-1);
    document.getElementById('left_box').value = 
      right_value.slice(-1) + document.getElementById('left_box').value;
    document.getElementById('right_button').addEventListener("right_move", right_event);
  }else{
    clearInterval(r_click);
  }
}


function pause_event() {
  clearInterval(l_click);
  clearInterval(r_click);
}

