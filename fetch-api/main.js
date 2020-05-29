const getUsers = e => {
  e.preventDefault();
  const usersAmount = document.querySelector('[name = "users-amount"]').value;
  const usersGender = document.querySelector('[name = "gender"]').value;
  const url = `https://randomuser.me/api/?results=${usersAmount}&gender=${usersGender === 'both' ? "male,female" : usersGender}`;
  fetch(url)
    .then(response => {
      if (response.status !== 200) {
        throw Error("status different than 200")
      } else {
        return response.json();
      };
    })
    .then(json => showUsers(json.results))
    .catch(error => console.log(error));
};

const showUsers = (users) => {
  const resultArea = document.querySelector('.user-list');
  resultArea.textContent = '';
  users.forEach(user => {
    const item = document.createElement('div');
    item.className = 'user';
    item.innerHTML = `
      <div class="user__name">${user.name.title.toUpperCase()} ${user.name.first} ${user.name.last}</div>
      <img class="user__image" src=${user.picture.medium}>
    `;
    resultArea.appendChild(item);
  })
};

document.querySelector('.generator').addEventListener('submit', getUsers);