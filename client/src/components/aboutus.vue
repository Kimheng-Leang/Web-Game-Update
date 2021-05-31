<template>
  <div class="about">
    <Header msg="LOG IN" Hightlight="highlight_AboutUs" selectedAboutUs="selected-header"/>
    <main>
      <section>
        <header id="our-story" class="mt-1">
          <div class="container-aboutus">
            <h2 class="title">Our story</h2>
            <div class="testimonial-container">
              <div class="progressBar"></div>
            </div>
            <div class="content">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut consequatur quos mollitia magni eveniet autem, eligendi facilis laborum a fuga quas dolore consectetur voluptatibus saepe minima non! Necessitatibus, ipsam harum!</p>
            </div>
          </div>
        </header>
      </section>
    <section id="our-values" class="mt-1">
      <div class="container-aboutus">
        <h2 class="title">Our values</h2>
        <div class="value-container">
          <div class="value value1">
            <div class="value-logo"><i class="fas fa-chart-line"></i></div>
            <h4 class="mt-2">Consistency</h4>
            <p class="mt-2">We believe that our team will strive to work regularly with passion</p>
          </div>
          <div class="value value2">
            <div class="value-logo"><i class="fas fa-laptop-code"></i></div>
            <h4 class="mt-2">Resilence</h4>
            <p class="mt-2">We keep our work and the products to the perfection for our cutomers</p>
          </div>
          <div class="value value3">
            <div class="value-logo"><i class="fas fa-users"></i></div>
            <h4 class="mt-2">Team work</h4>
            <p class="mt-2">Team work spirit is really important in order to stay unity and build a like-minded community</p>
          </div>
        </div>
      </div>
    </section>
	<section id="our-team" class="mt-1">
		<div class="container-aboutus">
			<h2 class="title">Our Team</h2>
			<div class="team-container">
				<div class="member">
					<div class="member-pic1" :style="{'background-image': `url(${require('../assets/images/Veyseng.jpg')})`}" >
					</div>
					<div class="member-info1">
						<h5>NAME: Choeng Veyseng</h5>
						<p class="mt-2">ROLE: Frontend Developer</p>
					</div>
				</div>
				<div class="member">
					<div class="member-pic1" :style="{'background-image': `url(${require('../assets/images/Kimheng.jpg')})`}">
					</div>
					<div class="member-info1">
						<h5>NAME: LEANG KIMHENG</h5>
						<p class="mt-2">ROLE: Backend Developer</p>
					</div>
				</div>
				<div class="member">
					<div class="member-pic1" :style="{'background-image': `url(${require('../assets/images/Chhornorn.jpg')})`}">
					</div>
					<div class="member-info1">
						<h5>NAME: LEAN CHHORNORN</h5>
						<p class="mt-2">ROLE: Frontend Developer</p>
					</div>
				</div>
				<div class="member">
					<div class="member-pic1" :style="{'background-image': `url(${require('../assets/images/User1.png')})`}">
					</div>
					<div class="member-info1">
						<h5>NAME: ......</h5>
						<p class="mt-2">ROLE: Frontend Developer</p>
					</div>
				</div>
			</div>
		</div>
	</section>
  </main>
  <Footer/>
  </div>
</template>
<script>
import Header from "./Header"
import Footer from "./Footer"
export default {
  components:{
    Header,
    Footer
  },
  mounted(){
    const testimonialsContainer = document.querySelector('.testimonial-container')
    const testimonial = document.querySelector('.testimonial')
    let idx = 1
    function updateTestimonial(){
      idx ++;
      if(idx > testimonials.length - 1){
        idx = 0
      }
    }
    setInterval(updateTestimonial,10000)
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
  body{
    font-family: 'Ubuntu', sans-serifs;
    background: var(--black-color);
    color: white;
  }
  a{
    color: white;
    text-decoration: none;
  }
  ul{
    list-style: none;
  }
  img{
    width: 100%;
  }
  /*Ultilities*/
  .container-aboutus{
    max-width: var(--max-width);
    margin: auto;
    padding: 2rem auto;
    overflow: hidden;
    color: var(--light-color);
  }
  .title{
    text-align: left;
    border-top: 1px solid var(--light-color);
    color: white;
    padding: 1rem 0;
  }
  .mt-1{
    margin-top: 2rem;
  }
  .mt-2{
    margin-top: 1rem;
  }
  /*Navigator*/
  #main-nav-aboutus{
    background-color: var(--dark-color);
    z-index: 2;
    top: 0;
    position: sticky;
  }
  #main-nav-aboutus .container-aboutus{
    display: grid;
    grid-template-columns: auto auto 1fr;
    padding: 1rem;
    align-items: center;
    text-align: center;
  }
  #main-nav-aboutus .logo{
    margin-right: 2rem;
    width: 3rem;
  }
  #main-nav-aboutus ul {
    display: flex;
    justify-self: end;
  }
  #main-nav-aboutus ul li a{
    padding: 0 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--light-color);
    font-weight: bold;
    text-transform: uppercase;
  }
  #main-nav-aboutus .log-in{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  /*Our story*/
  /*Our value*/
  .value-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    grid-gap: 1rem;
    margin: 1rem ;
  }
  .value{
    padding: 1rem;
    background-color: var(--black-color);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: #303841 1px solid;
  }
  .value:hover{
    filter: drop-shadow(0 0 0.5rem var(--primary-color));
    
    border: var(--light-color) 1px solid;
    cursor: pointer;
  }
  .value-logo{
    width: 5rem;
    height: 5rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border:1px solid var(--primary-color);
    background-color: var(--dark-color);
    color: white;
  }
  /*Team*/
  .team-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
  .member{
    display: flex;
    margin-left: 2rem;
    background-color: var(--black-color);
    padding: 1rem;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
  }
  .member:hover{
    background-color: var(--dark-color);
  }
  .member-pic1{
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 1px red solid;
    background: url('../assets/logo.png') center center/cover no-repeat;
  }
  .member-info1{
    margin-left: 2rem;
  }
  #footer-aboutus{
    padding: 2rem;
    margin-top: 4rem;
    background-color: var(--dark-color);
    bottom: 0;
  }
  #footer-aboutus .footer-nav{
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
  }
  .social{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .social-item{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 1px var(--dark-color) solid;
    font-size: 1.5rem;
    color: #303841;
    background-color: #EEE;
    margin: 1rem;
  }
  .social-item:hover{
    color: var(--primary-color);
    border: 1px var(--primary-color) solid;
  }
  .footer-content{
    display: flex;
    flex-direction: column;
  }
  .footer-link{
    display: flex;
  }
  .footer-single-link{
    margin-right: 3rem;
    margin-bottom: 1rem;
  }
  .copy-right{
    border-top: 1px solid var(--light-color);
    padding-top: 1rem;
  }
  @media (max-width:578px) {
    .container-aboutus{
      padding: 1rem;
    }
    .value-container{
      display: flex;
      flex-direction: column;
    }
    .team-container{
      display: flex;
      flex-direction: column;
    }
    .social{
      flex-direction: row;
    }
    .footer-link{
      flex-direction: column;
    }
    #footer-aboutus .footer-nav{
      flex-direction: column;
    }
    .member{
      margin-left: 0;
      flex-direction: column;
    }
    .member-info1{
      margin-left: 0;
      margin-top: 1rem;
    }
  }
  /*Testimonies*/
  .testimonial-container{
    background: url("https://source.unsplash.com/500x500/?game") center center/cover no-repeat;
    background-color: #476ce4;
    color: #fff;
    border-radius: 30px;
    max-width: 768px;
    padding: 50px 80px;
    margin: 20px auto;
    position: relative;
    height: 15rem;
  }
  .progressBar{
    height: 3px;
    background-color: white;
    width: 100%;
    animation: grow 10s linear infinite;
    transform-origin: left;
  }
  @keyframes grow{
    0%{
      transform: scaleX(0);
    }
  }
  @media (max-width:768px) {
    .testimonial-container{
      padding: 20px 30px;
    }
    .fa-quote-left, .fa-quote-right{
      display: none;
    }
  }
</style>