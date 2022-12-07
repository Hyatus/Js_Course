class Citas {
  constructor() {
    this.citas = [];
  }

  agregarCita(cita) {
    this.citas = [...this.citas, cita];
    console.log(this.citas);
  }

  eliminarCita(id) {
    this.citas = this.citas.filter((cita) => cita.id !== id);
  }

  editarCita(citaActualizada) {
    // Utilizamos map porque queremos modificar un elemento, nos crea un nuevo arreglo por lo que sobreescribe todo

    // Itera en cada una de las citas y verifica si tiene el mismo id que la cita actualizada entonces retorna la cita actualizada, se reescribe,  caso contrario retorna la cita normal
    this.citas = this.citas.map((cita) =>
      cita.id === citaActualizada.id ? citaActualizada : cita
    );
  }
}


export default Citas;