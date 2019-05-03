<template>
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Kiþi Düzenle</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="form-group col-md-12">
                            <label class="col-form-label">Ýsim: </label>
                            <input type="text" class="form-control" id="name" v-model="edit.Title">
                        </div>
                        <br />
                        <div class="form-group col-md-12">
                            <label for="message-text" class="col-form-label">Telefon Numarasý: </label>
                            <input type="text" class="form-control" id="phoneNumber" v-model="edit.Phone">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal" ref="btnClose">Kapat</button>
                    <button type="button" class="btn btn-primary" @click="EditToBook(edit)">Düzenle</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["edit"],
        data() {
            return {
                editPerson: {
                    Title: "",
                    Phone: ""
                }
            }
        },
        methods: {
            EditToBook(edit) {
                this.$emit("EditToBook", edit)
                this.editPerson.Title = ""
                this.editPerson.Phone = ""

                this.$refs.btnClose.click()
            }
        }
    }
</script>

<style>

</style>