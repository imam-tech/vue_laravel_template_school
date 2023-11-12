<template>
  <div
    id="preloader-circle"
    :class="true ? 'lds-css ng-scope show' : 'lds-css ng-scope'"
  >
    <div
      style="width:100%;height:100%"
      class="lds-rolling"
    >
      <div />
    </div>
  </div>
</template>