import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formdata, setFormData] = useState({
    text: "",
    textarea: "",
    options: "",
    radio: "",
    check: [],
    chain: "",
    error: "",
    chain1: "",
    date: "",
    slider: "",
    file: "",
  });
  const [flag, setFlag] = useState(true);
  const handleChange = (e) => {
    if (e.target.name === "check") {
      let copydata = { ...formdata };
      if (e.target.checked) {
        copydata.check.push(e.target.value);
      } else {
        copydata.check = copydata.check.filter((el) => el !== e.target.value);
      }
      setFormData(copydata);
    } else {
      setFormData(() => ({
        ...formdata,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const checkdata = (e) => {
    if (
      formdata.error == "" ||
      formdata.text == "" ||
      formdata.textarea == "" ||
      formdata.options == "" ||
      formdata.radio == "" ||
      formdata.check.length == "0" ||
      formdata.chain == "" ||
      formdata.chain1 == "" ||
      formdata.date == "" ||
      formdata.slider == "" ||
      formdata.file == ""
    ) {
      alert("Fill all of the field");
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  return (
    <form>
      <div id="main-body">
        <div id="sub-body1">
          <h1>Forms</h1>
        </div>
        <div id="sub-body2">
          <div className="commonbox">
            <div className="commonlabel">Text</div>
            <div className="commoncontainer">
              <label className="headertext">Label</label>
              <p className="captiontext">This is a caption</p>
              <input
                type="text"
                name="text"
                placeholder="Type Here"
                className="field"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="commonbox">
            <div className="commonlabel">Text Area</div>
            <div className="commoncontainer">
              <label className="headertext">Label</label>
              <p className="captiontext">This is caption</p>
              <textarea
                id="textarea"
                name="textarea"
                rows="5"
                cols="50"
                placeholder="Type Here"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="commonbox">
            <div className="commonlabel">Select</div>
            <div className="commoncontainer">
              <label className="headertext">Label</label>
              <p className="captiontext">This is caption</p>
              <select name="options" id="options" onChange={handleChange}>
                <option value="A1">Choose an option</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
                <option value="C">Option C</option>
                <option value="D">Option D</option>
              </select>
            </div>
          </div>
          <div className="flex ">
            <div className="commonbox ">
              <div className="commonlabel">Radio & Checkbox</div>
              <div className="commoncontainer ml-56">
                <label className="headertext">Label</label>
                <p className="captiontext">This is caption</p>
                <div className="flex flex-col   ">
                  <div className="p-2 flex  items-center">
                    <input
                      type="radio"
                      name="radio"
                      className="radiobutton"
                      onChange={handleChange}
                      value="Selected"
                    />
                    <label className="ml-2 text-xl">Selected</label>
                  </div>
                </div>
                <div className="p-2  flex  items-center">
                  <input
                    type="radio"
                    name="radio"
                    className="radiobutton"
                    value="UnSelected"
                    onChange={handleChange}
                  />
                  <label className="ml-2 text-xl">UnSelected</label>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-space-between ml-32 mt-2">
              <label className="headertext">Label</label>
              <p className="captiontext">This is caption</p>
              <div className="flex flex-col ">
                <div className="p-2 flex  items-center">
                  <input
                    type="checkbox"
                    name="check"
                    className="checkboxbutton"
                    onChange={handleChange}
                    value="Selected"
                  />
                  <label className="ml-2 text-xl">Selected</label>
                </div>
                <div className="p-2 flex  items-center">
                  <input
                    type="checkbox"
                    name="check"
                    className="checkboxbutton"
                    onChange={handleChange}
                    value="UnSelected"
                  />
                  <label className="ml-2 text-xl">UnSelected</label>
                </div>
              </div>
            </div>
          </div>
          <div className="commonbox">
            <div className="commonlabel">Chain Selector</div>
            <div className="commoncontainer">
              <label className="headertext">Label</label>
              <p className="captiontext">This is caption</p>
              <div className="flex  ">
                <div className="chains">
                  <input
                    type="radio"
                    name="chain"
                    className="radiobutton"
                    onChange={handleChange}
                    value="Selection1"
                  />
                  <label className="ml-4">Selection1</label>
                </div>
                <div className="chains">
                  <input
                    type="radio"
                    name="chain"
                    className="radiobutton"
                    onChange={handleChange}
                    value="Selection2"
                  />
                  <label className="ml-4">Selection2</label>
                </div>
                <div className="chains">
                  <input
                    type="radio"
                    name="chain"
                    className="radiobutton"
                    onChange={handleChange}
                    value="Selection3"
                  />
                  <label className="ml-4">Selection3</label>
                </div>
                <div className="chains">
                  <input
                    type="radio"
                    name="chain"
                    className="radiobutton"
                    onChange={handleChange}
                    value="Selection4"
                  />
                  <label className="ml-4">Selection4</label>
                </div>
              </div>
            </div>
          </div>
          <div className="commonbox">
            <div className="commonlabel">Section</div>
            <div className="commoncontainer">
              <p className="text-slate-400 mt-4">Label</p>
              <div className="  mt-4 border border-black-800 w-4/5"></div>
            </div>
          </div>
          <div className="commonbox">
            <div className="commonlabel">Disabled</div>
            <div className="commoncontainer">
              <label className="headertext">Label</label>
              <p className="captiontext">This is caption</p>
              <input
                type="text"
                name="disable"
                disabled
                placeholder="Type Here"
                className="field bg-gray-200 border-0"
              />
            </div>
          </div>
          <div className="commonbox">
            <div className="commonlabel">Error</div>
            <div className="commoncontainer">
              <label className="headertext">Label</label>

              <p className="captiontext">This is caption</p>
              <input
                type="text"
                placeholder="Type Here"
                name="error"
                required
                className="field"
                onChange={handleChange}
              />
              {flag ? (
                <p className="text-lg mt-4 text-green-600">Fill this field</p>
              ) : (
                <p className="text-lg mt-4 text-red-600">
                  You missed this field
                </p>
              )}
            </div>
          </div>

          <div className="commonbox">
            <div className="commonlabel w-1/6">Chain Selector (One Column)</div>
            <div className="commoncontainer">
              <label className="headertext">Label</label>
              <p className="captiontext">This is caption</p>

              <div className="onecolumn">
                <input
                  type="radio"
                  name="chain1"
                  className="radiobutton"
                  onChange={handleChange}
                  value="ChainSelection1"
                />
                <label className="ml-4">Selection1</label>
              </div>
              <div className="onecolumn">
                <input
                  type="radio"
                  name="chain1"
                  className="radiobutton"
                  onChange={handleChange}
                  value="ChainSelection2"
                />
                <label className="ml-4">Selection2</label>
              </div>
              <div className="onecolumn">
                <input
                  type="radio"
                  name="chain1"
                  className="radiobutton"
                  onChange={handleChange}
                  value="ChainSelection3"
                />
                <label className="ml-4">Selection3</label>
              </div>
              <div className="onecolumn">
                <input
                  type="radio"
                  name="chain1"
                  className="radiobutton"
                  onChange={handleChange}
                  value="ChainSelection4"
                />
                <label className="ml-4">Selection4</label>
              </div>
            </div>
          </div>
          <div className="commonbox">
            <div className="commonlabel">Date Picker</div>
            <div className="commoncontainer">
              <label className="headertext">Date</label>
              <p className="captiontext">This is caption</p>
              <input
                type="date"
                name="date"
                className="border border-black-800 w-1/3 text-gray-400"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="commonbox">
            <div className="commonlabel mt-20">Slider</div>
            <div className="commoncontainer">
              <input
                type="range"
                name="slider"
                min="1"
                max="100"
                step="1"
                id="slide"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="commonbox mt-20">
            <div className="commonlabel">Selection</div>
            <div className="commoncontainer">
              <label className="headertext">File Upload</label>
              <p className="captiontext">This is caption</p>
              <input
                type="file"
                name="file"
                id="realfile"
                multiple
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button
          className="border border-violet-800 p-5 m-5 rounded-md w-40 hover:cursor-pointer hover:bg-red-400"
          type="button"
          onClick={checkdata}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
