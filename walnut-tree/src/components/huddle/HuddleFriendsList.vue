<template>
  <v-card class="mx-auto huddle-list-card" max-width="500">
    <v-card-title style="text-align: center"> {{ title }} </v-card-title>
    <v-list shaped dense>
      <v-list-item-group v-model="model" multiple>
        <template v-for="(item, i) in items" :key="`item-${i}`">
          <v-divider v-if="!item"></v-divider>
          <v-list-item v-else :value="item" class="huddle-list-item">
            <v-row align="center" class="w-100">
              <v-col cols="2" class="d-flex align-center">
                <v-list-item-avatar>
                  <WalnutUserAvatar />
                </v-list-item-avatar>
              </v-col>
              <v-col cols="8" class="d-flex align-center">
                <v-list-item-content>
                  <v-list-item-title v-text="item.name" class="truncate"></v-list-item-title>
                </v-list-item-content>
              </v-col>
              <v-col cols="2" class="d-flex" v-if="enableCheckBox">
                <v-list-item-action>
                  <v-checkbox
                    :input-value="model.includes(item.uuid)"
                    @change="toggleItem(item.uuid)"
                    color="primary"
                    class="checkbox-spacing"
                  ></v-checkbox>
                </v-list-item-action>
              </v-col>
            </v-row>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
    <div class="invite-btn" v-if="enableInviteBtn">
      <WalnutTreePrimaryAddButton @click="passSelectedUsers()" :title="'Invite to Huddle'" />
    </div>
  </v-card>
</template>

<script>
import WalnutTreePrimaryAddButton from '../buttons/WalnutTreePrimaryAddButton.vue'
import WalnutUserAvatar from '../WalnutUserAvatar.vue'

export default {
  name: 'HuddleFriendsList',
  props: {
    items: {
      type: Array,
      default: []
    },
    enableCheckBox: {
      type: Boolean,
      default: false
    },
    enableInviteBtn: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Title'
    }
  },
  components: { WalnutTreePrimaryAddButton, WalnutUserAvatar },
  data() {
    return {
      model: []
    }
  },
  methods: {
    toggleItem(id) {
      const index = this.model.indexOf(id)
      if (index === -1) {
        this.model.push(id)
      } else {
        this.model.splice(index, 1)
      }
    },
    passSelectedUsers() {
      console.log(this.model)
      this.$emit('user-selected', this.model)
    }
  }
}
</script>

<style scoped>
.huddle-list-card {
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.huddle-list-item {
  padding: 8px 0;
}

.v-list-item-avatar {
  margin-right: 8px;
}

.v-list-item-title {
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.v-list-item-action {
  margin-left: auto;
}

.checkbox-spacing {
  margin-top: 8px;
}

.invite-btn {
  display: flex;
  justify-content: center;
  padding: 8px;
}
</style>
