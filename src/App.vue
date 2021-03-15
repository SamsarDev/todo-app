<template>
  <div id="app">
    <background-top></background-top>
    <switch-button></switch-button>
    <div id="main-space">
      <div class="title">{{ texts.title }}</div>
      <single-task status="new" :task="texts.newTodo"></single-task>
      <to-do-list></to-do-list>
      <div class="instructions">Drag and drop to reorder list</div>
      <filters-bar></filters-bar>
    </div>
  </div>
</template>

<script>
import BackgroundTop from "@/components/BackgroundTop";
import SwitchButton from "@/components/SwitchButton";
import SingleTask from "@/components/SingleTask";
import ToDoList from "@/components/ToDoList";
import FiltersBar from "@/components/FiltersBar";
import { esp } from "@/utils/txtResources.js";

export default {
  name: "App",
  components: {
    BackgroundTop,
    SingleTask,
    SwitchButton,
    ToDoList,
    FiltersBar
  },
  data() {
    return {
      texts: esp
    };
  },
  methods: {
    setColorTheme() {
      const body = document.body;

      body.className = "theme--default";
    }
  },
  created() {
    this.setColorTheme();
  }
};
</script>

<style lang="scss">
@import "~styles/theme.scss";

#app {
  height: 100vh;
  width: 100vw;

  @include themed() {
    background-color: t("bg-color");
    color: t("primary");
  }
}

#main-space {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 90%;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 2;
  .title {
    letter-spacing: 10pt;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 2rem;
    @include themed() {
      color: t("titles");
    }
  }
}

/* #main-space {
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
        border: $light-dgb 1pt solid;
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
        height: 98%;
        width: 100%;
        font-size: 1rem;
        font-weight: 400;
        &:focus {
          outline: none;
          box-shadow: inset 0 -2px 0 #0077ff;
          + .focus-bg {
            transform: scaleX(1);
            transition: all 0.1s ease;
          }
        }
        &::placeholder {
          color: $light-dgb;
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
} */
</style>
