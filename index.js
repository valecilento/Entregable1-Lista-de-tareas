let seguir
let nuevoHorario
let indice
let cantidad
const nombre= prompt('Ingresá tu nombre')
const apellido= prompt('Ingresá tu apellido')
function saludar(nombre,apellido){
   console.log('Hola '+ nombre + ' ' + apellido + ' bienvenido/a a tu lista de tareas diarias.')
}
saludar(nombre,apellido)
function encuentraHorario(horario){
   for (tarea of tareas){
      if(horario == tarea.horario){
         return true
      }
   }
   return false
}
function comparaHorario(horario) {
   if(encuentraHorario(horario)){
      alert("Ya tenés una tarea asignada en ese horario." + "\n Ingresá un nuevo horario para reprogramar esta tarea.")
      nuevoHorario = parseInt(prompt('Ingresá el horario en que deseas realizar dicha tarea'))
      if(encuentraHorario(nuevoHorario)){
         return comparaHorario(nuevoHorario)
      }
      return nuevoHorario
   }else{
      return horario
   }
}
const tareas= []
const agregaTarea =() =>{ 
   const asignacion= prompt('Ingresá una tarea para el día de hoy' +'\nPara terminar la carga escribí la palabra "listo"').toLowerCase()
   if (asignacion != "listo"){
      let horario= parseInt(prompt('Ingresá el horario en que desea realizar dicha tarea'))
      const tarea= {asignacion:asignacion, horario:comparaHorario(horario)}
      tareas.push (tarea)      
   }else{
      seguir="listo"
   }
}
while (seguir != "listo"){
   agregaTarea()
}
alert('Excelente, ya podés ver todas tus tareas diarias!')
console.log(tareas.sort((a, b) => a.horario - b.horario))
console.table(tareas)
cantidad = tareas.length
alert('Tenés '+ cantidad +' tareas programadas para el día de hoy' + '\n Que tengas un excelente día!')