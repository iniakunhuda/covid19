<template>
    <div class="container">
        <br><br>
        <div class="columns">
            <div class="column">
                <b-table :data="data" sticky-header="true" :columns="columns"></b-table>
            </div>
        </div>

    </div>
</template>

<script>
import moment from 'moment';
import numeral from 'numeral';

import { CovidAPI } from '../../services/API/CovidAPI';
const covidAPI = new CovidAPI();

export default {
  name: 'GlobalCard',
  data() {
    return {
        data: [],
        countries: [],
        columns: [
            {
                field: 'id',
                label: '#'
            },
            {
                field: 'location',
                label: 'Lokasi',
                searchable: true
            },
            {
                field: 'confirmed',
                label: 'Terkonfirmasi'
            },
            {
                field: 'recovered',
                label: 'Sembuh'
            },
            {
                field: 'deaths',
                label: 'Meninggal'
            },
            {
                field: 'lastUpdate',
                label: 'Pembaharuan'
            }
        ]
    }
  },
  methods: {
    getData() {
      covidAPI.getDataConfirmedGlobal().then((data) => {
        let i = 0;
        data.forEach(raw => {
            raw.id = i+=1;
            raw.location = this.getLocation(raw);
            raw.confirmed = this.formatNumber(raw.confirmed);
            raw.deaths = this.formatNumber(raw.deaths);
            raw.recovered = this.formatNumber(raw.recovered);
            raw.lastUpdate = moment(raw.lastUpdate).format('DD/MM/YYYY');

            this.data.push(raw);
        });
      })
    },
    getDataConfirmedDistincCountry() {
        covidAPI.getDataConfirmedGlobal().then((data) => {
            let countries = [];
            data.forEach(raw => {
                // console.log(raw);
                if (undefined === countries[raw.countryRegion]) {
                    countries[raw.countryRegion] = {
                        confirmed: raw.confirmed,
                        deaths: raw.deaths,
                        recovered: raw.recovered
                    };
                } else {
                    let country = countries[raw.countryRegion];
                    countries[raw.countryRegion] = {
                        confirmed: raw.confirmed + country.confirmed,
                        deaths: raw.deaths + country.deaths,
                        recovered: raw.recovered + country.recovered
                    };
                }
                // console.log(this.countries);
            });
            //TODO find why this countries still empty
            this.countries = countries;
        });
    },
    getLocation(detail) {
        if (null != detail.provinceState && null != detail.countryRegion) {
            return detail.provinceState + ' (' + detail.countryRegion + ')';
        } else if (null == detail.provinceState && null != detail.countryRegion) {
            return detail.countryRegion;
        } else if (null != detail.provinceState && null == detail.countryRegion) {
            return detail.provinceState;
        } else {
            return 'n/a';
        }
    },
    formatNumber(x) {
        return numeral(x).format('0,0');
    },
  },
  mounted() {
      this.getData()
  }
}
</script>
