import Posts from "../Models/Posts";
import Users from "../Models/Users";

const setSeed = () => {
  Users.create({
    id: '1',
    name: 'Administración',
    password: '$2a$08$26/4PA3nf9Fq7QYiDwnkYe1aL4Vf6K1Phli3g/PYTxSrISk6tidye',
    email: 'admin@example.com'
  })

  Posts.create({
    title: "Post1",
    content: "Aqui una prueba",
    autorId: "1",
    type: "Boletin",
    created_at: new Date(),
    updated_at: new Date()
  })
  Posts.create({
    title: "Post2",
    content: "Aqui una prueba",
    autorId: "1",
    type: "Boletin",
    created_at: new Date(),
    updated_at: new Date()
  })
}

export default setSeed;

