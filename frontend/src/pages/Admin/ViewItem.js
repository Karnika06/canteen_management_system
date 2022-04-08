import "./ViewItem.css"

function ViewItem() {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="add_btn mt-2 mb-2">
          <button className="btn btn-primary">Add item</button>
        </div>

        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">id</th>
              <th scope="col">Image</th>
              <th scope="col">Food name</th>
              <th scope="col">Food price</th>
              <th scope="col">Quantity</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <th scope="row">1</th>
              <td className="image-container">
                <img src='https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                alt="food"/>
              </td>
              <td>Burger</td>
              <td>1234</td>
              <td>21</td>
              <td className="view-edit-delete">
                <button className="btn btn-success">
                  <i class="fas fa-eye"></i>
                </button>
                <button className="btn btn-primary">
                  <i class="fas fa-pen"></i>
                </button>
                <button className="btn btn-danger">
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr className="table-row">
              <th scope="row">2</th>
              <td className="image-container">
                <img src='https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                alt="food"/>
              </td>
              <td>Burger</td>
              <td>1234</td>
              <td>21</td>
              <td className="view-edit-delete">
                <button className="btn btn-success">
                  <i class="fas fa-eye"></i>
                </button>
                <button className="btn btn-primary">
                  <i class="fas fa-pen"></i>
                </button>
                <button className="btn btn-danger">
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewItem