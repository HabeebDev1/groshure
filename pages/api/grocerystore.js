import sendgrid from "@sendgrid/mail"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res){
    
  
  try{
    await sendgrid.send(
      {
        to: 'help@groshure.com.au',
      from: 'help@groshure.com.au', 
      subject: "Groshure's store",
      text: 'and easy to do anywhere, even with Node.js',
      html: `<!DOCTYPE html">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
      </head>
      
      <body>
        <div style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div style="padding-left:5px; padding-right:5px; color:white;">
                <h3>New form submission on Local Grocery Store</h3><b>
                <p>someone just submitted a form on Groshure. Here's what they had to say</p><br/><br/>
                <div>
                  <p>Store Name</p>
                  <p style="font-weight:bolder;">${req.body.storename}</p>
                </div>
                <br/>
                <br/>
                <div>
                  <p>Email</p>
                  <p style="font-weight:bolder;">${req.body.email}</p>
                </div>
                <br/>
                <br/>
                <div>
                  <p>Phone Number</p>
                  <p style="font-weight:bolder;">${req.body.phoneNumber}</p>
                </div>
                <br/>
                <br/>
                <div>
                  <p>Property Address</p>
                  <p style="font-weight:bolder;">${req.body.propertyAddress}</p>
                </div>
                <br/>
                <br/>
                <div>
                  <p>Phone Number</p>
                  <p style="font-weight:bolder;">${req.body.suburb}</p>
                </div>
                <br/>
                <br/>
                <div>
                  <p>Post code</p>
                  <p style="font-weight:bolder;">${req.body.postcode}</p>
                </div>
                <br/>
                <br/>
                <div>
                  <p>State</p>
                  <p style="font-weight:bolder;">${req.body.state}</p>
                </div>
                <br/>
                <br/>
                <div>
                  <p>Additional Info</p>
                  <p style="font-weight:bolder;">${req.body.additionInfo}</p>
                </div>
                <br/>
                <br/>
              </div>
      </body>
      </html>`,
      }
    )

  }catch(err){
    console.log(err)
    return res.status(err.statusCode || 500).json({error: "opps!! something went wrong"})
  }

  return res.status(200).json({error : ""})

}

export default sendEmail

