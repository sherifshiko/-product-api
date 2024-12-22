fetch('https://fakestoreapi.com/products')
.then(function(text){return text.json()})
.then(function(products){
    var productView = document.getElementById("productView");
    var htmlCollection = ``;
    for (var post of products) {
        htmlCollection += `  <div class="col-md-3 d-flex">
                                  <div class="card" style="width: 18rem;">
                                         <img height="200" src="${post.image}" class="card-img-top" >
                                      <div class="card-body">
                                         <h5 class="card-title"><a href="#" class="text-decoration-none">${post.title.slice(0,20)}</a></h5>
                                         <p class="card-text">${post.description.slice(0,50)}</p>
                                       <div class="d-flex justify-content-between align-items-lg-center">
                                         <h6 class="text-danger">${post.price}$</h6>
                                         <a href="#" type="button" class="btn btn-primary "><i class="fa-solid fa-cart-plus"></i></a>
                                       </div>
                                       <div class="text-center">
                                    <a data-post-id="${post.id}" href="#" type="button" class="btn ViewBtn" style="background-color:#F87A53;" " data-bs-toggle="modal" data-bs-target="#productModel">View Product</a>
                                   </div>
                                     </div>
                                   </div>
                                   
                              </div>`
    }
    productView.innerHTML = htmlCollection

    var ViewBtn = document.querySelectorAll(".ViewBtn");
    ViewBtn.forEach(function(btn){
      btn.addEventListener('click',function(e){
        var postId = e.target.dataset.postId
        fetch(`https://fakestoreapi.com/products/${postId}`)
                .then(function(response){return response.json()})
                .then(function(data){
                  console.log(data);
                  
                  var modalBody = document.querySelectorAll(".modal-body")
                  modalBody.innerHTML = `<div class="row">
                                              <div class="col-md-4 row col-4">
                                              <h2 class="text-primary">${data.title}</h2>
                                              <p>${data.description}</p>
                                              <h5 class="text-danger">${data.price}</h5>
                                              <div>
                                                <a href="#" type="button" class="btn btn-primary "><i class="fa-solid fa-cart-plus"></i></a>
                                              </div>
                                          </div>
                                           <div class="col-md-8">
                                             <div>
                                               <img src="${post.image}" alt="" class="w-100">
                                             </div>
                                          </div>
                                       </div>`
                  
        })
      })
    })

})

