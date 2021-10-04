function Climate() {
  this.initialise = () => {
    mainExecution();
  };
  // To show description for row which contain square pichart (squarePi) for "wellness" page
  const squarePiEvents = () => {
    const tileB11 = document.getElementById("tileB11");
    tileB11.firstElementChild.addEventListener("mouseenter", (e) => {
      tileB11.style.borderLeft = "3px solid black";
      tileB11.parentElement.style.borderTop = "3px solid black";
      tileB11.parentElement.parentElement.lastElementChild.style.borderBottom =
        "3px solid black";
      tileB11.parentElement.parentElement.lastElementChild.style.borderTop =
        "3px solid black";
      tileB11.parentElement.parentElement.lastElementChild.style.borderRight =
        "3px solid black";
      tileB11.parentElement.lastElementChild.style.borderTop =
        "3px solid black";
      tileB11.parentElement.lastElementChild.style.borderRight =
        "3px solid black";
      // To show display data
      e.target.firstElementChild.style.display = "flex";
    });
    tileB11.firstElementChild.addEventListener("mouseleave", (e) => {
      tileB11.style.borderLeft = "3px solid rgba(0,0,0,0.0)";
      tileB11.parentElement.style.borderTop = "3px solid rgba(0,0,0,0.0)";
      tileB11.parentElement.parentElement.lastElementChild.style.borderBottom =
        "3px solid rgba(0,0,0,0.0)";
      tileB11.parentElement.parentElement.lastElementChild.style.borderTop =
        "3px solid rgba(0,0,0,0.0)";
      tileB11.parentElement.parentElement.lastElementChild.style.borderRight =
        "3px solid rgba(0,0,0,0.0)";
      tileB11.parentElement.lastElementChild.style.borderTop =
        "3px solid rgba(0,0,0,0.0)";
      tileB11.parentElement.lastElementChild.style.borderRight =
        "3px solid rgba(0,0,0,0.0)";
      // To hide display data
      e.target.firstElementChild.style.display = "none";
    });
  };
  // To show description of square pichart (squarePi) for "wellness" in a mobile view
  const squarePiMobileEvents = () => {
    const tileB11 = document.getElementById("tileB11");
    tileB11.firstElementChild.addEventListener("mouseleave", (e) => {
      tileB11.style.borderTop = "3px solid rgba(0,0,0,0.0)";
      tileB11.style.borderRight = "3px solid rgba(0,0,0,0.0)";
      tileB11.style.borderLeft = "3px solid rgba(0,0,0,0.0)";
      tileB11.parentElement.parentElement.lastElementChild.style.borderLeft =
        "3px solid rgba(0,0,0,0.0)";
      tileB11.parentElement.parentElement.lastElementChild.style.borderRight =
        "3px solid rgba(0,0,0,0.0)";
      tileB11.parentElement.parentElement.lastElementChild.style.borderBottom =
        "3px solid rgba(0,0,0,0.0)";
      e.target.firstElementChild.style.display = "none";
    });
    tileB11.firstElementChild.addEventListener("mouseenter", (e) => {
      tileB11.style.borderTop = "3px solid black";
      tileB11.style.borderRight = "3px solid black";
      tileB11.style.borderLeft = "3px solid black";
      tileB11.parentElement.parentElement.lastElementChild.style.borderLeft =
        "3px solid black";
      tileB11.parentElement.parentElement.lastElementChild.style.borderRight =
        "3px solid black";
      tileB11.parentElement.parentElement.lastElementChild.style.borderBottom =
        "3px solid black";
      e.target.firstElementChild.style.display = "flex";
    });
  };
  // To show description for barGraph
  const barGraphEvents = () => {
    const barFirst = document.getElementById("barFirst");
    console.log(barFirst);
    barFirst.addEventListener("mouseenter", (e) => {
      e.target.parentElement.style.border = "3px solid black";
      e.target.firstElementChild.style.display = "flex";
    });
    barFirst.addEventListener("mouseleave", (e) => {
      e.target.parentElement.style.border = "3px solid rgba(0,0,0,0.0)";
      e.target.firstElementChild.style.display = "none";
    });
  };
  // To show description for row which contain pichart in "Plant Forward",
  const piRowEvents = () => {
    const tileA11 = document.getElementById("tileA11");
    tileA11.firstElementChild.addEventListener("mouseenter", (e) => {
      tileA11.style.borderLeft = "3px solid black";
      tileA11.parentElement.parentElement.style.borderTop = "3px solid black";
      tileA11.parentElement.parentElement.style.borderRight = "3px solid black";
      tileA11.parentElement.parentElement.lastElementChild.style.borderBottom =
        "3px solid black";
      tileA11.parentElement.lastElementChild.style.borderTop =
        "3px solid black";
      tileA11.parentElement.lastElementChild.style.borderRight =
        "3px solid black";
      // To show display data
      e.target.firstElementChild.style.display = "flex";
    });
    tileA11.firstElementChild.addEventListener("mouseleave", (e) => {
      tileA11.style.borderLeft = "3px solid rgba(0,0,0,0.0)";
      tileA11.parentElement.parentElement.style.borderTop =
        "3px solid rgba(0,0,0,0.0)";
      tileA11.parentElement.parentElement.style.borderRight =
        "3px solid rgba(0,0,0,0.0)";
      tileA11.parentElement.parentElement.lastElementChild.style.borderBottom =
        "3px solid rgba(0,0,0,0.0)";
      tileA11.parentElement.lastElementChild.style.borderTop =
        "3px solid rgba(0,0,0,0.0)";
      tileA11.parentElement.lastElementChild.style.borderRight =
        "3px solid rgba(0,0,0,0.0)";
      // To hide display data
      e.target.firstElementChild.style.display = "none";
    });
  };
  // To show description of pichart in a mobile view
  const mobilePiEvents = () => {
    const tileA11 = document.getElementById("tileA11");
    tileA11.firstElementChild.addEventListener("mouseenter", (e) => {
      tileA11.style.borderTop = "3px solid black";
      tileA11.style.borderRight = "3px solid black";
      tileA11.style.borderLeft = "3px solid black";
      tileA11.parentElement.parentElement.lastElementChild.style.borderLeft =
        "3px solid black";
      tileA11.parentElement.parentElement.lastElementChild.style.borderRight =
        "3px solid black";
      tileA11.parentElement.parentElement.lastElementChild.style.borderBottom =
        "3px solid black";
      e.target.firstElementChild.style.display = "flex";
    });
  };
  // To show description of each row in "Climate Change Page"
  const firstTileEvents = () => {
    const firstTile = document.getElementsByClassName("first-tile");
    for (let i = 0; i < firstTile.length; i++) {
      firstTile[i].addEventListener("mouseenter", (e) => {
        e.target.parentElement.style.border = "3px solid black";
        e.target.firstElementChild.style.display = "flex";
      });
      firstTile[i].addEventListener("mouseleave", (e) => {
        e.target.parentElement.style.border = "3px solid rgba(0,0,0,0.0)";
        e.target.firstElementChild.style.display = "none";
      });
    }
  };
  const wellnessBarTile1Events = () => {
    const wellBarFirst = document.getElementsByClassName(
      "wellnessBar-first-tile"
    );
    for (let i = 0; i < wellBarFirst.length; i++) {
      wellBarFirst[i].addEventListener("mouseenter", (e) => {
        e.target.parentElement.parentElement.style.border = "3px solid black";
        e.target.firstElementChild.style.display = "flex";
      });
      wellBarFirst[i].addEventListener("mouseleave", (e) => {
        e.target.parentElement.parentElement.style.border =
          "3px solid rgba(0,0,0,0.0)";
        e.target.firstElementChild.style.display = "none";
      });
    }
  };
  const infoEvents = () => {
    const info = document.getElementsByClassName("info-tile");
    for (let i = 0; i < info.length; i++) {
      info[i].addEventListener("mouseenter", (e) => {
        e.target.lastElementChild.style.display = "flex";
      });
      info[i].addEventListener("mouseleave", (e) => {
        e.target.lastElementChild.style.display = "none";
      });
    }
  };
  const percentEvents = () => {
    const percent = document.getElementsByClassName("percent-tile");
    for (let i = 0; i < percent.length; i++) {
      percent[i].addEventListener("mouseenter", (e) => {
        e.target.lastElementChild.style.display = "flex";
        console.log(e.target.lastElementChild);
      });
      percent[i].addEventListener("mouseleave", (e) => {
        e.target.lastElementChild.style.display = "none";
      });
    }
  };
  const wellnessStatEvents = () => {
    const percent = document.getElementsByClassName("wellness-tile");
    for (let i = 0; i < percent.length; i++) {
      percent[i].addEventListener("mouseenter", (e) => {
        e.target.lastElementChild.style.display = "flex";
        console.log(e.target.lastElementChild);
      });
      percent[i].addEventListener("mouseleave", (e) => {
        e.target.lastElementChild.style.display = "none";
      });
    }
  };
  const multiEvents = () => {
    const multi = document.getElementsByClassName("multi-tile");
    for (let i = 0; i < multi.length; i++) {
      multi[i].addEventListener("mouseenter", (e) => {
        e.target.lastElementChild.style.display = "flex";
      });
      multi[i].addEventListener("mouseleave", (e) => {
        e.target.lastElementChild.style.display = "none";
      });
    }
  };
  function mainExecution() {
    firstTileEvents();
    percentEvents();
    multiEvents();
    infoEvents();
    wellnessBarTile1Events();
    wellnessStatEvents();
    barGraphEvents();
    if (window.matchMedia("(max-width: 600px)").matches) {
      mobilePiEvents();
      squarePiMobileEvents();
    } else {
      piRowEvents();
      squarePiEvents();
    }
  }
}
