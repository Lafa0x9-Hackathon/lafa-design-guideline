import "./Firspage.css";
function FirstPage() {
  return (
    <div id="mainbody">
      <div id="body1">
        <h1>Forms</h1>
        <p>
          Given Textual form controls like input and textarea an upgrade with
          custom styles, sizing , focus states and more.
        </p>
      </div>
      <div id="body2">
        <div id="sub1">
          <input type="text" placeholder="Input here" className="input" />
          <input type="text" placeholder="Input here" className="input" />
          <input
            type="text"
            placeholder="Input here"
            className="input"
            disabled
          />
          <input type="text" placeholder="Input here" className="input" />
        </div>
        <div id="sub2">
          <textarea
            name="textarea"
            id="txt"
            cols="30"
            rows="10"
            placeholder="Input here"
          ></textarea>
          <select name="option" id="option">
            <option value="A1">Choose an option</option>
            <option value="A">Option A</option>
            <option value="B">Option B</option>
            <option value="C">Option C</option>
            <option value="D">Option D</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
