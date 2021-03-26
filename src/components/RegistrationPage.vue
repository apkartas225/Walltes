<template>
  <div class="container">
    <main class="main">

      <div class="main__wrapper">
        <div class="title" id="regMain">{{ isEnglish ? "Register" : "Регистрация" }}</div>
        <div class="input_name">
          <input type="text" id="name" placeholder="Имя" v-model="name" />
        </div>
        <div class="input_email">
          <input type="email" placeholder="Email" v-model="email" />
        </div>
        <div class="input_password">
          <input type="password" id="password" placeholder="Пароль" v-model="password" />
        </div>
        <button class="button" @click="handleSubmit">{{ isEnglish ? "Registraited" : "Зарегистроваться" }}</button>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import store from "../Store"

export default {
  name: "Registered",

  data() {
    return {
      password: "",
      name: "",
      email: "",
    };
  },
  computed: {
    isEnglish() {
      return store.getters.isEnglish;
    }
  },
  methods: {
    handleSubmit() {
      axios.post("http://80.87.192.59:5252/api/auth/register", {
        email: this.email,
        password: this.password,
        name: this.name,
      })
        .then(() => {
          this.$router.push("/EnterPage");
        })
        .catch(() => {
          alert(this.isEnglish ? "Registration error" : "Ошибка регистрации")
        })
    },

  },
};
</script>

<style scoped>

.container {
  margin-top: 30px;
}

span {
  margin-right: 10px;
}
.main {
  width: 100%;
  margin: auto;
}
.main__wrapper {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 35%;
  width: 291px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 800;
}
input {
  color: #fff;
  background-color: #1c1c1c;
  margin-top: 20px;
  width: 250px;
  height: 35px;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 3px;
  padding-left: 10px;
}
::placeholder {
  color: white;
  font-size: 12px;
}

.button {
  margin-top: 20px;
  width: 250px;
  height: 35px;
  background: linear-gradient(88.29deg, #2f80ed 1.44%, #de16ca 100%);
  border-radius: 3px;
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
}
</style>
