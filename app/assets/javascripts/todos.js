function changeState(state, id) {
  if(state == 1) {
    var html =  '<div id="button--' + id +'" class="complete__button state__button" data-state=2>' +
                  '<p id="state">完了</p>' +
                '</div>';
    return html;
  } else {
    var html =  '<div id="button--' + id + '" class="no__complete__button state__button" data-state=1>' +
                  '<p id="state">未完了</p>' +
                '</div>';
    return html;
  }
}

$(document).on('turbolinks:load', function(){
  $(document).on('click', '.state__button', function(){
    var list_id = $('.todo__detail').data('list-id');
    var id = $(this).parent().data('id');
    var state = $(this).data('state');
    $.ajax({
      type: 'PATCH',
      url: '/lists/' + list_id + '/todos/' + id,
      data: {
        state: state
      },
      dataType: 'json'
    })
    .done(function(){
      $('#button--' + id).remove();
      $('#todo__' + id).append(changeState(state, id));
    })
    .fail(function(){});
  });
});
