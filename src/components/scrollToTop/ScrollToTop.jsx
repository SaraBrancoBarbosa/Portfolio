import { useEffect, useState } from "react"
import { useLocation } from "react-router"

// Button to scroll to the top of the page: when changing route and when clicking on the button

function ScrollToTop() {
    const [scrollToTopBtn, setScrollToTopBtn] = useState(false)

    // To detect the changing routes
    const location = useLocation

    // To scroll to the top when changing the route
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    // To scroll to the top when clicking on the button
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