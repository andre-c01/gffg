function gen() {

  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  var emails = to.split(',');
  var email = '';

  document.getElementById('result').value=`<?xml version='1.0' encoding='UTF-8'?>
<feed xmlns='http://www.w3.org/2005/Atom' xmlns:apps='http://schemas.google.com/apps/2006'>
  <title>Mail Filters</title>`;

  for(var i = 0; i < emails.length; i++){
    var email = emails[i];
    var entry = `
  <entry>
      <category term='filter'></category>
      <title>Mail Filter</title>
      <content></content>
      <apps:property name='from' value='${from}'/>
      <apps:property name='forwardTo' value='${email}'/>
      <apps:property name='sizeOperator' value='s_sl'/>
      <apps:property name='sizeUnit' value='s_smb'/>
  </entry>`;
    document.getElementById('result').value+=`${entry}`;
  }

  document.getElementById('result').value+=`\n</feed>`;
}

function copy() {
  // Get the text field
  var copyText = document.getElementById("result");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
