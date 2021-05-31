<template>
<div>
    <Header msg="LOG IN" Hightlight="highlight_Home" selectedHome="selected-header"/>
    <main >
        <section >
            <span>TRENDING NOW</span>
            <div class="mainboard" >
                <div class="main-billboard" :style="{'background-image': `url(${require('../assets/images/Valorant_full.jpg')})`}" data-original="Valorant_full.jpg" >
                    <div class="sub-title">
                        <h3>TITLE</h3>
                        <div>
                            <p>decription decription decription </p>
                            <p>decription decription decription </p>
                        </div>
                        <div>
                            <button class="btn btn-light button">EXPLORE MORE <i class="fas fa-chevron-right"></i></button>
                        </div>
                    </div>
                </div>
                <div class="sub-billboard">
                    <div class="sub-billboards selected" @mouseleave="mouseLeave('first-image')" @mouseover="mouseOver('first-image')" @click="clickSubbillBoard('first-image')" data-page="first-image" >
                        <div class="sub-img" :style="{'background-image': `url(${require('../assets/images/Valorant.jpg')})`}">
                            
                        </div>
                        <div>
                            <p>For Honor</p>
                        </div>
                    </div>
                    <div class="sub-billboards" @mouseleave="mouseLeave('second-image')" @mouseover="mouseOver('second-image')" @click="clickSubbillBoard('second-image')" data-page="second-image" >
                        <div class="sub-img" :style="{'background-image': `url(${require('../assets/images/Call_of_Duty.jpg')})`}">

                        </div>
                        <div >
                            <p>Call of Duty</p>
                        </div>
                    </div>
                    <div class="sub-billboards" @mouseleave="mouseLeave('third-image')" @mouseover="mouseOver('third-image')" @click="clickSubbillBoard('third-image')" data-page="third-image" >
                        <div class="sub-img" :style="{'background-image': `url(${require('../assets/images/God_of_War.jpg')})`}">

                        </div>
                        <div >
                            <p>God of War</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        <section>
            <div class="dropdown">
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
                    <li><a class="dropdown-item" href="#">TOP FREE GAME</a></li>
                    <li><a class="dropdown-item" href="#">TOP PAID GAME</a></li>
                    <li><a class="dropdown-item" href="#">NEWEST GAME</a></li>
                </ul>
            </div>
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
                    <a href="http://localhost:8080/gameDetail">
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
                    <a href="http://localhost:8080/gameDetail">
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
                    <a href="http://localhost:8080/gameDetail">
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
        <div class="cross-line">

        </div>
        <section>
            <div class="News">
                <div>
                    <span>NEWS</span>
                </div>
                <div>
                    <a href="http://localhost:8080/Newspage">SEE ALL</a>
                </div>
            </div>
            <div class="game">
                <div>
                    <a href="/NewsDetail">
                        <div class="News-img" :style="{'background-image': `url(${require('../assets/images/News_Stream.jpg')})`}" data-page="first-news" @mouseover="mouseOver('first-news')" @mouseleave="mouseLeave('first-news')" >

                        </div>
                    </a>
                    <div >
                            <ul class="game-detail">
                                <ul class="News-detail">
                                    <li><h6>NEWS</h6></li>
                                    <li><p>DATE: 31-02-2021</p></li>
                                </ul>
                                <li>GET TO KNOW OUR STREAMERS</li>
                            </ul>
                    </div>
                </div>
                <div>
                        <div class="News-img" :style="{'background-image': `url(${require('../assets/images/capsule.jpg')})`}" data-page="second-news" @mouseover="mouseOver('second-news')" @mouseleave="mouseLeave('second-news')">

                        </div>
                        <div>
                            <ul class="game-detail">
                                <ul class="News-detail">
                                    <li><h6>NEWS</h6></li>
                                    <li><p>DATE: 31-02-2021</p></li>
                                </ul>
                                <li>GET TO KNOW OUR STREAMERS</li>
                            </ul>
                        </div>
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
export default {
    name:"Homepage",
    components:{
        Header,
        Footer
    },
    methods:{
        clickSubbillBoard:function(text){
            const sub_billBoards=document.querySelectorAll('.sub-billboards');
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
.mainboard{
    display: flex;
    padding: 2rem 0 2rem 0;
}
.main-billboard{
    width: 45rem;
    height: 24rem;
    font-weight: normal;
    background: #C6C0C0;
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
</style>