function buildTodoHTML(todo){
  var html =  '<li class="result__lists__element">' +
                '<p class="result__lists__element--name">' +
                  '<a href="/lists/' + todo.list_id + '/todos" class="result__lists__element--name--link">' + todo.body + '</a>' +
                '</p>' +
                '<div class="result__lists__element--box clearfix">' +
                  '<div class="result__lists__element--box--list">' +
                    '<p class="result__lists__element--box--list--label">リスト:</p>' +
                    '<p class="result__lists__element--box--list--content">' + todo.list_name+ '</p>' +
                  '</div>' +
                  '<ul class="result__lists__element--box--date">' +
                    '<li class="result__lists__element--box--date--limit">' +
                      '<p class="result__lists__element--box--date--limit--label">期日:</p>' +
                      '<p class="result__lists__element--box--date--limit--content">' + todo.limit + '</p>' +
                    '</li>' +
                    '<li class="result__lists__element--box--date--created">' +
                      '<p class="result__lists__element--box--date--created--label">作成日:</p>' +
                      '<p class="result__lists__element--box--date--created--content">' + todo.created_at + '</p>' +
                    '</li>' +
                  '</ul>' +
                '</div>' +
              '</li>';
  return html;
}

function buildListHTML(list){
  var html =  '<li class="result__lists__element">' +
                '<p class="result__lists__element--name">' +
                  '<a href="/lists/' + list.id + '/todos" class="result__lists__element--name--link">' + list.name + '</a>' +
                '</p>' +
                '<div class="result__lists__element--box clearfix">' +
                  '<ul class="result__lists__element--box--date">' +
                    '<li class="result__lists__element--box--date--created">' +
                      '<p class="result__lists__element--box--date--created--label">作成日:</p>' +
                      '<p class="result__lists__element--box--date--created--content">' + list.created_at + '</p>' +
                    '</li>' +
                  '</ul>' +
                '</div>' +
              '</li>';
  return html;
}

function buildNoticeTodo(num){
  if(num) {
    var html = '<div class="notice__todo__result">Todoが' + num + '件見つかりました</div>';
  } else {
    var html = '<div class="notice__todo__result">対象のTodoは見つかりません</div>';
  }
  return html;
}

function buildNoticeList(num){
  if(num) {
    var html = '<div class="notice__todo__result">Todoリストが' + num + '件見つかりました</div>';
  } else {
    var html = '<div class="notice__todo__result">対象のTodoリストは見つかりません</div>';
  }
  return html;
}

$(document).on('turbolinks:load', function(){
  $('#search-button').on('click', function(){
    $('.notice__todo__result').remove();
    $('.result__todos').empty();
    $('.result__lists').empty();
    var input = $('#search-input').val();
    if(input) {
      $.ajax({
        type: 'GET',
        url: '/search',
        data: {
          input: input
        },
        dataType: 'json'
      })
      .done(function(data){
        var todoNum = data.todo.length;
        $('.result__todos').before(buildNoticeTodo(todoNum));
        $.each(data.todo, function(i, todo) {
          var html = buildTodoHTML(todo);
          $('.result__todos').append(html);
        });
        var listNum = data.list.length;
        $('.result__lists').before(buildNoticeList(listNum));
        $.each(data.list, function(i, list) {
          var html = buildListHTML(list);
          $('.result__lists').append(html);
        });
      })
      .fail(function(data){
      });
    } else {
      $('.result__todos').before(buildNoticeTodo(0));
      $('.result__lists').before(buildNoticeList(0));
    }
  });
});
