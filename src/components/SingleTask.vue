<template>
  <div class="single-task card-rounded">
    <div class="check-space">
      <div class="check-icon"></div>
    </div>
    <div class="txt-space">
      <div class="new-todo" v-if="isNew">
        <input
          type="text"
          id="txt-new-todo"
          placeholder="Create a new todo..."
        />
        <span class="focus-bg"></span>
      </div>
      <div :class="['txt-todo', isCompleted ? 'completed' : '']" v-else>
        <span>{{ task.text }}</span>
      </div>
    </div>
    <div class="actions-space">
      <div class="accept-icon" v-if="edit"></div>
      <div class="cross-icon" v-if="active"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleTask",
  props: ["status", "task"],
  computed: {
    isActive() {
      return this.status == "active";
    },
    isCompleted() {
      return this.status == "completed";
    },
    isEdited() {
      return this.status == "edit";
    },
    isNew() {
      return this.status == "new";
    }
  },
  methods: {
    saveNewTask() {
      //
    },
    editTask() {
      //
    },
    deleteTask() {
      //
    },
    completeTask() {
      //
    }
  }
};
</script>

<style lang="scss">
@import "~styles/variables.scss";
@import "~styles/theme.scss";

.single-task {
  height: 3rem;
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  @include themed() {
    background-color: t("bg-card");
  }
}

/* .input-space {
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
      border: $secondary 1pt solid;
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
        box-shadow: inset 0 -2px 0 $emphasis;
        + .focus-bg {
          transform: scaleX(1);
          transition: all 0.1s ease;
        }
      }
      &::placeholder {
        color: $secondary;
      }
    }
  }
} */
</style>
