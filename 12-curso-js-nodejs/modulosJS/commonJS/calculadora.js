const sumar = (a,b) => a+b,
      restar = (a,b) => a-b,
      mult = (a,b) => a * b,
      div = (a,b) => a / b,
      modulo = (a,b) => a%b,
      calculadora = {
        sumar,
        restar,
        mult,
        div,
        modulo
      }

module.exports = calculadora

