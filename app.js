const linkOne = document.getElementById("linkOne");
const linkTwo = document.getElementById("linkTwo");
const linkThree = document.getElementById("linkThree");
const pageOne = document.getElementById("two");
const pageTwo = document.getElementById("three");
const pageThree = document.getElementById("four");

linkOne.addEventListener("click", () => {
    pageOne.scrollIntoView({
        behavior: "smooth"
    });
})
linkTwo.addEventListener("click", () => {
    pageTwo.scrollIntoView({
        behavior: "smooth"
    });
})
linkThree.addEventListener("click", () => {
    pageThree.scrollIntoView({
        behavior: "smooth"
    });
})

function ScrollHandler(pageId) {
    let page = document.getElementById(pageId);
    let pageStart = page.offsetTop;
    let pageJump = false;
    let viewStart;
    let duration = 1200;
    let scrolled = document.getElementById("scroll");

    function scrollToPage() {
        pageJump = true;

        // Calculate how far to scroll down the page
        let startLocation = viewStart;
        let endLocation = pageStart;
        let distance = endLocation - startLocation;

        let runAnimation;

        // Set the animation to 0/undefined.
        let timeLapsed = 0;
        let percentage, position;

        let easing = (progress) => {
            return progress < 0.5 ?
                4 * progress * progress * progress :
                (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1; // acceleration until halfway, then deceleration
        };

        function stopAnimationIfRequired(pos) {
            if (pos == endLocation) {
                cancelAnimationFrame(runAnimation);
                setTimeout(function () {
                    pageJump = false;
                }, 500);
            }
        }

        let animate = () => {
            timeLapsed += 16;
            percentage = timeLapsed / duration;
            if (percentage > 1) {
                percentage = 1;
                position = endLocation;
            } else {
                position = startLocation + distance * easing(percentage);
            }
            scrolled.scrollTop = position;
            runAnimation = requestAnimationFrame(animate);
            stopAnimationIfRequired(position);
            // console.log("position=" + scrolled.scrollTop + "(" + percentage + ")");
        };
        // Loop the animation function
        runAnimation = requestAnimationFrame(animate);
    }

    window.addEventListener("wheel", function (event) {
        viewStart = scrolled.scrollTop;
        if (!pageJump) {
            let pageHeight = page.scrollHeight;
            let pageStopPortion = pageHeight / 2;
            let viewHeight = window.innerHeight;

            let viewEnd = viewStart + viewHeight;
            let pageStartPart = viewEnd - pageStart;
            let pageEndPart = pageStart + pageHeight - viewStart;

            let canJumpDown = pageStartPart >= 0;
            let stopJumpDown = pageStartPart > pageStopPortion;

            let canJumpUp = pageEndPart >= 0;
            let stopJumpUp = pageEndPart > pageStopPortion;

            let scrollingForward = event.deltaY > 0;
            if (
                (scrollingForward && canJumpDown && !stopJumpDown) ||
                (!scrollingForward && canJumpUp && !stopJumpUp)
            ) {
                event.preventDefault();
                scrollToPage();
            }
        } else {
            event.preventDefault();
        }
    });
}
new ScrollHandler("one");
new ScrollHandler("two");
new ScrollHandler("three");
new ScrollHandler("four");