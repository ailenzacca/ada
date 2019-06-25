const barra = {
    estado: "",
    elemento: null,
    actualizarColor(){ 
        if (personajes[i][this.estado] > 9 ){
            this.elemento.classList.add("azul");
        } else if (personajes[i][this.estado] > 7){
            this.elemento.classList.add("verde");
        } else if (personajes[i][this.estado] > 5){
            this.elemento.classList.add("amarillo");
        } else if (personajes[i][this.estado] > 3){
            this.elemento.classList.add("naranja");
        } else {
            this.elemento.classList.add("rojo");
        }
    },
    removerColores() {
        this.elemento.classList.remove("azul", "verde", "amarillo", "naranja", "rojo");
    },
    actualizarNivel(){
        this.elemento.style.width = `${personajes[i][this.estado] * 10}%`;
    },
    actualizar(){
        this.removerColores();
        this.actualizarNivel();
        this.actualizarColor();
    }
}

let i = 0;