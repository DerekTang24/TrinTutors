<template>
  <div id="tutee_list">
    <h4 id="tutee_list_title" class="font-bold" style="font-size: 24px">
      Michael's Student List:
    </h4>
    <ul style="list-style-type: disc; padding-left: 20px">
      <li class="tutee_point">
        <a class="tutee_point" href="#"> John, Mathematics</a>
      </li>
      <li class="tutee_point">
        <a class="tutee_point" href="#">Emily, English</a>
      </li>
      <li class="tutee_point">
        <a class="tutee_point" href="#"> Henry, Biology</a>
      </li>
    </ul>
  </div>

  <div id="tutee_request_list">
    <h4 id="tutee_request_list_title" class="font-bold">Student Request:</h4>
    <ul style="list-style-type: disc; padding-left: 20px">
      <li class="tutor_point">
        Bella, Mathematics
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
      </li>
      <li class="tutor_point">
        Nick, French
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
      </li>
    </ul>
  </div>
  <button id="tutor_button" class="btn btn-info" type="submit">
    Select Students
  </button>
</template>
