<template>
    <div>
        <Header msg="LOG IN" Hightlight="highlight_Store"/>
        <main>
            <!-- <div id="Top-Menu">
                <ul id="menu">
                    <li class="logo"><img class="logo" src="" alt="The Logo"></li>
                    <li class="list l1" data-header="HOME">HOME</li>
                    <li class="list l2" data-header="ABOUT">ABOUT US</li>
                    <li class="list l3" data-header="STORE">STORE</li>
                    <li class="list" data-header="NEWS">NEWS</li>
                    <li class="list l5" data-header="FAQ">FAQ</li>
                </ul>
                <div id="user_inform">
                    <i class="far fa-user" style="font-size: 1.5em;"></i>
                    <span>
                        LOG IN
                    </span>
                </div>
            </div> -->
            <section>
                <router-link  to="/Store" class="link">
                    <div class="Back-to-store">
                        <i class="fas fa-arrow-left set-color" style="color:red;"></i> BACK TO STORE
                    </div>
                </router-link>
            <div class="order_user">YOUR ORDER</div>
            <div class="order_inform">
                <div class="information left_side">
                    <div class="pic_title_game">
                        <div class="pic_game">
                            <!-- to insert picture of the game -->
                        </div>
                        <div class="title_game">
                            <div style="font-weight: bold; word-wrap: break-word;">
                                Game Title
                            </div>
                            <div class="icon_os">
                                <i class="fab fa-apple"></i>
                                <i class="fas fa-border-all" style="margin-left:1rem"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="information right_side">
                    <div class="price_game" style="font-weight: lighter;">
                        PRICE: <b>20000 RIELS</b>
                    </div>
                    <div class="total_size_game" style="font-weight: lighter;">
                        TOTAL SIZE:<b> 20 GB</b>
                    </div>
                </div>
            </div>
            <div class="total_price_game">
                TOTAL: 20000 RIELS
            </div>
                <div class="name_id_user">
                    <span>CUSTOMER NAME : USER NAME </span>
                    <span>CUSTOMER ID : 1234 1234 </span>
                    <ul class="buy_button">
                        <li>BUY FOR MYSELF</li>
                        <li style="margin-left: 1.5em;">GIFE FOR FRIENDS</li>
                    </ul>
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
    setup() {
        
    },
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
div.order_user {
    border-bottom : 0.1em solid #C4C4C4;
    padding-bottom: 0.8em;
    margin-bottom : 2em;
    margin-top :2em;
}
div.order_inform {
    display        : flex;
    justify-content: space-between;
}
div.information {
    width : 50%;
    height: 10em;
}
div.pic_title_game {
    display: flex;
}

div.pic_game {
    width           : 40%;
    height          : 10em;
    background-color: aqua;
}

div.title_game {
    margin-left: 3em;
}
div.icon_os {
    font-size : 24px;
    margin-top: 0.2em;
}

div.information.right_side {
    width           : 30%;
}

div.price_game {
    direction: rtl;
    margin-bottom: 0.2em;
}

div.total_size_game {
    direction: rtl;
    margin-top: 0.2em;
}

div.total_price_game {
    border-bottom : 0.1em solid #C4C4C4;
    padding-bottom: 0.7em;
    direction: rtl;
    margin-top: 0.8em;
    font-weight: bold;
}
div.name_id_user {
    display: grid;
}
div.name_id_user > span {
    margin-top: 0.8em;
}
div.name_id_user > ul.buy_button {
    margin-top: 1em;
    list-style: none;
    display: flex;
}
div.name_id_user ul.buy_button > li {
    background-color: red;
    padding: 0.5em;
    border-radius: 20px;
    cursor: pointer;
}


div#button_bar {
    width: 100%;
    height: 13em;
    background-color: #3A4750;
    position: absolute;
    top: 229.1em;
    display: flex;
}

.button_bar {
    /* the clild of id #button_bar */
    height: 100%;
}

.button_inform {
    display: flex;
    height: 5em;
    list-style: none;
    justify-content: space-between;
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 0.6em;
    align-items: flex-end;
}

.button_bar.copyright {
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    padding-top: 2.5%;
}

div.copyright>div.line {
    height: 0.2em;
    background-color: #FFFFFF;
    width: 70%;
    margin-right: auto;
    margin-left: auto;
    border-radius: 50%;
}

.button_bar>span {
    /* div.copyright class is the parent of this span */
    width: 70%;
    margin-right: auto;
    margin-left: 15%;
    font-size: 0.9em;
}

.button_bar.social_media {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 16%;
    padding-right: 6%;
}

.logo_social {
    width: 3em;
    height: 3em;
    background-color: #C6C0C0;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 0.2em solid red;
}
</style>