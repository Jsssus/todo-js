import {Todo} from './todo.class'

export class TodoList {

    constructor(){

        // this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){

        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();

    }


    marcarCompletado(id){

        for(const todo of this.todos){

            console.log(id,todo.id);

            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){//para poder recuperar los datos se guarda en un json
    localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        // //para leer el json que guardamos
        // if(localStorage.getItem('todo')){
        //     this.todos = JSON.parse( localStorage.getItem('todo') );
        //     console.log('cargarLocal:',this.todos );
        // } else {//se utiliza el else porque pueden haberlo borrado
        //     this.todos = [];
        // }

        this.todos = (localStorage.getItem('todo'))
                        ? JSON.parse( localStorage.getItem('todo'))
                        :[];

        this.todos = this.todos.map( Todo.fromJson);
    }
}
