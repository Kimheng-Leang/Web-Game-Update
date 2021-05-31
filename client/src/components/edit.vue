<template>
    <div class="background">
        <div v-if="Game" class="container">
            <form>
                <div class="row-sm">
                    <div class="col-sm">
                        TITLE
                    </div>
                    <div class="col-sm">
                        <input v-model="localStore.Title" type="text">
                    </div>
                </div>
                <div class="row-sm">
                    <div class="col-sm">
                        DESCRIPTION
                    </div>
                    <div class="col-sm">
                        <input v-model="localStore.Description" type="text">
                    </div>
                </div>
                <div class="row-sm">
                    <div class="col-sm">
                        ORIGINAL PRICE
                    </div>
                    <div class="col-sm">
                        <input v-model="localStore.OriginalPrice" type="text">
                    </div>
                </div>
                <div class="row-sm">
                    <div class="col-sm">
                        DISCOUNT PRICE
                    </div>
                    <div class="col-sm">
                        <input v-model="localStore.DiscountPrice" type="text">
                    </div>
                </div>
                <div class="row-sm">
                    <div class="col-sm">
                        TYPE
                    </div>
                    <div class="col-sm">
                        <select v-model="localStore.Type" class="formSelect">
                            <option value="Action">Action</option>
                            <option value="Advanture">Advanture</option>
                            <option value="Sport">Sport</option>
                            <option value="Fighter">Fighter</option>
                            <option value="Family">Family</option>
                            <option value="Strategy">Strategy</option>
                        </select>
                    </div>
                </div>
                <div class="row-sm">
                    <div class="col-sm">
                        SUPPORTED OS
                    </div>
                    <div class="col-sm">
                        <div class="form-check form-check-inline">
                                <input  class="form-check-input" type="checkbox" id="inlineCheckbox1" value="WINDOW">
                                <label  class="form-check-label" for="inlineCheckbox1">WINDOW</label>
                                </div>
                                <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="APPLE">
                                <label class="form-check-label" for="inlineCheckbox2">APPLE</label>
                        </div>
                    </div>
                </div>
                <div class="row-sm">
                    <div class="col-sm btnSave" >
                        <router-link to='/admin'>
                        <button @click="updateGame" type="button" class="btn btn-danger">SAVE</button>
                        </router-link>
                    </div>
                </div>
            </form>
        </div>
        <div v-if="!Game" class="container">
            <form action="">
                <div class="row-sm">
                    <div class="col-sm">
                        TITLE
                    </div>
                    <div class="col-sm">
                        <input v-model="localStore.Title" type="text">
                    </div>
                </div>
                <div class="row-sm">
                    <div class="col-sm">
                        DESCRIPTION
                    </div>
                    <div class="col-sm">
                        <input v-model="localStore.Description" type="text">
                    </div>
                </div>
                <div class="row-sm">
                    <div class="col-sm btnSave" >
                        <router-link to='/admin'>
                        <button @click="updateNews" type="button" class="btn btn-danger">SAVE</button>
                        </router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
import { useRoute } from 'vue-router'
export default {
    data(){
        return{
            localStore:[],
            Game:'',
            id:'',//to store id of game or news
            clickSave:false,
            // formGame:{
            //     updateTitle:'',
            //     updateDescription:'',
            //     updateOriginalPrice:'',
            //     updateDiscountPrice:'',

            // }
        }
    },
    async mounted(){
        const route = useRoute()
        const urlName = route.name
        const editType=urlName.split("/")
        this.id=route.params.id;
        console.log(this.id);
        if(editType[2]=="editGame"){
            this.Game=true;
            const response= await axios.get(`http://localhost:2000/admin/getGames/${this.id}`);
            this.localStore=response.data;
        }
        else{
            this.Game=false;
            const response= await axios.get(`http://localhost:2000/admin/getNews/${this.id}`);
            this.localStore=response.data;
        }
    },
    methods:{
        updateGame(){
            axios.patch(`http://localhost:2000/admin/editGame/${this.id}`,this.localStore).then(result=>{
                console.log(result);
                //route.push('/admin')
            }).catch(err=>{
                console.log(err);
            })
        },
        updateNews(){
            axios.patch(`http://localhost:2000/admin/editNews/${this.id}`,this.localStore).then(result=>{
                console.log(result);
                //route.push('/admin')
            }).catch(err=>{
                console.log(err);
            })
        }
        
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
.background{
    background-color:  #303841;
    padding: 5rem;
}
.container{
    color: white;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    border: 2px solid #B5B1B2;
    width: 25rem;
    padding: 3rem;
    display: flex;
    justify-content: center;
}
.row-sm{
    padding: 0.2rem;
}
.btnSave{
    display: flex;
    text-align: center;
    justify-content: center;
}
.formSelect{
    height: 2rem;
    width: 13.6rem;
}
</style>