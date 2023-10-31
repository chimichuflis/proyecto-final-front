import { useEffect } from "react";
import "../../styles/MatchCarousel.css";
export default function (props) {

  const capitalCase = (str) => {
    if (str) {
      const wordArr = str.split(" ");
      const capitalyzedArr = wordArr.map((n) => {
        return n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
      });
      return capitalyzedArr.join(" ");
    }
  };

  const reflowAnimation = () => {
    document.querySelectorAll(".match-carousel ul li").forEach(n => {
      n.style.animation = 'none';
      n.offsetHeight; /* trigger reflow */
      n.style.animation = null;
    })
  }

  useEffect(() => {
    const matchImg = document.querySelector(".match-carousel .to-match");
    let swipeAction = false;
    let x = 0;


    // picking event

    const handlePick = (posX) => {
      swipeAction = true;
      x = posX;
    }
    const mouseDown = (e) => {
      e.preventDefault();
      handlePick(e.clientX);
    }
    const touchStart = (e) => {
      e.preventDefault();
      handlePick(e.changedTouches[0].clientX);
    }

    // moving event
    const handleMove = (posX) => {
      if (swipeAction) {
        matchImg.style.left = `${posX - x}px`
      }
    }
    const mouseMove = (e) => {
      e.preventDefault();
      handleMove(e.clientX);
    }
    const touchMove = (e) => {
      e.preventDefault();
      handleMove(e.changedTouches[0].clientX);
    }

    // release event
    const handleRelease = (posX) => {
      if (swipeAction) {
        swipeAction = false;
        matchImg.style.left = "0";
        if (Math.abs(posX - x) > 100) {

          if (posX - x < 0) {
            document.querySelector("#likeButton").click();
          } else {
            document.querySelector("#dislikeButton").click();
          }
        }
      }
    }
    const mouseUp = (e) => {
      e.preventDefault();
      handleRelease(e.clientX);
    }
    const touchEnd = (e) => {
      e.preventDefault();
      handleRelease(e.changedTouches[0].clientX);
    }

    matchImg.addEventListener("mousedown", mouseDown);
    matchImg.addEventListener("mousemove", mouseMove);
    matchImg.addEventListener("mouseup", mouseUp);
    matchImg.addEventListener("mouseleave", mouseUp);

    matchImg.addEventListener("touchstart", touchStart);
    matchImg.addEventListener("touchmove", touchMove);
    matchImg.addEventListener("touchend", touchEnd);
    matchImg.addEventListener("touchcancel", touchEnd);
    return () => {
      matchImg.removeEventListener("mousedown", mouseDown);
      matchImg.removeEventListener("mousemove", mouseMove);
      matchImg.removeEventListener("mouseup", mouseUp);
      matchImg.removeEventListener("mouseleave", mouseUp);

      matchImg.removeEventListener("touchstart", touchStart);
      matchImg.removeEventListener("touchmove", touchMove);
      matchImg.removeEventListener("touchend", touchEnd);
      matchImg.removeEventListener("touchcancel", touchEnd);
    }
  }, []);
  return (
    <section className="match-carousel">
      <ul>
        <li className="next-match"><img src={props.list[1] && `artists/${props.list[1].artist_id}.jpeg`} /></li>
        <li className="to-match"><img src={props.list[0] && `artists/${props.list[0].artist_id}.jpeg`} /></li>
      </ul>
      <div>
        <button onClick={() => { reflowAnimation(); props.func(true) }} id="likeButton"><img src="./like.svg" /></button>
        <button onClick={() => { reflowAnimation(); props.func(false) }} id="dislikeButton"><img src="./cross.svg" /></button>
      </div>
      <h3>{props.list[0] && capitalCase(props.list[0].artist_name)}</h3>
    </section>
  )
}
