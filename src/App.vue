<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>


export default {
  name: "App"
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0}
body{background:#fff;}
a{color:#172c45;text-decoration:none}
a:hover{color:#e2c7c6;text-decoration:underline}
em{font-style:normal}
li{list-style:none}
img{border:0;vertical-align:middle}
table{border-collapse:collapse;border-spacing:0}
p{word-wrap:break-word}
button{border:none;outline: none;background: none}
.pc{
  max-width:900px;
  margin:auto;
}
html,body,#app{
  height:100%;
}
input,textarea{
        border: none;
        
        background: none;
        outline: none;
       
        font-size: .4rem;
    }
</style>
<script>
export default {
  created(){
    const w = Math.min(window.screen.width,700)
    document.getElementsByTagName('html')[0].style.fontSize=(w/750)*100 +'px'
    
  }
}
</script>
