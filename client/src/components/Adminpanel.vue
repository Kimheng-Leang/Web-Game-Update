<template>
    <div>
        <Header msg="ADMIN" ></Header>
        <main>
        <section>
            <div class="Admin">
                <div>
                    <span>ADMINSTATION PANEL</span>
                </div>
                <div>
                    <button class="btn btn-danger">LOG OUT</button>
                </div>
            </div>
            <div class="line"></div>
            <ul>
                <li><button @click="changePost('Game')" type="button" class="btn btn-danger selected-btn" data-page="Game" id="Game">GAME</button></li>
                <li><button @click="changePost('News')" type="button" class="btn btn-light selected-btn News-style" data-page="News" id=News>NEWS</button></li>
            </ul>
        </section>
        <section>
            <div>
                <div><span>{{changeTitle}}</span></div>
            </div>
            <div class="line"></div>
            <form v-if="clickGame" action="">
            <div >
                <ul>
                    <li><button @click="changeGameType('Paid')" type="button" class="btn btn-danger selected-btn" data-page="Game" id="paid">PAID GAME</button></li>
                    <li><button @click="changeGameType('Free')" type="button" class="btn btn-light selected-btn News-style" data-page="News" id="free">FREE GAME</button></li>
                </ul>
                <ul class="addGame">
                    <li>
                        <div>
                            <span>GAME TITLE: </span>
                        </div>
                        <div>
                            <input v-model="formGame.title" type="text">
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>GAME DESCRIPTIION: </span>
                        </div>
                        <div>
                            <input v-model="formGame.description" type="text">
                        </div>
                    </li>
                    <li v-if="paid">
                        <div>
                            <span>ORIGINAL PRICE: </span>
                        </div>
                        <div>
                            <input v-model="formGame.original_price" type="text">
                            <span> RIELS</span>
                        </div>
                    </li>
                    <li v-if="paid">
                        <div>
                            <span>DISCOUNT PRICE: </span>
                        </div>
                        <div>
                            <input v-model="formGame.discount_price" type="text">
                            <span> RIELS</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>TYPE: </span>
                        </div>
                        <select v-model="formGame.type" class="formSelect">
                            <option value="Action">Action</option>
                            <option value="Advanture">Advanture</option>
                            <option value="Sport">Sport</option>
                            <option value="Fighter">Fighter</option>
                            <option value="Family">Family</option>
                            <option value="Strategy">Strategy</option>
                        </select>
                    </li>
                    <li>
                        <div>
                            <span>SUPPORTED OS: </span>
                        </div>
                        <div class="supports">
                            <div class="form-check form-check-inline">
                                <input v-model="window" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="WINDOW">
                                <label class="form-check-label" for="inlineCheckbox1">WINDOW</label>
                                </div>
                                <div class="form-check form-check-inline">
                                <input v-model="apple" class="form-check-input" type="checkbox" id="inlineCheckbox2" value="APPLE">
                                <label class="form-check-label" for="inlineCheckbox2">APPLE</label>
                            </div>
                            {{checkSupportOs}}
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>IMAGE: </span>
                        </div>
                        <div>
                            <div class="form-group">
                                <input type="file" class="form-control-file" id="exampleFormControlFile1" >
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>BACKGROUND IMAGE: </span>
                        </div>
                        <div>
                            <div class="form-group">
                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>SOURCE FILE: </span>
                        </div>
                        <div>
                            <div class="form-group">
                                <input type="file" class="form-control-file" id="exampleFormControlFile1">
                            </div>
                        </div>
                    </li>
                </ul>
                
            </div>
            <div class="createGame">
                <button type="button" @click="submitGame" class="btn btn-danger" >CREATE GAME <i class="fas fa-plus"></i></button>
            </div>
            </form>
            <form v-if="!clickGame" action="">
            <div >
                <ul class="addGame">
                    <li>
                        <div>
                            <span>NEWS TITLE: </span>
                        </div>
                        <div>
                            <input v-model="formNews.title" type="text">
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>NEWS DESCRIPTIION: </span>
                        </div>
                        <div>
                            <input v-model="formNews.description" type="text">
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>IMAGE: </span>
                        </div>
                        <div>
                            <div class="form-group">
                                <input type="file" class="form-control-file" id="exampleFormControlFile1" >
                            </div>
                        </div>
                    </li>
                </ul>
                
            </div>
            <div class="createGame">
                <button type="button" class="btn btn-danger" @click="submitNews" >CREATE GAME <i class="fas fa-plus"></i></button>
            </div>
            </form>
        </section>
        <section v-if="clickGame">
            <div>
                <div><span>EDIT & DELETE GAME</span></div>
            </div>
            <div class="line"></div>
            <div v-for="game in localGameStore" :key="game.id" class="list-game">
                <div class="main-list" :id="game._id">
                    <div class="list-game-img">

                    </div>
                    <!-- <ul v-if="selectedGame._id==game._id" class="list-game-detail">
                        <li><input v-model="editFormGame.title" type="text"> </li>
                        <li> <input v-model="editFormGame.description" type="text"></li>
                        <li > <input v-model="editFormGame.discount_price" type="text"> RIELS</li>
                        <li> <input v-model="editFormGame.original_price" type="text"> RIELS</li>
                        <li> <input v-model="editFormGame.support_os" type="text"></li>
                        <li> <input v-model="editFormGame.type" type="text"></li>
                        <li>AVERAGE STAR: 4.5/5</li> 
                    </ul> -->
                    <ul v-if="isSelectedGame(game)" class="list-game-detail">
                        <li><input v-model="editFormGame.title" type="text"> </li>
                        <li> <input v-model="editFormGame.description" type="text"></li>
                        <li > <input v-model="editFormGame.original_price" type="text"> RIELS</li>
                        <li> <input v-model="editFormGame.discount_price" type="text"> RIELS</li>
                        <li> <input v-model="editFormGame.support_os" type="text"></li>
                        <li> <input v-model="editFormGame.type" type="text"></li>
                        <!-- <li>AVERAGE STAR: 4.5/5</li> -->
                    </ul>
                    <ul v-else class="list-game-detail">
                        <li>{{game.Title}}</li>
                        <li>{{game.Description}}</li>
                        <li class="discount">{{game.OriginalPrice}} RIELS</li>
                        <li>{{game.Price}} RIELS</li>
                        <li>{{game.SupportOS}}</li>
                        <li>{{game.Type}}</li>
                        <!-- <li>AVERAGE STAR: 4.5/5</li> -->
                    </ul>
                </div>
                <div class="edit-delete-btn" v-if="!isSelectedGame(game)">
                    <!-- <div >
                        <button @click="isSelectedGame(game) ? unSelectedGame():editGame(game)" class="btn btn-danger"><i class="fas fa-wrench">{{isSelectedGame(game) ? 'close':'edit'}} </i></button>
                    </div> -->
                    <div >
                        <button @click="editedGame(game)" class="btn btn-danger">EDIT GAME<i class="fas fa-wrench"></i></button>
                    </div>
                    <div>
                        <button @click="deletedGame(game._id)" type="button" class="btn btn-danger">DELETE GAME <i class="far fa-trash-alt"></i></button>
                    </div>
                </div>
                <!-- <div class="agree-delete-btn" v-if="isDeletedGame(game)">
                    <div >
                        <button @click="deleteGame(game._id)" type="button" class="btn btn-danger">YES</button>
                    </div>
                    <div>
                        <button @click="deletedBtn('No')" type="button" class="btn btn-danger">NO</button>
                    </div>
                </div> -->
                <div class="update-game-btn" v-if="isSelectedGame(game) ">
                    <div >
                        <button @click="updateGame(game._id)" class="btn btn-danger">SAVE <i class="fas fa-save"></i></button>
                    </div>
                    <div>
                        <button @click="unSelectedGame(game)" type="button" class="btn btn-danger">DON'T <i class="fas fa-times"></i></button>
                    </div>
                </div>
            </div>
            <div class="line"></div>
        </section>
        <section v-if="!clickGame">
            <div>
                <div><span>EDIT & DELETE NEWS</span></div>
            </div>
            <div class="line"></div>
            <div v-for="news in localNewsStore" :key="news.id" class="list-game">
                <div class="main-list" :id="news._id">
                    <div class="list-game-img">

                    </div>
                    <ul v-if="isSelectedNews(news)" class="list-game-detail">
                        <li><input v-model="editFormNews.title" type="text"> </li>
                        <li> <input v-model="editFormNews.description" type="text"></li>
                        <!-- <li>AVERAGE STAR: 4.5/5</li> -->
                    </ul>
                    <ul v-else class="list-game-detail">
                        <li>{{news.Title}}</li>
                        <li>{{news.Description}}</li>
                    </ul>
                </div>
                <div class="edit-delete-btn" v-if="!isSelectedNews(news)">
                    <div >
                        <button @click="editedNews(news)" type="button" class="btn btn-danger">EDIT NEWS <i class="fas fa-wrench"></i></button>
                    </div>
                    <div>
                        <button @click="deletedNews(news._id)" type="button" class="btn btn-danger">DELETE NEWS <i class="far fa-trash-alt"></i></button>
                    </div>
                </div>
                <!-- <div class="agree-delete-btn" v-if="isSelectedGame(game) ">
                    <div >
                        <button @click="deleteNews(news._id)" type="button" class="btn btn-danger">YES</button>
                    </div>
                    <div>
                        <button @click="deletedBtn('No')" type="button" class="btn btn-danger">NO</button>
                    </div>
                </div> -->
                <div class="update-game-btn" v-if="isSelectedNews(news) ">
                    <div >
                        <button @click="updateNews(news._id)" class="btn btn-danger">SAVE <i class="fas fa-save"></i></button>
                    </div>
                    <div>
                        <button @click="unSelectedNews()" type="button" class="btn btn-danger">DON'T <i class="fas fa-times"></i></button>
                    </div>
                </div>
            </div>
            <div class="line"></div>
        </section>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import {mapGetters} from "vuex"
import {useStore} from 'vuex'
export default {
    name:"AdminPanel",
    data(){
        return{
            localGameStore:[],
            localNewsStore:[],
            selectedFile:null,
            clickGame:true,
            changeTitle:"ADD GAME",
            paid:true,
            deleted:false,
            window:false,
            apple:false,
            formGame:{
                title:"",
                description:"",
                original_price:"",
                discount_price:"",
                type:"",
                support_os:'',
            },
            formNews:{
                title:"",
                description:"",
            },
            editFormGame:{
                title:"",
                description:"",
                original_price:"",
                discount_price:"",
                type:"",
                support_os:'',
            },
            editFormNews:{
                title:"",
                description:"",
            },
            selectedGame:{},
            selectedNews:{},
        }
    },
    components:{
        Header,
        Footer,
    },
    methods:{
        submitGame(){
            
            axios.post('http://localhost:2000/admin/addgame',this.formGame)
            .then(result=>{
                this.formGame.title="";
                this.formGame.description="";
                if(this.formGame.original_price!="empty"){
                    this.formGame.original_price='';
                    this.formGame.discount_price='';
                }
                this.formGame.type='';
                this.window=false;
                this.apple=false;
                this.localGameStore.push(result.data.data);
                console.log(result.data.data);
            })
            .catch(err=>{
                console.log(err);
            })
        },
        editedGame(game){
            this.selectedGame=game;
            this.editFormGame.title=game.Title;
            this.editFormGame.description=game.Description;
            this.editFormGame.discount_price=game.DiscountPrice;
            this.editFormGame.original_price=game.OriginalPrice;
            this.editFormGame.type=game.Type;
            this.editFormGame.support_os=game.SupportOS;
        },
        updateGame(game_id){
            axios.patch(`http://localhost:2000/admin/editGame/${game_id}`,this.editFormGame).then(result=>{
                console.log(result.data);
                let index=0;
                let game=this.localGameStore.find((game)=>{
                    if(game._id==game_id){
                        this.localGameStore[index]=result.data
                    }
                    else{
                        index++
                    }
                })
                this.selectedGame={}
                //route.push('/admin')
            }).catch(err=>{
                console.log(err);
            })
        },
        isSelectedGame(game){
            return game._id==this.selectedGame._id
        },
        unSelectedGame(){
            this.selectedGame={}
        },
        deletedGame(id){
            axios.delete('http://localhost:2000/admin/deleteGame/'+id).then(result=>{
                console.log('Game is deleted');
                this.localGameStore=this.localGameStore.filter((game)=>game._id!=id)
            })
            .catch(err=>{
                console.log(err);
            })
        },
        submitNews(){
            axios.post('http://localhost:2000/admin/addnews',this.formNews)
            .then(result=>{
                this.localNewsStore.push(result.data.data)
                this.formNews.title="";
                this.formNews.description="";
                console.log(result);
            })
            .catch(err=>{
                console.log(err);
            })
        },
        editedNews(news){
            this.selectedNews=news;
            this.editFormNews.title=news.Title;
            this.editFormNews.description=news.Description;
        },
        isSelectedNews(news){
            return news._id==this.selectedNews._id
        },
        unSelectedNews(){
            this.selectedNews={}
        },
        updateNews(news_id){
            axios.patch(`http://localhost:2000/admin/editNews/${news_id}`,this.editFormNews).then(result=>{
                console.log(result.data);
                let index=0;
                let news=this.localNewsStore.find((news)=>{
                    if(news._id==news_id){
                        this.localNewsStore[index]=result.data
                    }
                    else{
                        index++
                    }
                })
                this.selectedNews={}
                //route.push('/admin')
            }).catch(err=>{
                console.log(err);
            })
        },
        deletedNews(id){
            
            axios.delete('http://localhost:2000/admin/deleteNews/'+id).then(result=>{
                console.log("News is deleted.");
                this.localNewsStore=this.localNewsStore.filter((news)=>news._id!=id)
            })
            .catch(err=>{
                console.log(err);
            })
        },
        changePost:function(text){
            this.deleted=false;
            const changeClassGame = document.getElementById("Game");
            const changeClassNews = document.getElementById("News");
            const anime=document.querySelectorAll('.selected-btn');
            anime[0].style.transition="all 1s ease";
            anime[1].style.transition="all 1s ease";
            if(text=='Game'){
                changeClassGame.className="btn btn-danger selected-btn"
                changeClassNews.className="btn btn-light selected-btn"
                this.clickGame=true;
                this.changeTitle="ADD GAME"
            }
            else{
                changeClassNews.className="btn btn-danger selected-btn"
                changeClassGame.className="btn btn-light selected-btn"
                this.clickGame=false;
                this.changeTitle="ADD NEWS"
            }
        },
        changeGameType:function(text){
            const changeClassPaid=document.getElementById("paid");
            const changeClassFree=document.getElementById("free")
            const anime=document.querySelectorAll('.selected-btn');
            anime[2].style.transition="all 1s ease";
            anime[3].style.transition="all 1s ease";
            if(text=="Paid"){
                changeClassPaid.className="btn btn-danger selected-btn"
                changeClassFree.className="btn btn-light selected-btn"
                this.paid=true;
                this.formGame.original_price="";
                this.formGame.discount_price="";
            }
            else{
                changeClassFree.className="btn btn-danger selected-btn"
                changeClassPaid.className="btn btn-light selected-btn"
                this.paid=false;
                this.formGame.original_price="empty";
                this.formGame.discount_price="empty";
            }
        },
        
        
    },
    async mounted(){
        let store = useStore();
		//Get data form server and store in vuex
		const responseGame = await axios.get('http://localhost:2000/admin/getGames');
        const responseNews = await axios.get('http://localhost:2000/admin/getNews');
		//Store data into local 
		// this.localPost = response.data;
		// console.log(this.localPost);
		// And in vuex
        this.localGameStore=responseGame.data;
        this.localNewsStore=responseNews.data;
		store.dispatch("updateGames",responseGame.data);
        store.dispatch("updateNews",responseNews.data)
		console.log(responseGame.data);
        console.log(responseNews.data);
	},
    computed:{
        ...mapGetters([
            "getGames",
            "getNews"
        ]),
        checkSupportOs(){
            if(this.window){
                if(this.apple){
                    this.formGame.support_os="WINDOW, APPLE"
                }
                else{
                    this.formGame.support_os="WINDOW"
                } 
            }
            else{
                if(this.apple){
                    this.formGame.support_os="APPLE"
                }
                else{
                    this.formGame.support_os='';
                }
            }
            console.log(this.formGame.support_os);
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
main{
    color: white;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    background-color:  #303841;
}
main section{
    display: block;
    align-items: center;
    padding: 2rem 10rem 2rem 10rem;
}
.Admin{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
button{
    border-radius: 30rem;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
}
.line{
    width: 100%;
    height: 0.1rem;
    background: #B5B1B2;
    margin: 1rem 0 1rem 0;
}
section ul{
    display: flex;
    list-style: none;
}
.selected-btn{
    width: 10rem;
    border-radius: 0rem;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 18px;
}
.News-style{
    color: #D72323;
}
.addGame{
    display: block;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
}
.addGame li{
    display: flex;
    align-items: center;
    margin: 0.5rem;
}
li input{
    margin-left: 1rem;
}
.form-check input{
    margin-left: 0.1rem;
}
.supports{
    padding-top: 0.5rem;
}
.supports label{
    margin-left: 0.2rem;
}
.createGame{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.list-game{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    padding-bottom: 1rem;
    padding-top:1rem ;
}
.list-game input{
    margin-bottom: 0.2rem;
}
.list-game-img{
    width: 8rem;
    height: 10rem;
    background: #C4C4C4;
}
.list-game-detail{
    display: block;
    padding-left: 1rem;
}
.discount{
    text-decoration-line: line-through;
    color: #FFFFFF;
}
.main-list{
    width: 30rem;
    display: flex;
    align-items: flex-end;
}
.edit-delete-btn{
    width: 16rem;
    display: flex;
    justify-content: space-between;
    transition: all 1s ease ;
}
.formSelect{
    margin-left: 1rem;
    height: 1.5rem;
    width: 7rem;
}
.agree-delete-btn{
    width: 7rem;
    display: flex;
    justify-content: space-between;
}
.update-game-btn{
    width: 10rem;
    display: flex;
    justify-content: space-between;
}
</style>