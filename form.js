let btn = document.getElementById('submit')
btn.addEventListener('click',Storage)
function Storage(event) {
    event.preventDefault();
    const firstName= document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email =document.getElementById('emailid').value;
    const phone =document.getElementById('phone').value;
    const address =document.getElementById('address').value;
    const companyName =document.getElementById('companyName').value;
    const fileInput= document.getElementById('fileInput').value
   
  const obj={
    firstName,
    lastName,
    email,
    phone,
    address,
    companyName,
    fileInput
  }
 
  console.log(obj)
  window.location.href='./fetchData.html'
  axios.post("http://localhost:4000/user/add-details",obj)
  .then((response) => {
    //console.log(obj.id)
      showUserOnScreen(response.data.details)
      
     // console.log(newExpenseDetails)
  }).catch(err => {
      document.body.innerHTML =document.body.innerHTML + "<h4>Something Went wrong </h4>"
  })
}
