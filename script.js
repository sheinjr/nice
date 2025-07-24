const friendData = {
  rahan: {
    mockName: "Machine Gun Majeed",
    joke: "Bro u are a full time employee 🥲",
    image: "rahan.jpg" // Replace with actual file when available
  },
  mubshir: {
    mockName: "Vadaa Pav",
    joke: "Heyy bro you are very poor because u are in a full time working job 🥲 without knowing the salary",
    image: "mubshir.jpg" // Replace with actual file when available
  }
};

function showRoast() {
  const nameInput = document.getElementById("name-input").value.toLowerCase().trim();
  const card = document.getElementById("roast-card");

  if (friendData[nameInput]) {
    const friend = friendData[nameInput];
    document.getElementById("friend-photo").src = friend.image;
    document.getElementById("mock-name").textContent = friend.mockName;
    document.getElementById("joke-text").textContent = friend.joke;
    card.classList.remove("hidden");
  } else {
    card.classList.add("hidden");
    alert("No roast found for this name. Try again!");
  }
}
