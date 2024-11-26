<template>
  <v-card class="mx-auto huddle-list-card" :style="{ width: removeIcon ? '100%' : '90%' }">
    <v-card-title style="text-align: center font-size: large; font-weight: bolder;">
      {{ title }}
    </v-card-title>
    <v-divider></v-divider>
    <v-list shaped dense>
      <v-list-item-group v-model="model" multiple>
        <template v-if="items.length > 0" v-for="(item, i) in items" :key="`item-${i}`">
          <v-divider v-if="!item"></v-divider>
          <v-list-item v-else :value="item" class="huddle-list-item">
            <v-row align="center" class="w-100">
              <v-col cols="2" class="d-flex align-center">
                <v-list-item-avatar>
                  <WalnutUserAvatar color="primary" size="small" />
                </v-list-item-avatar>
              </v-col>
              <v-col cols="8" class="d-flex align-center">
                <v-list-item-content>
                  <v-list-item-title v-text="item.name" class="truncate"></v-list-item-title>
                </v-list-item-content>
              </v-col>
              <v-cl
                v-if="removeIcon && item.huddleRole === 'MEMBER' && isCurrentUserIsCreator"
                cols="2"
                class="d-flex ml-10"
              >
                <v-list-item-action>
                  <HuddleRemoveButton @click="() => removeUserFromHuddle(item.memberUuid)" />
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
          <span
            v-text="'No new friends to add..'"
            style="font-size: small; font-weight: lighter; text-align: center; display: block"
          ></span>
        </template>
      </v-list-item-group>
    </v-list>
    <div class="invite-btn" v-if="enableInviteBtn && items.length > 0">
      <WalnutTreePrimaryAddButton
        color="secondary"
        @click="passSelectedUsers()"
        :title="'Invite to Huddle'"
      />
    </div>
  </v-card>
</template>

<script lang="ts">
import { ref, watch } from 'vue'
import WalnutTreePrimaryAddButton from '../buttons/WalnutTreePrimaryAddButton.vue'
import WalnutUserAvatar from '../WalnutUserAvatar.vue'
import HuddleRemoveButton from '../buttons/HuddleRemoveButton.vue'
import { HuddleService } from '../../Services/HuddleService.js'
import { loggedInUserStore } from '../../stores/loggedInUser.js'
import { useRoute } from 'vue-router'
import { HuddleMember } from '../huddle/Models/HuddleMember'
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
  components: {
    WalnutTreePrimaryAddButton,
    WalnutUserAvatar,
    HuddleRemoveButton
  },
  setup(props, { emit }) {
    const model = ref<HuddleMember[]>([])
    const user = loggedInUserStore().getUser
    const route = useRoute()
    watch(
      () => props.items,
      (newItems) => {
        model.value = newItems.map((item: any) => item.uuid)
      },
      { immediate: true }
    )
    const isCurrentUserIsCreator = () => {
      return props.items?.some((item: any) => {
        console.log(item?.memberUuid === user.uuid && item?.huddleRole === 'CREATOR')
        item?.memberUuid === user.uuid && item?.huddleRole === 'CREATOR'
      })
    }

    const removeUserFromHuddle = async (userUuid: string) => {
      const huddleUuid = route.params.huddleUuid

      if (!huddleUuid || !userUuid) {
        console.error('Huddle UUID or User UUID is undefined', huddleUuid, userUuid)
        return
      }

      try {
        const status = await HuddleService.removeUserFromHuddle(huddleUuid, userUuid)
        if (status === 200) {
          emit('user-removed')
        }
      } catch (error) {
        console.error('Error removing user from huddle:', error)
      }
    }
    const toggleItem = (id: string) => {
      const index = model.value.indexOf(id)
      if (index === -1) {
        model.value.push(id)
      } else {
        model.value.splice(index, 1)
      }
    }
    const passSelectedUsers = () => {
      emit('user-selected', model.value)
      model.value = []
    }

    return {
      model,
      user,
      isCurrentUserIsCreator,
      removeUserFromHuddle,
      toggleItem,
      passSelectedUsers
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
