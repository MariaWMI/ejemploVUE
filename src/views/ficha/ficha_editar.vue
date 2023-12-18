<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="mb-3">
                        <label class="form-label">Apellidos</label>
                        <input v-model="ficha.apellidos" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Nombres</label>
                        <input v-model="ficha.nombres" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">CMP</label>
                        <input v-model="ficha.cmp" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">RNE</label>
                        <input v-model="ficha.rne" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">DNI/CIP</label>
                        <input v-model="ficha.dni" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">PROFESION</label>
                        <input v-model="ficha.profesion" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">DOMICILIO</label>
                        <input v-model="ficha.domicilio" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label"><strong>Telefono</strong></label>
                        <input v-model="ficha.telefono" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label"><strong>Celular</strong></label>
                        <input v-model="ficha.celular" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label"><strong>E-mail</strong></label>
                        <input v-model="ficha.email" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label"><strong>CONSULTORIO</strong></label>
                        <input v-model="ficha.consultorio" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Teléfono</label>
                        <input v-model="ficha.telefono" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Fax</label>
                        <input v-model="ficha.fax" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label"><strong>CENTRO DE TRABAJO</strong></label>
                        <input v-model="ficha.fax" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Dirección</label>
                        <input v-model="ficha.fax" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Teléfono</label>
                        <input v-model="ficha.fax" type="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Cargo</label>
                        <input v-model="ficha.fax" type="email" class="form-control">
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

import { collection, getDocs,getDoc, query, where, addDoc, updateDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            id: this.$route.params.id,
            ficha: {
                apelllidos: '',
                nombres: '',
                CMP: '',
                RNE: '',
                DNI: '',
                PROFESION: '',
                DOMICILIO: '',
                Telefono: '',
                Celular: '',
                Email: '',
                CONSULTORIO: '',
                Telefono: '',
                Fax: '',
                Trabajo: '',
                Dirección: '',
                Teléfono: '',
                Cargo: ''
            },
        }
    },
    methods: {
        async getUrls() {
            try {
                const q = doc(db, "ficha", this.id);
                const respuesta = await getDoc(q);
                this.curso=respuesta.data()
            } catch (error) {
                console.log(error);
            }
        },
        async guardar() {
            try {
                const q = doc(db, 'ficha',this.id);
                const docRef = await updateDoc(q,this.curso);
                this.$router.push({ name: 'ficha_listar' })
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

