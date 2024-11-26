<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "your_email@example.com"; // Replace with your email address
    $subject = "New Contact Message from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send your message. Please try again later.";
    }
}
?>


<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Set the email recipient (replace with your email address)
    $to = "youremail@example.com";
    $subject = "New Contact Form Submission";

    // Compose the email
    $email_content = "
    <html>
    <head>
        <title>New Contact Form Submission</title>
    </head>
    <body>
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Message:</strong> $message</p>
    </body>
    </html>
    ";

    // Set email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: <$email>" . "\r\n";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        // If mail is sent, show the thank-you message
        echo '<script>
                document.getElementById("contactForm").reset();
                document.getElementById("thankYouMessage").style.display = "block";
              </script>';
    } else {
        echo '<script>alert("There was an error sending your message. Please try again later.");</script>';
    }
}
?>
