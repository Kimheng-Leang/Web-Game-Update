<template>
    <footer>
        <div class="policy">
            <ul class="policy-detail">
                <ul class="list-policy">
                    <li>PRIVACY POLICY</li>
                    <li>REFUND</li>
                    <li>TERM & CONDITION</li>
                    <li>HELP</li>
                </ul>
                <li><div class="white-line"></div> </li>
                <li>@2021 ANACHAK GAME ALL RIGHT RESERVED</li>
            </ul>
        </div>
        <div class="channels">
            <img src="../assets/images/FacebookLogo.svg" alt="">
            <img src="../assets/images/DiscordLogo.svg" alt="">
            <img src="../assets/images/InstagramLogo.svg" alt="">
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    width: 100%;
    height: 10rem; 
    background-color: #3A4750;
    margin: 0;
    color: #EEEEEE;
    padding: 2rem;
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