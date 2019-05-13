<template>
  <!-- <v-touch v-on: swiperright="onSwipeRight"> -->
  <v-touch v-on:swipe="onSwipeRight">
  <div class="hello">

    <div class='box'>
      <div class='wave -one'></div>
      <div class='wave -two'></div>
      <div class='wave -three'></div>
    </div>
    <div class="Q-box">

    </div>


    <!-- <v-touch v-on:tap="onDoubletap"><h1>{{ msg }}</h1></v-touch>
    <h2>Essential Links{{ count }}</h2>
    <h2>{{ question }}</h2> -->
 
  </div>
  </v-touch>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      count : 0,
      question : "tete",
      Quizs : [
        {Q : 'これはなに？', A : 'りんご', isAns: false},
        {Q : 'ここはどこ？', A : 'ジーズアカデミー', isAns: false},
        {Q : '何やってる？', A : 'プログラミング', isAns: false},
        {Q : 'わたしは誰？', A : 'けいし', isAns: false},
        {Q : '今日は何日？', A : '5月14日', isAns: false},
      ]
    }
  },
  methods: {
    onSwipeRight : function(){
      this.count += 1;
      console.log('テスト');
    },
    onDoubletap : ()=>{
      let count = this.count
      console.log('Tap! Tap!', count);
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

.Q-box{
  width: 320px;
  height: 250px;
  background-color: #fff;
  opacity: 0.2;
  border-radius: 10px;
  margin: auto;
}




ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}

.box {
  /* left: 50%; */
  z-index: -1;
  width: 375px;
  height: 500px;
  /* border-radius: 5px; */
  background: lighten(#f0f4c3, 10%);
  position: fixed;
  top :500px;
  /* overflow: hidden; */
  transform: translate3d(0, 0, 0);
}

.wave {
  opacity: .4;
  position: absolute;
  top: 3%;
  left: 50%;
  background: #0af;
  width: 1700px;
  height: 1700px;
  margin-left: -550px;
  margin-top: -200px;
  transform-origin: 50% 48%;
  border-radius: 43%;
  animation: drift 12000ms infinite linear;
}

.wave.-three {
  animation: drift 20000ms infinite linear;
}

.wave.-two {
  animation: drift 24000ms infinite linear;
  opacity: .1;
  background: rgb(175, 219, 199);
}

.box:after {
  content: '';
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(#e8a, 1), rgba(#def, 0) 80%, rgba(white, .5));
  z-index: -1;
  transform: translate3d(0, 0, 0);
}

@keyframes drift {
  from { transform: rotate(0deg); }
  from { transform: rotate(360deg); }
}

</style>
