<template>
  <v-card class="mx-auto huddle-list-card" :style="{ width: removeIcon ? '100%' : '90%' }">
    <v-card-title style="text-align: center font-size: large; font-weight: bolder;"> {{ title }} </v-card-title>
    <v-divider></v-divider>
    <v-list shaped dense>
      <v-list-item-group v-model="model" multiple>
        <template v-if="items.length > 0" v-for="(item, i) in items" :key="`item-${i}`">
          <v-divider v-if="!item"></v-divider>
          <v-list-item v-else :value="item" class="huddle-list-item">
            <v-row align="center" class="w-100">
              <v-col cols="2" class="d-flex align-center">
                <v-list-item-avatar>
                  <WalnutUserAvatar color="primary" size="small"/>
                </v-list-item-avatar>
              </v-col>
              <v-col cols="8" class="d-flex align-center">
                <v-list-item-content>
                  <v-list-item-title v-text="item.name" class="truncate"></v-list-item-title>
                </v-list-item-content>
              </v-col>
              <v-cl cols="2" class="d-flex ml-10" v-if="removeIcon && item.huddleRole === 'MEMBER'">
                <v-list-item-action>
                  <HuddleRemoveButton @click="() => removeUserFromHuddle(item.memberUuid)"/>
                </v-list-item-action>
              </v-cl>
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
        <template v-else>
          <span v-text="'No new friends to add..'" style="font-size: small; font-weight: lighter; text-align: center; display: block;"></span>
        </template>
      </v-list-item-group>
    </v-list>
    <div class="invite-btn" v-if="enableInviteBtn && items.length > 0">
      <WalnutTreePrimaryAddButton color="secondary" @click="passSelectedUsers()" :title="'Invite to Huddle'" />
    </div>
  </v-card>
</template>

<script lang="ts">
import WalnutTreePrimaryAddButton from '../buttons/WalnutTreePrimaryAddButton.vue'
import WalnutUserAvatar from '../WalnutUserAvatar.vue'
import HuddleRemoveButton from '../buttons/HuddleRemoveButton.vue'
import { HuddleService } from '../../Services/HuddleService.js'
export default {
  name: 'HuddleFriendsList',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    removeIcon: {
      type: Boolean,
      default: false
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
  components: { WalnutTreePrimaryAddButton, WalnutUserAvatar, HuddleRemoveButton },
  data() {
    return {
      model: []
    }
  },
  methods: {
    async removeUserFromHuddle(userUuid: any) {
      const route = this.$route; 
      const huddleUuid = route?.params?.uuid;

      if (!huddleUuid || !userUuid) {
        console.error('Huddle UUID or User UUID is undefined', huddleUuid, userUuid);
        return;
      }

      try {
        const status = await HuddleService.removeUserFromHuddle(huddleUuid, userUuid);
        if(status === 200){
          this.$emit('user-removed');
        }
      } catch (error) {
        console.error('Error removing user from huddle:', error);
      }
    },
    toggleItem(id : any) {
      const index = this.model.indexOf(id);
      if (index === -1) {
        this.model.push(id);
      } else {
        this.model.splice(index, 1);
      }
    },
    passSelectedUsers() {
      console.log(this.model);
      this.$emit('user-selected', this.model);
      this.model = [];
    }
  }
}
</script>

<style scoped>
.huddle-list-card {
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
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
