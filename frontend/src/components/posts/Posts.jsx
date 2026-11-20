import { useState } from "react"

const DUMMY_DATA = [
    {
        id: 1,
        thumbnail: "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        title: "Snow and Lake",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam laboriosam quasi nisi earum voluptatibus, unde ab repellat necessitatibus officia sed molestias ad autem non ea rem ex a dolor!",
        authorId: 1
    },
    {
        id: 2,
        thumbnail: "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        title: "Snow and Lake",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam laboriosam quasi nisi earum voluptatibus, unde ab repellat necessitatibus officia sed molestias ad autem non ea rem ex a dolor!",
        authorId: 1
    },
    {
        id: 3,
        thumbnail: "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        title: "Snow and Lake",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam laboriosam quasi nisi earum voluptatibus, unde ab repellat necessitatibus officia sed molestias ad autem non ea rem ex a dolor!",
        authorId: 2,
    },
    {
        id: 4,
        thumbnail: "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        title: "Snow and Lake",
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam laboriosam quasi nisi earum voluptatibus, unde ab repellat necessitatibus officia sed molestias ad autem non ea rem ex a dolor!",
        authorId: 3
    }
]

export default function Posts() {
    const [posts,setPosts] = useState(DUMMY_DATA);

    return (
        <section>
            {posts.map}
        </section>
    )
}