<template>
<div>
    <Header msg="LOG IN" Hightlight="highlight_Home" selectedHome="selected-header"/>
    <div class="background">
        <main class="container">
        <section class="row">
            <span class="row">TRENDING NOW</span>
            <div class="mainboard row" >
                <div class="main-billboard col" :style="{'background-image': `url(${formGame.background})`}">
                    <div class="sub-title row">
                        <h3 class="row">{{formGame.title}}</h3>
                        <div class="row">
                            <p>{{formGame.description}} </p>
                        </div>
                        <div class="row">
                        <a :href="'/gameDetail/'+formGame.id"><button class="btn btn-light button">EXPLORE MORE <i class="fas fa-chevron-right"></i></button></a>
                        </div>
                    </div>
                </div>
                <div class="sub-billboard col-2">
                    <div v-for="(game,i) in localStore.slice(0,1)" :key="game._id" class="sub-billboards selected" @mouseleave="mouseLeave(i)" @mouseover="mouseOver(i)" @click="clickSubbillBoard(i,game)" :data-page="i" >
                        <div class="sub-img" :style="{'background-image': `url(${require('../../../server/public/'+game.Files[0])})`}">
                            
                        </div>
                        <div>
                            <p>{{game.Title}}</p>
                        </div>
                    </div>
                    <div v-for="(game,i) in localStore.slice(1,3)" :key="game._id" class="sub-billboards" @mouseleave="mouseLeave(i+1)" @mouseover="mouseOver(i+1)" @click="clickSubbillBoard(i+1,game)" :data-page="i+1" >
                        <div class="sub-img" :style="{'background-image': `url(${require('../../../server/public/'+game.Files[0])})`}">
                            
                        </div>
                        <div>
                            <p>{{game.Title}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="row">
            <div class="dropdown row">
                <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                POPULAR GAME
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">POPULAR GAME</a></li>
                    <li><a class="dropdown-item" href="/gamePage/freeGame">TOP FREE GAME</a></li>
                    <li><a class="dropdown-item" href="/gamePage/paidGame">TOP PAID GAME</a></li>
                    <li><a class="dropdown-item" href="/gamePage/newestGame">NEWEST GAME</a></li>
                </ul>
            </div>
            <div class="game row">
                <div v-for="(game,i) in localStore" :key="game._id" class="col">
                    <!-- img -->
                    <a :href="'/gameDetail/'+game._id">
                        <div class="sub-game" :style="{'background-image': `url(${require('../../../server/public/'+game.Files[0])})`}" :data-page="i" @mouseover="mouseOver(i)" @mouseleave="mouseLeave(i)" >

                        </div>
                    </a>
                    <ul v-if="game.OriginalPrice>0" class="game-detail">
                        <li>{{game.Title}}</li>
                        <li><p>{{game.Description}} ...</p></li>
                        <li><div class="red-line"></div></li>
                        <li>{{game.Price}} RIELS</li>
                        <li class="discount">{{game.OriginalPrice}} RIELS</li>
                        <li><a :href="'/Checkout/'+game._id"><button class="btn btn-danger ">BUY NOW</button></a></li>
                    </ul>
                    <ul v-else class="game-detail">
                        <li>{{game.Title}}</li>
                        <li><p>{{game.Description}} ...</p></li>
                        <li><div class="red-line"></div></li>
                        <li>Free</li>
                        <li><a :href="'/gameDetail/'+game._id"><button type="button" class="btn btn-danger">DOWNLOAD</button></a> </li>
                    </ul>
                    <div class="Stars" :style="'--rating:'+game.Rating+';'" aria-label="Rating of this product is 2.3 out of 5."></div>
                </div>
            </div>
        </section>
        <div class="cross-line">

        </div>
        <section class="row">
            <div class="News row">
                <div class="col">
                    <span>NEWS</span>
                </div>
                <div class="col-1">
                    <a href="http://localhost:8080/Newspage">SEE ALL</a>
                </div>
            </div>
            <div class="game row">
                <div v-for="(news,i) in localStoreNews" :key="news._id" class="col">
                    <a :href="'/newsDetail/'+news._id">
                        <div class="News-img" :style="{'background-image': `url(${require('../../../server/public/'+news.Files[0])})`}" :data-page="i" @mouseover="mouseOver(i)" @mouseleave="mouseLeave(i)" >

                        </div>
                    </a>
                    <div >
                            <ul class="game-detail">
                                <ul class="News-detail">
                                    <li><h6>NEWS</h6></li>
                                    <li><p>DATE: {{news.postedDate}}</p></li>
                                </ul>
                                <li>GET TO KNOW OUR STREAMERS</li>
                            </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
    </div>
    
    <Footer/>
</div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
export default {
    name:"Homepage",
    data(){
        return{
            localStore:[],
            formGame:{
                background:'',
                title:'',
                description:'',
                id:''
            },
            localStoreNews:[],
            
        }
    },
    components:{
        Header,
        Footer
    },
    methods:{
        clickSubbillBoard:function(text,game){
            const sub_billBoards=document.querySelectorAll('.sub-billboards');
            const background=document.querySelector('.main-billboard');
            background.style.transition="all 1s ease";
            this.formGame.title=game.Title
            this.formGame.description=game.Description
            this.formGame.id=game._id
            this.formGame.background=require('../../../server/public/'+game.Files[1])
            // const main_Billboard = document.querySelector('.main-billboard');
            sub_billBoards.forEach(element=>{
                const dataPage=element.getAttribute("data-page");
                if(text==dataPage){
                    element.classList.add("selected");
                    // const src="../assets/images/Age_of_Empires.jpg"
                    // main_Billboard.style.backgroundImage=`url(${src})`;
                }
                else{
                    element.classList.remove("selected")
                }
            })
        },
        mouseOver:function(text){
            const sub_billBoards=document.querySelectorAll('.sub-billboards');
            const sub_games = document.querySelectorAll('.sub-game');
            const News = document.querySelectorAll('.News-img')
            sub_billBoards.forEach(element=>{
                const dataPage=element.getAttribute("data-page");
                if(text==dataPage){
                    element.style.transition="all 1s ease";
                    element.style.transform="TranslateX(20px)"
                }   
                
            })
            sub_games.forEach(element=>{
                const dataPage=element.getAttribute("data-page")
                if(text==dataPage){
                    element.style.transition="all 1s ease";
                    element.style.transform="TranslateY(-15px)"
                    
                }
            })
            News.forEach(element=>{
                const dataPage=element.getAttribute("data-page");
                if(text==dataPage){
                    element.style.transition="all 1s ease";
                    element.style.transform="TranslateY(-15px)"
                }
            })
        },
        mouseLeave:function(text){
            const sub_billBoards=document.querySelectorAll('.sub-billboards');
            const sub_games = document.querySelectorAll('.sub-game')
            const News = document.querySelectorAll('.News-img')
            sub_billBoards.forEach(element=>{
                const dataPage=element.getAttribute("data-page")
                if(text==dataPage){
                    element.style.transition="all 1s ease";

                    element.style.transform="none"
                }
                
            })
            sub_games.forEach(element=>{
                const dataPage=element.getAttribute("data-page")
                if(text==dataPage){
                    element.style.transition="all 2s ease";
                    element.style.transform="none"
                }
            })
            News.forEach(element=>{
                const dataPage=element.getAttribute("data-page");
                if(text==dataPage){
                    element.style.transition="all 2s ease";
                    element.style.transform="none"
                }
                
            })
            
        }
    },
    async mounted(){
        const responseGame = await axios.get('http://localhost:2000/admin/getGames');
        const responseNews = await axios.get('http://localhost:2000/admin/getNews');
        responseGame.data.sort(function(a, b){
            return b.Views-a.Views;
        })
        let lengthGame=0;
        responseGame.data.forEach(element=>{
            if(lengthGame==0){
                this.formGame.title=element.Title
                this.formGame.description=element.Description
                this.formGame.background=require('../../../server/public/'+element.Files[1])
                this.formGame.id=element._id;
            }
            lengthGame++
            
            const split=element.Description.split(" ");
            var str='';
            for(var i=0;i<6;i++){  
                str=str+" "+split[i];
            }
            element.Description=str;
            if(lengthGame<=4){
                this.localStore.push(element)
            }
        })
        let lengthNews=0
        responseNews.data.reverse().forEach(element=>{
            let str=element.postedDate.split("T");
            element.postedDate=str[0];
            // const split=element.Description.split(" ");
            // var str='';
            // for(var i=0;i<6;i++){  
            //     str=str+" "+split[i];
            // }
            // element.Description=str;
            lengthNews++
            if(lengthNews<=2){
                this.localStoreNews.push(element)
            }
        })
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
.row>*{
    padding: 0;
}
.background{
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
    padding: 2rem 5rem 2rem 5rem;
}
.mainboard{
    display: flex;
    padding: 2rem 0 2rem 0;
}
.main-billboard{
    width: 45rem;
    height: 24rem;
    font-weight: normal;
    color: #000000;
    background-size:100%;
    background-repeat: no-repeat;
}
.sub-billboards{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 13rem;
    height: 8rem; 
    font-weight: normal;
    border: 1px solid #EEEEEE;
    box-sizing: border-box;
    cursor: pointer;
}
.sub-billboards p{
    font-size:0.9rem;
}
.sub-img{
    width: 4rem;
    height: 5rem;
    background-size:100%;
    background-repeat: no-repeat;
}
.sub-title{
    padding-left: 3rem;
    padding-top: 15rem;
    color: white;
}
.button{
    border: 2px solid #303841;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 11rem;
}
.selected{
    background-color: #D72323;
    opacity: 50%;
}
.category{
    border: 2px solid white;
    color: white;
    background-color:  #303841;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 11rem;
    border-radius: 0;
}
.dropdown{
    width: 10rem;
    height: 2rem;
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
.rating{
    display: flex;
    justify-content: space-between;
    list-style: none;
}
.red-line{
    width: 11rem;
    height: 0.2rem;
    background: #D72323;
    margin-bottom: 0.3rem;
}
.discount{
    text-decoration-line: line-through;
    color: #C4C4C4;
}
li button{
    margin-top: 0.3rem;
    border-radius: 30rem;
}
.cross-line{
    width: 100%;
    height: 0.5rem;
    background-color: #D72323;
}
.News{
    display: flex;
    justify-content: space-between;
}
.News a{
    color: #D72323;
    text-decoration: none;
}
.News-img{
    width: 28rem;
    height: 15rem;
    background-size:100%;
    background-repeat: no-repeat;
    cursor: pointer;
}
.News-detail{
    list-style: none;
    display: flex;
    align-items: center;
    padding-bottom: 0.2rem;
}
.News-detail h6{
    background-color: #D72323;
    padding: 0.2rem;
}
.News-detail p{
    padding-left: 1.2rem;
    font-size: 12px;
    color: #FFFFFF;
}
a{
    text-decoration: none;
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
</style>