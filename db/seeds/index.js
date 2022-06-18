import Posts from "../Models/Posts";
import Users from "../Models/Users";
import Tags from "../Models/Tags";
import CareersSeed from "./CareersSeed";
import ServicesSeed from "./ServicesSeed";

const setSeed = () => {
  Users.create({
    id: '1',
    name: 'IUJO',
    role: true,
    username: 'admin',
    password: '$2a$08$cE60xmOvLYKfx5yGLYHNM.uzi/FZ7mjZSCfoDnRnf2J.p5yjZ2rvy',
    email: 'admin@example.com'
  })
  Users.create({
    id: '2',
    name: 'UPP',
    role: false,
    username: 'upp',
    password: '$2a$08$cE60xmOvLYKfx5yGLYHNM.uzi/FZ7mjZSCfoDnRnf2J.p5yjZ2rvy',
    email: 'upp@example.com'
  })

  Posts.create({
    id: 1,
    title: "Neque porro",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas ornare lacinia. Curabitur quis egestas neque. Duis cursus orci ac bibendum faucibus. Curabitur convallis non elit non lobortis. Integer lacinia ligula at eros aliquet hendrerit. Ut pretium efficitur . Etiam scelerisque mi diam, eleifend posuere metus commodo ac. Praesent libero leo, molestie nec euismod ac, vulputate sit amet neque. Cras egestas scelerisque finibus. \nProin sollicitudin massa ut sodales rhoncus. Aliquam porta efficitur rhoncus. Maecenas posuere turpis eget luctus pulvinar. Pellentesque interdum est risus, eu aliquet massa bibendum a. Nullam euismod purus non tellus scelerisque, a volutpat lorem egestas. Suspendisse aliquam, dolor posuere finibus imperdiet, massa eros mollis mi, quis tincidunt mauris est vel quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin eros leo, vel porttitor ligula euismod id. \nAenean consequat ut ipsum et suscipit. Morbi tellus urna, placerat vel lorem in, efficitur dapibus sapien. Nunc vitae sapien felis. Maecenas vel mi diam. Phasellus libero purus, blandit eu tellus eget, commodo pulvinar turpis. Sed nec lectus lacus. Proin egestas mi eros, at convallis nisi bibendum porttitor. Vestibulum vel elit elit. Ut facilisis purus ut lacinia varius. Duis sodales sodales fringilla. Sed egestas eleifend accumsan. Proin elementum odio non felis iaculis molestie. Curabitur finibus porttitor ipsum, eget maximus ipsum aliquet sed. Sed pharetra et libero sed ultricies. Duis ac fermentum nis. Duis placerat molestie vehicula.",
    autorId: "1",
    created_at: new Date(),
    updated_at: new Date(),
    tag: [{
      name: "Informatica",
    }, {
      name: "UPP",
    }]
  }, {
    include: [{
      model: Tags,
      as: 'tag'
    }]
  })

  Posts.create({
    id: 2,
    title: "Lorem ip",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas ornare lacinia. Curabitur quis egestas neque. Duis cursus orci ac bibendum faucibus. Curabitur convallis non elit non lobortis. Integer lacinia ligula at eros aliquet hendrerit. Ut pretium efficitur . Etiam scelerisque mi diam, eleifend posuere metus commodo ac. Praesent libero leo, molestie nec euismod ac, vulputate sit amet neque. Cras egestas scelerisque finibus. \nProin sollicitudin massa ut sodales rhoncus. Aliquam porta efficitur rhoncus. Maecenas posuere turpis eget luctus pulvinar. Pellentesque interdum est risus, eu aliquet massa bibendum a. Nullam euismod purus non tellus scelerisque, a volutpat lorem egestas. Suspendisse aliquam, dolor posuere finibus imperdiet, massa eros mollis mi, quis tincidunt mauris est vel quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin eros leo, vel porttitor ligula euismod id. \nAenean consequat ut ipsum et suscipit. Morbi tellus urna, placerat vel lorem in, efficitur dapibus sapien. Nunc vitae sapien felis. Maecenas vel mi diam. Phasellus libero purus, blandit eu tellus eget, commodo pulvinar turpis. Sed nec lectus lacus. Proin egestas mi eros, at convallis nisi bibendum porttitor. Vestibulum vel elit elit. Ut facilisis purus ut lacinia varius. Duis sodales sodales fringilla. Sed egestas eleifend accumsan. Proin elementum odio non felis iaculis molestie. Curabitur finibus porttitor ipsum, eget maximus ipsum aliquet sed. Sed pharetra et libero sed ultricies. Duis ac fermentum nis. Duis placerat molestie vehicula.",
    autorId: "1",
    created_at: new Date(),
    updated_at: new Date()
  })
  ServicesSeed();
  CareersSeed();
}

export default setSeed;

