<template>
  <div>
    <div id="register">
      <h3 class="text-center text-white pt-5">Edit form</h3>

      <div class="container">
        <div class="form-group">
          <b-button variant="info" @click="$router.push('/')">Back</b-button>
        </div>
        <div
          id="login-row"
          class="row justify-content-center align-items-center"
        >
          <div id="login-box" class="col-md-12">
            <ValidationObserver ref="observer" tag="form" v-slot="{ validate }">
              <form class="form" @submit.prevent="validate().then(sendCall)">
                <div class="form-group">
                  <label for="First" class="text-info">Name:</label><br />
                  <ValidationProvider
                    name="Name"
                    ref="Name"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <input
                      type="text"
                      name="Name"
                      v-model="name"
                      :class="errors[0] ? 'is-invalid' : ''"
                      class="form-control"
                    />
                    <small
                      class="
                        block
                        text-red-600 text-xs
                        absolute
                        bottom-0
                        left-0
                      "
                      style="color: #ea5455"
                      >{{ errors[0] }}</small
                    >
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <label for="Surname" class="text-info">Surname:</label><br />
                  <ValidationProvider
                    name="Surname"
                    ref="Surname"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <input
                      type="text"
                      name="Surname"
                      v-model="surname"
                      :class="errors[0] ? 'is-invalid' : ''"
                      class="form-control"
                    />
                    <small
                      class="
                        block
                        text-red-600 text-xs
                        absolute
                        bottom-0
                        left-0
                      "
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
                      class="
                        block
                        text-red-600 text-xs
                        absolute
                        bottom-0
                        left-0
                      "
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
                      class="
                        block
                        text-red-600 text-xs
                        absolute
                        bottom-0
                        left-0
                      "
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
                      class="
                        block
                        text-red-600 text-xs
                        absolute
                        bottom-0
                        left-0
                      "
                      style="color: #ea5455"
                      >{{ errors[0] }}</small
                    >
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <label for="Username" class="text-info">Username</label><br />
                  <ValidationProvider
                    name="Username"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <input
                      type="text"
                      name="Username"
                      v-model="Username"
                      class="form-control"
                      :class="errors[0] ? 'is-invalid' : ''"
                    />
                    <small
                      class="
                        block
                        text-red-600 text-xs
                        absolute
                        bottom-0
                        left-0
                      "
                      style="color: #ea5455"
                      >{{ errors[0] }}</small
                    >
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <label for="Username" class="text-info">Company</label><br />
                  <ValidationProvider
                    name="company"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <input
                      type="text"
                      name="company"
                      v-model="company"
                      class="form-control"
                      :class="errors[0] ? 'is-invalid' : ''"
                    />
                    <small
                      class="
                        block
                        text-red-600 text-xs
                        absolute
                        bottom-0
                        left-0
                      "
                      style="color: #ea5455"
                      >{{ errors[0] }}</small
                    >
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <label for="Username" class="text-info">Country Code</label
                  ><br />
                  <ValidationProvider
                    name="countryCode"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <input
                      type="text"
                      name="countryCode"
                      v-model="countryCode"
                      class="form-control"
                      :class="errors[0] ? 'is-invalid' : ''"
                    />
                    <small
                      class="
                        block
                        text-red-600 text-xs
                        absolute
                        bottom-0
                        left-0
                      "
                      style="color: #ea5455"
                      >{{ errors[0] }}</small
                    >
                  </ValidationProvider>
                </div>
                <!-- <div class="form-group">
                  <label for="Username" class="text-info">Image</label><br />
                  <ValidationProvider
                    name="image"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <input
                      type="file"
                      name="image"
                      class="form-control"
                      :class="errors[0] ? 'is-invalid' : ''"
                    />
                    <small
                      class="
                        block
                        text-red-600 text-xs
                        absolute
                        bottom-0
                        left-0
                      "
                      style="color: #ea5455"
                      >{{ errors[0] }}</small
                    >
                  </ValidationProvider>
                </div> -->
                <div class="form-group">
                  <input
                    type="submit"
                    name="submit"
                    class="btn btn-info btn-md"
                    value="submit"
                  />
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      phone: "",
      Username: "",
      company: "",
      Password: "",
      countryCode: "",
      image: "",
      id:''
    };
  },
  mounted() {
    let data = this.$store.getters.getEditUser;
    console.log(data);
    this.name = data.name;
    this.surname = data.surname;
    this.email = data.email;
    this.Username = data.Username;
    this.company = data.company;
    this.Password = data.Password;
    this.countryCode = data.countryCode;
    this.phone = data.phone;
    this.image = data.image;
    this.id = data.id;
  },
  methods: {
    sendCall() {
      let data = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        phone: this.phone,
        Username: this.Username,
        company: this.company,
        Password: this.Password,
        countryCode: this.countryCode,
        image: "",
        active: true,
        id : this.id
      };
      this.$store.dispatch("UdateUser", data);
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>