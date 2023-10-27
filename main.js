let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #b33f62;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #89023E;">Soy estudiante de Ing. Química, con pasión por la biotecnología.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
