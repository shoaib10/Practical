<template>
  <div>
    <body>
      <div id="register">
        <h3 class="text-center text-white pt-5">Edit form</h3>
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
                    class="form"
                    @submit.prevent="validate().then(sendCall)"
                  >
                    <h3 class="text-center text-info">Registration</h3>
                    <div class="form-group">
                      <label for="First" class="text-info">First name:</label
                      ><br />
                      <ValidationProvider
                        name="First"
                        ref="First"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <input
                          type="text"
                          name="First"
                          v-model="firstName"
                          :class="errors[0] ? 'is-invalid' : ''"
                          class="form-control"
                        />
                        <small
                          class="block text-red-600 text-xs absolute bottom-0 left-0"
                          style="color: #ea5455"
                          >{{ errors[0] }}</small
                        >
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <label for="Last" class="text-info">Last name:</label
                      ><br />
                      <ValidationProvider
                        name="Last"
                        ref="Last"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <input
                          type="text"
                          name="Last"
                          v-model="lastName"
                          :class="errors[0] ? 'is-invalid' : ''"
                          class="form-control"
                        />
                        <small
                          class="block text-red-600 text-xs absolute bottom-0 left-0"
                          style="color: #ea5455"
                          >{{ errors[0] }}</small
                        >
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <label for="email" class="text-info">Email:</label><br />
                      <ValidationProvider
                        name="email"
                        ref="email"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <input
                          type="email"
                          name="email"
                          v-model="email"
                          :class="errors[0] ? 'is-invalid' : ''"
                          class="form-control"
                        />
                        <small
                          class="block text-red-600 text-xs absolute bottom-0 left-0"
                          style="color: #ea5455"
                          >{{ errors[0] }}</small
                        >
                      </ValidationProvider>
                    </div>
                    <div class="form-group">
                      <label for="Phone" class="text-info">Phone number:</label
                      ><br />
                      <ValidationProvider
                        name="Phone"
                        ref="Phone"
                        rules="required"
                        v-slot="{ errors }"
                      >
                        <input
                          type="text"
                          name="Phone"
                          v-model="phone"
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
                      <label for="password" class="text-info">Password:</label
                      ><br />
                      <ValidationProvider
                        name="password"
                        vid="password"
                        rules="required|min:5|max:12"
                        v-slot="{ errors }"
                      >
                        <input
                          type="password"
                          name="Password"
                          v-model="Password"
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
                      <label for="password" class="text-info"
                        >Confirm Password</label
                      ><br />
                      <ValidationProvider
                        name="Confirm password"
                        rules="required|confirmed:password|min:5|max:12"
                        v-slot="{ errors }"
                      >
                        <input
                          type="password"
                          name="cpassword"
                          v-model="cpassword"
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
                      <router-link to="/">
                        <a class="text-info">Login!</a></router-link
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
export default {
  components: {},
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      Password: "",
      cpassword: "",
    };
  },
  mounted() {},
  methods: {
    sendCall() {
      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        Password: this.Password,
      };
      this.$store.dispatch("registration", data);
      // this.$router.push("/");
    },
  },
};
</script>

<style>
</style>