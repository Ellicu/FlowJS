
import {Arena} from "./components/Arena.js"





/** @jsx Flow.createElement */
class App extends Flow.Component 
{
    render = () => 
    {
        return (
            <div>
                <Arena />
            </div>
        );
    }
}


Flow.render(<App />, document.getElementById("root"))