import React from "react";
import 'materialize-css';
import './style/Contact.css';


//JAVASCRIPT FOR CONTACT ME close for cleaner code
(function() {
  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      
      // singular form elements just have one value
      formData[name] = element.value;

      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
    formData.formGoogleSendEmail
      = form.dataset.email || ""; // no email by default

    return {data: formData, honeypot: honeypot};
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var form = event.target;
    var formData = getFormData(form);
    var data = formData.data;

    // If a honeypot field is filled, assume it was done so by a spam bot.
    if (formData.honeypot) {
      return false;
    }

    disableAllButtons(form);
    var url = form.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    //xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          form.reset();
          var formElements = form.querySelector(".form-elements")
          if (formElements) {
            formElements.style.display = "none"; // hide form
          }
          var thankYouMessage = form.querySelector(".thankyou_message");
          if (thankYouMessage) {
            thankYouMessage.style.display = "block";
          }
        }
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    xhr.send(encoded);
  }
  
  function loaded() {
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();


//contact form 
function Contact() {
  return (
    <div className='row'>
      <h1 className="title">Contact Me</h1>

      {/* Form connected to the google scripts */}
      <form className="gform" method="POST" data-email="aaron.k.platt@gmail.com" action="https://script.google.com/macros/s/AKfycbwzAdU9nKS7FAE8yZ1sNi6OExC5G7rPmByGxTwB2ME-96Yk71EGB7er_PBvkzxfkoWEPA/exec">
      <div className="card col s4 offset-s4">

        {/* form */}
        <div className="form-row">

          {/* NAME */}
          <div className="row forms">
              <input type="text" className="form-control formed" name="Name" placeholder="Name"></input>
          </div>

          {/* Email */}
          <div className="row forms"> 
              <input type="text" className="form-control formed" name="Email" placeholder="Email"></input>
          </div>

          {/* Message*/}
          <div className="row forms">
              <textarea type="text" className="form-control message" name="Message" placeholder="Message"></textarea>
              <button type="submit" className="signUp-btn">Submit</button>
          </div>
          {/* Submit */}

        </div>
      </div>
          {/* Thank you message */}
          <div className="col s10 offset-s1 thankyou_message">
            <p className='thankYouText'>
              <em>Thanks</em> for contacting me! I'll get back to you soon!
            </p>
          </div>
      </form>
    </div>
  );
}

export default Contact;
