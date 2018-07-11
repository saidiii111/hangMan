// (function(){
//
//   const baseURL = 'https://od-api.oxforddictionaries.com/api/v1';
//   const proxy = `http://localhost:1337/${baseURL}`;
//   const appKey = 'acecb86c';
//   const appId = 'fa0637187f9207848fca2e2a30f8131c';
//
//   document.body.querySelector('#request').addEventListener('submit', event => {
//     event.preventDefault();
//
//     let endpoint = event.target.querySelector('#endpoint').value.trim();
//
//     $.ajax(proxy + endpoint, {
//       method: 'GET',
//       headers: {
//         "app_key": appKey,
//         "app_id": appId
//       }
//     }).done(response => {
//       document.body.querySelector('#response').innerText = JSON.stringify(response, null, 2);
//     });
//   });
//
//   //
// })();
