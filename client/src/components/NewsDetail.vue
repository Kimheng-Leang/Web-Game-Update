<template>
<div>
    <Header msg="LOG IN" selectedNews="selected-header" />
    <!-- all link to checkout page at user icon -->
    <!-- red bar must be at news -->
    <main>
        <section class="container">
        <!-- Title of Game News Details -->
        <!-- I want to add mapping for users -->
        <div class="Back-to-store">
                    <router-link  to="/NewsPage" class="link">
                    <i class="fas fa-arrow-left set-color" style="color:red;"></i> BACK TO NEWS
                    </router-link>
        </div>
        <div class="card row">
            <div class="card-body">
            <!-- add from database -->
            <h2 class="card-title">
                {{getOneNews.title}}
            </h2>
            <img
                :src="getOneNews.img"
                class="card-img-top"
            />
            <p class="card-text" style="margin-top: 1rem">
                {{getOneNews.description}}
            </p>
            </div>
        </div>
    </section>
    </main>
    <Footer />
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios"
export default {
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            getOneNews:{
                id:'',
                title:'',
                description:'',
                img:''
            },
        };
    },
    async mounted(){
        console.log(this.$router.currentRoute);
        const response = await axios.get('http://localhost:2000/admin/getNews/'+this.$router.currentRoute._value.params.id);
        console.log(response.data);
        this.getOneNews.title=response.data.Title
        this.getOneNews.id = response.data._id
        this.getOneNews.description = response.data.Description
        this.getOneNews.img = require('../../../server/public/'+response.data.Files[0])

    }
};
</script>

<style scoped>
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
main {
color: white;
font-family: Ubuntu;
font-style: normal;
font-weight: bold;
font-size: 16px;
background-color: #303841;
}
main section {
display: block;
align-items: center;
padding: 2rem 10rem 2rem 10rem;
}
.card {
background: none;
margin-top: 1rem;
}
.card-title {
font-weight: bold;
}
.card-body p.card-text {
margin-bottom: 1rem;
}
.Add_video {
display: flex;
align-items: center;
justify-content: center;
width: 70%;
height: 20rem;
background-color: gray;
margin-left: auto;
margin-right: auto;
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
.link{
    color:white;
    text-decoration: none;
    
}
</style>