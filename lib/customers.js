export async function getCustomersData() {
  const customers = await fetch('https://randomuser.me/api/?results=4');
  const {'results': data} = await customers.json();
  return data;
}
