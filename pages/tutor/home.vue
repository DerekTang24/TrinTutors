<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <li class="nav-item active">
        <a class="navbar-brand text-white-50" href="#">TRINTutors</a>
      </li>
    </nav>
  </div>

  <ul id="tutee_list">
    <h4 id="tutee_list_title">Tutor's Tutee List:</h4>
    <li class="tutee_point">
      <a class="tutee_point" href="#"> Tutee #1, Subject</a>
    </li>
    <li class="tutee_point">
      <a class="tutee_point" href="#">Tutee #2, Subject</a>
    </li>
    <li class="tutee_point">
      <a class="tutee_point" href="#"> Tutee #3, Subject</a>
    </li>
  </ul>

  <ul id="tutee_request_list">
    <h4 id="tutee_request_list_title">Tutee Request:</h4>
    <li class="tutor_point">
      Tutee #4, Subject
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
    </li>
    <li class="tutor_point">
      Tutee #5, Subject
      <input
        class="form-check-input"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
    </li>
  </ul>
  <button id="tutor_button" class="btn btn-info" type="submit">
    Select Tutees
  </button>
</template>
