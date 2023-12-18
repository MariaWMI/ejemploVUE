<template>
    <div class="row">
        <div class="col-md-12">
            <RouterLink class="btn btn-primary" to="/ficha_crear">Agregar ficha</RouterLink>
        </div>
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Nombres</th>
                                <th scope="col">DNI</th>
                                <th scope="col">Profesion</th>
                                <th scope="col">Domicilio</th>
                                <th scope="col">Telefóno</th>
                                <th scope="col">Celular</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Consultorio</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Fax</th>
                                <th scope="col">CENTRO DE TRABAJO</th>
                                <th scope="col">Dirección</th>
                                <th scope="col">Teléfono</th>
                                <th scope="col">Cargo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in ficha">
                                <td>{{ data.apellidos }}</td>
                                <td>{{ data.nombres }}</td>
                                <td>{{ data.dni }}</td>
                                <td>{{ data.profesion }}</td>
                                <td>{{ data.domicilio }}</td>
                                <td>
                                    <RouterLink class="btn btn-success" :to="'/ficha_editar/' + data.id">Editar</RouterLink>
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
            ficha: []
        }
    },

    methods: {
        async getUrls() {
            try {
                this.ficha= []
                const q = query(
                    collection(db, "ficha")
                );
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // console.log(doc.id);
                    this.ficha.push({
                        apellidos: doc.data().apellidos,
                        nombres: doc.data().nombres,
                        cmp: doc.data().cmp,
                        rne: doc.data().rne,
                        dni: doc.data().dni,
                        profesion: doc.data().profesion,
                        domicilio: doc.data().domicilio,
                        teléfono: doc.data().teléfono,
                        celular: doc.data().celular,
                        email: doc.data().email,
                        consultorio: doc.data().consultorio,
                        teléfono: doc.data().teléfono,
                        fax: doc.data().fax,
                        trabajo: doc.data().trabajo,
                        dirección: doc.data().dirección,
                        teléfono: doc.data().teléfono,
                        cargo: doc.data().cargo,
                        id: doc.id,
                        // ...doc.data()
                    });
                });
                // console.log(this.curso);
            } catch (error) {
                console.log(error);
            }
        },
        async eliminar(id) {
            try {
                const q = doc(db, "ficha", id);
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