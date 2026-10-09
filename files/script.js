const root = document.documentElement;
root.dataset.theme = localStorage.getItem("theme") || "light";
document.getElementById("theme").onclick = () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", root.dataset.theme);
};
const form = document.getElementById("contact");
if (form) form.onsubmit = e => {
  e.preventDefault();
  const { name, email, msg } = form.elements;
  const err = document.getElementById("err");
  if (name.value.trim().length < 2) return err.textContent = "Enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(email.value)) return err.textContent = "Enter a valid email.";
  if (msg.value.trim().length < 10) return err.textContent = "Message must be at least 10 characters.";
  err.textContent = "";
  location.href = "mailto:kr.ama9808@gmail.com?subject=Website message&body=" + encodeURIComponent(msg.value + "\n\n" + name.value + " (" + email.value + ")");
};
