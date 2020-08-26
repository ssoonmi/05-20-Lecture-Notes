const navigationMenu = () => {
  const userButton = document.querySelector(".user-nav-button");
  const userButtonModal = document.querySelector(
    ".user-nav-button .modal-background"
  );
  const userDropdownMenu = document.querySelector(
    ".user-nav-button ul.dropdown-menu"
  );
  const logoutButton = document.querySelector(".user-nav-button .logout");
  
  userButton.addEventListener("click", (e) => {
    e.preventDefault();
    userButtonModal.style.display = "block";
    userDropdownMenu.style.display = "block";
  
    function openModal(e) {
      e.stopPropagation();
      userButtonModal.removeEventListener("click", openModal);
      userButtonModal.style.display = "none";
      userDropdownMenu.style.display = "none";
    }
  
    userButtonModal.addEventListener("click", openModal);
  });
  
  logoutButton.addEventListener("click", async (e) => {
    const res = await fetch("/api/users/session", {
      method: "DELETE",
    });
  
    if (res.ok) {
      window.location.href = "/login";
    }
  });
}

navigationMenu();