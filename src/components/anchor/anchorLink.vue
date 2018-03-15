<template>
  <div class="dl-anchor-link">
    <a
      class="dl-anchor-link-title"
      v-if="href != ''"
      :href="href"
      :title="title">
      {{title}}
    </a>
    <a
      class="dl-anchor-link-title"
      v-else
      :title="title">
      {{title}}
    </a>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'anLink',
    props: {
      href: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="less">
  .dl-anchor-link {
    padding: 8px 0 8px 10px;
    line-height: 1;
    .dl-anchor-link-title {
      display: block;
      position: relative;
      -webkit-transition: all .3s;
      transition: all .3s;
      color: rgba(0,0,0,.65);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-decoration: none;
      margin-bottom: 8px;
      &:hover {
        color: #49a9ee;
      }
    }
    >.dl-anchor-link {
      padding-top: 6px;
      padding-bottom: 6px;
      >.dl-anchor-link-title {
        font-size: 12px;
      }
    }
  }
</style>