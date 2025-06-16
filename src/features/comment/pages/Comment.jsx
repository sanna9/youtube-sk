
import userImg from "../../../assets/userImage.png";
const Comment = ({ data }) => {
    
    const {name, text, replies} = data;
    return (<div className="flex items-start gap-3 p-2 border-b border-gray-200 my-1">
        
        <img src={userImg} width="30" height="30" alt ="user-image"/>
        <div>
            <h3>{name}</h3>
            <p>{text}</p>
        </div>
        
    </div>);
}; 

export default Comment;
