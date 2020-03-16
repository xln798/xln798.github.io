<template>
  <div class="service">
    <header class="service-person">
      <div class="service-person-avatar" @click="show = !show"></div>
      <ul class="service-person-opt" v-show="show">
        <li>个人主页</li>
        <li>退出登录</li>
      </ul>
    </header>
    <section class="service-fate">
      <h4>查询今日运势</h4>
      <div class="service-fate-form">
        <input />
        <button></button>
      </div>
      <div class="service-fate-display" v-html="fate"></div>
    </section>
    <section class="service-wish">
      <h4>实现你的愿望</h4>
      <div class="service-wish-form">
        <textarea></textarea>
        <button>提交</button>
      </div>
      <ul class="service-wish-display">
        <li v-for="(item,index) in wish" :key="index">{{item}}</li>
      </ul>
    </section>
    <button class="service-pay">开通会员</button>
  </div>
</template>
<style lang="less" scoped>

.service {
  height: 100%;
  background: #ea8f8f;
  color: #fff;
  overflow: hidden;
  h4 {
    font-size: 0.5rem;
    font-weight: 100;
    margin-top: 1rem;
  }
  &-fate {
    button {
      background: url("../assets/search.png") no-repeat;
      background-size: 0.48rem 0.48rem;
      width: 0.5rem;
      height: 0.5rem;
    }
    input {
      border-bottom: 1px solid #666666;
      color: #666666;
      text-align: center;
    }
    &-display {
      padding: 10px;
      color: red;
      font-size: 0.5rem;
    }
  }
  &-wish {
    textarea {
      border: 1px solid #666666;
      border-radius: 5px;
      width: 75%;
      margin-top: 0.5rem;
      color: #707070;
      height: 2rem;
      padding: 10px;
    }
    button {
      display: block;
      line-height: 0.5rem;
      width: 2rem;
      border: 1px solid #ffffff;
      border-radius: 5px;
      color: #fff;
      margin: 0 auto;
    }
    &-display {
      font-size: 0.6rem;
      padding: 5px;
    }
  }
  &-person {
    position: fixed;
    top: 0;
    right: 0;
    font-size: 0.4rem;
    &-avatar {
      width: 0.8rem;
      height: 0.8rem;
      background: url("https://11-1301400122.cos.ap-beijing.myqcloud.com/avatar.png?q-sign-algorithm=sha1&q-ak=AKID2sNWpHMPTrNewdRrt5D_ah-orD3PCZKVDa-DNK6WY_RCcJ69mu_QSdTl1S0a4GSF&q-sign-time=1582796246;1582799846&q-key-time=1582796246;1582799846&q-header-list=&q-url-param-list=&q-signature=626da600af9af93e8b639273cba597017f4697ab&x-cos-security-token=yiFae21IrBxjCSHMGWQYuEczKdfL8X226608b2030eaf063d360c56a0a8eb47b0El-szcJk-wJTuGXyMO_6Z-nlf5VgP_qEPG-ODbTBBAjGr_3BHUvMaR2go0vjsl_i1TovZHzqCaZRd7TY-RArfJcTR9z-Ksre6YQlraI5NfA1_1jHP3HVwdxah1B71swQN5NE9OE20sEEE_aAPsKuUj9qqDrc6HF8JogZ8h7Tw9s")
        no-repeat;
      background-size: 100% 100%;
      margin: 0 auto;
      border: 10px solid transparent;
    }
    &-opt {
      background: rgba(0, 0, 0, 0.8);
      opacity: 0.7;
      padding: 10px;
      position: absolute;
      width: 2rem;
      right: 0;
      li {
        padding: 10px;
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      fate: "您今天的运势",
      wish: ["work longly", "can"],
      show: false
    }
  },
  created() {
    this.test()
  },
  methods: {

    test() {
      let xhr = new XMLHttpRequest()
      xhr.open("get", "https://tts.tencentcloudapi.com", true)
      xhr.onload = function() {
        console.log(xhr.response) //或这样取
      }
      xhr.send({
        Action: "TextToVoice",
        Text: "你好",
        SessionId: "session-1234"
      })
    }
  }
}
</script>