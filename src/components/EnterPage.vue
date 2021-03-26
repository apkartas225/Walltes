<template>
  <div class="container">
    <div class="container">

      <main class="main">
        <div class="main__wrapper">
          <div class="title" id="enter">{{ isEnglish ? "Enter" : "Вход" }}</div>
          <div class="input_name">
            <input type="text" id="name" placeholder="Имя" v-model="name" />
          </div>
          <div class="input_password">
            <input
              type="password"
              id="password"
              placeholder="Пароль"
              v-model="password"
            />
          </div>
          <div class="input_email">
            <input
              type="email"
              placeholder="Email"
              id="email"
              v-model="email"
            />
          </div>
          <button class="button" v-if="isLoading" @click="handleSubmit">
            <img src="../assets/loader.png" />
          </button>
          <button class="button" @click="handleSubmit">
            {{ isEnglish ? "Enter" : "Войти" }}
          </button>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "../Store";

export default {
  name: "EnterPage",
  data() {
    return {
      name: "",
      password: "",
      email: "",
      isLoading: false,
    };
  },
  computed: {
    isEnglish() {
      return store.getters.isEnglish;
    }
  },
  methods: {
    handleSubmit() {
      this.isLoading = true;
      axios
        .post("http://80.87.192.59:5252/api/auth/login", {
          password: this.password,
          name: this.name,
          email: this.email,
        })
          .then((res) => {
            const token = res.data.access_token;
            localStorage.setItem("token", token);
            store.dispatch('setToken', token);
            this.$router.push("/WalletPage");
          })
          .catch(() => {
            alert(this.isEnglish ? "Authorization error" : "Ошибка регистрации")
          })
          .finally(() => {
            this.isLoading = false;
          });

    },
    changeLang(){
      store.dispatch("setLang" , this.isEnglish)
    }
  },
};
</script>

<style scoped>
span {
  margin-right: 10px;
}
.loader {
  width: 20%;
  color: white;
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
