const projects = [

    {
        title: 'emOceans',
        img: `images/emoceans/newmooddesktop2.png`,
        tech: `<p><strong>Technologies used:</strong> HTML, CSS, JavaScript, chroma.js, datamuse API, Node.js, express, MySQL, EJS</p>`,
        github: `<a href="https://github.com/jasonpbenson/backEndProject">GitHub</a>`,
        liveSite: `<span>Coming soon!</span>`,
        description: `<p><strong>Description:</strong> I once attempted to knit a scarf according to how I felt everyday, using different colors of yarn. This quickly became a tangled mess, but the idea stuck! emOceans is a web application that allows you to take note of your mood every day using color and language. Each day (and each mood, each memory) forms a tiny drop in the vast and ever-shifting ocean that makes up every one of us. We hoped to make the observation and appreciation of these shifts and waves more accessible, helpful, and more beautiful.</p>`,
        contributions: `<p><strong>Contributions:</strong> Original concept, implementation of chroma.js for color manipulation, implementation of datamuse API, router management, registration connection, database schema, database connection, data visualization using JSON.stringify along with JS and CSS.</p>`,
    },

    {
        title: 'Pithos',
        img: `images/pithos/desktopgradient2.png`,
        tech: `<p><strong>Technologies used:</strong> HTML, CSS, JavaScript, jQuery, Google Maps API, Adobe Photoshop for wireframing</p>`,
        github: `<a href="https://github.com/katiejduane/Pithos--FrontEndProject">GitHub</a>`,
        liveSite: `<a href="https://www.katiejduane.com/pithos">Live Site</a>`,
        description: `<p><strong>Description:</strong> We wanted to create a space that would allow the user to experience an 'ordinary' thing in an unusual way. We were interested in ecosystems, and wanted to connect our ecosystem to the state of Georgia (home), and also the larger realms of history, mythology, and health; which are their own kinds of ecosystems, or containers. Pithos.</p>`,
        contributions: `<p><strong>Contributions:</strong> Concept, plant and animal research, wireframes, CSS for mobile and tablet, JavaScript for 'plant' and 'animal' pages as well as map display and positioning.</p>`,

    },

    {
        title: 'adultING',
        img: `images/adulting/4forest.png`, 
        tech: `<p><strong>Technologies used:</strong> Python, Pygame, Tiled for building UIs.</p>`,
        github:`<a href="https://github.com/katiejduane/adultING">GitHub</a>`,
        liveSite: '',
        description: `<p><strong>Description:</strong> Since I'm not much of a gamer, I wanted to create a game that instead resembled life; how the choices we make, no matter how 'right' or 'wrong' they seem, usually have both positive and negative consequences. Based on your choices throughout the game, you win and lose points in categories such as 'Health', 'Love', 'Growth', and 'Adventure'. You win, or life wins!</p>`,
        contributions: `<p><strong>Contributions:</strong> I created all the interfaces with Tiled and Adobe Photoshop, and wrote Python for game play using Pygame.</p>`
    }

]

const aboutKD = 
    { 
        img: `images/other/bio-pic-2.jpg`,
        bio: `<p>My name is Katie Duane and I'm a web developer, writer, and former teacher living in Atlanta, Georgia. 
        Formally trained as an illustrator and art educator, I spent eight years teaching art and art history in Oregon, Ecuador, and Upstate New York.</p>`,
        dev: `<p>Discovering web development was very much a happy accident. About a year after my decision to leave the classroom, I took a free 
        JavaScript workshop on a whim. The syntax felt poetic to me, and because it is simply another means of making something out of nothing, 
        I quickly became enamored by it. I see writing code as similar to writing a good poem: it should be clear, efficient, beatiful, and accessible. 
        While I'm still learning, this is always what I strive for.</p>`,
        edu: `<p>I'm currently enrolled in the Full-Stack Immersive program at DigitalCrafts. We're learning about the world
        of the web via Javascript, Python, Node.js, React, Redux, HTML, CSS and other development technologies.</p></p>`,
        extra: `<p>When I'm not writing code, it's very likely that I'm writing, painting, reading (usually 18 books at once), or spending time outside.
        I'm also a registered yoga teacher, love to travel, and am a fluent speaker of Spanish.</p>`
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
                    <i class="devicon-mysql-plain"></i>
                    <p class="skill-name">mySQL</p>
                </div>
                <div class="skill-icon">
                    <i class="devicon-git-plain"></i>
                    <p class="skill-name">Git</p>
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
                    <i class="devicon-amazonwebservices-original"></i>
                    <p class="skill-name">AWS</p>
                </div>
                <div class="skill-icon">
                    <i class="devicon-apache-line"></i>
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
        creative problem-solving, project-planning, writing, proof-reading,
        layout and design. Spanish-speaker.</p>`,
    }

