//#region

const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  service: "gmail",

  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});
//  console.log(process.env.MAIL_PASSWORD);


function sendMessageTouser(email,data) {
console.log(data);
  const mailOption = {
    from: "egyptbesttours1@gmail.com",
    to: email,
    subject: "Egy best Tours",
    html:`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <title>Document</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
            *{
            box-sizing: border-box; 
            scroll-behavior: smooth;
            margin: 0;
            padding: 0;  
            font-family: 'Roboto', sans-serif;
    
            }
            @media screen {
              @font-face {
                font-family: 'Source Sans Pro';
                font-style: normal;
                font-weight: 400;
                src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
              }}
            body{
                padding: 0;
                margin: 0;
                margin: 10px auto;
                padding: 0.2% 7.5%;
            }
    
            .parent .img img{
                margin: 0;
                padding: 0;
                width: 100%;
                height: 39.5vh;
            }
    
            .parent .text .intro{
                border-bottom: 1px solid #333;
                padding-bottom: 5px;
                margin-bottom: .5em;
            }
    
            .parent .text .intro p{
                border-bottom: 1px solid #333;
                padding-bottom: 5px;
                padding-top: 5px;
                font-weight: 500;
                color: #000032f4;
                font-size: 1.1em;
            }
    
            .parent .text p{
                line-height: 1.4;
                font-size: 1em;
                white-space: nowrap;
                overflow: hidden;
                font-weight: 300;
            }
    
            .parent .text ul{
                padding-left: 50px;
                padding-top: 5px;
                white-space: nowrap;
                overflow: hidden;
            }
    
            .parent .text ul li{
                padding-bottom: 7px;
            }
    
            .parent .contact .text{
                padding-top: .7em;
            }
            .listicon{
                display: flex;
              
                justify-content: space-between;
                margin: 20px;
                width: 150px
            }
            .parent .contact .icon p{
                padding-bottom: .5em;
            }
    
            .parent .contact .icon p{
                padding-top: 7px;
            }
    
                /* .parent .contact .icon a{
                    padding-left: 10px;
                    width: 1.4em;
                    height: 1.4em;
                    
        
                } */
    
            .parent .contact .icon a i{
                font-size: 1.3em;
    
            }
    
            .parent .Conclusion p{
                margin-top: 18px;
            }
            
            .parent .Conclusion p:nth-child(2){
                font-weight: bold;
                padding: 2px;
            }
    
        </style>
    </head>
    <body>
        <section class="parent">
            <div class="img">
                <img src=${data.images[0].img} alt="">
            </div>
            <div class="text">
                <div class="intro"><p>"Dear valued customer,</p></div>
                <p>We wanted to let you know about some exciting new tour packages that we are offering. Whether you're ting for a retrong been</p>
                <p>getaway, an adventurous having trip, or a cultural oy tour we have something for everyone</p>
                <p>Our new packages include:</p>
                <ul>
                    <li>${data.descrption}</li>
                    
                </ul>
            </div>
            <div class="contact">
                <div class="text">
                    <p>To learn more about the packages and to book your next venture, please visit our website of contact our customer support team at</p>
                    <p>+20 1004808407</p>
    
                    <div class="icon">
                        <p>or you can Follow us on</p>
                        <div class="listicon" style="padding:2.5% 0% 2.5% 0%">
                            <a style="font-size:1px" href="#">
                                <img src="https://ci4.googleusercontent.com/proxy/6XlKQtAQiZcpAch5Vkopv0AgSAHybSAgiBXy1bfUcY5exAkXdmOGKuYDbJxKjRws_atu-N8Tnscw0a-nRy7aWrrS62klZDzOAoj5V_3tXwRCTsGCdxDG9SUUB5AlZGSZSsojJvSZoT-xPc2wHLwILpcy_CrdpX0tvUY3j4Hyg_HqcnHeeKbqacQ3T9n_aiXy6vR3LpfaLurLmD2kkK6nUlnOps5k=s0-d-e1-ft#https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-misc.s3.amazonaws.com/mailspin/prod/03_18_2020_19_34_15_LN.png" alt="Visit us on LinkedIn" width="18" height="auto" style="display:block;width:18px;height:auto" class="CToWUd" data-bit="iit">
                            </a>
                            <a style="font-size:1px" href="#">
                            <img src="https://ci3.googleusercontent.com/proxy/08TtqQi5cAlerHKjaI5K2j6KyszgWnRVlRqu849Hg1j4qFcubGo3uQ0rfWwxL73qzz5XqfEkTtron4sEGEGG8YOeCOkVOE2KczszmG9z6TegtJe7FpJevC2RiBVuNn4JeDE5PN-FumuXVW2gk8ypcIChDE8bNTjD153bmahOzjyIcDpvIsAUj1g7NNWQWvaqzy4ly5LYwRQUnpNhMN5kFfsL0SpN=s0-d-e1-ft#https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-misc.s3.amazonaws.com/mailspin/prod/03_18_2020_19_33_42_IG.png" alt="Visit us on Instagram" width="20" height="auto" style="display:block;width:20px;height:auto" class="CToWUd" data-bit="iit">
                        </a>
                        <a style="font-size:1px" href="https://instagram.com/espe_cial2090?igshid=YmMyMTA2M2Y=">
                        <img src="https://ci5.googleusercontent.com/proxy/srFKc1xniLSHz9WBHibElDY6rGHdf4DrjIdEjdZgJ0KAcf-_I3btCkv-DTCJVeQ35VtDzxIGhbN85IwFE7B6Uex_DPBg0bscq-qjATL9fVQZA-9OfAnFpGHicRHF6NDCeJynKXAHOv1eZ3svek4Doz9ApSfc-yEA_x-aXYLp8b2Vb37JY9MjlWp2vkfuuGcn5xNryYHOM8Wo9gA28YrY958lhXSJ=s0-d-e1-ft#https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-misc.s3.amazonaws.com/mailspin/prod/03_18_2020_19_34_30_TW.png" alt="Visit us on Twitter" width="21" height="auto" style="display:block;width:21px;height:auto" class="CToWUd" data-bit="iit">
                    </a>
                    <a style="font-size:1px" href="https://www.facebook.com/profile.php?id=100063915936135&mibextid=ZbWKwL">
                    <img src="https://ci4.googleusercontent.com/proxy/Jn-xxsnZK6pEnKMxpoJ5nWCask1jK9_spHM6UrrlXkk8cSEYGdEPm5Ca2Gvz7Ijw1HHFS51c8-lQK-y-1vjjOph-NDyMtMcwdviIsiDrxCPYffmMBiBYyLN2g7RrscWOfYGQEs8p-d-9LipezDxb47cfAkpwwDMDyvs2vXFh9jcLJaS-WV0a0a4ZDDOMnbgskkwbOAqSHdE6wFKvgB7AnxvoYJoi=s0-d-e1-ft#https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-misc.s3.amazonaws.com/mailspin/prod/03_18_2020_19_35_00_FB.png" alt="Visit us on Facebook" width="8" height="auto" style="display:block;width:8px;height:auto" class="CToWUd" data-bit="iit">
                </a>
                        </div>
                    </div>
                    <div class="Conclusion">
                        <p>Thank you for choosing Egypt Tours and we look forward to helping you plan your next vacation</p>
                        <p>Best regards,<br>Egypt Best Tours</p>
                    </div>
                </div>
            </div>
        </section>
    </body>
    </html>`,
  };
  transporter.sendMail(mailOption, function (err, result) {
    if (err) {
  return false;
    } else {
    return true;
    }
  });
}

module.exports = sendMessageTouser;
//#endregion
