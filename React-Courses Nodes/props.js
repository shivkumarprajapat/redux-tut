
1. Function Component Props

<Profile text="Hello Props" />

function Profile(prop) {
    return (
        <div>
            <h2>{prop.text}</h2>
        </div>
    )
}


Object

Component

  <Profile text={{name:"rem"}} data="Profile Data" />


function Profile(prop) {
    return (
        <div>
            <h2>{prop.text.name}</h2>
            <h2>{prop.data}</h2>
           

        </div>
    )


==========================
==========================
==========================
==========================


Class Component

        <Profile text="Hello Props" />
        <h2>{this.props.text}</h2>


  <Profile text={{name:"rem"}} data="Profile Data" />

  export default class Profile extends Component {
    render() {
        return (
            <div>
              <h2>{this.props.text.name}</h2>
            <h2>{this.props.data}</h2>  
            </div>
        )
    }
