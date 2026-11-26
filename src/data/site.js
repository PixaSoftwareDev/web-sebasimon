// Todo el contenido editable del sitio vive acá.
export const site = {
  nombre: 'Seba Simón',
  whatsapp: '5492477504554', // +54 9 2477 50-4554 (Seba)
  whatsappVisible: '2477 50-4554',
  instagram: 'sebasimon5',
  ciudad: 'Pergamino, Buenos Aires',
  sede: {
    nombre: 'El Portón · 100% Pádel',
    academia: 'Academia de Pádel Federico De Pascual',
    instagram: 'elportonpadel',
    direccion: 'Alberti 378, Pergamino',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Canchas+de+Paddle+el+Porton%2C+Alberti+378%2C+Pergamino%2C+Buenos+Aires',
  },
  sponsor: { nombre: 'Orkell', web: 'https://www.orkell.com', instagram: 'orkell.ar', pala: 'Vanta 1.0', linea: 'Professional Line' },
}

// Las tres ideas del reel de Seba.
export const metodo = [
  { n: '01', titulo: 'Mirá la bola.', texto: 'Los ojos en la pelota hasta el impacto. Lo demás viene después.' },
  { n: '02', titulo: 'Bajá la bola.', texto: 'Jugar abajo, a los pies del rival, gana más puntos que pegarle fuerte.' },
  { n: '03', titulo: 'Menos fuerza.', texto: 'Control antes que potencia. La técnica y la pared hacen el trabajo.' },
]

// AJUSTAR: modalidades, cupos y duración reales de Seba.
export const clases = [
  { id: 'individual', titulo: 'Individual', cupo: '1 alumno', texto: 'Una hora con todo el foco en tu juego: técnica, corrección golpe por golpe y un plan a tu medida.' },
  { id: 'dupla', titulo: 'Dupla', cupo: '2 alumnos', texto: 'Vení con tu compañero. Trabajamos la pareja: posiciones, coberturas y jugadas armadas.' },
  { id: 'grupal', titulo: 'Grupal', cupo: '3 a 4 alumnos', texto: 'Ritmo de partido, ejercicios con canasto y situaciones reales de juego. Se aprende y se transpira.' },
  { id: 'menores', titulo: 'Menores', cupo: 'Chicos y juveniles', texto: 'Los primeros golpes bien aprendidos, jugando. Coordinación, técnica de base y ganas de volver.' },
]

export const niveles = ['Nunca jugué', 'Inicial', 'Intermedio', 'Avanzado']
export const dias = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
export const franjas = ['Mañana', 'Siesta', 'Tarde', 'Noche']

export const waLink = (texto = 'Hola Seba! Quiero reservar una clase de pádel.') =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(texto)}`
