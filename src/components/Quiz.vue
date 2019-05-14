<template>
  <v-touch v-on:swipe="onSwipeRight">
  <div class="hello">

    <div class='box'>
      <div class='wave -one'></div>
      <div class='wave -two'></div>
      <div class='wave -three'></div>
    </div>
    <!-- なんならこれ以下を全部コンポーネント化したほうがいい？ -->
    <progress-bar class="progress-bar" type="line" ref="line" :options="options"></progress-bar>
    <!-- <div class="Q-progress">
    </div> -->
    <div class="Q-box">  
      <div class="Q-text">
        <!-- 出題文をコンポーネント化して突っ込む -->
        <p>フランク人を統一し、496年アタナシウス派に改革したフランクの王は誰か。</p>
      </div>
      <div class="Ans-result">
        <p>正解数 : {{ count }}/10 正答率 : {{ count / 10 * 100}}%</p>
      </div>
    </div>
    <!-- 回答リストをコンポーネント化して突っ込む -->
    <ul>
      <li @click="ansClick" v-for = "(ansOp, index) in ansOptions" :key='index'>
        <span>{{index+1}}.</span><p>{{ansOp}}</p>
      </li>

    </ul>

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
      options: {
        color: '#35a0ce',
        strokeWidth: 2.0,
        trailWidth: 2.0,
         duration: 400, // def 800
         autoFinish : true,
      },
      ansOptions : [
        'カーテル = マルテル',
        'テオドリック',
        'ピピン',
        'クローヴィス'
      ],
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
  mounted: function () {
      this.$refs.line.animate(0);
  },
  methods: {
    onSwipeRight : function(){
      this.count += 1;
      this.$refs.line.animate(this.count *0.1)
      console.log('テスト');
    },
    ansClick : ()=>{
      this.count += 1;
      console.log('これはボタン',this.count);
    }
    
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
.progress-bar{  
  width: 310px;
  margin: auto;
  margin-bottom: 5px;
  opacity: .4;
}
/* .Q-progress{
  width: 310px;
  height: 12px;
  border-radius: 6px;
  border : solid 1px rgb(202, 202, 202);
  margin: auto;
  margin-bottom: 5px;
} */
.Q-box{
  width: 320px;
  height: 250px;
  border-radius: 10px;
  position: relative;
}
.Q-text{
  padding-top: 8px;
  width: 300px;
  margin: auto;
  font-size: 22px;
  text-align: left;
  
}
.Ans-result{
  position: absolute; 
  z-index: 2;
  bottom: 5px;
  left: 100px;
  /* padding-right: 10px; */
}
.Ans-result>p{
  display: inline-block;
  margin: 0;
  /* text-align: right; */
}


.Q-box, ul>li{
  width: 320px;
  background-color: rgba(255, 255, 255, 0.2);
  margin-left: auto;
  margin-right: auto;

  /* opacity: 0.2; */
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  height: 56px;
  text-align: left;
  margin: 0 28px 15px;
  border-radius: 28px;  
}
li>span, li>p{
  display: inline-block;
  font-size: 22px;
  margin: 0;
  padding-top: 12px;
  padding-bottom: 12px;
}
li>span{
  padding-left: 24px;
  color: #8B8B8B;
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
