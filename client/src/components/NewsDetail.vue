<template>
<div>
    <Header msg="LOG IN" Hightlight="highlight_News" />
    <!-- all link to checkout page at user icon -->
    <!-- red bar must be at news -->
    <main>
        <section>
        <!-- Title of Game News Details -->
        <!-- I want to add mapping for users -->
        <div class="card">
            <div class="card-body">
            <!-- add from database -->
            <h2 class="card-title">
                Crysis Remastered Trilogy Arrives This Fall
            </h2>
            <img
                src="https://www.gameinformer.com/sites/default/files/styles/full/public/2020/04/16/31cd363a/crysis.jpg"
                class="card-img-top"
            />
            <p class="card-text" style="margin-top: 1rem">
                {{ paragraph1 }}
            </p>
            <p class="card-text">
                {{ paragraph2 }}
            </p>
            <!-- video title for the game -->
            <div class="Add_video">
                <h1>Video Trailer</h1>
            </div>
            <p class="card-text">
                {{ paragraph3 }}
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
export default {
components: {
    Header,
    Footer,
},
data() {
    return {
    paragraph1:
        "Crysis Remastered Trilogy is launching sometime this fall. The package includes last year’s modernized version of Crysis as well as remasters of Crysis 2 and Crysis 3 to run on modern consoles and PC. The bundle is the result of a development partnership between Crytek and Saber Interactive.",
    paragraph2:
        "While Crysis Remastered launched as a standalone title last summer, this is the first time that the second and third games have been shined up for a modern encore. Unfortunately, Crytek hasn’t detailed the specific upgrades those games will receive, but Crysis Remastered boasted improved visuals with a resolution up to 8K as well as HDR and ray tracing. While you wait for Crytek to confirm the technical details, you can get a visual sense of the improvements by watching the teaser trailer below.",
    paragraph3:
        "If you’ve already experienced Crysis Remastered and just want to play the remaining two games, Crytek states that Crysis 2 and Crysis 3 Remastered will eventually be sold as standalone titles (but doesn't specify when that will happen). The downside of this package is that none of the games will include their respective multiplayer modes. Still, if you missed out on the Crysis series back in the day, this package offers the perfect opportunity to give it a shot without having to stare at aging visuals. ",
    };
},
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
</style>