// import reactLogo from './assets/react.svg'

import { Header } from "./components/Header";


import style from './App.module.css'

import './global.css'

import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";


const posts = [

    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/frantecbh.png',
            name: 'Francisco Menezes',
            role: 'Desenvolvedor FullStack'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no que fiz no Ignite da RocketSeat, o nome do projeto é Ignite Feed! 🚀' },
            { type: 'link', content: 'frantecbh/iginete-feed-ts' }
        ],
        publishedAt: new Date('2022-07-24 20:05:33')
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Diego Fernandes',
            role: 'CTO @Rocketseat'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' }
        ],
        publishedAt: new Date('2022-07-23 20:05:33')
    }

]

export function App() {
    return (
        <div>
            <Header />

            <div className={style.wrapper}>
                <aside>
                    <Sidebar />
                </aside>

                <main>

                    {
                        posts.map(post => {
                            return <Post
                                key={post.id}
                                author={post.author}
                                content={post.content}
                                publishedAt={post.publishedAt}
                            />
                        })
                    }
                </main>

            </div>



        </div>


    )

}

