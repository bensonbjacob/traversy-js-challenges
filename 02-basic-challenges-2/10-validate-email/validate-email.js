//Using Regex
// function validateEmail(email) {
//   const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
//   return regex.test(email);
// }

function validateEmail(email) {
  if (email.indexOf('@') < 0) {
    return false;
  }

  const [local, domain] = email.split('@');
  if (local.length === 0 || domain.length < 3) {
    return false;
  }
  const domainExtension = domain.split('.');
  if (domainExtension.length < 2 || domainExtension[1] < 2) {
    return false;
  }
  {
    return true;
  }
}

module.exports = validateEmail;
