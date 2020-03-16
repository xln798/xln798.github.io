/* eslint-disable no-undef */
<template>
  <div class="detail">
    <h4>资料卡</h4>
    <ul>
      <li v-for="(item,index) in info" :key="index">
        <label>{{item.label}}</label>
        <input
          class="detail-input"
          v-model="item.value"
          :type="item.type"
          v-if="item.type!=='file'"
        />
        <div v-else class="avatar">
          <input
            class="avatar-file"
            @change="getFile"
            :type="item.type"
            accept="image/png, image/jpeg"
          />

          <img :src="item.value" class="avatar-img" />
        </div>
      </li>
    </ul>
    <input id="search" v-model="target" />
    <div id="container"></div>
    <button class="detail-submit">提交</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: [
        { label: "昵称", value: "", type: "text" },
        { label: "地址", value: "", type: "text" },
        { label: "电话", value: "", type: "number" },
        { label: "头像", value: "../assets/upload.png", type: "file" }
      ],
      target: ""
    }
  },
  mounted() {
   
    this.setMap()
  },
  methods: {
   
    
    
    getFile(e) {
      console.log(e.target.files, 22)
      const blob = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onload = e => {
        console.log(e)
        this.info[3].value = e.target.result
      }
    },
    setMap() {
      // eslint-disable-next-line no-undef
      const map = new AMap.Map("container", {
        zoom: 11, //级别
        center: [116.397428, 39.90923], //中心点坐标
        viewMode: "3D" //使用3D视图
      })
      map.on("click", function(ev) {
        console.log(ev, "ev")
      })
      // eslint-disable-next-line no-undef
      AMap.plugin("AMap.Autocomplete", function() {
        // 实例化Autocomplete
        var autoOptions = {
          //city 限定城市，默认全国
          city: "北京",
          // input 为绑定输入提示功能的input的DOM ID
          input: "search"
        }
        // eslint-disable-next-line no-undef
        var autoComplete = new AMap.Autocomplete(autoOptions)
        autoComplete.search(this.target, function(status, result) {
          // 搜索成功时，result即是对应的匹配数据
          console.log(status, result, 111)
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
#container {
  width: 300px;
  height: 180px;
}
.detail {
  height: 100%;
  background: rgb(245, 142, 245);
  overflow: hidden;
  &-input {
    border-bottom: 1px solid #fff;
    color: #fff;
    height: 0.8rem;
    flex: 3;
  }
  h4 {
    color: #fff;
    font-size: 0.5rem;
    font-weight: 100;
    margin-top: 1rem;
  }
  ul {
    color: #fff;
    padding: 10px;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      label {
        font-size: 0.4rem;
        margin-right: 0.2rem;
        flex: 1;
      }
    }
  }
  &-submit {
    color: #fff;
    font-size: 0.5rem;
    padding: 8px;
    border: 1px solid #fff;
    border-radius: 8px;
    margin-top: 1rem;
  }
  .avatar {
    flex: 3;
    position: relative;
    text-align: left;
    &-img {
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 100%;
    }
    &-file {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
}
</style>