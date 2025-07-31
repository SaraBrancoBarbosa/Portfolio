import { useEffect, useState } from "react"

// Button to scroll to top of page

function ScrollToTop() {
    const [scrollToTopBtn, setScrollToTopBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                setScrollToTopBtn(true)
            } else {
                setScrollToTopBtn(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <>
        {scrollToTopBtn && (
            <button 
                className="flex justify-center items-center fixed bottom-4 right-4 h-14 w-14 md:h-18 md:w-18 rounded-full z-30 hover:scale-110 transition-transform duration-200"
                onClick={scrollUp}
            >
                <img src="assets/icons/chevron.svg"></img>
            </button>
        )}
    </>
  )
}

export default ScrollToTop