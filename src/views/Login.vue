<template>
  <div class="container">
    <h1>登入後台</h1>
    <div class="row justify-content-center">
      <div class="col-3">
        <form id="form" class="form-signin" @submit.prevent="userLogin">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="username"
              required
              autofocus
              v-model="user.username"
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              required
              v-model="user.password"
              @keyup.enter="userLogin"
            />
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    userLogin () {
      const url = `${process.env.VUE_APP_API}/admin/signin`
      this.$http
        .post(url, this.user)
        .then(res => {
          console.log(res)
          if (res.data.success) {
            console.log(res)
            const { token, expired } = res.data
            document.cookie = `hexToken=${token};expires=${new Date(expired)};`
            swal({
              title: res.data.message,
              icon: 'success',
              button: false,
              timer: 1000
            })
            setTimeout(() => {
              this.$router.push('/admin/products')
            }, 1000)
          } else {
            swal({
              title: res.data.message,
              icon: 'error',
              button: false,
              timer: 1000
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
