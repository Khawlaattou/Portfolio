import Task from "./component/task.js";
import Disc from "./component/discription.js";
import Btn from "./component/button.js";
import dev from './images/DEV.jpg';
import Media from "./component/media.js";
import "./style/app.css";

function App() {
  return (
    <div >
    <Task/>
    <div class ="blc">
    <Media/>
      <div class = "hhh"><Disc/>
      <Btn/>
      </div>
      <img src={dev} alt="" /></div>
    </div>
  );
}

export default App;
