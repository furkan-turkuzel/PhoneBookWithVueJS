<template>

    <li id="phoneBookRow">
        <div class="row">
            <div class="col-md-1">
                <i class="fa fa-user-circle"></i>
            </div>
            <div class="col-md-5">
                <p><strong>{{person.Title}}</strong></p>
            </div>
            <div class="col-md-2">
                <button type="button" class="btn btn-success" data-toggle="modal" data-target="#callModal" @click="callPerson(person)">
                    Ara
                </button>
            </div>
            <div class="col-md-2">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editModal" @click="editPerson(person)">
                    Düzenle
                </button>
            </div>
            <div class="col-md-2">
                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteModal" @click="deletePerson(person)">
                    Sil
                </button>
            </div>
        </div>
        
    </li>
   
</template>


<script>
    import axios from "axios"
    export default {
        props:["person"],
        data() {
            return {
                
            }
        },
        methods: {
            callPerson(person) {
                this.$emit("CallPerson", person)
            },
            editPerson(person) {
                this.$emit("EditPerson",person)
            },
            deletePerson(person) {
                this.$emit("DeletePerson",person)
            }
        },
        
        computed: {},
        watch: {}
    }
</script>