<?php
// Land2Sea Detailing — Contact Form Handler
// Receives POST from book.html modal form and emails kaidenadolf@gmail.com

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: book.html');
    exit;
}

// Sanitize inputs
$name    = htmlspecialchars(strip_tags(trim($_POST['name']    ?? '')));
$email   = htmlspecialchars(strip_tags(trim($_POST['email']   ?? '')));
$phone   = htmlspecialchars(strip_tags(trim($_POST['phone']   ?? '')));
$service = htmlspecialchars(strip_tags(trim($_POST['service'] ?? '')));
$vehicle = htmlspecialchars(strip_tags(trim($_POST['vehicle'] ?? '')));
$message = htmlspecialchars(strip_tags(trim($_POST['message'] ?? '')));

// Basic validation
if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: book.html?error=1');
    exit;
}

$to      = 'kaidenadolf@gmail.com';
$subject = "New Quote Request — {$name}";

$body  = "You received a new quote request from your website.\n";
$body .= "------------------------------------------------\n";
$body .= "Name:     {$name}\n";
$body .= "Email:    {$email}\n";
$body .= "Phone:    {$phone}\n";
$body .= "Service:  {$service}\n";
$body .= "Vehicle:  {$vehicle}\n";
$body .= "------------------------------------------------\n";
$body .= "Message:\n{$message}\n";
$body .= "------------------------------------------------\n";
$body .= "Reply directly to this email to respond to {$name}.";

$headers  = "From: noreply@land2seadetailing.com\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . PHP_VERSION . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers);

header('Location: book.html?' . ($sent ? 'sent=1' : 'error=1'));
exit;
