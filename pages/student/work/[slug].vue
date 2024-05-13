<script setup lang="ts">
import { reactive } from "vue";

interface DropdownOption {
  label: string;
  selected: boolean;
}

interface DropdownState {
  isOpen: boolean;
  options: DropdownOption[];
  selectedOption: string;
}

function createDropdownState(): DropdownState {
  return reactive({
    isOpen: false,
    options: [
      { label: "To Do", selected: true },
      { label: "In Progress", selected: false },
      { label: "Completed", selected: false },
    ],
    selectedOption: "To Do",
  });
}

const dropdownStates = reactive({
  workPoints: [
    createDropdownState(),
    createDropdownState(),
    createDropdownState(),
  ],
});

const toggleDropdown = (dropdown: DropdownState) => {
  dropdown.isOpen = !dropdown.isOpen;
};

const selectOption = (dropdown: DropdownState, optionIndex: number) => {
  const selectedOption = dropdown.options[optionIndex];
  dropdown.selectedOption = selectedOption.label;
  dropdown.options.forEach((option, i) => {
    option.selected = i === optionIndex;
  });
  dropdown.isOpen = false;
};

function dropdownButtonClass(selectedOption: string): string {
  if (selectedOption === "In Progress") {
    return "bg-orange-500";
  } else if (selectedOption === "Completed") {
    return "bg-green-500";
  }
  return "bg-blue-500";
}
</script>

<template>
  <ul id="work_list">
    <li
      class="work_point"
      v-for="(dropdown, index) in dropdownStates.workPoints"
      :key="index"
    >
      <a class="work_point" href="#">HW #{{ index + 1 }}</a>
      <div class="dropdown-container">
        <div class="dropdown dropdown-bottom">
          <div
            tabindex="0"
            role="button"
            class="btn m-1 bg-blue-500 text-black"
            @click="toggleDropdown(dropdown)"
          >
            {{ dropdown.selectedOption }}
          </div>
          <ul
            v-if="dropdown.isOpen"
            tabindex="0"
            class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li
              v-for="(option, optionIndex) in dropdown.options"
              :key="optionIndex"
            >
              <a @click="selectOption(dropdown, optionIndex)">{{
                option.label
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
  <ul id="completed_work_list">
    <h5 id="completed_list_title">Completed Assignments:</h5>
    <li class="work_point"><a class="work_point" href="#">HW #4</a></li>
    <li class="work_point"><a class="work_point" href="#">HW #5</a></li>
  </ul>

  <div id="meeting">
    Upcoming Meetings: <a class="meet_link" href="#">Google Calendar</a>
    <br />
  </div>
  <Chat />
</template>