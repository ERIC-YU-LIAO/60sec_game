<template>
    <div>
        <div class="container">
   <div class="title">60 SECONDS CHALLENGE</div>
        <h4>-YOUR FINAL SCORE-</h4>
        <div class="score">{{score}}</div>
        <button type="button" class="btn btn-lg" @click="again">Try Again</button>
        </div>
    </div>
</template>

<script>
export default {
    props:['score'], //父傳入到子的元件屬性
    methods: {
        // 子組件事件去觸發父組件
        again(){
            this.$emit('again')
        }
    },
}
</script>


<style scoped>
*{
    /* border: 1px solid red; */
}
.container{
    padding-top: 10%;
    text-align: center;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
}
.title{
    border: 3px solid white;
    padding: 20px;
    color: white;
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
}
h4{
    font-weight: 900;
    font-size: 4rem;
    color:black;
    margin-top: 20px;
}
.score{
    font-weight: 800;
    font-size: 8rem;
    color: #f5f5f5;
    text-shadow: 1px 1px 3px teal;
    margin: 7px;
}
.btn{
    font-size: 2rem;
    width: 350px;
    height: 100px;
    background-color:black;
    color: #FF9D00;
    font-weight: 900;
}
.btn:hover{
    color:white;
}



</style>