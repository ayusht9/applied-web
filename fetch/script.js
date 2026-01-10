const cardsContainer = document.querySelector("#cards");

async function loadUsers3() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    cardsContainer.innerHTML = users
      .map(user => `
        <div class="card">
          <h3>${user.username}</h3>
          <p><strong>ID:</strong> ${user.id}</p>
          <p><strong>Email:</strong> ${user.email}</p>
        </div>
      `)
      .join("");

  } catch (err) {
    console.error("Error fetching users:", err);
  }
}

loadUsers3();
