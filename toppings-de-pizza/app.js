// AGREGO UN NUEVO TOPPOINGS CON JAVASCRIPT DOM

const listaToppings = document.getElementById('lista-toppings');

console.log(listaToppings)

const toppingNuevo = document.createElement('li');
toppingNuevo.classList.add('topping' , 'fondo-marron');
toppingNuevo.innerText = "Queso extra" 
   
listaToppings.append( toppingNuevo);
 // append, se puede agregar texto tambien, en vez de appendChild