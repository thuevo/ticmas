
const Urlcurry="http://git.micurry.html"
function abrirVentana() {
const ventana = document.getElementById('ventanacorreo');
ventana.showModal();
}

function cerrarVentana() {
const ventana = document.getElementById('ventanacorreo');
let destino = document.getElementById('correo').value;
ventana.close ();
alert(`Correo enviado a: ${destino}!`);
enviarCorreo(destino,'curriculum','Te envio mi curriculum ' + Urlcurry);


}

  
  const CLIENT_ID = 'TU_ID';
  const API_KEY = 'TU_API_KEY';
  const SCOPE = 'https://www.googleapis.com/auth/gmail.send';
  const EMAIL = 'lucianobisbal@gmail.com';
  
  function enviarCorreo(destinatario, asunto, mensaje) {
    console.log ('este destinatario '+ destinatario);
    console.log ('este mensaje '+ mensaje);
    gapi.client.load('gmail', 'v1', () => {
      const base64EncodedEmail = btoa(
        `From: "${EMAIL}"
  To: ${destinatario}
  Subject: ${asunto}
  
  ${mensaje}`
      ).replace(/\+/g, '-').replace(/\//g, '_');
  
      const request = gapi.client.gmail.users.messages.send({
        userId: 'me',
        resource: {
          raw: base64EncodedEmail
        }
      });
  
      request.execute((res) => {
        console.log('Correo enviado: ' + res);
      });
    });
  }
  
  function handleClientLoad() {
    gapi.load('client:auth2', initClient);
  }
  
  function initClient() {
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      scope: SCOPE
    }).then(() => {
      gapi.auth2.getAuthInstance().signIn();
    });
  }
