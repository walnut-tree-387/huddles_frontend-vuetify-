import wtlAngleLeftSmall from '~icons/wt-light-arrows/angle-left-small'
import wtlAngleRightSmall from '~icons/wt-light-arrows/angle-right-small'
import wtlPlus from '~icons/wt-light-general/plus'
import wtlSearch from '~icons/wt-light-general/search'
import IconUserCircle from '~icons/wt-regular-users-people/user-circle'
import IconUsersGroup from '~icons/wt-regular-users-people/users-group'
import IconExclamationCircle from '~icons/wt-light-sign-controls/exclamation-circle'
import IconTriangleExclamation from '~icons/wt-light-sign-controls/triangle-exclamation'
import IconIdBadge from '~icons/wt-light-business-finance/id-badge'
import IconCalendarEdit from '~icons/wt-light-date-time/calendar-edit'
import IconCalendar from '~icons/wt-light-date-time/calendar'
import IconCreditCard from '~icons/wt-light-money-payment/credit-card'
import IconMoneyBills from '~icons/wt-light-money-payment/money-bills'
import IconCoinCardTransfer from '~icons/wt-light-money-payment/coin-card-transfer'
import IconCheckCircle from '~icons/wt-light-general/check-circle'
import IconAngleDown from '~icons/wt-light-arrows/angle-down'
import IconAngleLeft from '~icons/wt-light-arrows/angle-left'
import IconAngleRight from '~icons/wt-light-arrows/angle-right'
import IconAngleUp from '~icons/wt-light-arrows/angle-up'
import IconFileEdit from '~icons/wt-light-files/file-edit'
import IconTimes from '~icons/wt-light-general/times'
import IconCloudUpload from '~icons/wt-light-files/cloud-upload'
import IconSettingsFilled from '~icons/wt-filled-general/settings'
import IconSettingsLight from '~icons/wt-light-general/settings'
import IconsFileCopy from '~icons/wt-light-files/file-copy'
import IconCopyrightCircle from '~icons/wt-light-sign-controls/copy2right-circle'
import IconEye from '~icons/wt-light-security/eye'
import IconEyeClosed from '~icons/wt-light-security/eye-closed'
import IconFileUser from '~icons/wt-light-files/file-user'
import IconFileTextStar from '~icons/wt-light-files/file-text-star'
import IconFileCode from '~icons/wt-light-files/file-code'
import IconFileTextEdit from '~icons/wt-light-files/file-text-edit'
import IconPapersText from '~icons/wt-light-documents/papers-text'
import IconDocument from '~icons/wt-light-documents/document'
import IconFileTextPlus from '~icons/wt-light-files/file-text-plus'
import IconFileTextCheck from '~icons/wt-light-files/file-text-check'
import IconFileText from '~icons/wt-light-files/file-text'
import IconFileTextLock from '~icons/wt-light-files/file-text-lock'
import IconFileExport from '~icons/wt-light-files/file-export'
import IconFileUpload from '~icons/wt-light-files/file-upload'
import IconDocumentListCheck from '~icons/wt-light-documents/document-list-check'
import IconInfoCircle from '~icons/wt-light-sign-controls/info-circle'
import IconDiamondExclamation from '~icons/wt-light-sign-controls/diamond-exclamation'
import IconKey from '~icons/wt-light-security/key'
import IconClipboardListCheck from '~icons/wt-light-documents/clipboard-list-check'
import IconLogout from '~icons/wt-light-general/log-out'
import IconEdit from '~icons/wt-filled-general/edit'
import IconEditOutline from '~icons/wt-light-general/edit'
import IconPlus from '~icons/wt-light-general/plus'
import IconRotate from '~icons/wt-light-arrows/rotate'
import IconTrash from '~icons/wt-light-general/trash'
import IconGridFilled from '~icons/wt-filled-grid-layouts/grid-circle'
import IconSettings from '~icons/wt-light-general/settings'
import IconRight from '~icons/wt-filled-arrows/angle-right-square'
import IconBell from '~icons/wt-filled-general/bell'
import IconUser from '~icons/wt-filled-users-people/user-star'
import HuddleLogo from '~icons/wt-filled-chatting/chat-heart'
import HuddleMessage from '~icons/wt-filled-messaging/message-plus'
import HuddleRemoveIcon from '~icons/wt-filled-general/minus'

const iconsMap = {
  'wt-filled-messaging-message-plus': HuddleMessage,
  'wt-filled-general-minus': HuddleRemoveIcon,
  'wt-filled-chatting-chat-heart': HuddleLogo,
  'wtl-angle-left-small': wtlAngleLeftSmall,
  'wtl-filled-users-people-user': IconUser,
  'wtl-filled-general-bell': IconBell,
  'wtl-angle-right-small': wtlAngleRightSmall,
  'wtl-plus': wtlPlus,
  'wtl-search': wtlSearch,
  'mdi-account-circle': IconUserCircle,
  'mdi-account-group-outline': IconUsersGroup,
  'mdi-alert-circle-outline': IconExclamationCircle,
  'mdi-alert-outline': IconTriangleExclamation,
  'mdi-badge-account-outline': IconIdBadge,
  'mdi-calendar-expand-horizontal-outline': IconCalendarEdit,
  'mdi-calendar-month-outline': IconCalendar,
  'mdi-card-bulleted': IconCreditCard,
  'mdi-card-multiple-outline': IconMoneyBills,
  'mdi-cash-refund': IconCoinCardTransfer,
  'mdi-check-circle-outline': IconCheckCircle,
  'mdi-chevron-down': IconAngleDown,
  'mdi-chevron-left': IconAngleLeft,
  'mdi-chevron-right': IconAngleRight,
  'mdi-chevron-up': IconAngleUp,
  'mdi-clipboard-file-outline': IconFileEdit,
  'mdi-close': IconTimes,
  'mdi-cloud-upload-outline': IconCloudUpload,
  'mdi-cog': IconSettingsFilled,
  'mdi-cog-outline': IconSettingsLight,
  'mdi-content-copy': IconsFileCopy,
  'mdi-copyright': IconCopyrightCircle,
  'mdi-eye-outline': IconEye,
  'mdi-eye-off-outline': IconEyeClosed,
  'mdi-file-account-outline': IconFileUser,
  'mdi-file-certificate-outline': IconFileTextStar,
  'mdi-file-code-outline': IconFileCode,
  'mdi-file-document-edit-outline': IconFileTextEdit,
  'mdi-file-document-multiple-outline': IconPapersText,
  'mdi-file-document-outline': IconDocument,
  'mdi-file-document-plus-outline': IconFileTextPlus,
  'mdi-file-chart-check-outline': IconFileTextCheck,
  'mdi-file-chart-outline': IconFileText,
  'mdi-file-key-outline': IconFileTextLock,
  'mdi-file-link-outline': IconFileExport,
  'mdi-file-upload-outline': IconFileUpload,
  'mdi-form-select': IconDocumentListCheck,
  'mdi-information-slab-circle-outline': IconInfoCircle,
  'mdi-information-variant': IconDiamondExclamation,
  'mdi-key-variant': IconKey,
  'mdi-list-box': IconClipboardListCheck,
  'mdi-logout': IconLogout,
  'mdi-pencil': IconEdit,
  'mdi-pencil-outline': IconEditOutline,
  'mdi-plus': IconPlus,
  'mdi-refresh': IconRotate,
  'mdi-trash-can-outline': IconTrash,
  'mdi-view-grid-outline': IconGridFilled,
  'mdi-proceed-right': IconRight
}

export type wtlIconModule = keyof typeof iconsMap

export function useIcons() {
  function getIcon(name: wtlIconModule) {
    return iconsMap[name] || IconSettings
  }

  return { getIcon }
}
