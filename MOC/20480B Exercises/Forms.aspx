<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8" />
    <title>Contact us</title>
</head>
<body>
    <h1>Contact Contoso Conferencing</h1>
    <p>Contoso Conferencing Ltd.</p>
    <p>
        123 South Street
        <br />
        Somewhere
        <br />
        Over There
        <br />
        <em>USA</em>
    </p>
    <p>
        <a href="mailto:contact@contoso.com">contact@contoso.com
        </a>
    </p>
    <p>
        If you would like to contact Contoso Conferencing, whether you're interested in our services or in a conference we're currently organizing, don't hesitate to contact us using our enquiry form (<strong>Bold fields</strong> are required).
    </p>
    <form method="post" action="support.aspx">
        <fieldset>
            <legend>Your Details and Enquiry
            </legend>
            <ol>
                <li>
                    <label>
                        <strong>Name</strong><br />
                        <input type="text" name="UserName" />
                    </label>

                </li>
                <li>
                    <label>
                        Telephone
                        <br />
                        <input type="text" name="Phone" />
                    </label>
                </li>
                <li>
                    <label>
                        Email Address
                        <br />
                        <input type="text" name="Email" />
                    </label>
                </li>
                <li>
                    <label>
                        <strong>Message</strong><br />
                        <textarea name="Message" cols="30" rows="10"> Add your message here</textarea>
                    </label>
                </li>
            </ol>
        </fieldset>
        <input type="submit" value="Send" />
    </form>
    <script type="text/javascript" src="alertme.js">        
    </script>
</body>
</html>
