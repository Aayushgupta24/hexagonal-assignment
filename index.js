async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  let responseBody = await response.json();
  if (response.status == 200) {
    console.log("responseBody", responseBody);
  }
}
fetchData();
