<template>
  <div>
    <body>
      <div id="login">
        <h3 class="text-center text-white pt-5">Login form</h3>
        <div class="container">
          <div
            id="login-row"
            class="row justify-content-center align-items-center"
          >
            <div id="login-column" class="col-md-6">
              <div id="login-box" class="col-md-12">
                <ValidationObserver
                  ref="observer"
                  tag="form"
                  v-slot="{ validate }"
                >
                  <form
                    id="login-form"
                    class="form"
                    @submit.prevent="validate().then(sendCall)"
                  >
                    <h3 class="text-center text-info">Login</h3>
                    <div class="form-group">
                      <label for="username" class="text-info">Username:</label
                      ><br />
                      <ValidationProvider
                        name="username"
                        ref="username"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <input
                          type="text"
                          name="username"
                          id="username"
                          class="form-control"
                          v-model="username"
                          :class="errors[0] ? 'is-invalid' : ''"
                        />
                        <small
                          class="block text-red-600 text-xs absolute bottom-0 left-0"
                          style="color: #ea5455"
                          >{{ errors[0] }}</small
                        >
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <label for="password" class="text-info">Password:</label
                      ><br />
                      <ValidationProvider
                        name="password"
                        ref="password"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <input
                          type="password"
                          name="password"
                          id="password"
                          v-model="password"
                          class="form-control"
                          :class="errors[0] ? 'is-invalid' : ''"
                        />
                        <small
                          class="block text-red-600 text-xs absolute bottom-0 left-0"
                          style="color: #ea5455"
                          >{{ errors[0] }}</small
                        >
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <input
                        type="submit"
                        name="submit"
                        class="btn btn-info btn-md"
                        value="submit"
                      />
                    </div>
                    <div id="register-link" class="text-right">
                      <router-link to="/registration">
                        <a class="text-info">Register here</a></router-link
                      >
                    </div>
                  </form>
                </ValidationObserver>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  mounted() {},
  computed: {
    ...mapGetters(["login"]),
  },
  methods: {
    sendCall() {
     console.log( this.login);
    //  this.login;
    },
  },
};
</script>

<style>
</style>