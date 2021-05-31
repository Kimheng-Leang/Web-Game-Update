<template>
  <div>
    <Header msg="LOG IN" Hightlight="highlight_Faq" selectedFaq="selected-header"/>
    <main>
      <section>
        <div class="faq_title">
          <span class="title"> FREQUENTLY ASKED QUESTION </span>
          <!-- load date of Update of system -->
          <span class="update_date"> Last Update: 23/03/2021 at 4:00 PM </span>
        </div>
        <div class="block_question">
          <!-- these will be post by admain from datebase -->
          <div class="question" v-for="(question, index) in 6" :key="index">
            <span>Question {{ index + 1 }} </span>
            <p>The description of the answer</p>
          </div>
        </div>
        <div class="submit_quesion">
          <span class="title">
            SUBMIT YOUR QUESTION
          </span>
          <span> YOUR QUESION </span>
          <div class="input_question">
            <!-- this is where are admin get the quesion from users -->
            <input type="text" placeholder="ENTER YOUR QUESTION" />
            <button>SUMBIT</button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
export default {
  name: "FQA",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
main {
  color: white;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  background-color: #303841;
}
main > section {
  display: block;
  align-items: center;
  padding: 2rem 10rem 2rem 10rem;
}
.faq_title {
  display: grid;
}
.faq_title > .title {
  border-bottom: red solid 0.1rem;
  padding-bottom: 1rem;
  font-size: 30px;
}
.faq_title > .update_date {
  font-size: 10px;
  margin-top: 0.5rem;
}
.block_question {
  display: flex;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}
.block_question > .question {
  width: 50%;
  height: 300px; /* defatulf when data is nothing */
  /* background-color: blanchedalmond; */
  margin-bottom: 2rem;
}
.question > span {
  font-size: 23px;
}
.question > p {
  font-size: 14px;
}
.submit_quesion {
  display: grid;
  margin-bottom: 6rem;
}
.submit_quesion > .title {
  font-size: 30px;
  border-bottom: red solid 0.1rem;
  padding-bottom: 0.7rem;
  margin-bottom: 1.5rem;
}
.input_question > ::placeholder {
  color: rgb(117, 116, 116);
  opacity: 0.5;
}
.input_question > input:placeholder-shown {
  font-weight: bold;
}
.input_question > input {
  font-size: 15px;
  width: 26rem;
  height: 2rem;
  border-radius: 11px;
  padding-left: 1rem;
}
.input_question > button {
  color: white;
  background-color: red;
  font-weight: bold;
  padding: 0.2rem 0.7rem 0.2rem 0.7rem ;
  font-size: 12px;
  border: none;
  border-radius: 50px;
  margin-left: 1.5rem;
}
</style>