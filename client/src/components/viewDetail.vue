<template>
<div>
    <Header msg="LOG IN" selectedStore="selected-header"/>
    <main>
        <section>
            <div class="Back-to-store">
                    <router-link  to="/Store" class="link">
                    <i class="fas fa-arrow-left set-color" style="color:red;"></i> BACK TO STORE
                    </router-link>
            </div>
            <div class="Game-detail">
                <div class="Game-img" :style="{'background-image': `url(${image})`}">
                    
                </div>
                <div class="Game">
                    <div class="canRate">
                        <div>
                            <span >{{localStore.Title}}</span>
                        </div>
                        <ul class="rating">
                            <li @click="ratingStar(1)" @mouseover="moveOver(1)" @mouseleave="moveLeave(1)">★</li>
                            <li @click="ratingStar(2)" @mouseover="moveOver(2)" @mouseleave="moveLeave(2)">★</li>
                            <li @click="ratingStar(3)" @mouseover="moveOver(3)" @mouseleave="moveLeave(3)">★</li>
                            <li @click="ratingStar(4)" @mouseover="moveOver(4)" @mouseleave="moveLeave(4)">★</li>
                            <li @click="ratingStar(5)" @mouseover="moveOver(5)" @mouseleave="moveLeave(5)">★</li>
                        </ul>
                    </div>
                    <div class="Game-Title">
                        <div>
                            <span>{{localStore.Type}}</span>
                        </div>

                        <ul v-if="localStore.OriginalPrice>0">
                            <li class="discount">{{localStore.OriginalPrice}} Riels</li>
                            <li>{{localStore.Price}} Riels</li>
                        </ul>
                        <ul v-else>
                            <li>Free</li>
                        </ul>
                    </div>
                    <ul v-if="localStore.OriginalPrice>0">
                        <li><a href="/Checkout"><button class="btn btn-danger " style="margin-right:1rem">BUY NOW</button></a></li>
                        <li><button class="btn btn-danger">ADD TO WISHLIST</button></li>
                    </ul>
                    <ul v-else>
                        <form :action="`http://localhost:2000/download/${formGame.id}`" method="GET">
                        <li><button type="submit" class="btn btn-danger">DOWNLOAD</button></li>
                        </form>
                    </ul>
                    <div class="Game-release">
                        <div>
                            <span>Release Date: {{localStore.postedDate}}</span>
                        </div>
                        <!-- <div>
                            <span>expire promotion: 14/05/2021 at 11:00 PM</span>
                        </div> -->
                    </div>
                </div>
            </div>
            <div class="img" :style="{'background-image': `url(${background})`}">

            </div>
        </section>
        <section>
            <div class="line"></div>
            <div>
                <span class="Title">GAME DESCRIPTION:</span>
            </div>
            <div class="space">
                {{localStore.Description}}
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
                <span>Average Rate: {{formGame.rating}}/5</span>
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
                <div v-for="comment in localStoreComment.slice(0,length)" :key="comment._id">
                    <div class="rating-user">
                        <div class="user">
                            <div>
                                <i class="far fa-user" style="font-size:1.5rem"></i>
                            </div>
                            <ul>
                                <li>{{comment.userName}}</li>
                                <li>Date: {{comment.commentedAt}}</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        {{comment.Comment}}
                    </div>
                    <div class="line"></div>
                </div>
                <div @click="seeMoreComment" v-if="!clearSeeMore" class="See-More">
                    SEE MORE
                </div>
            </div> 
            <div class="submit-your-experience" v-if="!commented">
                
                <button @click="submitComment" class="btn btn-danger">SUBMIT YOUR EXPERIENCE <i class="far fa-comment"></i></button>
            </div>
            <div class="postedComment" v-if="commented">
                <div>
                    <input v-model="formComment.comment" type="text" placeholder=" Write your experience here">
                </div >
                <div v-if="formComment.comment.length==0">
                    <button @click="closeComment" class="btn btn-danger"><i class="fas fa-times"></i></button>
                </div>
                <div v-else>
                    <button @click="postComment" class="btn btn-danger">POST</button>
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
import { useRoute } from 'vue-router'
import axios from 'axios';
import getUser from '../composables/getUser'
export default {
    data(){
        return{
            localStore:[],
            localStoreComment:[],
            length:2,
            clearSeeMore:false,
            getRatingByUserID:{
                id:'',
                userid:'',
                username:'',
                stars:0,
            },
            image:'',
            background:'',
            commented:false,
            formGame:{
                id:'',
                title:"",
                description:"",
                original_price:"",
                discount_price:"",
                type:"",
                support_os:'',
                views:0,
                rating:0,
            },
            formComment:{
                userid:'',
                username:'',
                gameid:'',
                comment:'',
            },
            formRating:{
                userid:'',
                username:'',
                gameid:'',
                stars:0,
            },
            userInfo: {
                userID:'',
                userName:'',
            },
        }
    },
    components:{
        Header,
        Footer
    },
    methods:{
        moveOver:function(index){
            const rating = document.querySelector('.rating');
            // console.log(rating.children[0]);
            for( var i=0;i<index;i++){
                rating.children[i].style.transition="all 1s ease"
                rating.children[i].style.color="#dc3545"
            }
            for(var j=index;j<5;j++){
                rating.children[j].style.transition="all 1s ease"
                rating.children[j].style.color="white"
            }
            
        },
        moveLeave:function(index){
            const rating = document.querySelector('.rating')
            
            if(this.getRatingByUserID.id==''){
                for(var i=0;i<index;i++){
                    rating.children[i].style.color="white";
                    rating.children[i].style.transition="all 1s ease";
                }
                for(var i=0;i<this.getRatingByUserID.stars;i++){
                    rating.children[i].style.color="#dc3545";
                    rating.children[i].style.transition="all 1s ease";
            }
            }
            else{
                for(var i=0;i<this.getRatingByUserID.stars;i++){
                    rating.children[i].style.color="#dc3545";
                    rating.children[i].style.transition="all 1s ease";
                }
                for(var j=this.getRatingByUserID.stars;j<5;j++){
                    rating.children[j].style.color="white"
                    rating.children[j].style.transition="all 1s ease";
                }
                
            }
            
        },
        ratingStar:function(index){
            let rating=0;
            this.formRating.userid=this.userInfo.userID
            this.formRating.username=this.userInfo.userName
            this.formRating.gameid=this.formGame.id
            this.formRating.stars=index
            this.getRatingByUserID.stars=index
            if(this.getRatingByUserID.id==''){
                axios.post('http://localhost:2000/rating/'+this.formGame.id,this.formRating).then(result=>{
                    console.log(result);
                    axios.get(`http://localhost:2000/getRating/${this.formGame.id}`).then(result=>{
                        result.data.forEach(element=>{
                            if(element.userID!=this.formRating.userid){
                                rating+=element.Stars
                            }
                        })
                        this.formGame.rating=((rating+index)/result.data.length).toFixed(2);
                        console.log(this.formGame.rating)
                        
            }).catch(err=>{
                console.log(err);
            })
                }).catch(err=>{
                    console.log(err);
                })
            }
            else{
                // user can change rating
                axios.patch('http://localhost:2000/editedRating/'+this.getRatingByUserID.id,this.formRating).then((result)=>{
                    console.log(result);
                    axios.get(`http://localhost:2000/getRating/${this.formGame.id}`).then(result=>{
                        result.data.forEach(element=>{
                            if(element.userID!=this.formRating.userid){
                                rating+=element.Stars
                            }
                        })
                        this.formGame.rating=((rating+index)/result.data.length).toFixed(2);
                        console.log(this.formGame.rating)
                    }).catch(err=>{
                        console.log(err);
                    })
                });
            }
        },
        closeComment(){
            this.commented=false;
        },
        submitComment(){
            this.commented=true;
        },
        postComment(){
            this.commented=false;
            this.formComment.userid=this.userInfo.userID //userID
            this.formComment.username=this.userInfo.userName //userName
            this.formComment.id=this.formGame.id
                axios.post('http://localhost:2000/comment/'+this.formGame.id,this.formComment).then(result=>{
                    let str=result.data.commentedAt.split("T");
                    result.data.commentedAt=str[0]; 
                    this.localStoreComment.unshift(result.data)
                    this.formComment.comment="";
                }).catch(err=>{
                    console.log(err);
                })
        },
        seeMoreComment(){
            this.length+=2
            if(this.length>=this.localStoreComment.length){
                this.clearSeeMore=true
            }
        }
    },
    async mounted(){
        const route = useRoute();
        const rating = document.querySelector('.rating');
        const urlName = route.name
        const editType=urlName.split("/")
        this.formGame.id=route.params.id;
        //get rating by Game ID
        const getRatingByGameID = await axios.get(`http://localhost:2000/getRating/${this.formGame.id}`);
        setTimeout(()=>{
            const {user} = getUser();
            this.userInfo.userID={user}.user._rawValue.uid
            this.userInfo.userName={user}.user._rawValue.displayName
            console.log(this.userInfo.userID);
            getRatingByGameID.data.forEach(element => {
                if(element.userID==this.userInfo.userID){
                    this.getRatingByUserID.id=element._id;
                    this.getRatingByUserID.username=element.userName;
                    this.getRatingByUserID.userID=element.userID;
                    this.getRatingByUserID.stars=element.Stars;
                }
                this.formGame.rating+=element.Stars
            });
            this.formGame.rating=(this.formGame.rating/getRatingByGameID.data.length).toFixed(2);
            for(var i=0;i<this.getRatingByUserID.stars;i++){
                rating.children[i].style.color="#dc3545"
            }
        },500)
        //get one game
        const response= await axios.get(`http://localhost:2000/admin/getGames/${this.formGame.id}`);
        // when user view game the Views in DB increase 1
        this.formGame.views=response.data.Views+1;
        this.formGame.title=response.data.Title;
        this.formGame.description=response.data.Description;
        this.formGame.original_price=response.data.OriginalPrice;
        this.formGame.discount_price=response.data.DiscountPrice;
        this.formGame.type=response.data.Type;
        this.formGame.support_os=response.data.SupportOS;
        await axios.patch(`http://localhost:2000/admin/editGame/${this.formGame.id}`,this.formGame)
        let str=response.data.postedDate.split("T");
        response.data.postedDate=str[0];
        this.localStore=response.data;
        this.image=require('../../../server/public/'+this.localStore.Files[0])
        this.background=require('../../../server/public/'+this.localStore.Files[1])
        let index=2;
        const img=document.querySelector('.img');
        setInterval(()=>{
            this.background=require('../../../server/public/'+this.localStore.Files[index])
            index++
            if(index==this.localStore.Files.length){
                index=1
            }
            img.style.transition="all 1s ease"
        },5000)
        //get comment by gameID
        const getCommentByGameID = await axios.get(`http://localhost:2000/getComment/${this.formGame.id}`);
        // console.log(getCommentByGameID.data);
        if(getCommentByGameID.data.length<2){
            this.clearSeeMore=true;
        }
        getCommentByGameID.data.reverse().forEach(element=>{
            let str=element.commentedAt.split("T");
            element.commentedAt=str[0];
            this.localStoreComment.push(element)
        })
    },
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
    height: 13rem;  
    background-size:100%;
    background-repeat: no-repeat;
}
.Game{
    width: 100%;
    background: #3A4750;
    padding: 1rem;
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
    height: 30rem;
    margin-top: 3rem;
    background-size:100%;
    background-repeat: no-repeat
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
    height: auto;
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
    color: #D72323;
    text-decoration: none;
    cursor: pointer;
}
.submit-your-experience{
    margin-top: 1rem;
    width: 35rem;
    display: flex;
    justify-content: flex-end;
}
.canRate{
    font-weight: 500;
    font-size: 36px;
    line-height: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.5rem;
}
.canRate ul{
    cursor: pointer;
}
.postedComment{
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    width: 35rem;
    align-items: center;
}
.postedComment input{
    width: 30rem;
    height: 2rem;
    border: 1px solid #D72323;
}

</style>