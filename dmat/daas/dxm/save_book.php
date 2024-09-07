<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $language = $_POST['language'];
    $title = $_POST['title'];

    $xml = new DOMDocument();
    $xml->load('books.xml');

    $newBook = $xml->createElement('book');
    $langElement = $xml->createElement('language', $language);
    $titleElement = $xml->createElement('title', $title);
    $newBook->appendChild($langElement);
    $newBook->appendChild($titleElement);
    $xml->documentElement->appendChild($newBook);

    $xml->save('books.xml');
}
?>
