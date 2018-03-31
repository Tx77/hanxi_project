// --- 商品管理 --- //

export default [
  {
    name : 'classifyManagement',
    path : '/supplySystem/commodityManagement/classifyManagement',
    meta : { title : '分类管理' },
    component : require('business/supplySystem/commodityManagement/classifyManagement/list.vue').default
  },
  {
    name : 'deliveryTakenDate',
    path : '/supplySystem/commodityManagement/deliveryTakenDate',
    meta : { title : '领货日期' },
    component : require('business/supplySystem/commodityManagement/deliveryTakenDate/list.vue').default
  },
  {
    name : 'dishesManagement',
    path : '/supplySystem/commodityManagement/dishesManagement',
    meta : { title : '菜品管理' },
    component : require('business/supplySystem/commodityManagement/dishesManagement/list.vue').default
  },
  {
    name : 'servingManagement',
    path : '/supplySystem/commodityManagement/servingManagement',
    meta : { title : '上菜管理' },
    component : require('business/supplySystem/commodityManagement/servingManagement/list.vue').default
  }
];