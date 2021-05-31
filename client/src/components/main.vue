<template>
    <div>
        <Header msg="LOG IN" selectedHome="selected-header" Hightlight="highlight_line" @selectedHeader="clickHeader" />
        <Homepage v-if="selectedHome"/>
        <Store v-if="selectedStore" />
        <NewsPage v-if="selectedNews"/>
        <Footer/>
    </div>
</template>
<script>

import Header from './Header'
import Footer from './Footer'
import Store from './Store'
import Homepage from './Homepage'
import BackToStore from './BackToStore'
import NewsPage from './NewsPage'

export default {
    name:"main",
    data(){
        return{
            selectedHome:true,
            selectedAboutUs:false,
            selectedStore:false,
            selectedNews:false,
            selectedFaq:false,
        }
    },
    components:{
        Header,
        Homepage,
        Footer,
        Store,
        BackToStore,
        NewsPage
    },
    methods:{
        clickHeader(result){
            if(result=="Home"){
                this.selectedHome=true,
                this.selectedAboutUs=false,
                this.selectedStore=false,
                this.selectedNews=false,
                this.selectedFaq=false
            }
            else if(result=="AboutUs"){
                this.selectedHome=false,
                this.selectedAboutUs=true,
                this.selectedStore=false,
                this.selectedNews=false,
                this.selectedFaq=false
            }
            else if(result=="Store"){
                this.selectedHome=false,
                this.selectedAboutUs=false,
                this.selectedStore=true,
                this.selectedNews=false,
                this.selectedFaq=false
            }
            else if(result=="News"){
                this.selectedHome=false,
                this.selectedAboutUs=false,
                this.selectedStore=false,
                this.selectedNews=true,
                this.selectedFaq=false
            }
            else{
                this.selectedHome=false,
                this.selectedAboutUs=false,
                this.selectedStore=false,
                this.selectedNews=false,
                this.selectedFaq=true
            }
        }
    }
}
</script>