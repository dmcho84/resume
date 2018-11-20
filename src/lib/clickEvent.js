const backgroundClick = ({ id, status }, callback) => {
  console.log(`backgroundClick`);
  const root = document.getElementById("root");
  const rootClickEvent = e => {
    console.log(e);
    let isNav = false;
    e.path.forEach(el => {
      console.log(el.id);
      if (el.id && el.id.match(id)) {
        console.log(`wwwwwww`);
        isNav = true;
      }
    });
    if (isNav) return;
    if (typeof callback === "function") {
      callback();
    }
    root.removeEventListener("click", rootClickEvent, true);
  };

  root.removeEventListener("click", rootClickEvent, true);
};

export { backgroundClick };
