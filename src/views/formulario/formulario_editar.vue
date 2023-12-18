<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="mb-3">
                        <label class="form-label">Nombres</label>
                        <input v-model="formulario.razonsocial" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">DNI</label>
                        <input v-model="formulario.dni" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Pasaporte</label>
                        <input v-model="formulario.pasaporte" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">CE</label>
                        <input v-model="formulario.ce" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">RUC</label>
                        <input v-model="formulario.ruc" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Nombres</label>
                        <input v-model="formulario.nombres" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Apellidos</label>
                        <input v-model="formulario.apellidos" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label"><strong>DNI</strong></label>
                        <input v-model="formulario.dnidelrepresentante" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label"><strong>Pasaporte</strong></label>
                        <input v-model="formulario.pasaportedelrepresentante" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label"><strong>CE</strong></label>
                        <input v-model="formulario.cedelrepresentante" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label"><strong>Calle</strong></label>
                        <input v-model="formulario.calle" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">N°</label>
                        <input v-model="formulario.n" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Of. / Dpto.</label>
                        <input v-model="formulario.of" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label"><strong>Distrito</strong></label>
                        <input v-model="formulario.distrito" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Provincia</label>
                        <input v-model="formulario.provincia" type="email" class="form-control">
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

import { collection, getDocs,getDoc, query, where, addDoc, updateDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            id: this.$route.params.id,
            ficha: {
                razonsocial: '',
                dni: '',
                pasaporte: '',
                ce: '',
                ruc: '',
                nombres: '',
                apellidos: '',
                dnidelrepresentante: '',
                pasaportedelrepresentante: '',
                cedelrepresentante: '',
                calle: '',
                n: '',
                of: '',
                distrito: '',
                provincia: ''
            },
        }
    },
    methods: {
        async getUrls() {
            try {
                const q = doc(db, "formulario", this.id);
                const respuesta = await getDoc(q);
                this.formulario=respuesta.data()
            } catch (error) {
                console.log(error);
            }
        },
        async guardar() {
            try {
                const q = doc(db, 'formulario',this.id);
                const docRef = await updateDoc(q,this.formulario);
                this.$router.push({ name: 'formulario_listar' })
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.getUrls()
    }
})
</script>

