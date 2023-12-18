<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <table border="1" style="text-align: center" class="text-center">
                                <tr>
                                    <td style="background-color: hsl(0, 6%, 62%);"><strong>FORMULARIO DE INSCRIPCION DE
                                            BANCO DE DATOS PERSONALES ADMINISTRACIÓN PRIVADA - PERSONA JUDIRICA</strong>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <br>
                    <h5>Dirigido a la Dirección de Registro Nacional de Protección de Datos Personales</h5>
                    <br>
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-7">
                            <table border="1" style="text-align: center">
                                <tr>
                                    <td style="background-color: hsl(0, 6%, 62%);"><strong>REGISTRO DEL TITULAR DEL BANCO DE
                                            DATOS PERSONALES / PERSONA JIDIRICA</strong></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <h5>1: Datos del titular del banco de datos perzonales.</h5>
                    <div class="mb-3">
                        <label class="form-label">Nombres / Razon social:</label>
                        <input v-model="formulario.razonsocial" type="email" class="form-control">
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-6">
                                <label class="form-label">N° de documento DNI:</label>
                                <input v-model="formulario.dni" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-6">
                                <label class="form-label">Pasaporte:</label>
                                <input v-model="formulario.pasaporte" type="email" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-6">
                                <label class="form-label">CE:</label>
                                <input v-model="formulario.ce" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-6">
                                <label class="form-label">RUC:</label>
                                <input v-model="formulario.ruc" type="email" class="form-control">
                            </div>
                        </div>
                    </div>
                    <h5>2: Datos del representante:</h5>
                    <div class="mb-3">
                        <label class="form-label">Nombres del representante.</label>
                        <input v-model="formulario.nombres" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Apellidos del representante:</label>
                        <input v-model="formulario.apellidos" type="email" class="form-control">
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="mb-4">
                                <label class="form-label">N° de documento DNI:</label>
                                <input v-model="formulario.dnidelrepresentante" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-4">
                                <label class="form-label">Pasaporte:</label>
                                <input v-model="formulario.pasaportedelrepresentante" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-4">
                                <label class="form-label">CE:</label>
                                <input v-model="formulario.cedelrepresentante" type="email" class="form-control">
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li>Adjuntar el documento que acredita la representación:</li>
                    </ul>
                    <div class="mb-3">
                        <label class="form-label">Calle</label>
                        <input v-model="formulario.calle" type="email" class="form-control">
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-6">
                                <label class="form-label">N°</label>
                                <input v-model="formulario.n" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-6">
                                <label class="form-label">Of./Dpto.</label>
                                <input v-model="formulario.of" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="row">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-6">
                                <label class="form-label">Distrito</label>
                                <input v-model="formulario.distrito" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-6">
                                <label class="form-label">Provincia</label>
                                <input v-model="formulario.provincia" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="row">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <button @click="guardar()" type="button" class="btn btn-primary">Guardar</button>
            <RouterLink class="btn btn-light" to="/formulario_listar">Cancelar</RouterLink>
        </div>
    </div>
</template>
<script>

import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { defineComponent } from 'vue';
export default defineComponent({
    // name: 'scanner',
    data() {
        return {
            loadingDoc: false,
            formulario: {
                razonsocial: '',
                dni: '',
                pasaporte: '',
                ce: '',
                ruc: '',
                nombres: '',
                apellidos: '',
                dni: '',
                pasaporte: '',
                ce: '',

            },
        }
    },
    methods: {
        async guardar() {
            try {
                const q = query(collection(db, 'formulario'));
                const docRef = await addDoc(q, this.formulario);
                this.$router.push({ name: 'formulario_listar' })
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
    }
})
</script>