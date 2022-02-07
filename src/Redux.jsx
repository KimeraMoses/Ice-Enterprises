import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux" 
import { actionCreators } from './state/index'

function Redux() {

  const Text = useSelector((state) => state.test)
  const dispatch = useDispatch()

  const { changeText} = bindActionCreators(actionCreators, dispatch)

  
  console.log(Text);

  return (
    <div>
      Hello World
      {Text}
      <button onClick={() => changeText("Redux State")}>ChangeText</button>
    </div>
  )
}

export default Redux;
