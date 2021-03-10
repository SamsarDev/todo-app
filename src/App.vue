<template>
  <div id="app">
    <div class="top-background"></div>
    <div id="main-space">
      <div class="title">TODO</div>
      <div class="input-space card-rounded">
        <div class="check-space">
          <div class="check-icon"></div>
        </div>
        <label for="txt-new-todo" class="new-todo">
          <input
            type="text"
            id="txt-new-todo"
            placeholder="Create a new todo..."
          />
          <span class="focus-bg"></span>
        </label>
      </div>
      <div class="to-do-list card-rounded"></div>
      <div class="instructions">Drag and drop to reorder list</div>
      <div class="space-filters card-rounded"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import "~styles/variables";

#app {
  height: 100vh;
  width: 100vw;
  background-color: $background;
  color: $font-color;
  .top-background {
    height: 200px;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-image: url("~img/bg-mobile-light.jpg");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
}
#main-space {
  height: 90%;
  width: 85%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 5;

  .title {
    color: $light-vlg;
    letter-spacing: 10pt;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
  .input-space {
    height: 3rem;
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    .check-space {
      height: 100%;
      width: 10%;
      .check-icon {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        border: $light-dgb 1pt dashed;
      }
    }
    .new-todo {
      position: relative;
      width: 85%;
      height: 100%;
      overflow: hidden;
      .focus-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        transform: scaleX(0);
        transform-origin: left;
      }
      input {
        appearance: none;
        border: 0;
        font-family: inherit;
        height: 98%;
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
        box-shadow: inset 0 -1px 0 rgba(#000, 0.3);
        &:hover {
          box-shadow: inset 0 -1px 0 rgba(#000, 0.5);
        }
        &:focus {
          outline: none;
          box-shadow: inset 0 -2px 0 #0077ff;
          + .focus-bg {
            transform: scaleX(1);
            transition: all 0.1s ease;
          }
        }
      }
    }
  }
  .to-do-list {
    height: 75%;
    width: 100%;
  }
  .instructions {
    color: $light-dgb;
    font-size: 1rem;
    align-self: center;
    margin: 1rem 0 1rem 0;
  }
  .space-filters {
    height: 3rem;
    width: 100%;
  }
}
.card-rounded {
  border-radius: 0.5rem;
  border: $light-vlg 1pt solid;
  background: $light-card-background;
}
</style>
