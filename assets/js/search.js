function s_filter(){

    var s_value, s_name, s_item, i;

    s_value = document.getElementById("s_value").s_value.toUpperCase();
    s_item = document.getElementsByClassName("s_item");

    for(i=0;i<s_item.length;i++){
      s_name = s_item[i].getElementsByClassName("s_name");
      if(s_name[0].innerHTML.toUpperCase().indexOf(s_value) > -1){
        s_item[i].style.display = "flex";
      }else{
        s_item[i].style.display = "none";
      }
    }
  }