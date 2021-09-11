function Climate() {
  this.initialise = () => {
    mainExecution();
  };
  // To show description
  const firstTileEvents = () => {
    const first = document.getElementsByClassName("first-tile");
    for(let i = 0; i < first.length; i++) {
      first[i].addEventListener("mouseover", (e) => {
        e.target.parentElement.style.border = "5px solid black";
      })
      first[i].addEventListener("mouseout", (e) => {
        e.target.parentElement.style.border = "5px solid rgba(0,0,0,0.0)";
      })
    }
  }
  const infoEvents = () => {
    const info = document.getElementsByClassName("info-body");
    for (let i = 0; i < info.length; i++) {
      info[i].addEventListener("mouseover", (e) => {
        e.target.firstElementChild.style.display = "flex";
      });
      info[i].addEventListener("mouseout", (e) => {
        e.target.firstElementChild.style.display = "none";
      });
    }
  };
  const percentEvents = () => {
    const percent = document.getElementsByClassName("percent-body");
    for (let i = 0; i < percent.length; i++) {
      percent[i].addEventListener("mouseover", (e) => {
        e.target.lastElementChild.style.display = "flex";
      });
      percent[i].addEventListener("mouseout", (e) => {
        e.target.lastElementChild.style.display = "none";
      });
    }
  };
  const multiEvents = () => {
    const multi = document.getElementsByClassName("multi-body");
    for (let i = 0; i < multi.length; i++) {
      multi[i].addEventListener("mouseover", (e) => {
        e.target.parentElement.lastElementChild.style.display = "flex";
      });
      multi[i].addEventListener("mouseout", (e) => {
        e.target.parentElement.lastElementChild.style.display = "none";
      });
    }
  };
  function mainExecution() {
    firstTileEvents();
    percentEvents();
    multiEvents();
    infoEvents();
  }
}
