<template>
    <div>
        <Header msg="LOG IN"/>
        <main>
            <section>
                <div class="Top-free-game">
                    <div>
                        <span>TOP FREE GAME</span>
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
        </main>
        <Footer/>
    </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
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
</style>>
