document.addEventListener("DOMContentLoaded", () => {
  const player = document.querySelector("audio") as HTMLAudioElement;
  const button = document.querySelector("button") as HTMLButtonElement;

  button.addEventListener("click", () => {
    player.src = "../mp3/passenger_solo.mp3";
  });
});
