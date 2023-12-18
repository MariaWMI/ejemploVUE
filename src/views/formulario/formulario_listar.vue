<template>
    <div class="row">
        <div class="col-md-12">
            <RouterLink class="btn btn-primary" to="/formulario_crear">Nuevo formulario</RouterLink>
        </div>
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombres</th>
                                <th scope="col">DNI</th>
                                <th scope="col">Pasaporte</th>
                                <th scope="col">CE</th>
                                <th scope="col">RUC</th>
                                <th scope="col">Nombres del representante</th>
                                <th scope="col">Apellidos del representante</th>
                                <th scope="col">N° de documento DNI</th>
                                <th scope="col">Pasaporte</th>
                                <th scope="col">CE</th>
                                <th scope="col">Calle</th>
                                <th scope="col">N°</th>
                                <th scope="col">Of./Dpto.</th>
                                <th scope="col">Distrito</th>
                                <th scope="col">Provincia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in formulario">
                                <td>{{ data.razonsocial }}</td>
                                <td>{{ data.dni }}</td>
                                <td>{{ data.pasaporte }}</td>
                                <td>{{ data.ce }}</td>
                                <td>{{ data.ruc }}</td>
                                <td>{{ data.nombres }}</td>
                                <td>{{ data.apellidos }}</td>
                                <td>{{ data.dnidelrepresentante }}</td>
                                <td>{{ data.pasaportedelrepresentante }}</td>
                                <td>{{ data.cedelrepresentante }}</td>
                                <td>{{ data.calle }}</td>
                                <td>{{ data.n }}</td>
                                <td>{{ data.of }}</td>
                                <td>{{ data.distrito }}</td>
                                <td>{{ data.provincia }}</td>
                                <td>
                                    <RouterLink class="btn btn-success" :to="'/formulario_editar/' + data.id">Editar</RouterLink>
                                    <button class="btn btn-danger" @click="eliminar(data.id)">Eliminar
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { collection, getDocs, query, where,deleteDoc,doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            loadingDoc: false,
            formulario: []
        }
    },

    methods: {
        async getUrls() {
            try {
                this.formulario= []
                const q = query(
                    collection(db, "formulario")
                );
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id);
                    this.formulario.push({
                        razonsocial: doc.data().razonsocial,
                        dni: doc.data().dni,
                        pasaporte: doc.data().pasaporte,
                        ce: doc.data().ce,
                        ruc: doc.data().ruc,
                        nombres: doc.data().nombres,
                        apellidos: doc.data().apellidos,
                        dnidelrepresentante: doc.data().dnidelrepresentante,
                        pasaportedelrepresentante: doc.data().pasaportedelrepresentante,
                        cedelrepresentante: doc.data().cedelrepresentante,
                        calle: doc.data().calle,
                        n: doc.data().n,
                        of: doc.data().of,
                        distrito: doc.data().distrito,
                        provincia: doc.data().provincia,
                        id: doc.id,
                        // ...doc.data()
                    });
                });
                // console.log(this.formulario);
            } catch (error) {
                console.log(error);
            }
        },
        async eliminar(id) {
            try {
                const q = doc(db, "formulario", id);
                const docRef = await deleteDoc(q);
                this.getUrls()
            } catch (error) {
                console.log(error);
            }
        },
    },
    mounted() {
        this.getUrls()
    }
})
</script>