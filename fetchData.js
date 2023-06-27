window.addEventListener("DOMContentLoaded", ()=>{
    axios.get("http://localhost:4000/user/get-details")
    .then((response) =>{
      console.log(response)
  
      for(var i =0; i< response.data.allDetails.length;i++){
       showUserOnScreen(response.data.allDetails[i])
      }
    }).catch((err) => console.log(err))
  
  })

  function showUserOnScreen(obj){
    const parentElement = document.getElementById('tableOfDetails')
   
    const childNode =`
    <section class="table__body">
    <tbody >
  <tr>
    <td>${obj.id}</td>
   
    <td>${obj.firstName}</td>
    <td>${obj.lastName}</td>
    <td>${obj.email}</td>
    <td>${obj.phone}</td>
    <td>${obj.address}</td>
    <td>${obj.companyName}</td>
  
  </tr>
  </tbody>
  </section>
  `  
                    
                      
     parentElement.innerHTML = parentElement.innerHTML +childNode
  }