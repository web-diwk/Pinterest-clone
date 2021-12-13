import './App.css';
import { ImageBox } from './Components/ImageBox';
import StackGrid from 'react-stack-grid';
import AppBar from  './Components/AppBar'


function App() {
  let data =[
    "https://cdn.pixabay.com/photo/2016/12/13/22/25/bird-1905255__340.jpg",
    "http://3.bp.blogspot.com/_PuoJ2BG8mkc/SuxoQT4P2RI/AAAAAAAABD0/nFlqVnANp4c/s400/rainforest.1.jpg",
    "https://bestanimations.com/Animals/zebra-animated-gif-6.gif",
    "https://bestanimations.com/Animals/Mammals/Elephants/elephants/elephant-animated-gif-49.gif",
    "https://getwallpapers.com/wallpaper/full/8/f/0/368347.jpg",
    "https://picsum.photos/200",
    "https://picsum.photos/seed/picsum/200/300",
    "https://picsum.photos/seed/food/200/300",
    "https://picsum.photos/seed/great/300/300",
    "https://picsum.photos/seed/hkhkj/500/800",
    "https://picsum.photos/200/300/?blur",
    "https://picsum.photos/seed/hhkj/500/800",
    "https://picsum.photos/seed/picffdum/200/700",
    "https://picsum.photos/seed/foffdod/200/800",
    "https://picsum.photos/seed/greaddfdft/300/600",
    "https://picsum.photos/seed/hkhddfkj/500/500",
    "https://picsum.photos/seed/hhfdvcedskj/400/800",
    "https://picsum.photos/seed/picsdscdscum/100/300",
    "https://picsum.photos/seed/foossssd/200/300",
    "https://picsum.photos/seed/greasdcdt/300/300",
    "https://picsum.photos/seed/hkhkddsj/200/400",
  ];

  return (
    <>
    <AppBar />
    <div style={{marginTop:75, position:'absolute',width:'100%'}}> 
    <StackGrid columnWidth={250} monitorImagesLoaded={true}>
      {
        data.map((image)=>{
          return (<ImageBox link={image} />);
        })
      }
    </StackGrid>
    </div>
    </>
  );
}

export default App;
