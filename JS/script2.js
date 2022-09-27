alert("Bienvenido a la Oficina virtual")
let nombreIngresado = prompt ("Ingresar nombre");
const edadDelUsuario = parseInt(prompt("¿Cuál es tu edad?"));
if (edadDelUsuario >= 18) {
    alert("Eres mayor de edad puedes sacar turno");
    function elegirDia () {
        let dia = prompt ("Seleccionar día entre martes o jueves");
        while (dia != "ESC") {
            switch  (dia)   {
                case  "martes":
                    alert ("seleccionaste el día Martes");
                    break;
                case  "jueves":
                    alert ("seleccionaste el día Jueves");
                    break;
                default:
                    alert ("error! seleccione un día válido");
                    break;
            }
            let salida = "Paciente:" +" "+ nombreIngresado +" "+ "fue asignado al día:"+" "+ dia 
            alert(salida)
            return dia
        }
    }
} else {
    alert("Eres menor de edad no puedes sacar turno");
}

elegirDia()
console.log()



