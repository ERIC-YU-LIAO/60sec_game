<template>
  <div id="app">
    <!-- First Page  -->
    <div class="container" v-if='!start'>
      <div class="row tltle d-flex justify-content-center align-items-center" >
        <h1>60</h1>
        <h2>
            <h3 class="col-12" >SECONDS<span>+-*/</span></h3>
            <h3 class="col-12 p-4 text-left">CHALLENGE</h3>
        </h2>
      </div>
      <div class="d-flex justify-content-center align-items-center flex-column bd-highlight mt-4 p-2">
    <div class="btn btn-dark btn-lg start" @click="start= true">start!</div>
    <em class="btntitle">try to answer more as you can</em>

      </div>

    </div>
    <page2 v-if="start" @again='again'></page2>
  
  </div>
</template>

<script>
import page2 from './components/page2'
export default {
  components:{
    page2
   
  },
  data() {
    return {
      start: false,  
    }
  },
  methods: {
     again(){
       this.start = false;
     }
  }
}
</script>
<style scoped>
body html{
  margin:  0;
  padding: 0;
  height: 100%;
}
#app
{
  width: 100vw;
  height:100vh;
  margin:0;
  background-color: #FF9D00;
  color: #000000;
}
.container{
  padding-top: 100px;
  text-align: center
}

*{
  font-weight: 800;
  
}
.title{
  margin: 50%
}
.btn-dark{
  width: 200px;
  display: block;
}
.btntitle{
  display: block;
}
h1{
  font-size: 280px;
  color: white;
  text-shadow: 10px 3px 3px black;
}
h3{
  font-size: 50px;

}
span{
  color:white;
  border-bottom: 2px solid white;
}
em{
  color: white;
}

</style>



