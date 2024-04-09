import path from 'path';

export const createPages = async ({ actions }) => {
    const { createPage } = actions;

    const pages = [
        { path: '/Education', component: path.resolve('src/pages/Education/index.js') },
        { path: '/Contact', component: path.resolve('src/pages/Contact/index.js') },
        { path: '/Experience', component: path.resolve('src/pages/Experience/index.js') },
        { path: '/Hobbies', component: path.resolve('src/pages/Hobbies/index.js') },
        { path: '/Projects', component: path.resolve('src/pages/Projects/index.js') },
        { path: '/Resume', component: path.resolve('src/pages/Resume/index.js') },
        { path: '/Skills', component: path.resolve('src/pages/Skills/index.js') },
    ];

    pages.forEach(({ path, component }) => {
        createPage({
            path,
            component,
        });
    });
};
