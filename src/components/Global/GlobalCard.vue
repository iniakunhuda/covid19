<template>
    <div class="container">
        <br><br>
        <h3 class="is-size-4  is-pulled-left dynamic-title"><b>Data Global</b></h3><br><br>
        <p class="is-pulled-left dynamic-title">Fatality Rate : {{ Number(((this.deaths/this.confirmed)*100).toFixed(1)) }}%</p>
        <br><br>

        <div class="columns">
            <div class="column">
                <div class="card component-background">
                    <div class="card-content">
                        <p class="title dynamic-title">
                            {{ this.confirmed }}
                        </p>
                        <p class="subtitle dynamic-title">
                        Terkonfirmasi
                        </p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card component-background">
                    <div class="card-content">
                        <p class="title dynamic-title">
                            {{ this.recovered }}
                        </p>
                        <p class="subtitle dynamic-title">
                        Sembuh
                        </p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card component-background">
                    <div class="card-content">
                        <p class="title dynamic-title">
                            {{ this.deaths }}
                        </p>
                        <p class="subtitle dynamic-title">
                        Meninggal
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { CovidAPI } from '../../services/API/CovidAPI';
const covidAPI = new CovidAPI();

export default {
  name: 'GlobalCard',
  data() {
    return {
        confirmed: 0,
        recovered: 0,
        deaths: 0
    }
  },
  methods: {
    getData() {
      covidAPI.getDataGlobal().then((data) => {
        this.confirmed = data.confirmed.value,
        this.recovered = data.recovered.value,
        this.deaths = data.deaths.value
      })
    },
  },
  mounted() {
      this.getData()
  }
}
</script>
