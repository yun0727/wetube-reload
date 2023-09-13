const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");

const handleSubmit = (event) =>{
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === ""){
    return;
  }
  fetch(`/api/videos/${videoId}/comment`,{
    method:"POST",
    headers:{
      "Content-type":"application/json",
    },
    body: JSON.stringify({text})
  })
};
form.addEventListener("submit", handleSubmit);

if (form){
  form.addEventListener("submit", handleSubmit);
}
