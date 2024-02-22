const imageContainer=document.getElementById('image-container');
const loader=document.getElementById('loader');

let photosArray=[];//let photos cause value of photo gonna change everytime
//Unspalsh API
const count=15;
const apiKey='lgZYlPI6cPyXI0eBKobiTAzrwKM-moBrG19YGSF0xNg';
const apiUrl1 = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
const apiUrl = 'https://api.unsplash.com/photos/random?client_id=' + apiKey + '&count=' + count //&count bhaneko chuttai query

//create elemntes for links and photos,add to dom
function displayPhotos(){
  console.log(photosArray)
  photosArray.forEach((photo) =>{
        // create <a> to link to unspalsh
        const item=document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','_blank');
        //create <img> for photo
        const img=document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt',photo.alt_description);
        img.setAttribute('title',photo.description );
        //put image isnide<a>,then both is=nside our image container element
        item.appendChild(img);
        imageContainer.appendChild(item);
    }); 
}

//Get photos from unpsalsh api

async function getPhotos()
{
        const response= await // Request for image resource
        fetch(apiUrl, {
            mode: "cors",
            // credentials: "include", I used include before and it gave me errors
            headers: {
              "Content-Type": "application/json"
            }
          })
        // received image resource and now need to jsonify the response
            .then(async function (result) {
              const a = await result.json();
              photosArray = a
              displayPhotos()
            })
}
getPhotos();