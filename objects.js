const projects = [

    {
        title: 'emOceans',
        img: `images/emOceans/newmooddesktop2.png`,
        tech: `<p><strong>Technologies used:</strong> HTML, CSS, JavaScript, chroma.js, datamuse API, Node.js, express, MySQL, EJS</p>`,
        github: `<a href="https://github.com/katiejduane/emOceans--backEndProject" target="blank">GitHub</a>`,
        liveSite: `<span>Live site OTW!</span>`,
        description: `<p><strong>Description:</strong> I once attempted to knit a scarf according to how I felt everyday, using different colors of yarn. This quickly became a tangled mess, but the idea stuck! emOceans is a web application that allows you to take note of your mood every day using color and language. Each day (and each mood, each memory) forms a tiny drop in the vast and ever-shifting ocean that makes up every one of us. We hoped to make the observation and appreciation of these shifts and waves more accessible, helpful, and more beautiful.</p>`,
        contributions: `<p><strong>Contributions:</strong> Original concept, implementation of chroma.js for color manipulation, implementation of datamuse API, router management, registration connection, database schema, database connection, data visualization using JSON.stringify along with JS and CSS.</p>`,
    },

    {
        title: 'Pithos',
        img: `images/pithos/desktopgradient2.png`,
        tech: `<p><strong>Technologies used:</strong> HTML, CSS, JavaScript, jQuery, Google Maps API, Adobe Photoshop for wireframing</p>`,
        github: `<a href="https://github.com/katiejduane/Pithos--FrontEndProject" target="blank">GitHub</a>`,
        liveSite: `<a href="https://katiejduane.com/pithos" target="blank">Live Site</a>`,
        description: `<p><strong>Description:</strong> We wanted to create a space that would allow the user to experience an 'ordinary' thing in an unusual way. We were interested in ecosystems, and wanted to connect our ecosystem to the state of Georgia (home), and also the larger realms of history, mythology, and health; which are their own kinds of ecosystems, or containers. Pithos.</p>`,
        contributions: `<p><strong>Contributions:</strong> Concept, plant and animal research, wireframes, CSS for mobile and tablet, JavaScript for 'plant' and 'animal' pages as well as map display and positioning.</p>`,

    },

    {
        title: 'adultING',
        img: `images/adulting/4forest.png`, 
        tech: `<p><strong>Technologies used:</strong> Python, Pygame, Tiled for building UIs.</p>`,
        github:`<a href="https://github.com/katiejduane/adultING" target="blank">GitHub</a>`,
        liveSite: '',
        description: `<p><strong>Description:</strong> Since I'm not much of a gamer, I wanted to create a game that instead resembled life; how the choices we make, no matter how 'right' or 'wrong' they seem, usually have both positive and negative consequences. Based on your choices throughout the game, you win and lose points in categories such as 'Health', 'Love', 'Growth', and 'Adventure'. You win, or life wins!</p>`,
        contributions: `<p><strong>Contributions:</strong> I created all the interfaces with Tiled and Adobe Photoshop, and wrote Python for game play using Pygame.</p>`
    }

]

const aboutKD = 
    { 
        img: `images/other/bio-pic-2.jpg`,
        bio: `<p>My name is Katie Duane and I'm a web developer, writer, and former teacher living in Atlanta, Georgia. 
        Formally trained as an illustrator and art educator, I spent eight years teaching art and art history in Oregon, Ecuador, and Upstate New York.</p>
        <p>Discovering web development was very much a happy accident. About a year after my decision to leave the classroom, I took a free 
        JavaScript workshop on a whim. The syntax felt poetic to me, and because it is simply another means of making something out of nothing, 
        I quickly became enamored by it. I see writing code as similar to writing a good poem: it should be clear, efficient, beautiful, and accessible. 
        While I'm still learning, this is always what I strive for.</p>
        <p>I'm currently enrolled in the Full-Stack Immersive program at DigitalCrafts. We're learning about the world
        of the web via Javascript, Python, Node.js, React, Redux, HTML, CSS and other development technologies.</p>
        <p>When I'm not writing code, it's very likely that I'm writing, painting, reading (usually 18 books at once), or spending time outside.
        I'm also a registered yoga teacher and love to travel. </p>`
    }


const skillz = 
    {
        tech: 
        `   <div class="skill-icon">
                    <i class="devicon-javascript-plain"></i>
                    <p class="skill-name">JavaScript</p>
                </div>
                <div class="skill-icon">
                    <i class="devicon-react-original"></i>
                    <p class="skill-name">React.js</p>
                </div>
                <div class="skill-icon">
                    <i class="devicon-nodejs-plain"></i>
                    <p class="skill-name">Node.js</p>
                </div>   
                <div class="skill-icon">
                    <i class="devicon-express-original"></i>
                    <p class="skill-name">Express</p>
                </div>
                <div class="skill-icon">
                    <i class="devicon-python-plain"></i>
                    <p class="skill-name">Python</p>
                </div>
                <div class="skill-icon">
                    <i class="devicon-html5-plain-wordmark"></i>
                    <p class="skill-name">HTML</p>
                </div>
                <div class="skill-icon">
                    <i class="devicon-css3-plain-wordmark"></i>
                    <p class="skill-name">CSS</p>
                </div>
                <div class="skill-icon">
                    <i class="devicon-sass-original"></i>
                    <p class="skill-name">Sass</p>
                </div>
                <div class="skill-icon">
                    <i class="devicon-bootstrap-plain"></i>
                    <p class="skill-name">Bootstrap</p>
                </div>
                <div class="skill-icon">
                    <i class="devicon-jquery-plain"></i>
                    <p class="skill-name">jQuery</p>
                </div>
                <div class="skill-icon">
                    <i class="devicon-mysql-plain"></i>
                    <p class="skill-name">mySQL</p>
                </div>
                <div class="skill-icon">
                    <i class="devicon-git-plain"></i>
                    <p class="skill-name">Git</p>
                </div>
                <div class="skill-icon">
                    <i class="devicon-amazonwebservices-original"></i>
                    <p class="skill-name">AWS</p>
                </div>
                <div class="skill-icon">
                    <i class="devicon-apache-plain"></i>
                    <p class="skill-name">Apache</p>
                </div>
                <div class="skill-icon">
                    <i class="devicon-photoshop-plain"></i>
                    <p class="skill-name">PhotoShop</p>
                </div>
                <div class="skill-icon">
                    <i class="devicon-illustrator-plain"></i>
                    <p class="skill-name">Illustrator</p>
                </div>
        `,
        soft: `<p>Time management, organization, communication, debugging, 
        creative problem-solving, project-planning, customer service, writing, proof-reading,
        layout and visual design. Teaching and instructional design. Spanish.</p>`,
    }

    const contact = {
        text: `If you'd like to contact me or learn more about my professional experiences, please click on any of the links above.`,
        aside: `<p>A quick aside: I chose to draw a violet for the homepage because they grow all over the world, in varying 
        climates and locales. They are symbolic of spring, humility, candor, and intuition.</p>`,
        arts: `<p>I'm also a practicing writer and artist. If you're interested in reading some of my work, you can find two recently published
        pieces: a poem about time, here: <a href="./creative/Jasper.pdf" target="blank">Jasper</a>, and an essay about a star cluster and mythology, here: <a href="https://www.themanifeststation.net/2018/06/04/m45/" target="blank">M45</a>. 
        I also wrote a <a href="http://www.eatthispoem.com/city-guides/rochester" target="blank">literary city guide</a> for Rochester, NY. Of course, I have several more projects in the works! :)`,
        links: 
        `<div class="contact-icon">
            <a href="https://github.com/katiejduane"><i class="devicon-github-plain"></i></a>
            <p class="contact-icon-text">GitHub</p>
        </div>
        <div class="contact-icon">
            <a href="https://www.linkedin.com/in/kathrynjduane/"><i class="fab fa-linkedin"></i></a>
            <p class="contact-icon-text">LinkedIn</p>
        </div>
        <div class="contact-icon">
            <a href="mailto: katiejduane@gmail.com"><i class="far fa-envelope"></i></a>
            <p class="contact-icon-text">Email</p>
        </div>
        <div class="contact-icon">
            <a href="./images/other/katiejduane2019.pdf" target="blank" download><i class="far fa-file"></i></a>
            <p class="contact-icon-text">Resume</p>
        </div>`
    }
