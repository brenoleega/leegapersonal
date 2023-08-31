import superagent from "superagent";
function pubsubRoute(message) {
  superagent
    .post("http://localhost:3000/filaGuarda")
    .send(message)
    .end((err, res) => {
      if (err) {
        console.log(err);
      } else {
        //console.log(res);
      }
    });
}
export default pubsubRoute;
