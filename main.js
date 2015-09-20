+function ($) {

  var $message  = $('#message'),
      $posts    = $('#posts'),
      $form     = $('form'),
      $textarea = $('textarea');

  $form.submit( function(e) {
    e.preventDefault();
    e.stopPropagation();

    // Retrieve variables needed for the ajax event.
    var action   = $(this).attr('action'),
        method   = $(this).attr('method'),
        formData = $(this).serialize();

    $.ajax({
      url: action, // "./ajax.php" in this tutorial
      type: method, // post
      data: formData, // text that you input in textarea
      beforeSend: function () {
        $form.removeClass();
      }
    }).done( function (data, status, xhr) {
      // Event to be triggered if succeed

      // Display the message that you got from
      // the server side, then add a class.
      $message.html(data).addClass('ok');

      // Append the post.
      var newPost = document.createElement('li'),
          node    = document.createTextNode( $textarea.val() );
      newPost.appendChild(node);
      $posts.append(newPost);

      // Empty textarea
      $textarea.val('');

    }).fail( function (xhr, status, error) {
      // Event to be triggered if fail

      // Display the message that you got from
      // the server side, then add a class.
      $message.html( xhr.responseText ).addClass('error');

    }); // End ajax

  }); // End submit event
}(jQuery);
