document.getElementById('uploadForm').onsubmit = function(e) {
  e.preventDefault();
  const form = new FormData();
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'multipart/form-data');
  form.append('sampleFile', e.target.sampleFile.files[0]);
  //   fetch('http://localhost:8000/upload', {
  //     method: 'POST',
  //     body: form
  //   });

  const xhr = new HttpRequest({ baseUrl: 'http://localhost:8000'});
  xhr.post('/upload', { data: form });
};

// function transformResponse(text) {
//     console.log('transformResponse');
//     console.log(text + '\n_____________________________');
//     console.log('transformResponse');
// }

// function transformRequest() {
//     console.log('transformRequest');
// }

// const reuest = new HttpRequest({
//   baseUrl: 'http://localhost:8000'
// });

// reuest.get('/form', { transformResponse })
//   .then(response => {
//     console.log(response);
//   })
//   .catch(e => {
//     console.log(e);
//   });