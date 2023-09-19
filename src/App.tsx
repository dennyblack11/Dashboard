
import {RouterProvider} from "react-router-dom"
import { mainrouter } from './Router/router';

function App() {
  return (
    <div>
      <RouterProvider router = {mainrouter}/>
    </div>
  );
}

export default App;
