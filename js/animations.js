let tl=gsap.timeline()
tl.set(document.querySelector(".img"),{opacity:0})
tl.set(document.querySelector("h1"),{opacity:0})
tl.set(document.querySelector("p"),{opacity:0})
tl.set(document.querySelector(".dark-mode-btn"),{opacity:0})
tl.from(".content",{x:-1000,opacity:0, duration: 1, ease:"power3.inOut"})
tl.to(".img",{opacity:1,duration:1,ease:"power5.inOut"},"<70%")
tl.from(".img",{y:350,duration:1,ease:"power5.inOut"},"<")
tl.to(".content h1",{opacity:1,duration:1,ease:"power5.inOut"},"<30%")
tl.from(".content h1",{y:350,duration:1,ease:"power5.inOut"},"<")
tl.to(".content p",{opacity:1,duration:1,ease:"power5.inOut"},"<30%")
tl.from(".content p",{y:350,duration:1,ease:"power5.inOut"},"<")
tl.to(".dark-mode-btn",{opacity:1,duration:1,ease:"power5.inOut"},"<70%")
tl.from(".dark-mode-btn",{y:350,duration:1,ease:"back.inOut"},"<")