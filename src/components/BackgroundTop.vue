<template>
  <div class="top-background"></div>
</template>

<style lang="scss">
@import "~styles/theme.scss";

.top-background {
  height: 200px;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @include themed() {
    background-image: t("bg-mobile");
  }
}
</style>
