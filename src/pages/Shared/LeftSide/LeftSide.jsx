

const LeftSide = ({leftSide}) => {
    console.log('leftSide',leftSide);
    const {thumbnail_url,title}=leftSide;
    return (
        <div className="card card-compact  ">
  <figure><img src={thumbnail_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
  </div>
</div>
    );
};

export default LeftSide;