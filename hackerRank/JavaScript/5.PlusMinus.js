function plusMinus(arr) {
  let positivo = 0;
  let negativo = 0;
  let nulo = 0;

  let ratioPositivo;
  let ratioNegativo;
  let ratioNulo;

  let sizeArr = arr.length;

  for (const num of arr) {
    if (num < 0) {
      negativo++;
    } else if (num > 0) {
      positivo++;
    } else {
      nulo++;
    }
  }

  ratioPositivo = (positivo / sizeArr).toFixed(6);
  ratioNegativo = (negativo / sizeArr).toFixed(6);
  ratioNulo = (nulo / sizeArr).toFixed(6);

  console.log(ratioPositivo);
  console.log(ratioNegativo);
  console.log(ratioNulo);
}

// Status: Solved
