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

// Function to create a new dropdown state
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

// Create an individual state for each dropdown
const dropdownStates = reactive({
  workPoints: [
    createDropdownState(),
    createDropdownState(),
    createDropdownState(),
  ], // Assuming 3 work points for illustration
});

const toggleDropdown = (dropdown: DropdownState) => {
  dropdown.isOpen = !dropdown.isOpen;
};

const selectOption = (dropdown: DropdownState, optionIndex: number) => {
  dropdown.selectedOption = dropdown.options[optionIndex].label;
  dropdown.options.forEach((option, i) => {
    option.selected = i === optionIndex;
  });
  dropdown.isOpen = false; // Close dropdown after selection
};
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
            @click="toggledropdown(dropdown)"
          >
            {{ dropdown.selectedoption }}
          </div>
          <ul
            v-if="dropdown.isopen"
            tabindex="0"
            class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li
              v-for="(option, optionindex) in dropdown.options"
              :key="optionindex"
            >
              <a @click="selectoption(dropdown, optionindex)">{{
                option.label
                }}</a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
  <ul id="completed_work_list">
    <h5 id="completed_list_title">completed assignments:</h5>
    <li class="work_point"><a class="work_point" href="#"> hw #4</a></li>
    <li class="work_point"><a class="work_point" href="#">hw #5</a></li>
  </ul>

  <div id="meeting">
    upcoming meetings: <a class="meet_link" href="#"> google calendar</a>
    <br />
  </div>

  <div id="chat_section">
    <textarea id="chat_display" name="chat_info" rows="20" cols="50"></textarea> <br></br>
    <input type="text" id="chat_message" />
    <button id="chat_button" class="btn btn-info" type="submit">chat</button>
  </div>
</template>
