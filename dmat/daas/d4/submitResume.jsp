<%@ page import="java.io.*, javax.servlet.*, javax.servlet.http.*, javax.mail.*, javax.mail.internet.*, javax.activation.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Resume Submitted</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
            text-align: center;
        }
        .message {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 600px;
            margin: 0 auto;
            text-align: left;
        }
    </style>
</head>
<body>
    <div class="message">
        <h1>Thank You!</h1>
        <p>Your resume has been submitted successfully.</p>
        <p>We have the following vacancies that might interest you:</p>
        <ul>
            <li>Software Engineer - Location: San Francisco, CA</li>
            <li>Data Scientist - Location: New York, NY</li>
            <li>UI/UX Designer - Location: Austin, TX</li>
        </ul>
    </div>
    
    <%-- Java code for processing the form submission and sending email --%>
    <%
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String coverLetter = request.getParameter("coverLetter");
        
        Part resumePart = request.getPart("resume");
        String resumeFileName = resumePart.getSubmittedFileName();
        InputStream resumeInputStream = resumePart.getInputStream();

        // Setting up email parameters
        String host = "smtp.example.com";
        String user = "your-email@example.com";
        String password = "your-email-password";
        String to = email;
        String from = "your-email@example.com";
        String subject = "Resume Submission Confirmation";
        String messageText = "Dear " + name + ",\n\nThank you for submitting your resume. We have received your resume and it is being reviewed.\n\nWe have the following vacancies that might interest you:\n- Software Engineer\n- Data Scientist\n- UI/UX Designer\n\nBest regards,\nYour Company";

        Properties properties = new Properties();
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.auth", "true");
        
        Session session = Session.getDefaultInstance(properties, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(user, password);
            }
        });
        
        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            message.setSubject(subject);

            // Creating multipart content for email
            Multipart multipart = new MimeMultipart();
            
            // Adding text part
            MimeBodyPart textPart = new MimeBodyPart();
            textPart.setText(messageText);
            multipart.addBodyPart(textPart);

            // Adding resume attachment
            MimeBodyPart attachmentPart = new MimeBodyPart();
            attachmentPart.attachFile(new File(resumeFileName));
            multipart.addBodyPart(attachmentPart);

            message.setContent(multipart);

            Transport.send(message);
        } catch (Exception e) {
            e.printStackTrace();
        }
    %>
</body>
</html>
