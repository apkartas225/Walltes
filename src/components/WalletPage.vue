<template>
  <div class="container">

    <main>
      <div class="main__balance">
        <div class="main__balance_title title"> {{ isEnglish ? "Total Balance" : "Общий Баланс" }} :</div>
        <div class="main__balance_total"><img src="../assets/total.svg" /></div>
      </div>
    </main>

    <div class="row">
      <div class="col-md-5 col-lg-4" v-for="wallet of wallets" :key="wallet.id">
        <div class="wallet">
          <div class="wallet__name">
            <img src="../assets/bit.png" /> {{ wallet.title }}
          </div>
          <div class="wallet__balance">
            {{ wallet.balance }} <span>{{ wallet.slug }}</span>
          </div>
          <div class="wallet__buttons">
            <div class="wallet__buttons_recieved">
              <button>Получить</button>
            </div>
            <div class="wallet__buttons_send"><button>Отправить</button></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "../Store";

export default {
  name: "Registered",
  data() {
    return {
      wallets: [],
    };
  },
  computed: {
    isEnglish() {
      return store.getters.isEnglish;
    }
  },
  methods: {
    getBitcoinCards() {
      axios
        .get("http://80.87.192.59:5252/api/wallet", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.wallets = response.data.wallets;
          console.log(this.wallets);
        });
    },
  },

  created() {
    this.getBitcoinCards();
  },
};
</script>

<style scoped>

span {
  margin-right: 10px;
}
.title {
  color: white;
}

.wallet {
  padding: 10px;
  margin-top: 30px;
  background: linear-gradient(241.43deg, #3b37f1 0%, #ff007d 100%);
  width: 270px;
  height: 160px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}
.wallet__name {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 15px;
  color: #ffffff;
}

.wallet__balance {
  margin-top: 25px;
  font-family: Roboto;
  font-size: 24px;
  line-height: 15px;
  color: #ffffff;
}
.wallet__buttons {
  display: flex;
  justify-content: space-around;
  width: 190px;
  margin-top: 45px;
}
.wallet__buttons_recieved button {
  font-family: Roboto;
  font-size: 12px;
  width: 85px;
  height: 30px;
  background: none;
  border-radius: 15px;
  color: white;
  border: 1px solid white;
}
.wallet__buttons_send button {
  font-family: Roboto;
  font-size: 12px;
  width: 85px;
  height: 30px;
  height: 30px;
  background: white;
  border-radius: 15px;
  color: black;
  border: 1px solid white;
}
@media (max-width: 768px) {
  .wallet {
    width: 300px;
    margin: auto;
    margin-top: 25px;
  }
}
</style>
