// Create function addUser()
function AddUser() 
{
  // Get value of user by id player1_name_input and player2_name_input
  localStorage.getItem("player1_name_input");
  localStorage.getItem("player2_name_input");

  // Store these values locally
  localStorage.setItem("player1_name_input")
  localStorage.setItem("player2_name_input");
  //Assign "game_page.html" to windo.wlocation
  window.location("game_page.html");
}


