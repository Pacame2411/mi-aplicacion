import { makeAutoObservable } from 'mobx';

class CoursesStore {
    cursos = [];

    constructor() {
        makeAutoObservable(this);
        this.cargarCursos();
    }

    cargarCursos() {
        const cursosGuardados = localStorage.getItem('cursos');
        if (cursosGuardados) {
            this.cursos = JSON.parse(cursosGuardados);
        }
    }

    añadirCurso(curso) {
        this.cursos.push({ ...curso, id: Date.now() });
        this.guardarCursos();
    }

    eliminarCurso(cursoId) {
        this.cursos = this.cursos.filter(curso => curso.id !== cursoId);
        this.guardarCursos();
    }

    guardarCursos() {
        localStorage.setItem('cursos', JSON.stringify(this.cursos));
    }
}

export default new CoursesStore();
