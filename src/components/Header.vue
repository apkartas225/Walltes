<template>
  <div class="container">
    <div class="row">
      <div class="header">
        <router-link tag="div" to="/" class="header__logo">
          <img src="../assets/BIGWALLET.svg" />
        </router-link>
        <div class="header__burger" ><img  src="../assets/burger.png"

         @click="isActive = !isActive" /></div>

        <div class="header__nav " :class="{ visible:isActive }"> 
          <router-link
            v-if="isAuthorized"
            tag="div"
            :to="'/WalletPage'"
            class="header__nav_wallet title"  @click.native="isActive = !isActive"
          >
            {{ isEnglish ? "Wallets" : "Кошельки" }}</router-link
          >

          <router-link
            tag="div"
            :to="'/EnterPage'"
            class="header__nav_register title" @click.native="isActive = !isActive"
          >
            {{ isEnglish ? "Enter" : "Вход" }}
          </router-link>

          <router-link
            tag="div"
            :to="'/RegistrationPage'"
            class="header__nav_register title" @click.native="isActive = !isActive"
          >
            {{ isEnglish ? "Register" : "Регистрация" }}
          </router-link>

          <div class="header__nav_language title">
            <span @click="changeLang(false)">RU</span>
            <span @click="changeLang(true)">EN</span>
          </div>

          <router-link tag="div" :to="'/OutPage'" class="header__nav_out title"
           @click.native="isActive = !isActive" >
            {{ isEnglish ? "Out" : "Выход" }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../Store";

export default {
  name: "Header",
  data: () => ({
    isActive: false
  }),
  computed: {
    isEnglish() {
      return store.getters.isEnglish;
    },
    isAuthorized() {
      return store.getters.isAuthorized;
    },
  },
  methods: {
    changeLang(isEnglish) {
      store.dispatch("setLang", isEnglish);
    },
    
  },
};
</script>

<style scoped>
 .visible {
    display: none;
  }
.burger_img {
  width: 20px;
}
.container {
  margin-top: 30px;
}

.header__nav {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 40%;
  height: 178px;
}
.header__nav_language {
  display: flex;
  justify-content: space-between;
}
.title {
  font-weight: 300;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  margin-right: 10px;
}
span {
  margin-right: 10px;
}
.header__burger {
  visibility: hidden;
  position: absolute;
  right: 20px;
  top: 29px;
}
.burger_img {
  width: 20px;
}
.container {
  margin-top: 30px;
}
.header {
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 200px;
}
.header__logo {
  cursor: pointer;
  width: 50%;
  height: 20px;
}
.header__logo img {
  width: 150px;
}

.header__nav_language {
  display: flex;
  justify-content: space-between;
}
.titleHeader {
  font-weight: 300;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  margin-right: 10px;
}
.main__balance_total img {
  width: 80px;
  margin-top: 5px;
}

@media (max-width: 690px) {
  .header__burger {
    visibility: visible;
  }
  .title {
    margin: auto;
  }

  .header__nav_language {
    width: 80px;
    font-size: 14px;
  }
  .title {
    font-size: 25px;
  }
  .header__nav_language {
    margin: auto;
    width: 70px;
    font-size: 14px;
  }
}

@media (max-width: 690px) {
  .header__burger {
    visibility: visible;
    z-index: 2;
  }
  .header__logo {
    position: absolute;
    z-index: 2;
  }
  .header__nav {
    padding-top: 250px;
    padding-bottom: 250px;
    flex-direction: column;
    z-index: 1;
    position: absolute;
    background-color: #1c1c1c;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
  }
  .visible{
    display: none;
  }
 
}
</style>
