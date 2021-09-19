const CharDetails = ({chardetails}) => {
    return ( 
        <>
        <div className="charcard">
        <img src={chardetails.imageUrl} alt={chardetails.title} width="230px" height="240px"/>
        <h4>{chardetails.fullName}</h4>
        <p>{chardetails.title}</p>
        </div>
        </>
     );
}
 
export default CharDetails;