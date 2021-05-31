<template>
    <header>
        <nav>
            <ul >
                <!-- logo -->
                <li><img src="../assets/images/Anachak_logo.svg" alt=""></li>
                <li class="Header-list" ><router-link  to="/" class="link"  data-Header="Home" :class="selectedHome">Home</router-link></li>
                <li class="Header-list" ><router-link  to="/AboutUS" class="link"  data-Header="AboutUs" :class="selectedAboutUs">About us</router-link></li>
                <li class="Header-list" ><router-link  to="/Store" class="link"  data-Header="Store" :class="selectedStore">Store</router-link></li>
                <li class="Header-list" ><router-link  to="/NewsPage" class="link"  data-Header="News" :class="selectedNews">News</router-link></li>
                <li class="Header-list" ><router-link  to="/Faq" class="link"  data-Header="Faq" :class="selectedFaq">FAQ</router-link></li>
                <div :class="Hightlight" class="position">

                </div>
            </ul>
            <div class="Log-in">
                <router-link  to="/userpage"><i class="far fa-user" :class="selectedUser"></i></router-link>
                <a href="http://localhost:8080/login" @click="clickHeader('LogIn')">{{msg}}</a>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name:"Header",

    data(){
        return{
            String:``
        }
    },
    props:{
        msg:String,
        selectedHome:String,
        selectedStore:String,
        selectedAboutUs:String,
        selectedNews:String,
        selectedFaq:String,
        selectedUser:String,
        Hightlight:String,
    },
    emits:['selectedHeader'],
    methods:{
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
header{
    position: sticky;
    top: 0;
    background:linear-gradient(0deg, #3A4750, #3A4750);
    font-family: 'Ubuntu',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #FFFFFF;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
    z-index: 20;
}
nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    min-height: 6rem;
    margin: auto;
}
nav ul{
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
}
.Header-list{
    border-bottom: 0.2rem solid white;
    width: 6.8rem;
    text-align: center;
    cursor: pointer;
}
.link{
    text-decoration: none;
    color: #FFFFFF;
}
.Log-in a{
    color: #FFFFFF;
    text-decoration: none;
}
nav div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 6.5%;
}
.line{
    position: absolute;
    top: 4rem;
    left: 8rem;
    height: 0.3rem;
    width: 34rem;
    background-color: white;
}
img{
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-sizing: border-box; 
}
.position{
    position: absolute;
}
.highlight_Home{
    height: 0.2rem;
    width: 6.7rem;
    top: 3.65rem;
    left: 6rem;
    background-color:#D72323;
    transition: all 0.5s ease-in;
}
.highlight_AboutUs{
    height: 0.2rem;
    width: 6.7rem;
    top: 3.65rem;
    left: 12.8rem;
    background-color:#D72323;
    transition: all 0.5s ease-in;
}
.highlight_Store{
    height: 0.2rem;
    width: 6.7rem;
    top: 3.65rem;
    left: 19.6rem;
    background-color:#D72323;
    transition: all 0.5s ease-in;
}
.highlight_News{
    height: 0.2rem;
    width: 6.7rem;
    top: 3.65rem;
    left: 26.4rem;
    background-color:#D72323;
    transition: all 0.5s ease-in;
}
.highlight_Faq{
    height: 0.2rem;
    width: 6.7rem;
    top: 3.65rem;
    left: 33.2rem;
    background-color:#D72323;
    transition: all 0.5s ease-in;
}
.selected-header{
    color: #D72323;
}

</style>

