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
      { label: "Mathematics", selected: false },
      { label: "English", selected: false },
      { label: "Languages", selected: false },
      { label: "Science", selected: false },
      { label: "Computer Science", selected: false },
      { label: "History", selected: false },
    ],
    selectedOption: "Subject", // Initial prompt
  });
}

// Create a single dropdown state
const dropdown = createDropdownState();

const toggleDropdown = () => {
  dropdown.isOpen = !dropdown.isOpen;
};

const selectOption = (optionIndex: number) => {
  const selectedOption = dropdown.options[optionIndex];
  dropdown.selectedOption = selectedOption.label;
  dropdown.options.forEach((option, i) => {
    option.selected = i === optionIndex;
  });
  dropdown.isOpen = false; // Close dropdown after selection
};
</script>
<template>
  <br></br><br></br>
  <div class="dropdown-container">
    <div class="dropdown dropdown-bottom">
      <div
        tabindex="0"
        role="button"
        class="btn m-1 bg-blue-500 text-black"
        @click="toggleDropdown"
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
          @click="selectOption(optionIndex)"
        >
          <a>{{ option.label }}</a>
        </li>
      </ul>
    </div>
  </div>
  
  <table class="table">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>
          <a href="#"
            >Tutor Name: Michael<br />
            Grade: 11<br />
            Experience: 2 years</a
          >
        </td>
        <td>
          <a href="#"
            >Tutor Name: Jake<br />
            Grade: 9<br />
            Experience: 0 years</a
          >
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>
          <a href="#"
            >Tutor Name: David<br />
            Grade: 10<br />
            Experience: 1 year</a
          >
        </td>
        <td>
          <a href="#"
            >Tutor Name: Caroline<br />
            Grade: 12<br />
            Experience: 3 years</a
          >
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>
          <a href="#"
            >Tutor Name: Isaac<br />
            Grade: 11<br />
            Experience: 1 year</a
          >
        </td>
        <td>
          <a href="#"
            >Tutor Name: Charlie<br />
            Grade: 11<br />
            Experience: 2 years</a
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>
