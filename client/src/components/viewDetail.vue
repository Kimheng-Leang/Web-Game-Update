<template>
<div>
    <Header msg="LOG IN" Hightlight="highlight_Store"/>
    <main>
        <section>
            <router-link  to="/Store" class="link">
                <div class="Back-to-store">
                    <i class="fas fa-arrow-left set-color" style="color:red;"></i> BACK TO STORE
                </div>
            </router-link>
            <div class="Game-detail">
                <div class="Game-img">

                </div>
                <div class="Game">
                    <div>
                        <span class="Title">GAME TITLE</span>
                    </div>
                    <div class="Game-Title">
                        <div>
                            <span>Action, Advanture</span>
                        </div>
                        <ul>
                            <li class="discount">50,000 Riels</li>
                            <li>25,000 Riels</li>
                        </ul>
                    </div>
                    <ul>
                        <li><a href="/Checkout"><button class="btn btn-danger " style="margin-right:1rem">BUY NOW</button></a></li>
                        <li><button class="btn btn-danger">ADD TO WISHLIST</button></li>
                    </ul>
                    <div class="Game-release">
                        <div>
                            <span>Release Date: 12/04/2013</span>
                        </div>
                        <div>
                            <span>expire promotion: 14/05/2021 at 11:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Game-detail">
                <div class="img">

                </div>
                <div class="img">

                </div>
            </div>
        </section>
        <section>
            <div class="line"></div>
            <div>
                <span class="Title">GAME STORY:</span>
            </div>
            <div class="space">

            </div>
        </section>
        <section>
            <div class="line"></div>
            <div>
                <span class="Title">GAME INFORMATION:</span>
            </div>
            <div>
                <span>Developer: Name_Dev</span>
            </div>
            <div>
                <span>Publisher: Name_PUB</span>
            </div>
            <div>
                <span>Average Rate: 4.7/5</span>
            </div>
            <div>
                <span>SUPPORTED OS: <i class="fab fa-apple" style="margin-right:0.2rem"></i> <i class="fab fa-windows"></i></span>
            </div>
        </section>
        <section>
            <div class="line"></div>
            <div>
                <span class="Title">RATING AND REVIEW</span>
            </div>
            <div class="rating-review">
                <div class="rating-user">
                    <div class="user">
                        <div>
                            <i class="far fa-user" style="font-size:1.5rem"></i>
                        </div>
                        <ul>
                            <li>USER 2 NAME</li>
                            <li>Date: 12/04/2013</li>
                        </ul>
                    </div>
                    <ul class="rating">
                        <li><i class="fas fa-star "></i></li>
                        <li><i class="fas fa-star "></i></li>
                        <li><i class="fas fa-star "></i></li>
                        <li><i class="fas fa-star "></i></li>
                        <li><i class="far fa-star "></i></li>
                    </ul>
                </div>
                <div>
                    REVIEW MESSAGE
                </div>
                <div class="line"></div>
                <div class="rating-user">
                    <div class="user">
                        <div>
                            <i class="far fa-user" style="font-size:1.5rem"></i>
                        </div>
                        <ul>
                            <li>USER 1 NAME</li>
                            <li>Date: 12/04/2013</li>
                        </ul>
                    </div>
                    <ul class="rating">
                        <li><i class="fas fa-star "></i></li>
                        <li><i class="fas fa-star "></i></li>
                        <li><i class="fas fa-star "></i></li>
                        <li><i class="fas fa-star "></i></li>
                        <li><i class="far fa-star "></i></li>
                    </ul>
                </div>
                <div>
                    REVIEW MESSAGE
                </div>
                <div class="See-More">
                    <a href="">SEE MORE</a>
                </div>
            </div> 
            <div class="submit-your-experience">
                <button class="btn btn-danger">SUBMIT YOUR EXPERIENCE <i class="far fa-comment"></i></button>
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
.set-color{
    color: red;
}
.link{
    color:white;
    text-decoration: none;
    
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
}
.Game-detail{
    display: flex;
    padding-top: 3rem;
    justify-content: space-between;
}
.Game-img{
    width: 15rem;
    height: 12rem;  
    background: #C4C4C4;
}
.Game{
    width: 100%;
    background: #3A4750;
    padding: 1rem;
}
.Title{
    font-weight: 500;
    font-size: 36px;
    line-height: 22px;
}
.Game-Title{
    display: flex;
    justify-content: space-between;
    padding-bottom: 0.5rem;
}
.Game-Title ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
}
.discount{
    text-decoration-line: line-through;
    color: #EEE3E3;
    padding-right: 1rem;
}
.Game ul{
    display: flex;
    list-style: none;
    justify-content: flex-end;
}
.btn{
    border-radius: 1rem;
}
.Game-release{
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
}
.img{
    width: 29rem;
    height: 18rem;
    background: #C6C0C0;
}
.line{
    width: 100%;
    height: 0.1rem;
    background: #B5B1B2;
    margin: 1rem 0 1rem 0;
}
.space{
    height: 20rem;
}
.rating-review{
    margin-top: 2rem;
    padding: 1rem;
    width: 35rem;
    height: 15rem;
    border: 1px solid #D72323;
}
.rating-user{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.user{
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.user ul{
    list-style: none;
}
.rating{
    width: 40%;
    display: flex;
    list-style: none;
    justify-content: space-between;
}
.See-More{
    display: flex;
    justify-content: flex-end;
}
.See-More a{
    color: #D72323;
    text-decoration: none;
}
.submit-your-experience{
    margin-top: 1rem;
    width: 35rem;
    display: flex;
    justify-content: flex-end;
}

</style>