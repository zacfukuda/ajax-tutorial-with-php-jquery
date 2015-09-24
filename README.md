## Ajax tutorial with PHP, jQuery for beginners

This tutorial shows you how to make a simple Ajax event with PHP and jQuery. Designed for beginners to Ajax and PHP.

[Official Tutorial Page](http://www.mokuji.me/article/ajax-tutorial-with-php-jquery)

In this tutorial, you will send texts to the server and receive the message along with http status code. After recieving, you will display that message on the current page.
For usability, you will also add a proper class to the message box according to the status code you receive from the server.

Since this tutorial requires you to excute PHP, you need to run the web server. If you are using PHP 5.4 or higher, simply you can run the local web server by,

```bash
$ php -S localhost:8000
```

Please make sure that you are at the application root on the terminal and you are not running the localhost:8000 in the other service, such as MAMP, WAMP, or Vagrant.

In the index.html, the path is written in relative way, so it doesn't matter if you put the codes into the sub-directory.