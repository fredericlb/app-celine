<template>
    <div class="main">
        <md-list>
            <md-list-item v-if="fournitures.length === 0" class="nothing">
                Aucune fourniture à acheter :)
            </md-list-item>
            <md-list-item v-for="item in fournitures" key="item.id"
                          :class="{ remove: willBeRemoved[item.id] !== undefined }">
                <md-checkbox v-on:change="removeItem(item.id)">{{item.name}}</md-checkbox>
            </md-list-item>
        </md-list>
        <div class="bottom-add">
            <md-input-container>
                <label>Fourniture à ajouter</label>
                <md-input placeholder="Fourniture..." v-model="newItem"></md-input>
                <md-button class="md-icon-button md-list-action" v-on:click.native="addItem">
                    <md-icon class="md-primary">add</md-icon>
                </md-button>
            </md-input-container>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    data () {
      return {
        willBeRemoved: {},
        newItem: ''
      }
    },
    computed: {
      fournitures: function () {
        return this.$store.state.fournitures
      }
    },
    methods: {
      addItem: function () {
        this.$store.commit('addFourniture', this.newItem)
        this.newItem = ''
      },
      removeItem: function (id) {
        if (this.willBeRemoved[id]) {
          clearTimeout(this.willBeRemoved[id])
          Vue.set(this.willBeRemoved, id, undefined)
        } else {
          const timer = setTimeout(() => {
            this.$store.commit('removeFourniture', id)
          }, 2000)
          Vue.set(this.willBeRemoved, id, timer)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main {
        position: relative;
    }
    .bottom-add {
        position: fixed;
        bottom: 50px;
        left: 20px;
        right: 20px;
    }
    .remove {
        color: red;
        text-decoration: line-through;
    }
    .nothing {
        color: #999;
    }
</style>
