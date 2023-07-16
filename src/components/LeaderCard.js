import Card from "./Card";

function LeaderCard({ f_name, l_name, number, email, imageUrl, relation}) {
    return (

        <Card className={"mt-3 w-90"}>
          <div className="flex justify-content-between">
            <div className="flex">
              <img
                className="card-image"
                src={imageUrl || "https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-set-avatar-image-vector-icon-stock-vector-design-avatar-dummy-sign-137159692.jpg"}
              />
              <div style={{ marginLeft: "20px", textAlign: "left"}}>
                <h3>{f_name} {l_name}</h3>
                <p>{number}</p>
                <p>{relation}</p>
              </div>
            </div>
            <div>
              <h2 style={{ marginRight: "20px", color: "orange", fontSize: "20px"}}>{email}</h2>
            </div>
          </div>
        </Card>
    );
}

export default LeaderCard;