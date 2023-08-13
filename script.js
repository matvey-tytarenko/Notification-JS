const btn = document.querySelector(".notification_start");

function notification() {
  Notification.requestPermission().then((premission) => {
    if (premission !== "granted") {
      return;
    }

    const notification = new Notification("Check Up!", {
      body: "Congratulation You are done!",
      icon: "./icon.png",
    });
  });
}

btn.addEventListener('click', () => notification())