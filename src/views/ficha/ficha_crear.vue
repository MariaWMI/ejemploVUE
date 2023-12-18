<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <h1>SOCIEDAD GENERAL DE CIRUJANO DEL PERÚ</h1>
                    <h2>FICHA DE INSCRIPCIÓN</h2>
                    <div class="row">
                        <div class="col-md-8">
                            <div class="mb-3">
                                <label class="form-label"><A:mail></A:mail>Apellidos</label>
                                <input v-model="ficha.apellidos" type="text" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Nombres</label>
                                <input v-model="ficha.nombres" type="email" class="form-control">
                            </div>
                            
                        </div>
                        <div class="col-md-4">
                            <img src="../../../maria.jpeg" class="img-thumbnail" alt="" width="38%">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">CMP</label>
                                <input v-model="ficha.cmp" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">RNE</label>
                                <input v-model="ficha.rne" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">DNI/CIP</label>
                                <input v-model="ficha.dni" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="mb-3">
                                <label class="form-label">PROFESION</label>
                                <input v-model="ficha.profesion" type="email" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label"><strong>DOMICILIO</strong></label>
                        <input v-model="ficha.domicilio" type="email" class="form-control">
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="mb-4">
                                <label class="form-label">Telefono</label>
                                <input v-model="ficha.telefono" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-4">
                                <label class="form-label">Celular</label>
                                <input v-model="ficha.celular" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-4">
                                <label class="form-label">E-mail</label>
                                <input v-model="ficha.email" type="email" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label"><strong>CONSULTORIO</strong></label>
                        <input v-model="ficha.consultorio" type="email" class="form-control">
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="mb-6">
                                <label class="form-label">Telefono</label>
                                <input v-model="ficha.telefono" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-6">
                                <label class="form-label">Fax</label>
                                <input v-model="ficha.fax" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label"><strong>CENTRO DE TRABAJO</strong></label>
                            <input v-model="ficha.centro" type="email" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Dirección</label>
                            <input v-model="ficha.direccion" type="email" class="form-control">
                        </div>
                        <div class="row">
                        <div class="col-md-6">
                            <div class="mb-6">
                                <label class="form-label">Teléfono</label>
                                <input v-model="ficha.telefono" type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="mb-6">
                                <label class="form-label">Cargo</label>
                                <input v-model="ficha.cargo" type="email" class="form-control">
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <button @click="guardar()" type="button" class="btn btn-primary">Guardar</button>
            <RouterLink class="btn btn-light" to="/ficha_listar">Cancelar</RouterLink>
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
            ficha: {
                apellidos: '',
                nombres: '',
                dni: '',
                cmp: '',
                rne: '',
                dni: '',
                profesion: '',
                domicilio: '',
                telefono: ''
            },
        }
    },
    methods: {
        async guardar() {
            try {
                const q = query(collection(db, 'ficha'));
                const docRef = await addDoc(q, this.ficha);
                this.$router.push({ name: 'ficha_listar' })
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
    }
})
</script>