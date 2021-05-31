<template>
    <div>
        <Header msg="LOG IN" Hightlight="highlight_News" selectedNews="selected-header"/>
        <main>
            <section>
                <div id="know_us_more">GET TO KNOW US MORE</div>
            </section>
            <section>
                <div class="row1">
                    <div class="row1col1 columm1">
                        <div class="r1c1 image_background img1"></div>
                        <!--for insert image-->
                        <ul class="inform list1">
                            <li class="news">NEWS</li>
                            <li class="date">DATE: 31-02-2021</li>
                        </ul>
                        <div class="stream_topic">GET TO KNOW OUR STREAMERS</div>
                    </div>
                    <div class="row1col2 columm2">
                        <div class="r1c2 image_background img2"></div>
                        <!--for insert image-->
                        <ul class="inform list2">
                            <li class="news">NEWS</li>
                            <li class="date">DATE: 31-02-2021</li>
                        </ul>
                        <div class="stream_topic">GET TO KNOW OUR STREAMERS</div>
                    </div>
                </div>
            </section>
            <section>
                <div class="row1">
                    <div class="row1col1 columm1">
                        <div class="r1c1 image_background img1"></div>
                        <!--for insert image-->
                        <ul class="inform list1">
                            <li class="news">NEWS</li>
                            <li class="date">DATE: 31-02-2021</li>
                        </ul>
                        <div class="stream_topic">GET TO KNOW OUR STREAMERS</div>
                    </div>
                    <div class="row1col2 columm2">
                        <div class="r1c2 image_background img2"></div>
                        <!--for insert image-->
                        <ul class="inform list2">
                            <li class="news">NEWS</li>
                            <li class="date">DATE: 31-02-2021</li>
                        </ul>
                        <div class="stream_topic">GET TO KNOW OUR STREAMERS</div>
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
    setup() {
        
    },
    components:{
        Header,
        Footer
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
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
li.list {
    width: 10em;
    text-align: center;
    border-bottom: #C6C0C0 0.2em solid;
    padding-bottom: 0.2em;
}

li.list.l4 {
    border-bottom: red 0.2em solid;
    font-weight: bold;
}

#user_inform {
    display: flex;
    margin-right: 1.5em;
    list-style: none;
    width: 5.3em;
    height: 3em;
    justify-content: space-between;
    align-items: center;
}
#know_us_more {
    font-weight: bold;
}

#news_list {
    width: 100%;
    height: 7em;
}

.row1 {
    display: flex;
    justify-content: space-between;
}

div>.image_background {
    width: 23.75em;
    height: 13.625em;
    background-color: #C6C0C0;
}

/* .r1c1.img1 {
    width: 23.75em;
    height: 13.625em;
    background-color: #C6C0C0;
}
.r1c2.img2 {
    width: 23.75em;
    height: 13.625em;
    background-color: #C6C0C0;
} */
ul.inform {
    margin-top: 0.5em;
    list-style: none;
    display: flex;
    text-align: center;
    align-items: center;
}

ul.inform li.news {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 0.2em;
    background-color: red;
    margin-right: 1.313em;
}

ul.inform li.date {
    /* width: 3.75em;
    height: 1.563em; */
    font-size: 0.8em;
}

div.stream_topic {
    width: 100%;
    margin-top: 0.5em;
    font-weight: bold;
}

.row2 {
    display: flex;
    justify-content: space-between;
    margin-left: 7.23em;
    margin-right: 7.23em;
    margin-top: 1.875em;
}
div#button_bar {
    width: 100%;
    height: 13em;
    background-color: #3A4750;
    position: absolute;
    top: 228.1em;
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

.line123 {
    position: absolute;
    height: 0.2em;
    background-color: red;
    top: 4.1em;
    width: 5.5em;
    left: 7.5em;
    transition: all 0.3s ease-in;
}
</style>