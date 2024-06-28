function calculateAge() {
  const birthdate = document.getElementById('birthdate').value;
  if (!birthdate) {
      document.getElementById('result').innerText = "Please enter your birthdate!";
      return;
  }

  const birthDate = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }

  const ageInDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
  const ageInMonths = age * 12 + monthDiff;
  const ageInMinutes = ageInDays * 24 * 60;
  const ageInSeconds = ageInMinutes * 60;

  const goofyAgeMessage = `
      You are <strong>${age}</strong> years old!<br>
      That's about <strong>${ageInMonths}</strong> months!<br>
      Or <strong>${ageInDays}</strong> days!<br>
      Or <strong>${ageInMinutes}</strong> minutes!<br>
      Or even <strong>${ageInSeconds}</strong> seconds!<br>
      Wow, you're really old! 🤪
  `;

  document.getElementById('result').innerHTML = goofyAgeMessage;
}
