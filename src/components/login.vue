<template>
  <div class="login pc">
    <h4>登录</h4>
    <ul class="login-box">
      <li class="login-box-tel">
        <label>手机号:</label>
        <input type="number" />
        <button>发送验证码master</button>
        <span>1</span>
        <span>2</span>
      </li>
      <li>
        <label>验证码:</label>
        <input />
      </li>
      <li>
        <button class="login-confirm">确认</button>
      </li>
    </ul>
    <div class="login-wechat"></div>
  </div>
</template>
<style lang="less" scoped>
.login {
  position: relative;
  height: 100%;
  background: rgba(0, 0, 0);
  opacity: 0.5;
  padding: 0.7rem;
  box-sizing: border-box;
  h4 {
    color: #fff;
    font-size: 0.5rem;
    font-weight: 100;
    margin-top: 1rem;
  }
  &-confirm {
    width: 80%;
    height: 1rem;
    background: pink;
    color: #999999;
    font-size: 0.5rem;
    border-radius: 10px;
    margin-top: 10px;
    line-height: 1rem;
  }
  &-box {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    &-tel{
     
      button{
        position: absolute;
        right:0;
        top:.1rem;
        padding:.1rem;
        background:#fff;
        color:#666666;
        border-radius: 5px;
      }
    }
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1rem;
      label {
        color: #fff;
        font-size: 0.4rem;
        width: 2rem;
      }
      input {
        border: none;
        border-bottom: 1px solid #fff;
        width: 4.5rem;
        background: none;
        outline: none;
        color: #ffffff;
        font-size: 0.4rem;
      }
    }
  }
  &-wechat {
    position: absolute;
    bottom: 0.9rem;
    width: 1rem;
    height: 1rem;
    background: url("../assets/wechat.png") no-repeat;
    background-size: 100% 100%;
  }
}
</style>