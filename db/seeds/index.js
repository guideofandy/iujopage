import Posts from "../Models/Posts";
import Users from "../Models/Users";
import Tags from "../Models/Tags";

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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas ornare lacinia. Curabitur quis egestas neque. Duis cursus orci ac bibendum faucibus. Curabitur convallis non elit non lobortis. Integer lacinia ligula at eros aliquet hendrerit. Ut pretium efficitur magna, at dignissim lectus ultrices in. Integer dictum tellus accumsan augue aliquet accumsan. Nullam quis rutrum sem, quis lacinia mi. Etiam quis rutrum libero. Vivamus convallis urna id tortor venenatis, non hendrerit neque pellentesque. Aliquam hendrerit eleifend ante. Donec blandit tellus vel malesuada condimentum. Quisque tristique varius felis, at ultrices purus luctus quis. Quisque odio mi, pulvinar et nisl vel, ultricies tristique lacus.\n Etiam scelerisque purus ut quam gravida, eu posuere arcu congue. Fusce eu rutrum libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Sed porta eros at pretium maximus. Aenean placerat pretium maximus. Etiam scelerisque mi diam, eleifend posuere metus commodo ac. Praesent libero leo, molestie nec euismod ac, vulputate sit amet neque. Cras egestas scelerisque finibus. \nProin sollicitudin massa ut sodales rhoncus. Aliquam porta efficitur rhoncus. Maecenas posuere turpis eget luctus pulvinar. Pellentesque interdum est risus, eu aliquet massa bibendum a. Nullam euismod purus non tellus scelerisque, a volutpat lorem egestas. Suspendisse aliquam, dolor posuere finibus imperdiet, massa eros mollis mi, quis tincidunt mauris est vel quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin eros leo, vel porttitor ligula euismod id. \nAenean consequat ut ipsum et suscipit. Morbi tellus urna, placerat vel lorem in, efficitur dapibus sapien. Nunc vitae sapien felis. Maecenas vel mi diam. Phasellus libero purus, blandit eu tellus eget, commodo pulvinar turpis. Sed nec lectus lacus. Proin egestas mi eros, at convallis nisi bibendum porttitor. Vestibulum vel elit elit. Ut facilisis purus ut lacinia varius. Duis sodales sodales fringilla. Sed egestas eleifend accumsan. Proin elementum odio non felis iaculis molestie. Curabitur finibus porttitor ipsum, eget maximus ipsum aliquet sed. Sed pharetra et libero sed ultricies. Duis ac fermentum nisi. \nQuisque viverra sem a efficitur imperdiet. Morbi in ultricies velit. Donec lorem urna, elementum vitae ultricies eu, tempor vitae magna. Phasellus porta ipsum at eros sollicitudin, a mattis risus fermentum. Phasellus feugiat ex metus, ut dictum ipsum condimentum in. Sed convallis lacus est, ut vestibulum ante rhoncus eget. Sed eget augue a mauris posuere efficitur. In non neque mauris. Aliquam id est ut quam mollis condimentum id vel arcu. Nullam eros mi, aliquet nec aliquam eget, pharetra ut ligula. Nunc consectetur libero mi, in sagittis ipsum malesuada id. Phasellus lobortis lorem tincidunt purus finibus lacinia. Phasellus nec nisl sed arcu porta iaculis. Duis placerat molestie vehicula.",
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
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas ornare lacinia. Curabitur quis egestas neque. Duis cursus orci ac bibendum faucibus. Curabitur convallis non elit non lobortis. Integer lacinia ligula at eros aliquet hendrerit. Ut pretium efficitur magna, at dignissim lectus ultrices in. Integer dictum tellus accumsan augue aliquet accumsan. Nullam quis rutrum sem, quis lacinia mi. Etiam quis rutrum libero. Vivamus convallis urna id tortor venenatis, non hendrerit neque pellentesque. Aliquam hendrerit eleifend ante. Donec blandit tellus vel malesuada condimentum. Quisque tristique varius felis, at ultrices purus luctus quis. Quisque odio mi, pulvinar et nisl vel, ultricies tristique lacus.\n Etiam scelerisque purus ut quam gravida, eu posuere arcu congue. Fusce eu rutrum libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Sed porta eros at pretium maximus. Aenean placerat pretium maximus. Etiam scelerisque mi diam, eleifend posuere metus commodo ac. Praesent libero leo, molestie nec euismod ac, vulputate sit amet neque. Cras egestas scelerisque finibus. \nProin sollicitudin massa ut sodales rhoncus. Aliquam porta efficitur rhoncus. Maecenas posuere turpis eget luctus pulvinar. Pellentesque interdum est risus, eu aliquet massa bibendum a. Nullam euismod purus non tellus scelerisque, a volutpat lorem egestas. Suspendisse aliquam, dolor posuere finibus imperdiet, massa eros mollis mi, quis tincidunt mauris est vel quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin eros leo, vel porttitor ligula euismod id. \nAenean consequat ut ipsum et suscipit. Morbi tellus urna, placerat vel lorem in, efficitur dapibus sapien. Nunc vitae sapien felis. Maecenas vel mi diam. Phasellus libero purus, blandit eu tellus eget, commodo pulvinar turpis. Sed nec lectus lacus. Proin egestas mi eros, at convallis nisi bibendum porttitor. Vestibulum vel elit elit. Ut facilisis purus ut lacinia varius. Duis sodales sodales fringilla. Sed egestas eleifend accumsan. Proin elementum odio non felis iaculis molestie. Curabitur finibus porttitor ipsum, eget maximus ipsum aliquet sed. Sed pharetra et libero sed ultricies. Duis ac fermentum nisi.",
    autorId: "1",
    created_at: new Date(),
    updated_at: new Date()
  })

}

export default setSeed;

