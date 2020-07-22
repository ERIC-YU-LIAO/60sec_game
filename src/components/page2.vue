<template>
    <div>
        <div class="container" v-if='this.time != 0'>
            <div class="flex">
                <div class="row">
                    <div class="top col-6">
                    <div class="title">60 SECONDS CHALLENGE</div>
                    <span class="score1">score</span>
                    <span class="score2">{{score}}</span> 
                    <!-- 父元件取得實體 -->
                </div>
                <em class="time col-6">00:{{time}}</em>
                </div>
            </div>
            <br>
            <hr>
            <div class="flex">
                <span class="num1">{{num1}}</span>
                <span class="operator">{{operator}}</span>
                <span class="num2">{{num2}}</span>
                <span class="operator">=</span>
                <input v-model="equal" class="equal" type="text" @keydown.enter="calc()">
            </div>
            <em class="perss">press enter to answer</em>
        </div>

        <!-- final -->
        <!-- :score 取的子元件屬性 = 'score' 取得子元件值 -->
        <!-- @again 子組件的事件被觸發會連動父事件 = 'again' 定義父組件的事件 -->
        <final v-if='time == 0' :score='score' @again='again' ></final>
    </div>
</template>
<script>
import final from './Final'


export default {
    components:{
      final,
    },
  data () {
    return {
      score: "000",
      num1: 11,
      num2: 22,
      equal: "",
      operator: '+',
      time: "59"
    }
  },
  methods: {
    calc() {
            if (this.time == '00' )return 
            let operator = this.operator.replace(/\×/g, "*").replace(/\÷/g, "/") // 定義取代符號
            let ans = eval(`${this.num1}${operator}${this.num2}`)  // eval 算式
            
            if( this.time > 40){ // 如果小於 40 sec 
                this.equal == ans? this.score++ : this.score-- // input 值會等於 算式結果 ? 如果對 +1 : 錯 -1
                this.num1 = parseInt(Math.random()*9)  //parseInt 轉化為數字 //Math.random()*9  0~9 random數字  會回傳0~9之間的隨機數字
                this.num2 = parseInt(Math.random()*9)  
            }else if (this.time > 20){// 如果小於 20 sec 
                this.equal == ans? this.score++ : this.score--
                this.num1 =parseInt(Math.random()*90) //轉換 雙位數
                this.num2 =parseInt(Math.random()*90)
            }else{
                
                this.equal == ans? this.score++ : this.score--
                this.num1 =parseInt(Math.random()*900) //轉換 三位數
                this.num2 =parseInt(Math.random()*900)
            }

            this.equal = ""  //結束後轉會為 '' 空字串
            this.score = this.score.toString().padStart(3,' 0')
            this.score = this.score == '0-1'? '000': this.score

            this.operator = ['+','-','×','÷'].sort(()=>{  
                        return Math.random() > .5? -1:1   // 四捨五入
            })[1] // 算數陣列取一個
        },
        again(){
        this.$emit('again')
        }
    },
    mounted() {
        this.time = 59 // Defult 
        this.num1= parseInt(Math.random()*10) //函式能將輸入的字串轉成整數 1~10 random
        this.num2= parseInt(Math.random()*10)
        document.querySelector('.equal').focus()
        let t = 59
        let time = setInterval(() => {
            t--
            if( t<10)
            {
                t ="0"+ t  // 個位數前面要加個0 
            };
            if (t==0){
                clearInterval(time) //停止执行
            }
            this.time = t 
        }, 1000)
    }
}
</script>
<style scoped>
*{
    /* border: 1px solid red; */
}
.row {
    margin-top:  100px;
}
.title {
    font-size: 1.2rem;
    border:3px solid white;
    color: white;
    margin-top: 20px;
    line-height: 40px;
    padding: 0px 20px;
}
.score1{
    background-color:#FFFFFF;
    color: #FF9D00;
    opacity: 1;
    font-size: 80px;
    /* margin-right:40px ; */
}
.score2{
    margin: 2px;
    font-size: 80px;
}
.time{
    margin-top: 50px;
    font-size: 10rem;
    color: white;
    text-shadow: 1px 1px 3px black;
}

.flex{
    display: flex;
    justify-content: space-around;
    line-height: 120px;
}
.num1{
    font-size: 160px;
}
.operator{
    text-align: center;
    font-size: 10rem;
    text-shadow: 2px 1px 1px black;
    color: white;
}
.num2{
    font-size: 160px;
}

.perss{
    color: white;
    display: block;
    text-align: right;
    padding-right: 80px;
}

.equal{
    font-weight: 700;
    width: 400px;
    font-size: 5rem;
    text-align: center;
}

</style>
