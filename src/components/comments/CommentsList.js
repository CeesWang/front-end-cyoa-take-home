import {convertDateTimeToString} from '../../utils/DateUtil';
function CommentsList({comments}) {  
  console.log(comments);
  
  return (
    <div style={{ overflow: 'auto', maxHeight: '500px' }}>
      {comments.map(comment => {
        const {id, name, message, created} = comment;        
        return (
        <div key={id}>
            <div>{name}</div>
            <div>{message}</div>  
            <div>{convertDateTimeToString(created)}</div>  
        </div>
        );
      })}      
    </div>
  );
}

export default CommentsList;
