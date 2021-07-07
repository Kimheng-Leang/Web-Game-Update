<template>
    <footer>
        <div class="container">
            <div class="policy col-10">
                <ul class="policy-detail col">
                    <ul class="list-policy col">
                        <li class="row">PRIVACY POLICY</li>
                        <li class="row">REFUND</li>
                        <li class="row">TERM & CONDITION</li>
                        <li class="row">HELP</li>
                    </ul>
                    <li class="row"><div class="white-line"></div> </li>
                    <li class="row">@2021 ANACHAK GAME ALL RIGHT RESERVED</li>
                </ul>
            </div>
            <div class="channels col-2">
                <img class="row" src="../assets/images/FacebookLogo.svg" alt="">
                <img class="row" src="../assets/images/DiscordLogo.svg" alt="">
                <img class="row" src="../assets/images/InstagramLogo.svg" alt="">
            </div>  
        </div>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
footer{
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    background-color: #3A4750;
    margin: auto;
    color: #EEEEEE;
}
.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.channels{
    width: 20%;
    display: flex;
    justify-content: space-between;
}
.white-line{
    margin: 1rem 0 1rem 0;
    width: 100%;
    height: 0.2rem;
    background-color: #EEEEEE;
}
.policy{
    width: 50%;
    padding: 2rem;
}
.policy-detail{
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
}
.list-policy{
    display: flex;
    justify-content: space-between;
    list-style: none;
    align-items: center;
}
.channels img{
    border: 0;
    background: 0;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-sizing: border-box; 
}
</style>