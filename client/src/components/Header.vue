<template>
    <header>
        <nav class="container">
            <ul  class="col-11">
                <!-- logo -->
                <li class="row"><img src="../assets/images/Anachak_logo.svg" alt=""></li>
                <router-link  to="/" class="link row"  data-Header="Home"><li class="Header-list" :class="selectedHome">Home</li></router-link>
                <router-link  to="/AboutUS" class="link row"  data-Header="AboutUs" ><li class="Header-list" :class="selectedAboutUs">About us</li></router-link>
                <router-link  to="/Store" class="link row"  data-Header="Store" ><li class="Header-list" :class="selectedStore">Store</li></router-link>
                <router-link  to="/NewsPage" class="link row"  data-Header="News" ><li class="Header-list" :class="selectedNews">News</li></router-link>
                <router-link  to="/Faq" class="link row"  data-Header="Faq"><li class="Header-list" :class="selectedFaq">FAQ</li></router-link>
                <!-- <div :class="Hightlight" class="position">

                </div> -->
            </ul>
            <div class="Log-in col-1">
                <router-link  to="/userpage"><i class="far fa-user" :class="selectedUser"></i></router-link>
                <router-link v-if="user !== null" to="/userpage" class="row" >{{user.displayName}}</router-link>
                <router-link v-else to="/login" class="row">{{msg}}</router-link>
            </div>
        </nav>
    </header>
</template>

<script>

import getUser from '../composables/getUser'
export default {
    name:"Header",

    data(){
        return{
            String:``,
            user: null
        }
    },
    props:{
        msg:String,
        selectedList:String,
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
    },
    setup() {
        const {user} = getUser();
        
        return {
            user
        }
    },
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
    border-bottom: 0.2rem solid #D72323;
    color: #D72323;
}


</style>

