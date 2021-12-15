import gsap from "gsap";


export function start(){
  window.addEventListener('load', () => {

      const timeLine = gsap.timeline({paused: true});

      timeLine.staggerFrom('h1 span', 1, {top: -50, opacity: 0, ease: "power2.out",}, 0.3);
      timeLine.staggerFrom('.signin', 0.5, {top : -50, opacity: 0, ease : "power2.out"}, 1,'-=0.5');
      timeLine.staggerFrom('.signup', 0.5, {top : -50, opacity: 0, ease : "power2.out"}, 1, '-=0.5');
      timeLine.play();

  })
}
export function signin(){
  const timeLine = gsap.timeline({paused: true});
  timeLine.to('#overlayIn', {visibility : "visible", backgroundColor : "rgba(0,0,0,0.5)", duration: 0.5});    
  timeLine.to('.in', {width : "55%", visibility: "visible", duration: 1});
  timeLine.to('.closein', {opacity : 1, duration: 0.5});
  timeLine.to('.connin', {opacity : 1, duration: 0.5}, "-=0.5");
  timeLine.to('.pseudo', {opacity: 1, duration: 0.5});
  timeLine.to('.password', {opacity: 1, duration: 0.5});
  timeLine.to('.subin', {opacity: 1, duration: 0.5});
  timeLine.to('.notmember', {opacity: 1, duration: 1});
  timeLine.play();  
}

export function closeSignin(){
    if(document.querySelector('.notmember').style.opacity === '1'){
    const timeLine = gsap.timeline({paused: true});
    timeLine.to(document.getElementById("overlayIn"), {backgroundColor : "transparent", duration: 0.5});
    timeLine.to('.in', {width : "0%", duration: 1}, "-=0.1");
    timeLine.to('.closein', {opacity : 0, duration: 0},"-=1");
    timeLine.to('.connin', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.pseudo', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.password', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.subin', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.notmember', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.emailwarning', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.passwordwarning', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('#overlayIn', {visibility : "hidden", duration: 0});
    timeLine.to('.in', {visibility : "hidden", duration: 1});
    timeLine.play();
    }
}

  export function signinToUp(){
    if(document.querySelector('.notmember').style.opacity === '1'){
    const timeLine = gsap.timeline({paused: true});
    timeLine.to('.in', {width : "0%", duration: 1});
    timeLine.to('.closein', {opacity : 0, duration: 0},"-=1");
    timeLine.to('.connin', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.pseudo', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.password', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.subin', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.emailwarning', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.passwordwarning', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.notmember', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.in', {visibility : "hidden", duration: 0});
    timeLine.to('.up', {visibility: "visible", width : "55%", duration: 1});
    timeLine.to('.closeup', {opacity : 1, duration: 0.5});
    timeLine.to('.connup', {opacity : 1, duration: 0.5}, "-=0.5");
    timeLine.to('.username', {opacity: 1, duration: 0.5});
    timeLine.to('.mail', {opacity: 1, duration: 0.5});
    timeLine.to('.mdp', {opacity: 1, duration: 0.5});
    timeLine.to('.mdpc', {opacity: 1, duration: 0.5});
    timeLine.to('.date', {opacity: 1, duration: 0.5});
    timeLine.to('.genre', {opacity: 1, duration: 0.5});
    timeLine.to('.subup', {opacity: 1, duration: 1});
    timeLine.play();
    
    }
  }

  export function signup(){
    const timeLine = gsap.timeline({paused: true});
    timeLine.to('#overlayIn', 0.5, {visibility : "visible", backgroundColor : "rgba(0,0,0,0.5)"});    
    timeLine.to('.up', 1, {width : "55%", visibility: "visible"});
    timeLine.to('.closeup', 0.5, {opacity : 1});
    timeLine.to('.connup', 0.5, {opacity : 1}, "-=0.5");
    timeLine.to('.username', 0.5, {opacity: 1});
    timeLine.to('.mail', 0.5, {opacity: 1});
    timeLine.to('.mdp', 0.5, {opacity: 1});
    timeLine.to('.mdpc', 0.5, {opacity: 1});
    timeLine.to('.date', 0.5, {opacity: 1});
    timeLine.to('.genre', 0.5, {opacity: 1});
    timeLine.to('.subup', 1, {opacity: 1});
    timeLine.play();
  }

export function closeSignup(){
    if(document.querySelector('.subup').style.opacity === '1'){
    const timeLine = gsap.timeline({paused: true});
    timeLine.to('#overlayIn', 0.5, {backgroundColor : "transparent"});
    timeLine.to('.up', 1, {width : "0%"}, "-=0.1");
    timeLine.to('.closeup', 0, {opacity : 0}, "-=1");
    timeLine.to('.connup', 0, {opacity : 0}, "-=1");
    timeLine.to('.username', 0, {opacity: 0}, "-=1");
    timeLine.to('.mail', 0, {opacity: 0}, "-=1");
    timeLine.to('.mdp', 0, {opacity: 0}, "-=1");
    timeLine.to('.mdpc', 0, {opacity: 0}, "-=1");
    timeLine.to('.date', 0, {opacity: 0}, "-=1");
    timeLine.to('.genre', 0., {opacity: 0}, "-=1");
    timeLine.to('.subup', 0, {opacity: 0}, "-=1");
    timeLine.to('.controlpasserror', 0, {opacity: 0}, "-=1");
    timeLine.to('.usererror', 0, {opacity: 0}, "-=1");
    timeLine.to('.emailerror', 0, {opacity: 0}, "-=1");
    timeLine.to('.passerror', 0, {opacity: 0}, "-=1");
    timeLine.to('#overlayIn', 0, {visibility : "hidden"});
    timeLine.to('.up', 1, {visibility : "hidden"});
    timeLine.play();
    }

  }
 
  export function signupToIn(){
    if(document.querySelector('.notmember').style.opacity === '1'){
    const timeLine = gsap.timeline({paused: true});
    timeLine.to('.up', {width : "0%", duration: 1});
    timeLine.to('.closeup', {opacity : 0, duration: 0},"-=1");
    timeLine.to('.connup', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.username', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.mail', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.mdp', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.mdpc', {opacity: 0, duration: 0}, "-=1");
    timeLine.to('.date', {visibility : "hidden", duration: 0});
    timeLine.to('.genre', {visibility: "visible", width : "55%", duration: 1});
    timeLine.to('.subup', {opacity : 1, duration: 0.5});
    timeLine.to('.up', {visibility : "hidden", duration: 0});
    timeLine.to('.in', {visibility: "visible", width : "55%", duration: 1});
    timeLine.to('.connin', {opacity : 1, duration: 0.5}, "-=0.5");
    timeLine.to('.pseudo', {opacity: 1, duration: 0.5});
    timeLine.to('.password', {opacity: 1, duration: 0.5});
    timeLine.to('.subin', {opacity: 1, duration: 0.5});
    timeLine.to('.notmember', {opacity: 1, duration: 0.5});
    timeLine.play();
    
    }
  }
