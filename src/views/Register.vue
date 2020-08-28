<template>
  <div class="register">
   <hm-header>注册</hm-header>
   <!-- logo -->
   <hm-logo></hm-logo>
   <!-- 表单 -->
  <van-form @submit="register">
  <van-field
    v-model="user.username"
    name="用户名"
    label="用户名"
    placeholder="用户名"
    :rules="rules.username"
  />
    <van-field
    v-model="user.nickname"
    name="昵称"
    label="昵称"
    placeholder="昵称"
    :rules="rules.nickname"
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
      提交
    </van-button>
  </div>
</van-form>
  <p class="psic">已经有账号?去<router-link to="/login">登录</router-link></p>
  </div>

</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        nickname: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onChange' },
          { pattern: /\d{5,11}/, message: '用户名必须是5~11位数字!!!', trigger: 'onChange' }
        ],
        nickname: [
          { required: true, message: '请填写用户昵称', trigger: 'onChange' },
          { pattern: /^[\u4e00-\u9fa5]{2,6}$/, message: '昵称必须是2-6位的中文字符', trigger: 'onChange' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'onChange' },
          { pattern: /\d{3,9}/, message: '密码必须是3~9位数字!!!', trigger: 'onChange' }
        ]
      }
    }
  },
  methods: {
    async  register () {
      // console.log('注册成功!!!')
      const res = await this.$axios.post('/register', this.user)
      // console.log(res.data)
      const { message, statusCode } = res.data
      if (statusCode === 200) {
        this.$toast(message)
        this.$router.push('/login')
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
