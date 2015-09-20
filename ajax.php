<?php
try {

  /**
   * The value inside of $_POST[] should match
   * the name of your textarea that you set in index.php.
   */
  if ( !isset($_POST["text"]) ) {
    throw new Exception("Textarea named 'text' doesn't exist.");
  }
  $text = $_POST["text"];
   if (!$text) {
     throw new Exception("Textarea is empty.");
   }

  // Usually you want to store this value to DB.
  // But this tutorial is not designed for it.
  // So, we skip this part.

  $message = "Your ajax is working successfully.";

  // Return $message to the client side.
  echo $message;

} catch(Exception $e) {
  header('HTTP/1.1 401 Unauthorized');
  echo $e->getMessage();
}
