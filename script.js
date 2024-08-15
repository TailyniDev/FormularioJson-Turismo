function EnviarFormulario(){
    var Turismo = new Object()
    Turismo.origem = document.getElementById("origem").value;
    Turismo.dataida = document.getElementById("dataida").value;
    Turismo.datavolta = document.getElementById("datavolta").value;
    Turismo.passageiros = document.getElementById("passageiros").value;
    Turismo.acomodacao = document.getElementById("acomodacao").value;
    Turismo.transporte = document.getElementById("transporte").value;
    Turismo.viagem = document.getElementById("viagem").value;

    var json = JSON.stringify(Turismo)

    console.log(json)
    console.log(Turismo.valueOf())
    Swal.fire({
        title: "Ótimo",
        text: "Seu cadastro foi Realizado!",
        icon: "success"
      });
}