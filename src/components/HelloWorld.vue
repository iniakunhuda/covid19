<template>
  <div>
    <section class="hero app-background">
      <div class="hero-body">
        <div class="container">
          <div class="is-pulled-right">
              <!-- theme switcher -->
              <input type="checkbox" id='theme-switch' class='theme-switch' v-model="darkMode"/>
              <label for='theme-switch'>
                  <span v-if="darkMode === true">
                      <img alt="logo" src="../assets/images/sun.png" width="40">
                  </span>
                  <span v-else>
                      <img alt="logo" src="../assets/images/moon.png" width="40">
                  </span>
              </label>
          </div>
          <h1 class="title has-text-white">
            Covid19 Information
          </h1>
          <h2 class="subtitle dynamic-subtitle">
            Last Update :
            {{ data.lastUpdate }}
          </h2>
        </div>
        <input type="checkbox" class='theme-switch' v-model="darkMode"/>
      </div>
    </section>

    <section>
      <GlobalCard/>
      <GlobalTable/>

      <br><br>         
      <IDCard />
      <br><br>
      <RSRujukan />

      <br><br>         
      <Footer />

    </section>
    
  </div>
</template>

<script>
import moment from 'moment';
import { CovidAPI } from '../services/API/CovidAPI';
import GlobalCard from './Global/GlobalCard';
import GlobalTable from './Global/GlobalTable';
import IDCard from './Indonesia/IDCard';
import RSRujukan from './Indonesia/RSRujukan';
import Footer from './Footer';
const covidAPI = new CovidAPI();

export default {
  name: 'HelloWorld',
  components: {
    GlobalCard,
    GlobalTable,
    RSRujukan,
    Footer,
    IDCard
  },
  props: {
    msg: String
  },
  data() {
    return {
      data: [],
      status: {
        confirmed: 0,
        recovered: 0,
        deaths: 0
      },
      darkMode: false
    }
  }, 
  methods: {
    getData() {
      covidAPI.getDataGlobal().then((data) => {
        this.data = data;
        this.data.lastUpdate = moment(data.lastUpdate).format('DD/MM/YYYY');
      })
    },

    setTheme() {
      let bodyElement = document.body;
      bodyElement.classList.add("body-background");

      let htmlElement = document.documentElement;
      let theme = localStorage.getItem("theme");
      if (theme === 'dark') {
          htmlElement.setAttribute('theme', 'dark')
          this.darkMode = true
      } else {
          htmlElement.setAttribute('theme', 'light');
          this.darkMode = false
      }
    }
  },
  mounted() {
    this.getData();
    this.setTheme();
  },
  watch: {
    darkMode: function () {
        // add/remove class to/from html tag
        let htmlElement = document.documentElement;

        if (this.darkMode) {
            localStorage.setItem("theme", 'dark');
            htmlElement.setAttribute('theme', 'dark');
        } else {
            localStorage.setItem("theme", 'light');
            htmlElement.setAttribute('theme', 'light');
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
