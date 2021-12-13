import {Button} from '../Components/Button';
import SearchBar from "material-ui-search-bar";
export default function AppBar() {
  return (<
    div style={
      {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        background: 'white',
        marginBottom: 15,
        position: 'absolute'
      }
    } >
    <
      img style={
        {
          height: 50,
          width: 50,
          marginLeft: 20,
          marginTop: 5
        }
      }
      src={
        'https://pngimg.com/uploads/pinterest/pinterest_PNG63.png'
      }
    />
    <Button name='Home' backGroundColor='black' textColor="white" style={{ bottom: 12,marginLeft:10, fontSize:16, height:35, width:70, borderRadius:18 }} />
    <Button name='About' backGroundColor='white' textColor="black" style={{ bottom: 12,marginLeft:95, fontSize:16, height:35, width:70, borderRadius:18 }} />
    
    <div style={{
      width:400,
      margin:'auto',
      marginTop:-54
    }}>
      <SearchBar />
    </div>
  </div>
  );
}