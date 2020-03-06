Vue.component('home', {
    template: 
    `<div class='home'>
        <div class="intro">
            <div><span>H</span>ello <span>I</span>’m <span>Ebo</span></div>
            <div class='intro-title'>Web Developper</div>
            <div class='intro-title'>and Web designer</div>
        </div>
    </div>`,
})
Vue.component('skills', {
    template: 
    `<div class="skillsbox">
        <div class="para">
        <span>I</span> <span>h</span>ave <span>s</span>ome <span>e</span>xperience as a front-end developer, creating responsive websites of a high quality.

        In my experience as a freelancer and working for agencies I have also obtained an eye for detail and appreciation for design, knowledge of integrating with and developing server-side, as well as knowing how to efficiently project manage and work with clients and colleagues successfully.
    
        I now specialise in front-end development but my knowledge of multiple fields allows me to work on a project with the full scope in mind; simplifying the process of our working together and producing a more cohesive experience for your users.
        </div>
        <div class="myskills">
            <h1>My Skills are ...</h1>
            <div class="skills">
                <div><i class="fab fa-html5"></i><span>Html</span></div>
                <div><i class="fab fa-css3"></i><span>Css</span></div>
                <div><i class="fab fa-js-square"></i><span>JavaScript</span></div>
                <div><i class="fab fa-sass"></i><span>Sass</span></div>
                <div><i class="fab fa-vuejs"></i><span>VueJs</span></div>
                <div><i class="fab fa-github-square"></i><span>GitHub</span></div>
            </div>
            <div class="more">and i'm learning more ...</div>
        </div>
    </div>`,
})
Vue.component('about', {
    template: `
    <div class="about">
        <div class='para'>
            <span>I</span> 'm a <span>F</span>ront-<span>E</span>nd Developer, 
            I have some experience providing 
            front-end development,
            producing high quality responsive 
            websites and exceptional user 
            experience.
        </div>
    </div>`,
})
Vue.component('contact', {
    template: `
    <div class="contact">
        <div>
            <span>M</span>y <span>E</span>mail : 
        </div>
        <div>
            ebowebdev@gmail.com
        </div>
        <div>
            <span>M</span>y <span>M</span>obile :
        </div>
        <div>
            (+34) 631 229 001
        </div>
    </div>`
})

new Vue({
    el: ".all",
    data : {
        compo: 'home',
        navlist: ['home','skills','about','contact']
    }
})