const fetchEmployees = async (id) => {
  return await (await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)).json()
}

const getAddressString = (address) => `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`


const showInfo = (profile) => {
  const idElement = document.getElementById('profile-id')
  const nameElement = document.getElementById('profile-name')
  const emailElement = document.getElementById('profile-email')
  const addressElement = document.getElementById('profile-address')
  const avatarElement = document.getElementById('profile-avatar')
  const companyNameElement = document.getElementById('profile-company-name')
  const companyBSElement = document.getElementById('profile-company-bs')
  
  idElement.innerHTML = profile.id
  nameElement.innerHTML = profile.name
  emailElement.innerHTML = profile.email
  addressElement.innerHTML = getAddressString(profile.address)
  avatarElement.src = `https://avatars.dicebear.com/api/bottts/${profile.name}.svg`
  companyNameElement.innerHTML = profile.company.name
  companyBSElement.innerHTML = profile.company.bs
}

const initInfo = async () => {
  const random = Math.floor(Math.random() * 10) + 1
  const profile = await fetchEmployees(random)
  showInfo(profile)
}

initInfo()
