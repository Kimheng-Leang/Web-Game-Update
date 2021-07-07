<template>
<div>
    <Header msg="LOG IN" Hightlight="highlight_Store" selectedStore="selected-header"/>
    <div class="background">
        <main class="container">
        <section class="main-search row">
            <div class="input-group rounded search">
                <input @keyup="Enter" v-model="search" @input="checkSearch" type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />
                <button @click="Search" :disabled='isDisable' class="border-0 btn btn-danger btn-search" id="search-addon">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </section>
        <section class="row">
            <div>
                <span>GAME OF THE MONTH</span>
            </div>
            <div class="line-GameofMonth row"></div>
            <div class="GameofMonth col">
                <a :href="'/gameDetail/'+topGameOfMonth.id">
                    <div class="Game-background img-fluid" :style="{'background-image': `url(${background})`}">
                        
                    </div>
                </a>
                <ul class="circle col">
                    <li class="selected-circle"><i class="fas fa-circle"></i></li>
                    <li><i class="fas fa-circle"></i></li>
                    <li><i class="fas fa-circle"></i></li>
                </ul>
            </div>
            <div v-if="topGameOfMonth.original_price>0" class="Game-detail">
                <div>
                    <span>{{topGameOfMonth.title}}</span>
                </div>
                <ul>
                    <li>{{topGameOfMonth.price}} RIELS</li>
                    <li class="discount">{{topGameOfMonth.original_price}} RIELS</li>
                    <li><a :href="'/Checkout/'+topGameOfMonth.id"><button class="btn btn-danger ">BUY NOW</button></a></li>
                </ul>
            </div>
            <div v-else class="Game-detail ">
                <div>
                    <span>{{topGameOfMonth.title}}</span>
                </div>
                <ul>
                    <li><a :href="'/gameDetail/'+topGameOfMonth.id"><button class="btn btn-danger ">DOWNLOAD</button></a></li>
                </ul>
            </div>
        </section>
        <!-- <img src="../assets/images/logo.png" alt="" id="image">  //test change images every 30s-->
        <section class="row">
            <div class="Top-free-game">
                <div>
                    <span>TOP FREE GAME</span>
                </div>
                <div>
                    <a href="/gamePage/freeGame" class="color-seeall">SEE ALL</a>
                </div>
            </div>
            <div class="line"></div>
            <div class="game row">
                <div v-for="(freeGame,i) in localStoreTopFreeGame" :key="freeGame._id" class="col" >
                    <!-- img -->
                    <a :href="'/gameDetail/'+freeGame._id">
                        <div class="sub-game" :style="{'background-image': `url(${require('../../../server/public/'+freeGame.Files[0])})`}" :data-page="i" @mouseover="mouseOver(i)" @mouseleave="mouseLeave(i)" >

                        </div>
                    </a>
                    <ul class="game-detail">
                        <li>{{freeGame.Title}}</li>
                        <li><p>{{freeGame.Description}} ...</p></li>
                        <li><div class="red-line"></div></li>
                        <li>FREE</li>
                        <li><a :href="'/gameDetail/'+freeGame._id"><button type="button" class="btn btn-danger">DOWNLOAD</button></a> </li>
                    </ul>
                    <div class="Stars" :style="'--rating:'+freeGame.Rating+';'" aria-label="Rating of this product is 2.3 out of 5."></div>
                </div>
            </div>
        </section>
        <section class="row">
            <div class="Top-free-game">
                <div>
                    <span>TOP PAID GAME</span>
                </div>
                <div>
                    <a href="/gamePage/paidGame" class="color-seeall">SEE ALL</a>
                </div>
            </div>
            <div class="line"></div>
            <div class="game row" >
                <div v-for="(TopPaidGame,i) in localStoreTopPaidGame" :key="TopPaidGame._id" class="col">
                    <!-- img -->
                    <a :href="'/gameDetail/'+TopPaidGame._id">
                        <div class="sub-game" :style="{'background-image': `url(${require('../../../server/public/'+TopPaidGame.Files[0])})`}" :data-page="i" @mouseover="mouseOver(i)" @mouseleave="mouseLeave(i)" >

                        </div>
                    </a>
                    <ul class="game-detail">
                        <li>{{TopPaidGame.Title}}</li>
                        <li><p>{{TopPaidGame.Description}} ...</p></li>
                        <li><div class="red-line"></div></li>
                        <li>{{TopPaidGame.Price}} RIELS</li>
                        <li v-if="TopPaidGame.DiscountPrice>0" class="discount">{{TopPaidGame.OriginalPrice}} RIELS</li>
                        <li><a :href="'/Checkout/'+topGameOfMonth.id"><button class="btn btn-danger ">BUY NOW</button></a></li>
                    </ul>
                    <div class="Stars" :style="'--rating:'+TopPaidGame.Rating+';'" aria-label="Rating of this product is 2.3 out of 5."></div>
                </div>
            </div>
        </section>
        <!-- <section class="row">
            <div class="Top-free-game">
                <div>
                    <span>TOP NEWEST GAME</span>
                </div>
                <div>
                    <a href="" class="color-seeall">SEE ALL</a>
                </div>
            </div>
            <div class="line"></div>
            <div class="game row">
                <div >
                    <a href="/gameDetail">
                        <div class="sub-game" data-page="first-game" @mouseover="mouseOver('first-game')" @mouseleave="mouseLeave('first-game')" >

                        </div>
                    </a>
                    <ul class="game-detail">
                        <li>GAME TITLE</li>
                        <li><p>Game description Game description</p></li>
                        <li><div class="red-line"></div></li>
                        <li>20,000 RIELS</li>
                        <li class="discount">40,000 RIELS</li>
                        <li><a href="/Checkout"><button class="btn btn-danger ">BUY NOW</button></a></li>
                    </ul>
                    <ul class="rating">
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                    </ul>
                </div>
                <div>
                    <a href="/gameDetail">
                        <div class="sub-game"  data-page="second-game" @mouseover="mouseOver('second-game')" @mouseleave="mouseLeave('second-game')">

                        </div>
                    </a>
                    <ul class="game-detail">
                        <li>GAME TITLE</li>
                        <li><p>Game description Game description</p></li>
                        <li><div class="red-line"></div></li>
                        <li>20,000 RIELS</li>
                        <li><a href="/Checkout"><button class="btn btn-danger ">BUY NOW</button></a></li>
                    </ul>
                    <ul class="rating">
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                    </ul>
                </div>
                <div >
                    <a href="/gameDetail">
                        <div class="sub-game" data-page="third-game" @mouseover="mouseOver('third-game')" @mouseleave="mouseLeave('third-game')">

                        </div>
                    </a>
                    <ul class="game-detail">
                        <li>GAME TITLE</li>
                        <li><p>Game description Game description</p></li>
                        <li><div class="red-line"></div></li>
                        <li>20,000 RIELS</li>
                        <li class="discount">40,000 RIELS</li>
                        <li><a href="/Checkout"><button class="btn btn-danger ">BUY NOW</button></a></li>
                    </ul>
                    <ul class="rating">
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                    </ul>
                </div>
                <div >
                    <a href="/gameDetail">
                        <div class="sub-game"  data-page="forth-game" @mouseover="mouseOver('forth-game')" @mouseleave="mouseLeave('forth-game')" >

                        </div>
                    </a>
                    <ul class="game-detail">
                        <li>GAME TITLE</li>
                        <li><p>Game description Game description</p></li>
                        <li><div class="red-line"></div></li>
                        <li>20,000 RIELS</li>
                        <li class="discount">40,000 RIELS</li>
                        <li><a href="/Checkout"><button class="btn btn-danger ">BUY NOW</button></a></li>
                    </ul>
                    <ul class="rating">
                        <li><i class="fas fa-star "></i></li>
                        <li><i class="fas fa-star "></i></li>
                        <li><i class="fas fa-star "></i></li>
                        <li><i class="fas fa-star "></i></li>
                        <li><i class="far fa-star "></i></li>
                    </ul>
                </div>
            </div>
        </section> -->
        <section class="row">
            <div class="Top-free-game">
                <div>
                    <span>OUR TOP CATEGORIES</span>
                </div>
                <div>
                    <a href="" class="color-seeall">SEE ALL</a>
                </div>
            </div>
            <div class="line"></div>
            <div>
                <ul class="Top-categories">
                    <a :href="'/gamePage/action'"><li><button class="btn btn-light style-categories">ACTION</button></li></a>
                    <a :href="'/gamePage/advanture'"><li><button class="btn btn-light style-categories">ADVANTURE</button></li></a>
                    <a :href="'/gamePage/fighter'"><li><button class="btn btn-light style-categories">FIGHTER</button></li></a>
                </ul>
                <ul class="Top-categories">
                    <a :href="'/gamePage/family'"><li><button class="btn btn-light style-categories">FAMILY</button></li></a> 
                    <a :href="'/gamePage/sport'"><li><button class="btn btn-light style-categories">SPORT</button></li></a>
                    <a :href="'/gamePage/strategy'"><li><button class="btn btn-light style-categories">STRATEGY</button></li></a>
                </ul>
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
import axios from 'axios'
export default {
    name:"Store",
    data(){
        return{
            // src:require('../assets/images/logo.png'),
            background:'',
            search:'',
            localStoreTitleGame:[],
            localStoreTopFreeGame:[],
            localStoreTopPaidGame:[],
            topGameOfMonth:{
                title:'',
                description:'',
                price:'',
                original_price:'',
                id:'',
            }
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
        },
        Enter:function(e){
            if(this.search.length>0){
                if(e.keyCode==13){
                    this.$router.push('/gamePage/'+this.search)
                }
            }
        },
        Search(){
            this.$router.push('/gamePage/'+this.search)
        }
        
    },
    computed:{
        isDisable(){
            if(this.search.length>0){
                return false
            }
            else{
                return true
            }
        },
    },
    async mounted(){
        // get data from database
        var Files="";
        let backgrounds=[]
        const responseGame= await axios.get('http://localhost:2000/admin/getGames');
        let topViewsGame=responseGame.data[0].Views;
        let foundIndex=0;
        let lengthPaidGame=0,lengthFreeGame=0;
        responseGame.data.forEach((element,j)=>{
            const split=element.Description.split(" ");
            var str='';
            for(var i=0;i<6;i++){  
                str=str+" "+split[i];
            }
            element.Description=str;
            if(topViewsGame<element.Views){
                topViewsGame=element.Views
                foundIndex=j; //find index of the game who have the biggest viewer
            }
            if(element.OriginalPrice>0){
                lengthPaidGame++;
                if(lengthPaidGame<=4){
                    this.localStoreTopPaidGame.push(element)
                }
            }
            else{
                
                lengthFreeGame++;
                if(lengthFreeGame<=4){
                    this.localStoreTopFreeGame.push(element)
                }
            }
            this.localStoreTitleGame.push(element)

        })
        Files=responseGame.data[foundIndex].Files;
        this.background=require('../../../server/public/'+Files[1])
        this.topGameOfMonth.title=responseGame.data[foundIndex].Title
        this.topGameOfMonth.description=responseGame.data[foundIndex].Description
        this.topGameOfMonth.price=responseGame.data[foundIndex].Price
        this.topGameOfMonth.original_price=responseGame.data[foundIndex].OriginalPrice
        this.topGameOfMonth.id=responseGame.data[foundIndex]._id
        Files.forEach((element,i)=>{
            if(i>0){
                backgrounds.push(element)
            }
        })
        backgrounds=backgrounds.reverse();
        console.log(this.topGameOfMonth);
        const background=document.querySelector('.Game-background')
        const circle=document.querySelector('.circle')
        let index=0;
        setInterval(()=>{
            console.log('Hi');
            this.background=require("../../../server/public/"+backgrounds[index]);
            circle.children[index].classList.remove("selected-circle");
            circle.children[index].style.transition="all 2s ease-in-out"
            if(index<backgrounds.length-1){
                circle.children[index+1].className="selected-circle";
            }
            index++;
            if(index==backgrounds.length){
                index=0;
                circle.children[index].className="selected-circle";
            }
            background.style.transition="all 2s ease-in-out"
            // img.src=require('../assets/images/'+images[1])
        },5000)
    }
}
</script>

<style scoped>
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
.main-search{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.search{
    width: 30rem;
}
.search input{
    background: #C4C4C4;
}
.btn-search{
    border-radius: 0;
}
.line-GameofMonth{
    width:50rem;
    height: 0.1rem;
    background: #B5B1B2;
    margin: 0.5rem 0 1rem 0;
}
.line{
    width: 100%;
    height: 0.1rem;
    background: #B5B1B2;
    margin: 1rem 0 1rem 0;
}
.GameofMonth{
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
}
.GameofMonth ul{
    padding-left: 2rem;
    list-style: none;
}
.Game-background{
    width: 50rem;
    height: 15rem;
    background-size:100%;
    background-repeat: no-repeat;
    /* background-image: url('../assets/images/Valorant_full.jpg'); */
}
.selected-circle{
    color: #C2393A;
}
.Game-detail{
    width: 50rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.Game-detail ul{
    width: 20rem;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.discount{
    text-decoration-line: line-through;
    color: #C4C4C4;
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
    /* justify-content: space-between; */
    padding: 2rem 0 2rem 1rem;

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
    height: 0.1rem;
    background: #D72323;
    margin-bottom: 0.3rem;
}
.Top-categories{
    display: flex;
    list-style: none;
    justify-content: space-between;
    padding: 0.5rem;
}
.Top-categories button{
    width: 18rem;
}
.style-categories{
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #D72323;
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
/* .selectedSearch{
    width: 30rem;
    height: 2.3rem;
    border-radius: 0;
}
.searchData{
    position:fixed;
    display: flex;
    justify-content: center;
    flex-direction: column;
    bottom:2.6rem;
} */
</style>