<template>
  <div>
    <div class="mt-5">
      <form class="form-signin" @submit.prevent="signin">
        <h1 class="h3 mb-3 font-weight-normal text-center">後台登入</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control"
          placeholder="Email address"
          required autofocus
          v-model="user.username">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control"
          placeholder="Password" required
          v-model="user.password">
        <button  class="btn btn-lg btn-main btn-block" type="submit">
          <span v-if="!message">Sign in</span>
          <span v-else>{{message}}</span>
        </button>
        <p class="mt-2 mb-1 text-muted">&copy; 2019</p>
        <router-link class="text-main" to="/">
          <i class="fas fa-arrow-left"></i>
            回到首頁
        </router-link>
    </form>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      message: '',
    };
  },
  methods: {
    signin() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/admin/signin`;
      vm.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          const { token } = response.data;
          const { expired } = response.data;
          document.cookie = `tishencoffeecookie=${token}; expires=${new Date(expired)};`;
          vm.$router.push('/dashboard/products_manage');
        } else {
          vm.user.username = '';
          vm.user.password = '';
          vm.message = response.data.message;
          vm.textSwitch();
        }
      });
    },
    textSwitch() {
      const vm = this;
      setTimeout(() => {
        vm.message = '';
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
