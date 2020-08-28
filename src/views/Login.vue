<template>
  <div class="login">
    <hm-header>登录</hm-header>
    <!-- logo -->
    <hm-logo></hm-logo>
    <!-- 表单 -->
<van-form @submit="login">
  <van-field
    v-model="user.username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="rules.username"
  />
  <van-field
    v-model="user.password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="rules.password"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      登录
    </van-button>
    <p class="psic">没有账号?去<router-link to="/register">注册</router-link></p>
  </div>
</van-form>
  </div>

</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onChange' },
          { pattern: /\d{5,11}/, message: '用户名必须是5~11位数字!!!', trigger: 'onChange' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
          { pattern: /\d{3,9}/, message: '密码必须是3~9位数字!!!', trigger: 'onChange' }
        ]
      }
    }
  },
  methods: {
    async login () {
      // console.log('登录成功!!!')
      const res = await this.$axios.post('/login', this.user)
      // console.log(res.data)
      const { statusCode, message } = res.data
      if (statusCode === 200) {
        this.$router.push('/user')
        this.$toast(message)
      } else {
        this.$toast(message)
      }
    }
  }
}
</script>

<style lang="less">
.psic{
  padding: 30px;
  text-align: right;
  a{
    color: orangered;
  }
}
</style>
