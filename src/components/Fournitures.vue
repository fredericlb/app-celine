<template>
    <div class="main">
        <md-list>
            <md-list-item v-if="items.length === 0" class="nothing">
                Aucune fourniture à acheter :)
            </md-list-item>
            <md-list-item v-for="(item,index) in items" key="index" :class="{ remove: item.deleteTimer }">
                <md-checkbox v-on:change="removeItem(index)">{{item.name}}</md-checkbox>
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
  export default {
    data () {
      return {
        items: [],
        newItem: ''
      }
    },
    methods: {
      addItem: function () {
        this.items.push({name: this.newItem, deleteTimer: null})
        this.newItem = ''
      },
      removeItem: function (index) {
        const item = this.items[index]
        if (item.deleteTimer) {
          clearTimeout(item.deleteTimer)
          item.deleteTimer = null
        } else {
          item.deleteTimer = setTimeout(() => {
            const idx = this.items.indexOf(item)
            this.items.splice(idx, 1)
          }, 2000)
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
