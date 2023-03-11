
const PersonItem = ({ el }) => {
  return (
    <div className="col-sm-4">
      <div className="card my-2 text-white bg-dark shadow-lg">
        <img src={'https://randomuser.me/api/portraits/lego/7.jpg'} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-header text-center">
            {el?.first_name} {el?.last_name}
          </h5>
          <p className="card-text text-center">{el?.email}</p>
          <p className="card-text text-center">{el?.gender}</p>
          <p className="card-text text-center">
        <div className="card-footer text-muted text-center">Ip Address:  {el?.ip_address}</div>
          </p>
        </div>
      </div>
    </div>
  );
};

export {PersonItem};
