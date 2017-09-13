function validateForm(){
  var title = document.compReg.compTitle;
  var dept = document.compReg.compDept;
  var desc = document.compReg.compDesc;
  console.log('#someButton was clicked');

//  alert(dept.value);
  /*if((title.value == "") && (dept.value == "") && (desc.value == "")){
    document.getElementById("titleError").innerHTML = "Title Required";
    document.getElementById("deptError").innerHTML = "Department Required";
    document.getElementById("descError").innerHTML = "Discription Required";
  }*/
  if(title.value == ""){
  //  $('.alert').append("<div class='alert alert-success alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Success! message sent successfully.</div>")
      document.getElementById("titleError").innerHTML = "Title Required";
      return false;
  }
  if (dept.value == "") {
  //  $('.alert').append("<div class='alert alert-success alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Success! message sent successfully.</div>")
      document.getElementById("deptError").innerHTML = "Department Required";
      return false;
  }
  if (desc.value == "") {
  //  $('.alert').append("<div class='alert alert-success alert-dismissable'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>Success! message sent successfully.</div>")
      document.getElementById("descError").innerHTML = "Discription Required";
      return false;
  }
  $('#compReg').hide();
  $('#login-error').show();
  //return true;
}
