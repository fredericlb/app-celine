<template>
    <md-list>
        <md-list-item v-for="patient in patients" key="{{patient.id}}" :href="hrefForId(patient.id)">
            {{patient.nom}} {{patient.prenom}}
        </md-list-item>
    </md-list>
</template>

<script>
  export default {
    name: 'patients',
    computed: {
      patients: function () { return this.$store.state.patients }
    },
    data () {
      return {}
    },
    methods: {
      hrefForId: function (id) {
        return '#/patients/' + id
      }
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
