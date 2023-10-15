export class Todo{

    static fromJson( {id, tarea, completado, creado} ){//para recibir los to dos que hemos hecho y podemos cargar nuestras propuedades

        const tempTodo = new Todo(tarea);

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;

        return tempTodo;
    }

    constructor(tarea){

        this.tarea = tarea;

        this.id         = new Date().getTime(); // example: 123124443224 sirve de id
        this.completado = false;
        this.creado     = new Date();

    }

}