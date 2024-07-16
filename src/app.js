  let pronombre = ["the", "our"];
let adjetivo = ["great", "big"];
let sujeto = ["jogger", "racoon"];

pronombre.forEach(articulo => {
  adjetivo.forEach(adj => {
    sujeto.forEach(suj => {
      console.log(articulo + adj + suj + ".com");
    });
  });
});

