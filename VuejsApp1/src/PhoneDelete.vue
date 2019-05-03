<template>
    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <strong>{{remove.Phone}}</strong> numaralý <strong>{{remove.Title}}</strong> adlý kiþiyi silmek istediðinize emin misiniz?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal" ref="btnClose">Ýptal</button>
                    <button type="button" class="btn btn-success" @click="DeleteToBook(remove)">Sil</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["remove"],
        data() {
            return {

            }
        },
        methods: {
            DeleteToBook(remove) {
                this.$emit("DeleteToBook", remove)

                this.$refs.btnClose.click()
            }
        }
    }
</script>

<style>

</style>