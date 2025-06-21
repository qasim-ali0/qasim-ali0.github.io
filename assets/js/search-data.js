// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Some of my publication.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "A detailed resume.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-",
        
          title: "",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/2025-02-28-llmquiz/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-finished-second-in-the-1x-world-model-challenge",
          title: 'I finished second in the 1X World Model Challenge.',
          description: "",
          section: "News",},{id: "news-i-will-be-at-cvpr-2025-workshop-on-3d-llm-vla-presenting-graphpad-hope-to-see-you-all-in-nashville",
          title: 'I will be at CVPR 2025 Workshop on 3D-LLM/VLA, presenting GraphPad. Hope to...',
          description: "",
          section: "News",},{id: "news-i-will-be-at-icml-2025-workshop-on-building-physicall-plausible-world-models-presenting-humanoid-world-models-hope-to-see-you-all-in-vancouver",
          title: 'I will be at ICML 2025 Workshop on Building Physicall Plausible World Models,...',
          description: "",
          section: "News",},{id: "news-i-will-be-at-rlc-2025-workshop-on-reward-free-reinforcement-learning-presenting-mr-crl-hope-to-see-you-all-in-edmonton",
          title: 'I will be at RLC 2025 Workshop on Reward-free Reinforcement Learning, presenting MR-CRL!...',
          description: "",
          section: "News",},{id: "projects-parking-lot-hawk-aerial-drone",
          title: 'Parking Lot Hawk - Aerial Drone',
          description: "Autonomous drone for real-time parking lot occupancy monitoring",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%75%68%61%6D%6D%61%64.%71%61%73%69%6D.%61%6C%69%30%36@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/qasim-ali0", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/muhammad-ali23", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=bd0TkF0AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
