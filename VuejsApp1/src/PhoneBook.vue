<template>
    <div class="container-fluid" id="app">
        <div class="row">
            <div class="col-md-6 offset-3" id="phoneBook">
                <div class="row">
                    <h2>Kiþiler</h2>
                </div>

                <div class="row" id="search">
                    <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="Ara" id="search" v-model="searchQuery"/>
                    </div>
                </div>

                <div class="row" id="add">
                    <button type="button" class="btn btn-warning" id="btnAdd" data-toggle="modal" data-target="#addModal">
                        Yeni Kayýt
                    </button>
                </div>

                <ul>
                    <BookRow 
                         @EditPerson="editPerson = $event" 
                         @CallPerson="newPerson = $event" 
                         @DeletePerson ="deletePerson = $event"
                         :person="person" 
                         :key="person.id"
                         v-for="person in filterBook">
                    </BookRow>
                </ul>


            </div>
            <PhoneAdd @AddToBook="AddBook($event)"></PhoneAdd>
            <PhoneCall :call="newPerson"></PhoneCall>
            <PhoneEdit @EditToBook="EditBook($event)" :edit="editPerson"></PhoneEdit>
            <PhoneDelete @DeleteToBook="DeleteBook($event)" :remove="deletePerson"></PhoneDelete>
        </div>
    </div>
</template>

<script>
    import BookRow from "../src/PhoneBookRow"
    import PhoneAdd from "../src/PhoneAdd"
    import PhoneCall from "../src/PhoneCall"
    import PhoneEdit from "../src/PhoneEdit"
    import PhoneDelete from "../src/PhoneDelete"
    import axios from "axios"
    import { ServerResponse } from "http";
    export default {
        props:["message"],
        components: {
            BookRow,
            PhoneAdd,
            PhoneCall,
            PhoneEdit,
            PhoneDelete
        },
        data() {
            return {
                newPerson: {
                    Id: 0,
                    Title: "",
                    Phone: ""
                },
                editPerson: {
                    Id: 0,
                    Title: "",
                    Phone: ""
                },
                deletePerson: {
                    Id: 0,
                    Title: "",
                    Phone: ""
                },
                bookList:
                    [
                        
                    ],
                searchQuery:""
            }
        },
        methods: {
            AddBook($event) {

                this.newPerson.Title = $event.Title
                this.newPerson.Phone = $event.Phone

                axios.post("https://phonebook-92502.firebaseio.com/bookList.json", {Title: this.newPerson.Title, Phone: this.newPerson.Phone })
                    .then(response => {
                        console.log(response.data)
                        //this.bookList.push(this.newPerson)
                    })
                    .catch(e => {
                        console.log(e)
                    })
            },
            EditBook($event) {
                
                this.editPerson.Title = $event.Title
                this.editPerson.Phone = $event.Phone
                this.editPerson.Id = $event.Id
                axios.put("https://phonebook-92502.firebaseio.com/bookList/" + this.editPerson.Id + ".json", {
                    Title: this.editPerson.Title,
                    Phone: this.editPerson.Phone
                }).then(response => {
                    console.log(response.data)
                })
                    .catch(e => {
                        console.log(e)
                    })
            },
            DeleteBook($event) {
                axios.delete("https://phonebook-92502.firebaseio.com/bookList/" + $event.Id + ".json")
                    .then(response => {
                        console.log(response.data)
                    })
                    .catch(e => {
                        console.log(e)
                    })
            }

        },
        created() {
            axios.get("https://phonebook-92502.firebaseio.com/bookList.json")
                .then(response => {
                    console.log(response.data)
                    for (let key in response.data) {
                        let BookList = {
                            Id: key,
                            Title: response.data[key].Title,
                            Phone: response.data[key].Phone
                        }
                        this.bookList.push(BookList)
                    }
                })
                .catch(e => {
                    console.log(e)
                })
        },
        computed: {
            filterBook() {
                if (this.searchQuery != null) {
                    return this.bookList.filter((item) => {
                        return item.Title.toLowerCase().startsWith(this.searchQuery)
                    })
                }
                else {
                    return this.bookList
                }
            }
        },
        watch: {}
    }
</script>

<style>
    body {
        background-image: url("../src/assets/bg.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    #phoneBook {
        background-color: white;
        height: 100%;
        position: fixed;
    }

    ul {
        list-style-type: none;
        margin-top: 30px;
    }

    li {
        text-decoration: none;
        height: 60px;
        border-bottom: 1px solid black;
        padding-top: 15px;
    }

    #search {
        margin-top: 20px;
    }

    h2 {
        margin-left: 40%;
    }
    #btnAdd{
        margin-left:30%;
        margin-top:15px;
        width:400px;
    }

</style>