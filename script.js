// Button click event in JavaScript section
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("helloBtn");
  const output = document.getElementById("output");

  if (btn) {
    btn.addEventListener("click", () => {
      output.textContent = "🎉 Hello! You just triggered JavaScript!";
    });
  }
});
// Interactive button example
document.getElementById("helloBtn").addEventListener("click", function() {
  document.getElementById("greeting").innerText = "Hello! You clicked the button.";
});
