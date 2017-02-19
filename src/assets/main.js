$(function() {
  const endpoint = "https://www.codeschool.com/users/171394.json";

  // your code will go here
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: (response) => {
      console.log(response);
      let {badges, courses} = response;

      for(let course of courses.completed) {
        $('#badges').append(`
          <div class="course">
            <h3>${course.title}</h3>
            <img src="${course.badge}" />
            <a href="${course.url}" class="btn btn-primary" target="_blank">See Course</a>
          </div>`
        );
      }
    }
  })

});

