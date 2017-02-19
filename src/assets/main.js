$(function() {
  const endpoint = "https://www.codeschool.com/users/171394.json";

  // your code will go here
  $.ajax({
    url: endpoint,
    dataType: 'jsonp',
    success: (response) => {
      let {badges, courses} = response;

      for(let course of courses.completed) {
        let div = $('<div />', {'class': 'course'}).appendTo($('#badges'))
        $('<h3 />', {text: course.title}).appendTo(div);
        $('<img />', {src: course.badge}).appendTo(div);
        $('<a />', {'class': 'btn btn-primary', target: '_blank', href: course.url, text: 'See Course'}).appendTo(div);
      }
    }
  })

});

