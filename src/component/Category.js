import SearchIcon from "@mui/icons-material/Search";

export default function Category() {
  return (
    <div className="Category">
      <h1>Our Categories</h1>
      <h6>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </h6>
      <div className="form">
        <form>
          <input placeholder="Search your favourite categories" />
          <button type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>

      <div className="FeatureList">
        <div>
          Cable TV <br></br>Recharge
        </div>
        <div>Credit Card</div>
        <div>
          Landline Bill <br></br>Payment
        </div>
        <div>
          Society Maintenance <br></br>Bill
        </div>
      </div>
      <div className="FeatureList2">
        <div>Water Bill Payment</div>
      </div>
    </div>
  );
}
