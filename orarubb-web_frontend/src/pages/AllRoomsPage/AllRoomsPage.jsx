import Card from "../../components/Card";
import "../../components/Card.scss";
import Layout from "../../components/layout/Layout";
import { useGetAllRoomsQuery } from "../../api/RoomsApi";
import { LoadingComponent } from "../../components/LoadingComponent";

const AllRoomsPage = () => {
  const { data: rooms = [], isLoading } = useGetAllRoomsQuery();
  return (
    <Layout>
      <div className="page">
        <div className="header">
          <h1>Orar sali</h1>
        </div>
        {isLoading && (
          <div className="loading">
            <LoadingComponent />
          </div>
        )}
        <div className="cards-list">
          {rooms.map((room) => (
            <Card
              key={room.roomId}
              title={room.name}
              link={`/room/${room.name.replaceAll(/\//g, "-")}`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AllRoomsPage;
