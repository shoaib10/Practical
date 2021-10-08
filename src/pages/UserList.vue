
<template>
  <div class="card-datatable table-responsive pt-0">
    <div>
      <b-button v-b-modal.modal-1 class="btn float-right" @click="function(){done = true}">Create User</b-button><br>

      <b-modal id="modal-1" title="Create User" hide-footer ref="vuemodal" v-if="done">
         <b-modal id="modal-2" v-if="deleteU" title="BootstrapVue">
          <p class="my-4">Are You sure!</p>
      </b-modal>
        <div id="register">
          <h3 class="text-center text-white pt-5">Registeration form</h3>
          <div class="container">
            <div
              id="login-row"
              class="row justify-content-center align-items-center"
            >
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
                      <label for="Surname" class="text-info">Surname:</label
                      ><br />
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
                      <label for="Username" class="text-info">Username</label
                      ><br />
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
                      <label for="Username" class="text-info">Company</label
                      ><br />
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
                      <label for="Username" class="text-info"
                        >Country Code</label
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
                      <label for="Username" class="text-info">Image</label
                      ><br />
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
      </b-modal>
    </div>
    <b-table
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :no-border-collapse="noCollapse"
      :items="getUser"
      :fields="fields"
      :head-variant="headVariant"
      :table-variant="tableVariant"
      :per-page="perPage"
      :current-page="currentPage"
      :total-rows="rows"
    >
      <template #cell(action)="row">
        <b-button
          size="sm"
          @click="Edit(row.item, row.index, $event.target)"
          class="mr-1"
        >
          Edit
        </b-button>
        <b-button size="sm" @click="Delete(row.item, row.index)">
          Delete
        </b-button>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <br />
    <div class="card-datatable table-responsive pt-0"></div>
  </div>
</template>

<script>
// import Vuetable from "vuetable-2";
export default {
  components: {
    // Vuetable,
  },
  created() {
    this.$store.dispatch("getUser");
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
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
      currentPage: 1,
      rows: 10,
      perPage: 10,
      deleteU : false,
      fields: ["name", "surname", "email", "phone", "active", "action"],
      items: [
        { age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { age: 21, first_name: "Larsen", last_name: "Shaw" },
        { age: 89, first_name: "Geneva", last_name: "Wilson" },
      ],
      tableVariants: [
        "primary",
        "secondary",
        "info",
        "danger",
        "warning",
        "success",
        "light",
        "dark",
      ],
      striped: true,
      bordered: true,
      borderless: true,
      outlined: true,
      small: false,
      hover: true,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: null,
      tableVariant: "",
      noCollapse: false,
      done: false
    };
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
      };
      this.done = false
      this.$store.dispatch("createUser", data);
      // this.$refs.vuemodal.on("hidden.bs.modal");
    },
    Delete(item, i) {
      this.deleteU = true;
      this.$store.dispatch("DeleteUser", { item, i });
      console.log(item, i);
    },
    Edit(item,i) {
      console.log(item, i);
       let edit = {
        index: i,
        data: item
      };
      this.$store.dispatch("editUser", edit);
      this.$router.push({ path: '/edit' })
    }
  },
};
</script>

<style>
</style>