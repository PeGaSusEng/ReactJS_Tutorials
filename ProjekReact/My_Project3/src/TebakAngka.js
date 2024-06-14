let tombol = document.getElementById('button1');
let output = document.getElementById('output');
tombol.onclick=function(){
  let data = parseInt(document.getElementById('input').value);
  for (let i =0; i<data ;i++){
      if (data === 999) {
          output.innerHTML = 'ANDA BENAR';
          break;
        } else {
          output.innerHTML = 'Maaf Salah';
        }
  }
};

  