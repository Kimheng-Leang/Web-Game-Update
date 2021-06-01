<template>
<div>
    <Header msg="LOG IN" Hightlight="highlight_Store" selectedStore="selected-header"/>
    <main>
        <section class="main-search">
            <div class="input-group rounded search">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                    aria-describedby="search-addon" />
                <button class="border-0 btn btn-danger btn-search" id="search-addon">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </section>
        <section>
            <div>
                <span>GAME OF THE MONTH</span>
            </div>
            <div class="line-GameofMonth"></div>
            <div class="GameofMonth">
                <a href="/gameDetail">
                    <div class="Game-background" :style="{'background-image': `url(${backGround})`}">
                        
                    </div>
                </a>
                <ul class="circle">
                    <li class="selected-circle"><i class="fas fa-circle"></i></li>
                    <li><i class="fas fa-circle"></i></li>
                    <li><i class="fas fa-circle"></i></li>
                </ul>
            </div>
            <div class="Game-detail">
                <div>
                    <span>GAME TITLE</span>
                </div>
                <ul>
                    <li>20,000 RIELS</li>
                    <li class="discount">40,000 RIELS</li>
                    <li><a href="/Checkout"><button class="btn btn-danger ">BUY NOW</button></a></li>
                </ul>
            </div>
        </section>
        <!-- <img src="../assets/images/logo.png" alt="" id="image">  //test change images every 30s-->
        <section>
            <div class="Top-free-game">
                <div>
                    <span>TOP FREE GAME</span>
                </div>
                <div>
                    <a href="/gamePage/freeGame" class="color-seeall">SEE ALL</a>
                </div>
            </div>
            <div class="line"></div>
            <div class="game">
                <div>
                    <!-- img -->
                    <a href="/gameDetail">
                        <div class="sub-game" :style="{'background-image': `url(${require('../assets/images/Among_us.jpg')})`}" data-page="first-game" @mouseover="mouseOver('first-game')" @mouseleave="mouseLeave('first-game')" >

                        </div>
                    </a>
                    <ul class="game-detail">
                        <li>GAME TITLE</li>
                        <li><p>Game description Game description</p></li>
                        <li><div class="red-line"></div></li>
                        <li>FREE</li>
                        <li><button class="btn btn-danger">BUY NOW</button></li>
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
                        <div class="sub-game" :style="{'background-image': `url(${require('../assets/images/League_of_Legends.jpg')})`}" data-page="second-game" @mouseover="mouseOver('second-game')" @mouseleave="mouseLeave('second-game')">

                        </div>
                    </a>
                    <ul class="game-detail">
                        <li>GAME TITLE</li>
                        <li><p>Game description Game description</p></li>
                        <li><div class="red-line"></div></li>
                        <li>FREE</li>
                        <!-- <li>40,000 RIELS</li> -->
                        <li><button class="btn btn-danger">BUY NOW</button></li>
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
                        <div class="sub-game" :style="{'background-image': `url(${require('../assets/images/Battlefleld1.jpg')})`}" data-page="third-game" @mouseover="mouseOver('third-game')" @mouseleave="mouseLeave('third-game')">

                        </div>
                    </a>
                    <ul class="game-detail">
                        <li>GAME TITLE</li>
                        <li><p>Game description Game description</p></li>
                        <li><div class="red-line"></div></li>
                        <li>FREE</li>
                        <li><button class="btn btn-danger ">BUY NOW</button></li>
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
                        <div class="sub-game" :style="{'background-image': `url(${require('../assets/images/Red_Dead.jpg')})`}" data-page="forth-game" @mouseover="mouseOver('forth-game')" @mouseleave="mouseLeave('forth-game')" >

                        </div>
                    </a>
                    <ul class="game-detail">
                        <li>GAME TITLE</li>
                        <li><p>Game description Game description</p></li>
                        <li><div class="red-line"></div></li>
                        <li>FREE</li>
                        <li><button class="btn btn-danger">BUY NOW</button></li>
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
        </section>
        <section>
            <div class="Top-free-game">
                <div>
                    <span>TOP PAID GAME</span>
                </div>
                <div>
                    <a href="/gamePage/paidGame" class="color-seeall">SEE ALL</a>
                </div>
            </div>
            <div class="line"></div>
            <div class="game">
                <div>
                    <!-- img -->
                    <a href="/gameDetail">
                        <div class="sub-game" :style="{'background-image': `url(${require('../assets/images/Among_us.jpg')})`}" data-page="first-game" @mouseover="mouseOver('first-game')" @mouseleave="mouseLeave('first-game')" >

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
                        <div class="sub-game" :style="{'background-image': `url(${require('../assets/images/League_of_Legends.jpg')})`}" data-page="second-game" @mouseover="mouseOver('second-game')" @mouseleave="mouseLeave('second-game')">

                        </div>
                    </a>
                    <ul class="game-detail">
                        <li>GAME TITLE</li>
                        <li><p>Game description Game description</p></li>
                        <li><div class="red-line"></div></li>
                        <li>20,000 RIELS</li>
                        <!-- <li>40,000 RIELS</li> -->
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
                        <div class="sub-game" :style="{'background-image': `url(${require('../assets/images/Battlefleld1.jpg')})`}" data-page="third-game" @mouseover="mouseOver('third-game')" @mouseleave="mouseLeave('third-game')">

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
                        <div class="sub-game" :style="{'background-image': `url(${require('../assets/images/Red_Dead.jpg')})`}" data-page="forth-game" @mouseover="mouseOver('forth-game')" @mouseleave="mouseLeave('forth-game')" >

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
        </section>
        <section>
            <div class="Top-free-game">
                <div>
                    <span>TOP NEWEST GAME</span>
                </div>
                <div>
                    <a href="" class="color-seeall">SEE ALL</a>
                </div>
            </div>
            <div class="line"></div>
            <div class="game">
                <div>
                    <!-- img -->
                    <a href="/gameDetail">
                        <div class="sub-game" :style="{'background-image': `url(${require('../assets/images/Among_us.jpg')})`}" data-page="first-game" @mouseover="mouseOver('first-game')" @mouseleave="mouseLeave('first-game')" >

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
                        <div class="sub-game" :style="{'background-image': `url(${require('../assets/images/League_of_Legends.jpg')})`}" data-page="second-game" @mouseover="mouseOver('second-game')" @mouseleave="mouseLeave('second-game')">

                        </div>
                    </a>
                    <ul class="game-detail">
                        <li>GAME TITLE</li>
                        <li><p>Game description Game description</p></li>
                        <li><div class="red-line"></div></li>
                        <li>20,000 RIELS</li>
                        <!-- <li>40,000 RIELS</li> -->
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
                        <div class="sub-game" :style="{'background-image': `url(${require('../assets/images/Battlefleld1.jpg')})`}" data-page="third-game" @mouseover="mouseOver('third-game')" @mouseleave="mouseLeave('third-game')">

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
                        <div class="sub-game" :style="{'background-image': `url(${require('../assets/images/Red_Dead.jpg')})`}" data-page="forth-game" @mouseover="mouseOver('forth-game')" @mouseleave="mouseLeave('forth-game')" >

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
        </section>
        <section>
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
                    <li><button class="btn btn-light style-categories">ACTION</button></li>
                    <li><button class="btn btn-light style-categories">ADVANTURE</button></li>
                    <li><button class="btn btn-light style-categories">FIGHTER</button></li>
                </ul>
                <ul class="Top-categories">
                    <li><button class="btn btn-light style-categories">FAMILY</button></li>
                    <li><button class="btn btn-light style-categories">SPORT</button></li>
                    <li><button class="btn btn-light style-categories">STRATEGY</button></li>
                </ul>
            </div>
        </section>
    </main>
</div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
    name:"Store",
    data(){
        return{
            src:require('../assets/images/logo.png'),
            backGround:require('../assets/images/Valorant_full.jpg'),
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
    },
    mounted(){
        let images=["Valorant2.jpg","Valorant3.jpg","Valorant_full.jpg"]
        const background=document.querySelector('.Game-background')
        const circle=document.querySelector('.circle')
        let index=0;
        setInterval(()=>{
            console.log('Hi');
            this.backGround=require("../assets/images/"+images[index]);
            console.log(index);
            circle.children[index].classList.remove("selected-circle");
            circle.children[index].style.transition="all 2s ease-in-out"
            if(index<2){
                circle.children[index+1].className="selected-circle";
            }
            index++;
            if(index==3){
                index=0;
                circle.children[index].className="selected-circle";
            }
            background.style.transition="all 2s ease-in-out"
            // img.src=require('../assets/images/'+images[1])
        },8000)
    }
}
</script>

<style scoped>
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
.main-search{
    display: flex;
    justify-content: center;
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
</style>