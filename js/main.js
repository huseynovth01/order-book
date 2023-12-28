
//* promise ile  yazilisi

function getBookInfo(bookTitle) {
  return new Promise((resolve, reject) => {
    // Burada normalda bir API isteği gönderilir
    // API'ye kitab adını göndererek melumat alınır.
    setTimeout(() => {
      const bookData = {
        title: 'Suc ve Ceza',
        author: 'Fyidore Dostoyevski',
        pages: 200,
      };

      if (bookTitle === 'Suc ve Ceza') {
        resolve(bookData);
      } else {
        reject('Kitab tapilmadi.');
      }
    }, 2000);
  });
}

getBookInfo('Suc ve Ceza')
  .then(data => console.log(`Kitap: ${data.title} - Yazar: ${data.author}, Sehife sayi: ${data.pages}`))
  .catch(error => console.log(error));

  //-----------------------------------

  // * callback ile  yazilisi

  function getBookInfoCallback(bookTitle, callback) {
    setTimeout(() => {
      const bookData = {
        title: 'Suc ve Ceza',
        author: 'Fyodor Dostoyevsky',
        pages: 200,
      };
  
      if (bookTitle === 'Suc ve Ceza') {
        callback(null, bookData);
      } else {
        callback('Kitab tapılmadı.', null);
      }
    }, 2000);
  }
  
  function displayBookInfo(error, data) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Kitap: ${data.title} - Yazar: ${data.author}, Sayfa Sayısı: ${data.pages}`);
    }
  }
  
  getBookInfoCallback('Suc ve Ceza', displayBookInfo);
  
  //-----------------------------------