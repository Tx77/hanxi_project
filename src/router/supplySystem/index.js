import _ from 'lodash';
import commodityManagement from './commodityManagement';

export default _.union(
  commodityManagement,
  [{
    name : 'supplySystem',
    path : '/supplySystem',
    meta : { title : '供应管理' },
    component : require('views/common/blank.vue').default
  }]
);