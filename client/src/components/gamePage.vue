<template>
    <div>
        <Header msg="LOG IN" Hightlight="highlight_Store"/>
        <main>
            <section>
                <div class="Back-to-store">
                    <router-link  to="/Store" class="link">
                    <i class="fas fa-arrow-left set-color" style="color:red;"></i> BACK TO STORE
                    </router-link>
                </div>
                <div>
                    <span>{{message}}</span>
                </div>
                <div class="line"></div>
                <div v-for="i in countLine" :key="i.id" class="game">
                    <!-- game in localStoreGame(i*4-4,i*4)-->
                    <div v-for="(game,i) in localStoreGame.slice(i*4-4,i*4)" :key="game._id">
                        <!-- img -->
                        <a :href="'/gameDetail/'+game._id">
                            <div class="sub-game" :style="{'background-image': `url(${require('../../../server/public/'+game.Files[0])})`}" 
                            :data-page="i" @mouseover="mouseOver(i)" @mouseleave="mouseLeave(i)" >

                            </div>
                        </a>
                        <ul class="game-detail">
                            <li>{{game.Title}}</li>
                            <li><p>{{game.Description}}</p></li>
                            <li><div class="red-line"></div></li>
                            <li>FREE</li>
                            <li><a :href="'/gameDetail/'+game._id"><button type="button" class="btn btn-danger">DOWNLOAD</button></a></li>
                        </ul>
                        <div class="Stars" :style="'--rating:'+game.Rating+';'" aria-label="Rating of this product is 2.3 out of 5."></div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import { useRoute } from 'vue-router'
import axios from 'axios';
export default {
    data(){
        return{
            type:'',
            localStoreGame:[],
            countLine:0,
            message:''
        }
    },
    components:{
        Header,
        Footer
    },
    methods:{
        mouseOver:function(text){
            const sub_games = document.querySelectorAll('.sub-game');
            sub_games.forEach(element=>{
                const dataPage=element.getAttribute("data-page")
                if(text==dataPage){
                    element.style.transition="all 1s ease";
                    element.style.transform="TranslateY(-15px)"
                    
                }
            })
        },
        mouseLeave:function(text){
            const sub_games = document.querySelectorAll('.sub-game')
            sub_games.forEach(element=>{
                const dataPage=element.getAttribute("data-page")
                if(text==dataPage){
                    element.style.transition="all 2s ease";
                    element.style.transform="none"
                }
            })
        }
    },
    async mounted(){
        const route = useRoute()
        const urlName = route.name
        this.type=route.params.type
        const response = await axios.get('http://localhost:2000/admin/getGames');
        response.data.reverse().forEach(element=>{
            const split=element.Description.split(" ");
            var str='';
            for(var i=0;i<6;i++){  
                str=str+" "+split[i];
            }
            element.Description=str;
            if(this.type=="freeGame"){
                this.message="TOP FREE GAME";
                if(element.OriginalPrice=="empty"){
                    this.localStoreGame.push(element);
                }
            }
            else if(this.type=="paidGame"){
                this.message="TOP PAID GAME";
                if(element.OriginalPrice>0){
                    this.localStoreGame.push(element);
                }
            }
        })
        if(this.localStoreGame.length%4==0){
            this.countLine=this.localStoreGame.length/4
        }
        else{
            this.countLine=Math.floor((this.localStoreGame.length/4)+1);
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
.line{
    width: 100%;
    height: 0.1rem;
    background: #B5B1B2;
    margin: 1rem 0 1rem 0;
}
button{
    border-radius: 30rem;
}
.Top-free-game{
    display: flex;
    justify-content: space-between;
}
.Top-free-game a{
    color: #D72323;
    text-decoration: none;
}
.game{
    display: flex;
    justify-content: space-between;
    padding: 2rem 0 2rem 0;
}
.sub-game{
    width: 11rem;
    height: 13rem; 
    background-size:100%;
    background-repeat: no-repeat;
    cursor: pointer;
}
.game-detail{
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
}
.game-detail p{
    font-size: 9px;
    line-height: 22px;
    color: #C4C4C4;
}
.red-line{
    width: 11rem;
    height: 0.1rem;
    background: #D72323;
    margin-bottom: 0.3rem;
}
.Stars {
	 --percent: calc(var(--rating) / 5 * 100%);
	display: inline-block;
	font-size: var(--star-size);
	font-family: Times;
	line-height: 1;
}
.Stars::before {
    content: '★★★★★';
	letter-spacing: 3px;
	background: linear-gradient(90deg, var(--star-background) var(--percent), var(--star-color) var(--percent));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
.Back-to-store{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10rem;
    border-radius: 1rem;
    padding: 0.2rem 0.5rem 0.2rem 0.5rem;
    border:1px solid red;
    cursor: pointer;
    margin-bottom: 1rem;
}
.link{
    color:white;
    text-decoration: none;
}
</style>>
