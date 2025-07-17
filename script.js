let searchBtn = document.querySelector(".search")
let usernameinp = document.querySelector(".usernameinp")
let card = document.querySelector(".card")

function getProfileData(username) {
  return fetch(`https://api.github.com/users/${username}`).then((res) => {
    if (!res.ok) throw new Error("User not found");
    return res.json();
  });
}

function decorateProfileData(details){
    console.log(details);
    
   let data = `  
           <div class="image"> 
           <img
            src="${details.avatar_url}"
            alt="Profile Picture"
            class="w-50 h-60 rounded shadow-lg object-cover border-4 border-blue-200"
          />
        </div>

        <div class="Info text-white text-lg leading-10 gap-4 font-bold">
          <div>
            <span>Name :-</span><span class="text-xl"><i> ${details.name ? details.name :"N/A"}</i></span>
          </div>

          <div><span>Username :-</span> ${details.login ? details.login :"N/A"}</div>

          <div class="following flex items-center gap-1">
            <span class="font-medium">Followers :-</span> ${details.followers}
            <span class="font-medium">Following :-</span> ${details.following}
          </div>
          <p class="mt-2">Company : ${details.company ? details.company :"N/A"}</p>
          <p class="mt-2">Location : ${details.location ? details.location :"N/A"}</p>
        </div>`

    card.innerHTML = data;
}

searchBtn.addEventListener("click", function () {
  const username = usernameinp.value.trim();
  if (username.length > 0){
    getProfileData(username).then((data) =>{
        decorateProfileData(data);
    })
  }else{
    alert("Input field is empty!!");
  }
});
