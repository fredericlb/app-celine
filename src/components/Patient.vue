<template>
    <div>{{patient.nom}} {{patient.prenom}}</div>
</template>

<script>
  export default {
    name: 'patients',
    computed: {
      patient: function () { return this.$store.state.patients.find(p => p.id === +this.$route.params.id) }
    },
    data () {
      return {}
    },
    methods: {
      hrefForId: function (id) {
        return '#/patients/' + id
      }
    },
    mounted: function () {
      const patient = this.patient
      this.$store.commit('setPage', {title: patient.prenom + ' ' + patient.nom, back: '#/patients'})
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
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
