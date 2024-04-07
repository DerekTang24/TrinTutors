<template>
  <div class="dropdown dropdown-bottom">
    <div tabindex="0" role="button" class="btn m-1 bg-blue-500 text-black">
      Subject
    </div>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li><a>Mathematics</a></li>
      <li><a>English</a></li>
      <li><a>Languages</a></li>
      <li><a>Science</a></li>
      <li><a>Computer Science</a></li>
      <li><a>History</a></li>
    </ul>
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
