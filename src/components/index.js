import dlLayout from 'components/layout'

import areaCascader from 'components/areaCascader'
import confirmButton from 'components/confirmButton'
import confirmDialog from 'components/confirmDialog'
import customerSelect from 'components/customerSelect'
import dateComponents from 'components/dateComponents'
import icTableColumnIndex from 'components/icTableColumnIndex'
import merchandiseSelect from 'components/merchandiseSelect'
import operatingRecord from 'components/operatingRecord'
import remoteSelect from 'components/remoteSelect'
import staffSelect from 'components/staffSelect'
import supplierSelect from 'components/supplierSelect'
import textareaCount from 'components/textareaCount'
import printer from 'components/printer'
import exportfile from 'components/exportfile'
import affix from 'components/affix'
import datePickerGroup from 'components/datePickerGroup'
import failMsgDialog from 'components/failMsgDialog'

export default {
  install: function (Vue, options) {
    const components = Object.assign({
      areaCascader,
      confirmButton,
      confirmDialog,
      customerSelect,
      dateComponents,
      icTableColumnIndex,
      merchandiseSelect,
      operatingRecord,
      remoteSelect,
      staffSelect,
      supplierSelect,
      textareaCount,
      printer,
      exportfile,
      affix,
      datePickerGroup,
			failMsgDialog
    }, dlLayout)
    Object.keys(components).forEach(key => {
      Vue.use(components[key])
    })
  }
}
