class Usuario
{
    constructor(nombre,apellido,mascotas,libros)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mascotas = mascotas;
        this.libros = libros;
    }
    
    getFullName()
    {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota)
    {
        this.mascotas.push(mascota);
    }
    countMascotas()
    {
        return this.mascotas.length;
    }
    addBook(nombre,autor)
    {
        this.libros.push({nombre: nombre, autor: autor});
    }
    getBookNames()
    {
        const nombreLibros = [];
        this.libros.forEach((Libro) => nombreLibros.push(Libro.nombre) );
        return nombreLibros;
    }
    ver()
    {
        console.log(this);
    }
}

const usuario = new Usuario( 'Enzo','Ovelar',['Perro', 'Gato'], [{nombre: 'Rayuela', autor: 'Julio Cortazar'},{nombre: 'La metamorfosis', autor: 'Franz Kafka'}] );

console.log(`Nombre completo: ${usuario.getFullName()}`);

usuario.addMascota('Mono');
usuario.addMascota('Loro');

usuario.addBook('Estudio en Escarlata', 'Arthur Conan Doyle');
console.log(`Cantidad de mascotas: ${usuario.countMascotas()}`);
console.log(usuario.getBookNames());

