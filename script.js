// Cameron Samuels
// May 26, 2022

document.addEventListener("DOMContentLoaded", function() {
  
  let emailBody = document.querySelector("textarea");
  let sendButton = document.querySelector("a");
  
  emailBody.innerHTML = "Chairman Mincberg,\nAs the presiding chair of Houston First's Board of Directors, you have influence over the NRA Convention taking place in Houston, Texas on May 27-29, 2022. You must make the necessary decision to cancel the convention because the NRA has no place in Texas.\nThe GOP and Texas GOP have refused to support common sense gun violence prevention legislation after every massacre that has left communities devastated. Instead, they have pushed lies about the perpetrators &ndash; like falsely pinning the tragedy in Uvalde against Sam, a transgender woman &ndash; and have continued to accept money from the gun lobby to pass legislation like HB1927 in Texas which allows permitless carry.\nAccording to the Gun Violence Archive, gun violence kills at least 100 people each day, totaling more than 40,000 each year &mdash; the leading cause of death for young people. There were 692 mass shootings last year, more than there were days in the year. Communities are torn apart by this violence. We cannot safely attend high school in Santa Fe, shop for groceries in El Paso, drive down the highway in Midland-Odessa, be of a minority ethnicity in Dallas, or attend elementary school in Uvalde to just name a few.\nWe must end this cycle. I beg you to pull the convention on the NRA so they cannot pull the trigger on us.";
  
  function updateHref() {
    let recipient = "dmincberg@flagshipco.com";
    let body = emailBody.value;
    while (body.includes("\n"))
      body = body.replace("\n", "%0D%0A%0D%0A");
    let href = "mailto:" + recipient + "?subject=Pull the Convention, not the Trigger&body=" + body;
    sendButton.setAttribute("href", href);
  }
  
  emailBody.addEventListener("change", updateHref);
  updateHref();
  
});
