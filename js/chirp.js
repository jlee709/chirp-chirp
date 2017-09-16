function chirp(n){

  if (n === 1){
    return 'chirp'; 
  }

  return chirp(n-1) + ' chirp';
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});
