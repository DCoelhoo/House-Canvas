window.addEventListener("load", () => {

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var gradientG = ctx.createLinearGradient(0, 0, 450, 0);
  gradientG.addColorStop(1, "#6aa84f");
  gradientG.addColorStop(0, "#4A7537");

  var gradientA = ctx.createLinearGradient(0, 0, 450, 0);
  gradientA.addColorStop(1, "#6FA8DC");
  gradientA.addColorStop(0, "#5886B0");

  //Resize
  var width = (canvas.width = 600);
  var height = (canvas.height = 600);

  //BG
  ctx.fillStyle = gradientA;
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = gradientG;
  ctx.fillRect(0, 350, width, height);
  ctx.beginPath();
  ctx.fillStyle = "#EEEEEE";
  ctx.arc(520, 60, 30, (Math.PI/180) * 0, (Math.PI/180) * 360);
  ctx.fill();
  ctx.closePath();



  //Parte Principal
  ctx.fillStyle = "#fccc0a";
  ctx.fillRect(150, 200, 300, 200);

  //Chamine
  ctx.fillStyle = "#E5B700";
  ctx.fillRect(180, 70, 50, 100);

  //Parte de cima da Chamine
  ctx.fillStyle = "#cc0000";
  ctx.fillRect(170, 70, 70, -30);

  //* Telhado

  //Amarelo
  ctx.beginPath();
  ctx.moveTo(150, 200);
  ctx.lineTo(300, 100);
  ctx.lineTo(450, 200);
  ctx.closePath();
  ctx.fillStyle = "#FFCC00";
  ctx.fill();

  //Vermelho
  ctx.beginPath();
  ctx.moveTo(130, 215);
  ctx.lineTo(115, 180);
  ctx.lineTo(300, 50);
  ctx.lineTo(480, 180);
  ctx.lineTo(465, 215);
  ctx.lineTo(300, 100);
  ctx.closePath();
  ctx.fillStyle = "#cc0000";
  ctx.fill();

  //Parte de baixo da casa
  ctx.fillStyle = "#d9a371";
  ctx.fillRect(130, 400, 340, 50);

  //Porta
  ctx.fillStyle = "#783F04";
  ctx.fillRect(310, 430, 90, -150);
  ctx.strokeStyle = "#603203";
  ctx.lineWidth = 5;
  ctx.strokeRect(320, 440, 70, -145);

  //Parte de baixo da porta
  ctx.fillStyle = "#C39265";
  ctx.fillRect(300, 430, 110, 20);

  //janela
  ctx.fillStyle = "#783F04";
  ctx.fillRect(180, 240, 90, 80);

  //Parte de dentro da janela
  ctx.fillStyle = "#bcbcbc";
  ctx.fillRect(190, 250, 70, 50);

  //parapeito da janela
  ctx.fillStyle = "#cc0000";
  ctx.fillRect(170, 310, 110, 20);

  //* Sombras
  //Parapeito da janela
  ctx.globalAlpha = 0.1;
  ctx.fillStyle = "#cc0000";
  ctx.fillRect(170, 330, 110, 10);

  //Telhado
  ctx.beginPath();
  ctx.moveTo(150, 225);
  ctx.lineTo(150, 190);
  ctx.lineTo(300, 60);
  ctx.lineTo(450, 190);
  ctx.lineTo(450, 225);
  ctx.lineTo(300, 125);
  ctx.closePath();
  ctx.fillStyle = "#cc0000";
  ctx.fill();

  //Chamine
  ctx.fillStyle = "#cc0000";
  ctx.fillRect(180, 70, 50, 15);

  ctx.globalAlpha = 1.0;



});
